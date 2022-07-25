const next = document.getElementById('next');
const prev = document.getElementById('prev');
const slides = document.querySelectorAll('.slide')
var slideIndex = 0


next.addEventListener('click', () => {
   
    if (slideIndex < 3){
        slides[slideIndex].style.display = 'none'
        slideIndex++
        slides[slideIndex].style.display = 'flex'
        prev.style.opacity = '1'
        if (slideIndex == 3){
            next.style.opacity = "0.5"
        }
    }
})
prev.addEventListener('click', () => {
    if (slideIndex > 0){
        slides[slideIndex].style.display = 'none'
        slideIndex--
        slides[slideIndex].style.display = 'flex'
        next.style.opacity = "1"
        if (slideIndex == 0){
            prev.style.opacity = "0.5"
        }
    }
})

