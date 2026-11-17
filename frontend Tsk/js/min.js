
var modeButton = document.getElementById("themeBtn");

modeButton.onclick = function () {
    var darkTheme = document.body.classList.toggle("dark");

    modeButton.textContent = darkTheme ? "Light Mode" : "Dark Mode";
};
