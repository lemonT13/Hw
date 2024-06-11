

window.addEventListener('scroll', function(event) {
    var scrollPosition = window.scrollY;
    console.log('Scroll position: ' + scrollPosition);
    var first = document.querySelector('#eclatx');
    var second = document.querySelector('#subtitle');
    if (scrollPosition < 405) {
        first.classList.add('eclatx');
        second.classList.add('subtitle');
    } else {
        first.classList.remove('eclatx');
        second.classList.remove('subtitle');
    }
});

