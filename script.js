function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// fa scomparire di nuovo la barra di navigazione quando si clicca un link su mobile
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.remove('active');
    })
})

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// cambia il link della posizione in base al dispositivo
document.addEventListener('DOMContentLoaded', function() {
    const addressLink = document.getElementById('address-link');
    const queryString = "McDonald's+Via+Giordano+Bruno,+Alessandria";
    if (isMobile()) {
        addressLink.setAttribute('href', 'geo:0,0?q='+queryString);
    } else {
        addressLink.setAttribute('href', 'https://www.google.com/maps?q='+queryString);
    }
});