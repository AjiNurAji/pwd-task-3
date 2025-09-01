// theme default
document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") {
    doc.classList.add("dark")
  }
})

// theme toggle
const themeToggle = document.getElementById("theme-toggle");
const doc = document.body;

themeToggle.addEventListener("click", () => {
	doc.classList.toggle("dark");

	if (doc.classList.contains("dark")) {
		localStorage.setItem("theme", "dark");
	} else {
		localStorage.setItem("theme", "light");
	}
});

// hamburger toggle
const nav = document.querySelector("#nav");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
	nav.classList.toggle("show");
	hamburger.classList.toggle("active");
});
