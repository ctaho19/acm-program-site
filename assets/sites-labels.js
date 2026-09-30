const KEY = "acm-show-sites";
const btn = document.createElement("button");
btn.className = "sites-toggle";

function set(on) {
  document.body.classList.toggle("show-sites", on);
  btn.textContent = on ? "Hide Sites blocks" : "Show Sites blocks";
  localStorage.setItem(KEY, on ? "1" : "");
}

btn.addEventListener("click", () => set(!document.body.classList.contains("show-sites")));
document.body.append(btn);
set(localStorage.getItem(KEY) === "1");
