// CONSTANTS
// This is used in a couple places, both in html and this script
const prezzoBase = 9.80;
const aggiuntaPremium = 2.00;
const aggiuntaHappy = 2.00;

// Dizionario con i prezzi, basta cambiare i valori qua sopra
const prices = {
    base: Number(prezzoBase).toFixed(2),
    premium: Number(prezzoBase + aggiuntaPremium).toFixed(2),
    happy: Number(prezzoBase + aggiuntaHappy).toFixed(2),
    happyPremium: Number(prezzoBase + aggiuntaHappy + aggiuntaPremium).toFixed(2),
};

// NAVBAR TOGGLING
function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => link.addEventListener('click', toggleNav));

// CREAZIONE PREZIARIO
const wrapperListino = document.querySelector('div.costi');
wrapperListino.innerHTML = `
<ul class="costi">
    <li>Festa base (1 ora e mezza)</li>
    <li>Torta base: €${prices["base"]} a bambino</li>
    <li>Torta premium: €${prices["premium"]} a bambino</li>
</ul>
<ul class="costi">
    <li>Festa happy (2 ore)</li>
    <li>Torta base: €${prices["happy"]} a bambino</li>
    <li>Torta premium: €${prices["happyPremium"]} a bambino</li>
</ul>
`;

// SELEZIONE MENÙ e TEMA
function toggleItemVisibility(item) {
    document.querySelector('div.' + item).classList.toggle('active');
}

const selectorHandler = function(event) {
    const button = event.target;
    const classes = button.classList;

    if (classes.contains("menu")) {
        document.querySelectorAll("div.menu").forEach((element) => {
            element.classList.remove("active");
        });
    } else {
        document.querySelectorAll("div.tema").forEach((element) => {
            element.classList.remove("active");
        });
    }

    toggleItemVisibility(classes.toString().replace(" ", "."));
}

// MAP LINK
function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function isIphone() {
    return /iPhone/i.test(navigator.userAgent);
}

// cambia il link della posizione in base al dispositivo
document.addEventListener('DOMContentLoaded', function() {
    const addressLinkGiordanoBruno = document.querySelector('div.giordano-bruno a.address-link');
    const googleGiordanoBruno = "https://www.google.com/maps?q=McDonald's+Via+Giordano+Bruno+216,+Alessandria";
    const appleUrlGiordanoBruno = "https://maps.apple.com/place?q=McDonald%27s&ll=44.9197537%2C8.5938191&auid=5294573549417230329&lsp=9902&address=Via%20Bruno%20Giordano%20216%2C%2015121%20Alessandria%2C%20Italia";
    const addressLinkMarengo = document.querySelector('div.marengo a.address-link');
    const googleMarengo = "https://www.google.com/maps?q=McDonald's+Via+Marengo+159,+Alessandria";
    const appleUrlMarengo = "https://maps.apple.com/place?address=Via%20Marengo%20159,%2015121%20Alessandria,%20Italia&coordinate=44.909394,8.631327&name=McDonald%27s&place-id=I29E79DAC233C31AC&map=explore";

    if (isIphone()) {
        addressLinkGiordanoBruno.setAttribute('href', appleUrlGiordanoBruno);
        addressLinkMarengo.setAttribute('href', appleUrlMarengo);
    } else {
        addressLinkGiordanoBruno.setAttribute('href', googleGiordanoBruno);
        addressLinkMarengo.setAttribute('href', googleMarengo);
    }
});

// PRICE CALCULATOR
function calculatePrice() {
    const numKids = document.getElementById("num-kids").value;
    const partyType = document.getElementById('party-type').value;
    const cakeType = document.getElementById('cake-type').value;

    if (numKids < 5) {
        alert("Il numero minimo di bambini è 5");
        return;
    }

    let totalPrice = prezzoBase;

    if (cakeType == "premium") {
        totalPrice += aggiuntaPremium;
    }

    if (partyType == "happy") {
        totalPrice += aggiuntaHappy;
    }

    totalPrice *= numKids;

    document.getElementById('calculated-price').textContent = `€${totalPrice.toFixed(2)}`;
}

// SCROLL EFFECT
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    // le sezioni diventano visibili se almeno uno tra lato superiore e
    // inferiore è visibile
    return (0 <= rect.top && rect.top <= window.innerHeight) ||
           (0 <= rect.bottom && rect.bottom <= window.innerHeight);
}

function handleScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('section-visible');
        }
    })
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
