(function () {
    "use strict";

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

        var safeTopic = topic || "a student-selected topic";
        var safeAnswer = studentAnswer || "No answer provided yet. Ask the student to submit one short response first.";
        var safeGoal = extraGoal || "No extra goal provided.";

        var promptSections = {
            "Student coaching": [
                "You are an encouraging AI learning coach for a student.",
                "Use clear, age-appropriate language and do not request personal information.",
                "",
                "Student context:",
                "- Prompt type: " + promptType,
                "- Age level: " + ageLevel,
                "- Topic or assignment: " + safeTopic,
                "- Challenge level requested: " + challengeLevel,
                "- Feedback style requested: " + responseStyle,
                "- Extra goal: " + safeGoal,
                "",
                "Student answer:",
                safeAnswer,
                "",
                "Your tasks:",
                "1) Briefly review the answer for accuracy, clarity, and completeness.",
                "2) Give 2 strengths and 2 improvement suggestions.",
                "3) Provide one improved example sentence or paragraph.",
                "4) Ask one follow-up challenge question that is slightly harder.",
                "5) End by inviting the student to revise and submit a new answer.",
                "",
                "After the student replies again, repeat this cycle to keep coaching and challenging them."
            ],
            "Coding": [
                "You are a patient coding coach and debugging assistant.",
                "Explain clearly, keep solutions safe and practical, and avoid unnecessary complexity.",
                "",
                "Student context:",
                "- Prompt type: " + promptType,
                "- Age level: " + ageLevel,
                "- Topic or assignment: " + safeTopic,
                "- Challenge level requested: " + challengeLevel,
                "- Feedback style requested: " + responseStyle,
                "- Extra goal: " + safeGoal,
                "",
                "Code or task:",
                safeAnswer,
                "",
                "Your tasks:",
                "1) Explain what the code or task is trying to do.",
                "2) Identify bugs, logic issues, or weak design choices.",
                "3) Suggest a corrected version with clear improvement notes.",
                "4) Explain the key fix in simple language for a learner.",
                "5) Add one follow-up challenge or extension exercise.",
                "",
                "Keep the explanation beginner-friendly and focused on learning, not just the final answer."
            ],
            "Image generation": [
                "You are a skilled image prompt designer.",
                "Create useful, specific prompts that are clear, creative, and easy to use in a text-to-image tool.",
                "",
                "Student context:",
                "- Prompt type: " + promptType,
                "- Age level: " + ageLevel,
                "- Topic or assignment: " + safeTopic,
                "- Challenge level requested: " + challengeLevel,
                "- Feedback style requested: " + responseStyle,
                "- Extra goal: " + safeGoal,
                "",
                "Current image idea or goal:",
                safeAnswer,
                "",
                "Your tasks:",
                "1) Turn the idea into a polished image generation prompt.",
                "2) Include subject, style, composition, lighting, mood, color palette, and detail level.",
                "3) Offer a version for realism, illustration, or concept art if helpful.",
                "4) Suggest one improvement for stronger visual results.",
                "5) Give one optional negative prompt or constraints list.",
                "",
                "Keep the results practical and ready to paste into an image generator."
            ],
            "Writing help": [
                "You are a supportive writing coach.",
                "Help the writer improve clarity, structure, and audience fit without sounding robotic.",
                "",
                "Student context:",
                "- Prompt type: " + promptType,
                "- Age level: " + ageLevel,
                "- Topic or assignment: " + safeTopic,
                "- Challenge level requested: " + challengeLevel,
                "- Feedback style requested: " + responseStyle,
                "- Extra goal: " + safeGoal,
                "",
                "Writing sample:",
                safeAnswer,
                "",
                "Your tasks:",
                "1) Review the writing for clarity, organization, and tone.",
                "2) Point out 2 strengths and 2 places to improve.",
                "3) Rewrite the key idea in a stronger version.",
                "4) Suggest one way to make the writing more engaging and precise.",
                "5) End with one next-step writing challenge.",
                "",
                "Keep the advice focused on improving the writer's skill and confidence."
            ],
            "Research": [
                "You are a careful research assistant.",
                "Make the answer useful, evidence-aware, and organized for a learner or general reader.",
                "",
                "Student context:",
                "- Prompt type: " + promptType,
                "- Age level: " + ageLevel,
                "- Topic or assignment: " + safeTopic,
                "- Challenge level requested: " + challengeLevel,
                "- Feedback style requested: " + responseStyle,
                "- Extra goal: " + safeGoal,
                "",
                "Research topic or question:",
                safeAnswer,
                "",
                "Your tasks:",
                "1) Summarize the key idea in clear language.",
                "2) List the most important facts, terms, or concepts to know.",
                "3) Highlight possible gaps, assumptions, or areas that need verification.",
                "4) Suggest a better search angle or follow-up questions.",
                "5) End with a concise takeaway for the learner.",
                "",
                "Keep the response practical, accurate, and easy to understand."
            ]
        };

        var promptText = (promptSections[promptType] || promptSections["Student coaching"]).join("\n");

        byId("generatedPrompt").value = promptText;
        byId("copyStatus").textContent = "Prompt built. You can copy it now.";
    }

    function legacyCopy(textToCopy) {
        var tempArea = document.createElement("textarea");
        tempArea.value = textToCopy;
        document.body.appendChild(tempArea);
        tempArea.select();
        try {
            document.execCommand("copy");
            byId("copyStatus").textContent = "Prompt copied to clipboard.";
        } catch (error) {
            byId("copyStatus").textContent = "Copy failed. Select the text and copy manually.";
        }
        document.body.removeChild(tempArea);
    }

    function copyPromptText() {
        var output = byId("generatedPrompt");
        var text = output.value.trim();

        if (!text) {
            byId("copyStatus").textContent = "Build a prompt first, then copy it.";
            return;
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
                .then(function () {
                    byId("copyStatus").textContent = "Prompt copied to clipboard.";
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
            byId("copyStatus").textContent = "Build a prompt first, then share it.";
            return;
        }

        if (navigator.share) {
            navigator.share({
                title: "AI Practice Prompt",
                text: text
            })
                .then(function () {
                    byId("copyStatus").textContent = "Prompt shared.";
                })
                .catch(function () {
                    byId("copyStatus").textContent = "Share canceled or unavailable. You can copy the prompt instead.";
                });
        } else {
            byId("copyStatus").textContent = "Share not supported on this browser. Use Copy Prompt instead.";
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
        byId("copyStatus").textContent = "Form cleared.";
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
