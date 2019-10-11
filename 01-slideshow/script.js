const slides = document.querySelectorAll('.slide')
const selectors = document.querySelectorAll('.selector')
let slideIndex = 0
const slideSlides = (direction) => {    
    const targetIndex = slideIndex + direction
    if(targetIndex < 0) changeSlide(slides.length - 1)
    else if(targetIndex > slides.length - 1) changeSlide(0)
    else changeSlide(targetIndex)
}
const changeSlide = (slide) => {
    slides[slideIndex].classList.remove('active')
    selectors[slideIndex].classList.remove('selected')
    slideIndex = slide
    slides[slideIndex].classList.add('active')
    selectors[slideIndex].classList.add('selected')
}
changeSlide(slideIndex)