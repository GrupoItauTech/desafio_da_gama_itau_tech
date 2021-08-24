let i = 0;
transicaoSlide();

function transicaoSlide() {
    let j;
    let slides = document.getElementsByClassName("slide");
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    i++;
    if (i > slides.length) { 
        i = 2 
    }
    slides[i - 1].style.display = "block";
    setTimeout(transicaoSlide, 4000);
}