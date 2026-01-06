// Configuration in JSON format
const chatConfig = {
    "start": {
        "message": "Hi! I'm Joanna's chatbot. What would you like to know?",
        "options": [
            {"text": "What are your top skills?", "next": "skills"},
            {"text": "Tell me about your experience", "next": "experience"},
            {"text": "Why should I hire you?", "next": "hireMe"}
        ]
    },
    "skills": {
        "message": "I'm skilled in Java, Python, C/C++, JavaScript, HTML/CSS, Spring Boot, Docker, SQL, and more. Want to know about my work experience or why you should hire me?",
        "options": [
            {"text": "Tell me about your experience", "next": "experience"},
            {"text": "Why should I hire you?", "next": "hireMe"}
        ]
    },
    "experience": {
        "message": "I've worked as a Full-Stack Software Engineer and Bioinformatic Software Engineering Intern at UCDavis VGL, and as an IT Intern for the City of Stockton. Want to know why you should hire me?",
        "options": [
            {"text": "Why should I hire you?", "next": "hireMe"},
            {"text": "What are your top skills?", "next": "skills"}
        ]
    },
    "hireMe": {
        "message": "Because I'm highly skilled, adaptable, and passionate about delivering results. You should hire me!",
        "options": [
            {"text": "Start over", "next": "start"}
        ]
    }
};

// DOM Elements
const chatIcon = document.getElementById('chat-icon');
const chatbox = document.getElementById('chatbox');
const greeting = document.getElementById('greeting');
const optionsDiv = document.getElementById('options');

chatIcon.addEventListener('click', function() {
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'block';
        displayMessage(chatConfig.start);
    } else {
        chatbox.style.display = 'none';
    }
});

// Function to display the message and options
function displayMessage(node) {
    greeting.textContent = node.message;
    optionsDiv.innerHTML = '';
    node.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => {
            const nextNode = chatConfig[option.next];
            if (nextNode) {
                displayMessage(nextNode);
            } else {
                alert('End of conversation!');
                // Optionally, you can add a reset function here to start over
            }
        });
        optionsDiv.appendChild(button);
    });
}
