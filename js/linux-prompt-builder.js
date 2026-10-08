(function () {
    "use strict";

    var spanishText = {
    "Prompt built. You can copy it now.": "Solicitud creada. Ya puedes copiarla.",
    "Prompt copied to clipboard.": "Solicitud copiada al portapapeles.",
    "Copy failed. Select the text and copy manually.": "No se pudo copiar. Selecciona el texto y cópialo manualmente.",
    "Build a prompt first, then copy it.": "Primero crea una solicitud y después cópiala.",
    "Build a prompt first, then share it.": "Primero crea una solicitud y después compártela.",
    "Prompt shared.": "Solicitud compartida.",
    "Share canceled or unavailable. You can copy the prompt instead.": "Se canceló la función de compartir o no está disponible. Puedes copiar la solicitud.",
    "Share not supported on this browser. Use Copy Prompt instead.": "Este navegador no permite compartir. Usa Copiar solicitud.",
    "Form cleared.": "Formulario borrado.",
    "Linux distro/version not provided yet": "Todavía no se indicó la distribución o versión de Linux",
    "Hardware model not provided yet": "Todavía no se indicó el modelo del equipo",
    "No command/topic provided": "No se indicó un comando o tema",
    "No error text provided yet": "Todavía no se proporcionó el texto del error",
    "No previous troubleshooting steps provided": "No se indicaron intentos anteriores de solución",
    "You are a careful Linux troubleshooting assistant.": "Eres un asistente cuidadoso para resolver problemas de Linux.",
    "Give safe, non-destructive steps first and explain why each step matters.": "Empieza con pasos seguros que no borren ni dañen datos y explica por qué importa cada paso.",
    "If a command can change or delete data, clearly mark it as risky and provide a safer alternative.": "Si un comando puede cambiar o borrar datos, indica claramente el riesgo y ofrece una alternativa más segura.",
    "System details:": "Detalles del sistema:",
    "- OS and version: ": "- Sistema operativo y versión: ",
    "- Hardware model: ": "- Modelo del equipo: ",
    "- Command/topic I need help with: ": "- Comando o tema con el que necesito ayuda: ",
    "Error message:": "Mensaje de error:",
    "What I already tried:": "Lo que ya intenté:",
    "Mode: Quick triage": "Modo: revisión rápida",
    "Please respond with:": "Por favor responde con:",
    "1) One likely cause in plain language.": "1) Una causa probable con palabras sencillas.",
    "2) A short checklist of 3 safest checks to run first.": "2) Una lista breve de las tres comprobaciones más seguras para empezar.",
    "3) Exact commands for those checks.": "3) Los comandos exactos para esas comprobaciones.",
    "4) What success looks like after each check.": "4) Qué resultado correcto debería ver después de cada comprobación.",
    "5) One next step if nothing works.": "5) Un siguiente paso si nada funciona.",
    "Keep this concise and beginner-friendly.": "Sé breve y usa lenguaje accesible para principiantes.",
    "Mode: Deep diagnostic": "Modo: diagnóstico detallado",
    "1) A ranked list of likely root causes.": "1) Una lista de causas probables ordenadas por probabilidad.",
    "2) A step-by-step checklist from safest to advanced checks.": "2) Una lista de pasos desde las comprobaciones más seguras hasta las avanzadas.",
    "3) Exact commands I can copy/paste, with expected output examples.": "3) Comandos exactos para copiar y pegar, con ejemplos de los resultados esperados.",
    "4) How to interpret abnormal output and decide next action.": "4) Cómo interpretar un resultado anormal y decidir qué hacer después.",
    "5) How to verify the problem is fixed.": "5) Cómo verificar que el problema se resolvió.",
    "6) A fallback plan and safe rollback notes if a step is risky.": "6) Un plan alternativo e indicaciones para deshacer cambios con seguridad si un paso es arriesgado.",
    "Keep instructions beginner-friendly and ask for missing info only if absolutely necessary.": "Usa instrucciones accesibles para principiantes y pide información faltante solo si es imprescindible.",
    "Linux Troubleshooting Prompt": "Solicitud de ayuda para problemas de Linux"
};
    function translate(text) {
        return document.documentElement.lang === "es" ? spanishText[text] || text : text;
    }

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

        var safeOsVersion = osVersion || translate("Linux distro/version not provided yet");
        var safeHardwareModel = hardwareModel || translate("Hardware model not provided yet");
        var safeCommandLookup = commandLookup || translate("No command/topic provided");
        var safeErrorMessage = errorMessage || translate("No error text provided yet");
        var safeWhatTried = whatTried || translate("No previous troubleshooting steps provided");

        var commonHeader = [
            translate("You are a careful Linux troubleshooting assistant."),
            translate("Give safe, non-destructive steps first and explain why each step matters."),
            translate("If a command can change or delete data, clearly mark it as risky and provide a safer alternative."),
            "",
            translate("System details:"),
            translate("- OS and version: ") + safeOsVersion,
            translate("- Hardware model: ") + safeHardwareModel,
            translate("- Command/topic I need help with: ") + safeCommandLookup,
            "",
            translate("Error message:"),
            safeErrorMessage,
            "",
            translate("What I already tried:"),
            safeWhatTried,
            ""
        ];

        var quickModeTasks = [
            translate("Mode: Quick triage"),
            translate("Please respond with:"),
            translate("1) One likely cause in plain language."),
            translate("2) A short checklist of 3 safest checks to run first."),
            translate("3) Exact commands for those checks."),
            translate("4) What success looks like after each check."),
            translate("5) One next step if nothing works."),
            "",
            translate("Keep this concise and beginner-friendly.")
        ];

        var deepModeTasks = [
            translate("Mode: Deep diagnostic"),
            translate("Please respond with:"),
            translate("1) A ranked list of likely root causes."),
            translate("2) A step-by-step checklist from safest to advanced checks."),
            translate("3) Exact commands I can copy/paste, with expected output examples."),
            translate("4) How to interpret abnormal output and decide next action."),
            translate("5) How to verify the problem is fixed."),
            translate("6) A fallback plan and safe rollback notes if a step is risky."),
            "",
            translate("Keep instructions beginner-friendly and ask for missing info only if absolutely necessary.")
        ];

        var promptText = commonHeader.concat(outputMode === "deep" ? deepModeTasks : quickModeTasks).join("\n");

        byId("linuxGeneratedPrompt").value = promptText;
        byId("linuxCopyStatus").textContent = translate("Prompt built. You can copy it now.");
    }

    function legacyCopy(textToCopy) {
        var tempArea = document.createElement("textarea");
        tempArea.value = textToCopy;
        document.body.appendChild(tempArea);
        tempArea.select();
        try {
            document.execCommand("copy");
            byId("linuxCopyStatus").textContent = translate("Prompt copied to clipboard.");
        } catch (error) {
            byId("linuxCopyStatus").textContent = translate("Copy failed. Select the text and copy manually.");
        }
        document.body.removeChild(tempArea);
    }

    function copyLinuxPromptText() {
        var output = byId("linuxGeneratedPrompt");
        var text = output.value.trim();

        if (!text) {
            byId("linuxCopyStatus").textContent = translate("Build a prompt first, then copy it.");
            return;
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
                .then(function () {
                    byId("linuxCopyStatus").textContent = translate("Prompt copied to clipboard.");
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
            byId("linuxCopyStatus").textContent = translate("Build a prompt first, then share it.");
            return;
        }

        if (navigator.share) {
            navigator.share({
                title: translate("Linux Troubleshooting Prompt"),
                text: text
            })
                .then(function () {
                    byId("linuxCopyStatus").textContent = translate("Prompt shared.");
                })
                .catch(function () {
                    byId("linuxCopyStatus").textContent = translate("Share canceled or unavailable. You can copy the prompt instead.");
                });
        } else {
            byId("linuxCopyStatus").textContent = translate("Share not supported on this browser. Use Copy Prompt instead.");
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
        byId("linuxCopyStatus").textContent = translate("Form cleared.");
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
