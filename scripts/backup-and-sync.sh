#!/usr/bin/env bash
set -euo pipefail

SRC="/home/mothy/LUGpages/"
LOCAL="/run/media/mothy/1TB-ext/Backup/LUGpages/"
GDRIVE="gdrive:Backup/LUGpages"
REPO="/home/mothy/LUGpages"

echo "=== $(date '+%Y-%m-%d %H:%M:%S') Starting sync ==="

# 1) GitHub sync
cd "$REPO"

# Optional: ensure this is a git repo
if [[ ! -d .git ]]; then
  echo "ERROR: $REPO is not a git repository (.git missing)."
  exit 1
fi

# Stage all changes
git add -A

# Commit only if there are staged changes
if ! git diff --cached --quiet; then
  git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
  git push
  echo "GitHub push complete."
else
  echo "No Git changes to commit."
fi

# 2) Local backup (no delete)
rsync -avh --update "$SRC" "$LOCAL"
echo "Local backup complete."

# 3) Google Drive backup (no delete)
rclone copy "$SRC" "$GDRIVE" --update -v
echo "Google Drive backup complete."

echo "=== Finished: $(date '+%Y-%m-%d %H:%M:%S') ==="
