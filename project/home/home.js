window.addEventListener('scroll', function(event) {
    var scrollPosition = window.scrollY;
    console.log('Scroll position: ' + scrollPosition);
    console.log(window.innerHeight);
    var first = document.querySelector('#eclatx');
    var second = document.querySelector('#subtitle');
    if (scrollPosition < 405) {
        first.classList.add('eclatx');
        second.classList.add('subtitle');
    } else {
        first.classList.remove('eclatx');
        second.classList.remove('subtitle');
    }
    var col1 = document.querySelector('#col1');
    var col2 = document.querySelector('#col2');
    var col3 = document.querySelector('#col3');
    if (scrollPosition > window.innerHeight * 2.5){
        col1.classList.add('col11');
        col2.classList.add('col21');
        col3.classList.add('col31');
    } else {
        col1.classList.remove('col11');
        col2.classList.remove('col21');
        col3.classList.remove('col31');
    }
});

