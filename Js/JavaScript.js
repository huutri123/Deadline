window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            
    var headerBackground = this.document.querySelector('#header')
    
    if (scrollPosition > 0) {
        headerBackground.classList.add('backgroundColorHeader')
        dk = 1
    } else {
        headerBackground.classList.remove('backgroundColorHeader')
        dk = 0
        console.log(dk)
    }
});

const elements = document.querySelectorAll('.headerOption');
var dk = 0;

for (const element of elements) {
    element.addEventListener('mouseover', function() {
        if (dk > 0) {
            element.classList.add('menuHover');
        }
    });
    
    element.addEventListener('mouseout', function() {
        element.classList.remove('menuHover');
    });
}



const clubs = document.querySelectorAll('.js-club');

for (const club of clubs) {
    club.addEventListener('click', function() {
        // club.classList.toggle('clubActive');
        alert('Chưa làm phần này.')
    });
}

function scrollToBody() {
    const headerHeight = document.querySelector('#header').offsetHeight;
    const bodyTarget = document.querySelector('#body');
    const targetPosition = bodyTarget.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}