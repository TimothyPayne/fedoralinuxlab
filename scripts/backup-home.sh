#!/usr/bin/env bash
set -euo pipefail

SRC="/home/mothy/"
DST="/run/media/mothy/1TB-ext/Backup/home-mothy/"
LOG_DIR="/home/mothy/backup-logs"
TS="$(date +%F_%H-%M-%S)"
LOG_FILE="$LOG_DIR/backup-home-$TS.log"

mkdir -p "$LOG_DIR" "$DST"

# Safety checks
[[ -d "$SRC" ]] || { echo "Source missing: $SRC"; exit 1; }
[[ -d "/run/media/mothy/1TB-ext" ]] || { echo "Backup drive not mounted."; exit 1; }

rsync -aHAXvh --numeric-ids --update \
  --info=progress2,stats2 \
  --human-readable \
  --exclude=".cache/**" \
  --exclude=".local/share/Trash/**" \
  --exclude=".gvfs/**" \
  --exclude="Downloads/**" \
  --exclude="node_modules/**" \
  --exclude=".npm/**" \
  --exclude=".cargo/registry/**" \
  --exclude=".rustup/toolchains/**" \
  --exclude=".mozilla/firefox/*/cache2/**" \
  --exclude=".config/google-chrome/**/Cache/**" \
  "$SRC" "$DST" | tee "$LOG_FILE"

echo "Backup complete: $LOG_FILE"
