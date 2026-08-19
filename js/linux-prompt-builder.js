(function () {
    "use strict";

    function byId(id) {
        return document.getElementById(id);
    }

    function buildLinuxPromptText() {
        var osVersion = byId("linuxOsVersion").value.trim();
        var hardwareModel = byId("linuxHardwareModel").value.trim();
        var commandLookup = byId("linuxCommandLookup").value.trim();
        var outputModeField = byId("linuxOutputMode");
        var outputMode = outputModeField ? outputModeField.value : "quick";
        var errorMessage = byId("linuxErrorMessage").value.trim();
        var whatTried = byId("linuxWhatTried").value.trim();

        var safeOsVersion = osVersion || "Linux distro/version not provided yet";
        var safeHardwareModel = hardwareModel || "Hardware model not provided yet";
        var safeCommandLookup = commandLookup || "No command/topic provided";
        var safeErrorMessage = errorMessage || "No error text provided yet";
        var safeWhatTried = whatTried || "No previous troubleshooting steps provided";

        var commonHeader = [
            "You are a careful Linux troubleshooting assistant.",
            "Give safe, non-destructive steps first and explain why each step matters.",
            "If a command can change or delete data, clearly mark it as risky and provide a safer alternative.",
            "",
            "System details:",
            "- OS and version: " + safeOsVersion,
            "- Hardware model: " + safeHardwareModel,
            "- Command/topic I need help with: " + safeCommandLookup,
            "",
            "Error message:",
            safeErrorMessage,
            "",
            "What I already tried:",
            safeWhatTried,
            ""
        ];

        var quickModeTasks = [
            "Mode: Quick triage",
            "Please respond with:",
            "1) One likely cause in plain language.",
            "2) A short checklist of 3 safest checks to run first.",
            "3) Exact commands for those checks.",
            "4) What success looks like after each check.",
            "5) One next step if nothing works.",
            "",
            "Keep this concise and beginner-friendly."
        ];

        var deepModeTasks = [
            "Mode: Deep diagnostic",
            "Please respond with:",
            "1) A ranked list of likely root causes.",
            "2) A step-by-step checklist from safest to advanced checks.",
            "3) Exact commands I can copy/paste, with expected output examples.",
            "4) How to interpret abnormal output and decide next action.",
            "5) How to verify the problem is fixed.",
            "6) A fallback plan and safe rollback notes if a step is risky.",
            "",
            "Keep instructions beginner-friendly and ask for missing info only if absolutely necessary."
        ];

        var promptText = commonHeader.concat(outputMode === "deep" ? deepModeTasks : quickModeTasks).join("\n");

        byId("linuxGeneratedPrompt").value = promptText;
        byId("linuxCopyStatus").textContent = "Prompt built. You can copy it now.";
    }

    function legacyCopy(textToCopy) {
        var tempArea = document.createElement("textarea");
        tempArea.value = textToCopy;
        document.body.appendChild(tempArea);
        tempArea.select();
        try {
            document.execCommand("copy");
            byId("linuxCopyStatus").textContent = "Prompt copied to clipboard.";
        } catch (error) {
            byId("linuxCopyStatus").textContent = "Copy failed. Select the text and copy manually.";
        }
        document.body.removeChild(tempArea);
    }

    function copyLinuxPromptText() {
        var output = byId("linuxGeneratedPrompt");
        var text = output.value.trim();

        if (!text) {
            byId("linuxCopyStatus").textContent = "Build a prompt first, then copy it.";
            return;
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
                .then(function () {
                    byId("linuxCopyStatus").textContent = "Prompt copied to clipboard.";
                })
                .catch(function () {
                    legacyCopy(text);
                });
        } else {
            legacyCopy(text);
        }
    }

    function shareLinuxPromptText() {
        var output = byId("linuxGeneratedPrompt");
        var text = output.value.trim();

        if (!text) {
            byId("linuxCopyStatus").textContent = "Build a prompt first, then share it.";
            return;
        }

        if (navigator.share) {
            navigator.share({
                title: "Linux Troubleshooting Prompt",
                text: text
            })
                .then(function () {
                    byId("linuxCopyStatus").textContent = "Prompt shared.";
                })
                .catch(function () {
                    byId("linuxCopyStatus").textContent = "Share canceled or unavailable. You can copy the prompt instead.";
                });
        } else {
            byId("linuxCopyStatus").textContent = "Share not supported on this browser. Use Copy Prompt instead.";
        }
    }

    function clearLinuxBuilderForm() {
        byId("linuxOsVersion").value = "";
        byId("linuxHardwareModel").value = "";
        byId("linuxCommandLookup").value = "";
        var outputModeField = byId("linuxOutputMode");
        if (outputModeField) {
            outputModeField.value = "quick";
        }
        byId("linuxErrorMessage").value = "";
        byId("linuxWhatTried").value = "";
        byId("linuxGeneratedPrompt").value = "";
        byId("linuxCopyStatus").textContent = "Form cleared.";
    }

    function initLinuxPromptBuilder() {
        var requiredIds = [
            "linuxBuildPromptBtn",
            "linuxCopyPromptBtn",
            "linuxSharePromptBtn",
            "linuxClearFormBtn",
            "linuxOsVersion",
            "linuxHardwareModel",
            "linuxCommandLookup",
            "linuxErrorMessage",
            "linuxWhatTried",
            "linuxGeneratedPrompt",
            "linuxCopyStatus"
        ];

        for (var i = 0; i < requiredIds.length; i++) {
            if (!byId(requiredIds[i])) {
                return;
            }
        }

        byId("linuxBuildPromptBtn").addEventListener("click", buildLinuxPromptText);
        byId("linuxCopyPromptBtn").addEventListener("click", copyLinuxPromptText);
        byId("linuxSharePromptBtn").addEventListener("click", shareLinuxPromptText);
        byId("linuxClearFormBtn").addEventListener("click", clearLinuxBuilderForm);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initLinuxPromptBuilder);
    } else {
        initLinuxPromptBuilder();
    }
})();
