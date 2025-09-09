const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const prevBtn = document.querySelector(".arrow.left");
const nextBtn = document.querySelector(".arrow.right");

let index = 0;

function showArticle()
{
    slides.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    index++;
    if (index >= slideCount) index = 0;
    showArticle();
});

prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = slideCount - 1;
    showArticle();
});