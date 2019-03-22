
window.onscroll = function() {
    var nav = document.getElementById('navbar')
    var height = nav.offsetHeight
    var scrollTop = document.body.scrollIntoView.bind

    if (window.scrollY >= 50) {
        document.getElementById('navbar').classList.add('solid-nav')
    } else {
        document.getElementById('navbar').classList.remove('solid-nav')
    }
};