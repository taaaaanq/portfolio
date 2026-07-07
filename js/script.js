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

const cards = document.querySelectorAll(".project-card");

const modal = document.getElementById("projectModal");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        document.getElementById("modalTitle").innerText =
        card.dataset.title;

        document.getElementById("modalDesc").innerText =
        card.dataset.desc;

        document.getElementById("modalTech").innerText =
        card.dataset.tech;

        document.getElementById("modalImage").src =
        card.dataset.image;

        modal.classList.add("show");

    });

});

document.querySelector(".close").onclick=()=>{

    modal.classList.remove("show");

}

window.onclick=(e)=>{

    if(e.target===modal)

        modal.classList.remove("show");

}