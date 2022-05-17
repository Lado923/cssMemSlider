const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const texts = document.querySelectorAll('.text');

let index = 0;

const activeSlides = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDots = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const activeTexts = n => {
    for(text of texts) {
        text.classList.remove('active');
    }
    texts[n].classList.add('active');
    console.log(texts[n])
}

const current = ind => {
    activeSlides(ind);
    activeDots(ind);
    activeTexts(ind)
}

dots.forEach((item, indexDot)=> {
    item.addEventListener('click', () =>{
        index = indexDot;
        current(index)
    })

})

current(index);

