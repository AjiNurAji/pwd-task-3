// theme default
document.addEventListener("DOMContentLoaded", () => {
	const storedTheme = localStorage.getItem("theme");

	if (storedTheme === "dark") {
		doc.classList.add("dark");
	}
});

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
const nav = document.querySelector("#nav ul");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
	nav.classList.toggle("show");
	hamburger.classList.toggle("active");
});

document.querySelectorAll(".custom-select").forEach((select) => {
	const selected = select.querySelector(".selected");
	const options = select.querySelectorAll(".options li");

	selected.addEventListener("click", () => {
		select.classList.toggle("open");
	});

	options.forEach((option) => {
		option.addEventListener("click", () => {
			selected.textContent = option.textContent;
			select.classList.remove("open");
		});
	});
});

document.getElementById("level").addEventListener("click", () => {
	const selected = document.querySelector(".custom-select");
	selected.classList.add("open");
});
