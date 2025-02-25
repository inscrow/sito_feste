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

// calcola il prezzo in base a tipo di festa, torta e numero di bimbi
function calculatePrice() {
    const numKids = document.getElementById("num-kids").value;
    const partyType = document.getElementById('party-type').value;
    const cakeType = document.getElementById('cake-type').value;

    if (numKids < 5) {
        alert("Il numero minimo di bambini è 5");
        return;
    }

    let basePrice = 9.50;
    let totalPrice = basePrice;

    if (cakeType == "premium") {
        totalPrice += 2.0;
    }

    if (partyType == "happy") {
        totalPrice += 2.0;
    }

    totalPrice *= numKids;

    document.getElementById('calculated-price').textContent = `€${totalPrice.toFixed(2)}`;
}

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

const temi = document.querySelectorAll('li.tema');
temi.forEach(tema => {
    tema.addEventListener('click', function() {
        document.querySelectorAll('div.tema').forEach(temadiv => {
            temadiv.classList.remove('active');
        });
        if (tema.classList.contains('magia')) {
            document.querySelector('div.magia').classList.toggle('active');
        } else if (tema.classList.contains('mistero')) {
            document.querySelector('div.mistero').classList.toggle('active');
        } else if (tema.classList.contains('favola')) {
            document.querySelector('div.favola').classList.toggle('active');
        } else {
            document.querySelector('div.colori').classList.toggle('active');
        }
    })
});