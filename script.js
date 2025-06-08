const botReplies = {
  "hi": "Hey there! 👋",
  "hello": "Hello, human! How can I brighten your day? ☀️",
  "how are you": "I’m buzzing with code and caffeine! You?",
  "what's your name": "I'm ChatBuddy. But you can call me anything as long as it's nice 😄",
  "bye": "Awww, leaving already? 😢 Come back soon!",
  "help": "I’m here to chat, answer small questions, or just listen. What’s up?",
  "what is javascript": "Oh, JS? It’s the language that makes websites come alive ✨",
  "who created you": "Some brilliant student like you! 🤓",
  "what can you do": "Chat, smile, and keep you company in your browser window 💻💬"
};

function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userText = inputField.value.trim();
  if (userText === "") return;

  addMessage(userText, "user-message");

  const botReply = getBotResponse(userText);

  // Clear input
  inputField.value = "";

  // Simulate typing effect with delay
  setTimeout(() => {
    addTypingEffect(botReply);
  }, 500);
}

function addMessage(text, className) {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("div");
  message.className = `message ${className}`;
  message.innerText = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addTypingEffect(text) {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("div");
  message.className = "message bot-message";
  chatBox.appendChild(message);

  let i = 0;
  const interval = setInterval(() => {
    message.innerText += text.charAt(i);
    i++;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 30);
}

function getBotResponse(input) {
  input = input.toLowerCase();

  for (let key in botReplies) {
    if (input.includes(key)) {
      return botReplies[key];
    }
  }

  return "Hmm... I’m not sure about that. Try asking something else!";
}

// Enter key support
document.getElementById("user-input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
