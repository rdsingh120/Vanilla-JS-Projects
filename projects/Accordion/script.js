const open = document.getElementsByClassName("open");
const close = document.getElementsByClassName("close");
const faq = document.getElementsByClassName("faq");
const ans = document.getElementsByClassName("ans");
const hr = document.getElementsByClassName("hr");

for (let i = 0; i < open.length; i++) {
    open[i].addEventListener("click", function(e) {
        e.preventDefault();
        faq[i].style.height = "200px";
        ans[i].style.display = "block";
        hr[i].style.display = "block";
        open[i].style.display = "none";
        close[i].style.display = "block";

    });

    close[i].addEventListener("click", function(e) {
        e.preventDefault();
        faq[i].style.height = "80px";
        ans[i].style.display = "none";
        hr[i].style.display = "none";
        close[i].style.display = "none";
        open[i].style.display = "block";
    });
}