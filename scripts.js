function initMap() {
    var location = {lat: -34.397, lng: 150.644};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
window.onload = initMap;

// changing pretty

const quotes = [
    '"Odkąd łowię ryby, wiem jedno – największe historie o poławianiu zaczynają się od \'prawie złapałem!\'"',
    '"Najlepsze chwile nad wodą to te, które pamiętamy na zawsze."',
    '"Wędkowanie to nie tylko hobby, to sposób na życie."',
    '"Cierpliwość jest kluczem do sukcesu w wędkowaniu."',
    '"Każda ryba to nowa przygoda i niezapomniane wspomnienia."'
];

// Function to change the text
function changeText() {
    const prettyElement = document.querySelector('.pretty');

    prettyElement.style.opacity = 0;
    setTimeout(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
        prettyElement.textContent = randomQuote;

        prettyElement.style.opacity = 1;
    }, 1500);
}

setInterval(changeText, 5000);

changeText();

// Animations effects

document.addEventListener("DOMContentLoaded", function(){
    const titleElement = document.querySelector('.title');
    const descElement = document.querySelector('.description');

    titleElement.addEventListener('animationend', function(){
        descElement.style.animation = 'slide-left 1s forwards';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('our-prog');
    const cards = document.querySelectorAll('.card');
    const flexItems = document.querySelectorAll('.flex-2-item');

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Przestań obserwować element po uruchomieniu animacji
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    flexItems.forEach(item => {
        observer.observe(item);
    });
});

