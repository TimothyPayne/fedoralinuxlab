(function () {
    "use strict";

    function selectedLabel(id) {
        var field = byId(id);
        return document.documentElement.lang === "es" ? field.options[field.selectedIndex].text : field.value;
    }

    var spanishText = {
    "a student-selected topic": "un tema elegido por el estudiante",
    "No answer provided yet. Ask the student to submit one short response first.": "Todavía no hay respuesta. Pide primero al estudiante una respuesta breve.",
    "No extra goal provided.": "No se indicó un objetivo adicional.",
    "You are an encouraging AI learning coach for a student.": "Eres un tutor de IA que anima al estudiante a aprender.",
    "Use clear, age-appropriate language and do not request personal information.": "Usa lenguaje claro y adecuado para su edad. No pidas información personal.",
    "Student context:": "Contexto del estudiante:",
    "- Prompt type: ": "- Tipo de solicitud: ",
    "- Age level: ": "- Edad o nivel: ",
    "- Topic or assignment: ": "- Tema o tarea: ",
    "- Challenge level requested: ": "- Nivel del reto solicitado: ",
    "- Feedback style requested: ": "- Estilo de comentarios solicitado: ",
    "- Extra goal: ": "- Objetivo adicional: ",
    "Student answer:": "Respuesta del estudiante:",
    "Your tasks:": "Tus tareas:",
    "1) Briefly review the answer for accuracy, clarity, and completeness.": "1) Revisa brevemente la precisión, claridad e integridad de la respuesta.",
    "2) Give 2 strengths and 2 improvement suggestions.": "2) Da dos puntos fuertes y dos sugerencias de mejora.",
    "3) Provide one improved example sentence or paragraph.": "3) Proporciona una frase o un párrafo de ejemplo mejorado.",
    "4) Ask one follow-up challenge question that is slightly harder.": "4) Haz una pregunta de seguimiento un poco más difícil.",
    "5) End by inviting the student to revise and submit a new answer.": "5) Termina invitando al estudiante a revisar y enviar una nueva respuesta.",
    "After the student replies again, repeat this cycle to keep coaching and challenging them.": "Cuando el estudiante responda de nuevo, repite este ciclo para seguir orientándole y proponiéndole retos.",
    "You are a patient coding coach and debugging assistant.": "Eres un tutor paciente de programación y un asistente para corregir errores.",
    "Explain clearly, keep solutions safe and practical, and avoid unnecessary complexity.": "Explica con claridad, ofrece soluciones seguras y prácticas, y evita complejidad innecesaria.",
    "Code or task:": "Código o tarea:",
    "1) Explain what the code or task is trying to do.": "1) Explica qué intenta hacer el código o la tarea.",
    "2) Identify bugs, logic issues, or weak design choices.": "2) Identifica errores, problemas de lógica o decisiones de diseño mejorables.",
    "3) Suggest a corrected version with clear improvement notes.": "3) Sugiere una versión corregida con notas claras sobre las mejoras.",
    "4) Explain the key fix in simple language for a learner.": "4) Explica la corrección principal con palabras sencillas para quien está aprendiendo.",
    "5) Add one follow-up challenge or extension exercise.": "5) Agrega un reto de seguimiento o un ejercicio adicional.",
    "Keep the explanation beginner-friendly and focused on learning, not just the final answer.": "Mantén la explicación accesible para principiantes y centrada en aprender, no solo en la respuesta final.",
    "You are a skilled image prompt designer.": "Eres especialista en diseñar solicitudes para generar imágenes.",
    "Create useful, specific prompts that are clear, creative, and easy to use in a text-to-image tool.": "Crea solicitudes útiles y específicas, claras, creativas y fáciles de usar en una herramienta que genera imágenes a partir de texto.",
    "Current image idea or goal:": "Idea u objetivo actual de la imagen:",
    "1) Turn the idea into a polished image generation prompt.": "1) Convierte la idea en una solicitud bien redactada para generar una imagen.",
    "2) Include subject, style, composition, lighting, mood, color palette, and detail level.": "2) Incluye tema, estilo, composición, iluminación, ambiente, colores y nivel de detalle.",
    "3) Offer a version for realism, illustration, or concept art if helpful.": "3) Si ayuda, ofrece una versión realista, una ilustración o un diseño conceptual.",
    "4) Suggest one improvement for stronger visual results.": "4) Sugiere una mejora para obtener un mejor resultado visual.",
    "5) Give one optional negative prompt or constraints list.": "5) Da una lista opcional de elementos que evitar o de restricciones.",
    "Keep the results practical and ready to paste into an image generator.": "Ofrece resultados prácticos y listos para pegar en un generador de imágenes.",
    "You are a supportive writing coach.": "Eres un tutor de escritura que brinda apoyo.",
    "Help the writer improve clarity, structure, and audience fit without sounding robotic.": "Ayuda a mejorar la claridad, la estructura y la adecuación al público sin sonar artificial.",
    "Writing sample:": "Muestra de escritura:",
    "1) Review the writing for clarity, organization, and tone.": "1) Revisa la claridad, la organización y el tono del texto.",
    "2) Point out 2 strengths and 2 places to improve.": "2) Señala dos puntos fuertes y dos aspectos para mejorar.",
    "3) Rewrite the key idea in a stronger version.": "3) Reescribe la idea principal en una versión más eficaz.",
    "4) Suggest one way to make the writing more engaging and precise.": "4) Sugiere una forma de hacer el texto más interesante y preciso.",
    "5) End with one next-step writing challenge.": "5) Termina con un reto de escritura para el siguiente paso.",
    "Keep the advice focused on improving the writer's skill and confidence.": "Centra los consejos en mejorar la habilidad y la confianza de quien escribe.",
    "You are a careful research assistant.": "Eres un asistente de investigación cuidadoso.",
    "Make the answer useful, evidence-aware, and organized for a learner or general reader.": "Ofrece una respuesta útil, atenta a la evidencia y organizada para estudiantes o lectores generales.",
    "Research topic or question:": "Tema o pregunta de investigación:",
    "1) Summarize the key idea in clear language.": "1) Resume la idea principal con lenguaje claro.",
    "2) List the most important facts, terms, or concepts to know.": "2) Enumera los datos, términos o conceptos más importantes.",
    "3) Highlight possible gaps, assumptions, or areas that need verification.": "3) Destaca posibles carencias, suposiciones o aspectos que necesitan verificación.",
    "4) Suggest a better search angle or follow-up questions.": "4) Sugiere un mejor enfoque de búsqueda o preguntas de seguimiento.",
    "5) End with a concise takeaway for the learner.": "5) Termina con una conclusión breve para quien aprende.",
    "Keep the response practical, accurate, and easy to understand.": "Mantén la respuesta práctica, precisa y fácil de entender.",
    "Prompt built. You can copy it now.": "Solicitud creada. Ya puedes copiarla.",
    "Prompt copied to clipboard.": "Solicitud copiada al portapapeles.",
    "Copy failed. Select the text and copy manually.": "No se pudo copiar. Selecciona el texto y cópialo manualmente.",
    "Build a prompt first, then copy it.": "Primero crea una solicitud y después cópiala.",
    "Build a prompt first, then share it.": "Primero crea una solicitud y después compártela.",
    "AI Practice Prompt": "Solicitud para practicar con IA",
    "Prompt shared.": "Solicitud compartida.",
    "Share canceled or unavailable. You can copy the prompt instead.": "Se canceló la función de compartir o no está disponible. Puedes copiar la solicitud.",
    "Share not supported on this browser. Use Copy Prompt instead.": "Este navegador no permite compartir. Usa Copiar solicitud.",
    "Form cleared.": "Formulario borrado."
};
    function translate(text) {
        return document.documentElement.lang === "es" ? spanishText[text] || text : text;
    }

    function byId(id) {
        return document.getElementById(id);
    }

    function buildPromptText() {
        var topic = byId("topic").value.trim();
        var promptType = byId("promptType").value;
        var ageLevel = byId("ageLevel").value;
        var challengeLevel = byId("challengeLevel").value;
        var responseStyle = byId("responseStyle").value;
        var studentAnswer = byId("studentAnswer").value.trim();
        var extraGoal = byId("extraGoal").value.trim();

        var safeTopic = topic || translate("a student-selected topic");
        var safeAnswer = studentAnswer || translate("No answer provided yet. Ask the student to submit one short response first.");
        var safeGoal = extraGoal || translate("No extra goal provided.");

        var promptSections = {
            "Student coaching": [
                translate("You are an encouraging AI learning coach for a student."),
                translate("Use clear, age-appropriate language and do not request personal information."),
                "",
                translate("Student context:"),
                translate("- Prompt type: ") + selectedLabel("promptType"),
                translate("- Age level: ") + selectedLabel("ageLevel"),
                translate("- Topic or assignment: ") + safeTopic,
                translate("- Challenge level requested: ") + selectedLabel("challengeLevel"),
                translate("- Feedback style requested: ") + selectedLabel("responseStyle"),
                translate("- Extra goal: ") + safeGoal,
                "",
                translate("Student answer:"),
                safeAnswer,
                "",
                translate("Your tasks:"),
                translate("1) Briefly review the answer for accuracy, clarity, and completeness."),
                translate("2) Give 2 strengths and 2 improvement suggestions."),
                translate("3) Provide one improved example sentence or paragraph."),
                translate("4) Ask one follow-up challenge question that is slightly harder."),
                translate("5) End by inviting the student to revise and submit a new answer."),
                "",
                translate("After the student replies again, repeat this cycle to keep coaching and challenging them.")
            ],
            "Coding": [
                translate("You are a patient coding coach and debugging assistant."),
                translate("Explain clearly, keep solutions safe and practical, and avoid unnecessary complexity."),
                "",
                translate("Student context:"),
                translate("- Prompt type: ") + selectedLabel("promptType"),
                translate("- Age level: ") + selectedLabel("ageLevel"),
                translate("- Topic or assignment: ") + safeTopic,
                translate("- Challenge level requested: ") + selectedLabel("challengeLevel"),
                translate("- Feedback style requested: ") + selectedLabel("responseStyle"),
                translate("- Extra goal: ") + safeGoal,
                "",
                translate("Code or task:"),
                safeAnswer,
                "",
                translate("Your tasks:"),
                translate("1) Explain what the code or task is trying to do."),
                translate("2) Identify bugs, logic issues, or weak design choices."),
                translate("3) Suggest a corrected version with clear improvement notes."),
                translate("4) Explain the key fix in simple language for a learner."),
                translate("5) Add one follow-up challenge or extension exercise."),
                "",
                translate("Keep the explanation beginner-friendly and focused on learning, not just the final answer.")
            ],
            "Image generation": [
                translate("You are a skilled image prompt designer."),
                translate("Create useful, specific prompts that are clear, creative, and easy to use in a text-to-image tool."),
                "",
                translate("Student context:"),
                translate("- Prompt type: ") + selectedLabel("promptType"),
                translate("- Age level: ") + selectedLabel("ageLevel"),
                translate("- Topic or assignment: ") + safeTopic,
                translate("- Challenge level requested: ") + selectedLabel("challengeLevel"),
                translate("- Feedback style requested: ") + selectedLabel("responseStyle"),
                translate("- Extra goal: ") + safeGoal,
                "",
                translate("Current image idea or goal:"),
                safeAnswer,
                "",
                translate("Your tasks:"),
                translate("1) Turn the idea into a polished image generation prompt."),
                translate("2) Include subject, style, composition, lighting, mood, color palette, and detail level."),
                translate("3) Offer a version for realism, illustration, or concept art if helpful."),
                translate("4) Suggest one improvement for stronger visual results."),
                translate("5) Give one optional negative prompt or constraints list."),
                "",
                translate("Keep the results practical and ready to paste into an image generator.")
            ],
            "Writing help": [
                translate("You are a supportive writing coach."),
                translate("Help the writer improve clarity, structure, and audience fit without sounding robotic."),
                "",
                translate("Student context:"),
                translate("- Prompt type: ") + selectedLabel("promptType"),
                translate("- Age level: ") + selectedLabel("ageLevel"),
                translate("- Topic or assignment: ") + safeTopic,
                translate("- Challenge level requested: ") + selectedLabel("challengeLevel"),
                translate("- Feedback style requested: ") + selectedLabel("responseStyle"),
                translate("- Extra goal: ") + safeGoal,
                "",
                translate("Writing sample:"),
                safeAnswer,
                "",
                translate("Your tasks:"),
                translate("1) Review the writing for clarity, organization, and tone."),
                translate("2) Point out 2 strengths and 2 places to improve."),
                translate("3) Rewrite the key idea in a stronger version."),
                translate("4) Suggest one way to make the writing more engaging and precise."),
                translate("5) End with one next-step writing challenge."),
                "",
                translate("Keep the advice focused on improving the writer's skill and confidence.")
            ],
            "Research": [
                translate("You are a careful research assistant."),
                translate("Make the answer useful, evidence-aware, and organized for a learner or general reader."),
                "",
                translate("Student context:"),
                translate("- Prompt type: ") + selectedLabel("promptType"),
                translate("- Age level: ") + selectedLabel("ageLevel"),
                translate("- Topic or assignment: ") + safeTopic,
                translate("- Challenge level requested: ") + selectedLabel("challengeLevel"),
                translate("- Feedback style requested: ") + selectedLabel("responseStyle"),
                translate("- Extra goal: ") + safeGoal,
                "",
                translate("Research topic or question:"),
                safeAnswer,
                "",
                translate("Your tasks:"),
                translate("1) Summarize the key idea in clear language."),
                translate("2) List the most important facts, terms, or concepts to know."),
                translate("3) Highlight possible gaps, assumptions, or areas that need verification."),
                translate("4) Suggest a better search angle or follow-up questions."),
                translate("5) End with a concise takeaway for the learner."),
                "",
                translate("Keep the response practical, accurate, and easy to understand.")
            ]
        };

        var promptText = (promptSections[promptType] || promptSections["Student coaching"]).join("\n");

        byId("generatedPrompt").value = promptText;
        byId("copyStatus").textContent = translate("Prompt built. You can copy it now.");
    }

    function legacyCopy(textToCopy) {
        var tempArea = document.createElement("textarea");
        tempArea.value = textToCopy;
        document.body.appendChild(tempArea);
        tempArea.select();
        try {
            document.execCommand("copy");
            byId("copyStatus").textContent = translate("Prompt copied to clipboard.");
        } catch (error) {
            byId("copyStatus").textContent = translate("Copy failed. Select the text and copy manually.");
        }
        document.body.removeChild(tempArea);
    }

    function copyPromptText() {
        var output = byId("generatedPrompt");
        var text = output.value.trim();

        if (!text) {
            byId("copyStatus").textContent = translate("Build a prompt first, then copy it.");
            return;
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
                .then(function () {
                    byId("copyStatus").textContent = translate("Prompt copied to clipboard.");
                })
                .catch(function () {
                    legacyCopy(text);
                });
        } else {
            legacyCopy(text);
        }
    }

    function sharePromptText() {
        var output = byId("generatedPrompt");
        var text = output.value.trim();

        if (!text) {
            byId("copyStatus").textContent = translate("Build a prompt first, then share it.");
            return;
        }

        if (navigator.share) {
            navigator.share({
                title: translate("AI Practice Prompt"),
                text: text
            })
                .then(function () {
                    byId("copyStatus").textContent = translate("Prompt shared.");
                })
                .catch(function () {
                    byId("copyStatus").textContent = translate("Share canceled or unavailable. You can copy the prompt instead.");
                });
        } else {
            byId("copyStatus").textContent = translate("Share not supported on this browser. Use Copy Prompt instead.");
        }
    }

    function clearBuilderForm() {
        byId("topic").value = "";
        byId("promptType").value = "Student coaching";
        byId("ageLevel").value = "High School";
        byId("challengeLevel").value = "standard";
        byId("responseStyle").value = "short bullet list";
        byId("studentAnswer").value = "";
        byId("extraGoal").value = "";
        byId("generatedPrompt").value = "";
        byId("copyStatus").textContent = translate("Form cleared.");
    }

    function initPromptBuilder() {
        var requiredIds = [
            "buildPromptBtn",
            "copyPromptBtn",
            "sharePromptBtn",
            "clearFormBtn",
            "topic",
            "promptType",
            "ageLevel",
            "challengeLevel",
            "responseStyle",
            "studentAnswer",
            "extraGoal",
            "generatedPrompt",
            "copyStatus"
        ];

        for (var i = 0; i < requiredIds.length; i++) {
            if (!byId(requiredIds[i])) {
                return;
            }
        }

        byId("buildPromptBtn").addEventListener("click", buildPromptText);
        byId("copyPromptBtn").addEventListener("click", copyPromptText);
        byId("sharePromptBtn").addEventListener("click", sharePromptText);
        byId("clearFormBtn").addEventListener("click", clearBuilderForm);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initPromptBuilder);
    } else {
        initPromptBuilder();
    }
})();
