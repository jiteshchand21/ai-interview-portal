 
function askAI() {
    let q = document.getElementById("question").value;
    let answerBox = document.getElementById("answer");

    if (q === "") {
        answerBox.innerText = "Please type a question!";
        return;
    }

    let response = "";

    q = q.toLowerCase();

    if (q.includes("tell me about yourself")) {
        response = "Talk about your education, skills, and projects.";
    }
    else if (q.includes("strength")) {
        response = "Your strength should be problem-solving, communication, or consistency.";
    }
    else if (q.includes("weakness")) {
        response = "Say a real weakness and how you are improving it.";
    }
    else if (q.includes("data analyst")) {
        response = "A data analyst works with data to find insights using Excel, SQL, and Python.";
    }
    else {
        response = "This is a demo AI. I will improve later with real AI integration.";
    }

    answerBox.innerText = response;
}