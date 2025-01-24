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
            // console.log('1')
            element.classList.add('menuHover');
        }
    });
    
    element.addEventListener('mouseout', function() {
        element.classList.remove('menuHover');
    });
}