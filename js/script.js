document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const toggleBtn = document.getElementById("themeToggle");

// load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.className = savedTheme;
  toggleBtn.textContent = savedTheme === "light" ? "☀️" : "🌙";
} else {
  document.body.classList.add("dark");
}

// toggle theme
toggleBtn.addEventListener("click", () => {
  console.log("toggle clicked");
  localStorage.setItem("theme", "test");
  if (document.body.classList.contains("dark")) {
    document.body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    document.body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
});