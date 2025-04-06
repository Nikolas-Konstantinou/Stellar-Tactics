document.addEventListener("DOMContentLoaded", function ()
{
    const form = document.querySelector("form");
    const formContainer = document.querySelector(".formContainer");
    const loadingScreen = document.getElementById("loadingScreen");

    form.addEventListener("submit", function (e)
    {
        e.preventDefault();
        formContainer.style.display = "none";
        loadingScreen.style.display = "flex";
    });
});