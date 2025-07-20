const animationOverlay = document.getElementById("animationOverlay");
const mainContent = document.getElementById("mainContent");
const history = document.getElementById("history");

function toggleLogin() {
  const loginFields = document.getElementById("loginFields");
  loginFields.style.display = loginFields.style.display === "none" ? "block" : "none";
}

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email.includes("@") && password.length >= 4) {
    alert("Signed in successfully!");
  } else {
    alert("Invalid email or password.");
  }
}

function submitStory() {
  const story = document.getElementById("storyInput").value.toLowerCase();
  history.innerHTML += `<p>📝 ${story}</p>`;

  // Keyword-based reactions
  if (story.includes("happy birthday")) {
    showEmoji("🎂🎉 Happy Birthday!");
  } else if (story.includes("house")) {
    showEmoji("🏠 New House!");
  } else if (story.includes("gun")) {
    showEmoji("🔫 Pew Pew!");
  } else if (story.includes("creeper")) {
    showEmoji("💣💥 Creeper Exploded!");
  } else {
    detectEmotion(story); // Emotion-based
  }

  document.getElementById("storyInput").value = "";
}

function showEmoji(text) {
  animationOverlay.textContent = text;
  animationOverlay.classList.remove("hidden");
  mainContent.style.display = "none";

  setTimeout(() => {
    animationOverlay.classList.add("hidden");
    mainContent.style.display = "block";
    animationOverlay.textContent = "";
  }, 3000);
}

// Simple emotion detection
function detectEmotion(text) {
  if (
    text.includes("died") || text.includes("depressed") ||
    text.includes("alone") || text.includes("cry") ||
    text.includes("lost") || text.includes("sad")
  ) {
    showEmoji("😢 That’s really sad...");
  } else if (
    text.includes("laugh") || text.includes("funny") ||
    text.includes("joke") || text.includes("lol") ||
    text.includes("lmao")
  ) {
    showEmoji("😂 That was funny!");
  } else if (
    text.includes("love") || text.includes("married") ||
    text.includes("baby born") || text.includes("proposal")
  ) {
    showEmoji("😍 So beautiful!");
  } else {
    showEmoji("🤔 Thanks for sharing!");
  }
}

function changeBackgroundColor() {
  const colors = ["#ffffff", "#f8f9fa", "#e6f4ea", "#fff4e5", "#fce8e6"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
