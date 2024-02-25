window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#d9d9d9';
    } else {
        header.style.backgroundColor = 'transparent'; // Change back to the original background color when scrolled back to the top
    }
});