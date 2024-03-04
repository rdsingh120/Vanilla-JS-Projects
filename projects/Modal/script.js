const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

document.getElementById("show-modal").addEventListener("click", function(e) {
    e.preventDefault();
    overlay.style.display = "block";
    modal.style.visibility = "visible";
});

document.getElementById("close-btn").addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.visibility = "hidden";
    overlay.style.display = "none";
});