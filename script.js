const bookContainers = document.querySelectorAll('.books-carousel');
const nxtBtns = document.querySelectorAll('.nxt-btn');
const preBtns = document.querySelectorAll('.pre-btn');

bookContainers.forEach((container, i) => {
    const book = container.querySelector('.book-display');
    const bookWidth = book.getBoundingClientRect().width;

    const bookStyles = getComputedStyle(book);
    const bookMargin = parseFloat(bookStyles.marginLeft) + parseFloat(bookStyles.marginRight);

    const scrollAmount = bookWidth + bookMargin;

    nxtBtns[i].addEventListener('click', () => {
        container.scrollLeft += scrollAmount;
    });

    preBtns[i].addEventListener('click', () => {
        container.scrollLeft -= scrollAmount;
    });
});

const cardButtons = document.querySelectorAll('.card-btn');

const bookDescriptions = {
    "Between Two Fires": {
        genre: "Dark Fantasy, Historical Fiction",
        description: "A dark and atmospheric medieval fantasy set against the backdrop of the Black Death, where a disgraced knight, a mysterious girl, and a priest journey through a ravaged world filled with demonic forces and fleeting hope. Their quest becomes a battle for survival and redemption as they face horrors both human and supernatural, confronting their own inner demons along the way. As they navigate a crumbling world, they must rely on each other and their fragile faith to endure the encroaching darkness and uncover the truth behind their strange and terrifying encounters."
    },
    "The Final Empire": {
        genre: "Epic Fantasy",
        description: "In a world oppressed by an immortal dark lord, a streetwise thief discovers she has rare magical abilities and joins a rebellion aiming to overthrow the tyrant using the mystical powers of allomancy, fueled by different metals. As they fight for freedom, they uncover secrets that could change their understanding of power and sacrifice. With the fate of an entire empire at stake, their struggle becomes not only a battle against tyranny but also a journey of self-discovery and trust, where every choice could tip the balance between hope and destruction."
    },
    "The Well of Ascension": {
        genre: "Epic Fantasy, Political Intrigue",
        description: "After the fall of the dark lord, the newly freed empire plunges into chaos as political intrigue, betrayal, and ancient forces threaten to destroy everything the rebellion fought for, testing the resolve and leadership of its unlikely heroes. The struggle to hold the kingdom together pushes them to their limits, as new enemies rise from unexpected places and the weight of responsibility becomes heavier than any crown. As they wrestle with the cost of power, they must decide how far they’re willing to go to protect their fragile new world."
    },
    "The Hero of Ages": {
        genre: "Epic Fantasy, Dystopian Fiction",
        description: "As the world nears destruction and the end of all things seems inevitable, the final pieces of a grand prophecy fall into place, and a band of misfits must rise to confront a force that has manipulated events from the shadows. The ultimate battle for survival brings devastating choices and revelations that redefine heroism and destiny. With time running out and the planet itself in revolt, the heroes must face their greatest fears and make sacrifices that will determine the fate of humanity."
    },
    "Dragon Mage": {
        genre: "Epic Fantasy, Coming-of-Age",
        description: "An epic coming-of-age story following an outcast boy with a unique connection to magic who is thrust into a world of dragons, powerful sorcery, and a destiny that could reshape the fate of his entire realm. His journey of self-discovery and courage reveals a hidden strength that could either save or doom the world. Alongside newfound allies and dangerous enemies, he must learn to harness his gifts and embrace his role in an ancient conflict where even the strongest bonds are tested by fire."
    },
    "Dreams of the Dying": {
        genre: "Philosophical Fiction, Dark Fantasy",
        description: "A richly imagined and philosophical journey through the blurred lines of dreams and reality, as a troubled mercenary is drawn into a dangerous mission on a lush, mysterious island filled with ancient secrets and dark forces. As nightmares bleed into waking life, the mercenary must confront his own past and the island’s eerie power. The deeper he delves into the island’s mysteries, the more he questions his own sanity, caught between loyalty, love, and a truth that could unravel his very existence."
    },
    "Tales of Horror": {
        genre: "Horror, Cosmic Horror",
        description: "A collection of eerie, mind-bending stories from the master of cosmic horror, exploring themes of madness, forbidden knowledge, and otherworldly entities beyond human comprehension. Lovecraft’s tales create a chilling universe where fear of the unknown takes on terrifying new dimensions. Through his uniquely atmospheric storytelling, Lovecraft crafts an experience of creeping dread and existential terror, where the most horrifying monsters are often those that remain unseen."
    },
    "Hyperion": {
        genre: "Science Fiction, Space Opera",
        description: "A sweeping sci-fi epic where seven pilgrims share their interconnected stories while traveling toward the Shrike, a legendary and deadly creature, in a tale that explores time, love, and the far reaches of human ambition. As their journey unfolds, each story reveals a piece of a larger, mysterious puzzle. With the fate of humanity hanging in the balance, their personal histories and secret motivations collide, creating a tapestry of tragedy, hope, and wonder that spans centuries and galaxies."
    },
    "Piranesi": {
        genre: "Fantasy, Surreal Fiction",
        description: "A beautifully surreal and haunting novel about a man who lives in an endless, labyrinthine house filled with vast halls and statues, slowly unraveling the mysteries of his existence and the strange world around him. The deeper he explores, the more reality twists, blurring the line between imagination and truth. As forgotten memories resurface and the house reveals its secrets, Piranesi must decide what kind of world he truly belongs to—and whether the price of knowledge is worth the cost."
    },
    "Neuromancer": {
        genre: "Cyberpunk, Science Fiction",
        description: "A groundbreaking cyberpunk novel following a washed-up computer hacker hired for a final job that plunges him into a world of artificial intelligence, corporate espionage, and a digital landscape where reality and cyberspace blur. As the mission grows more dangerous, the line between humanity and machine begins to dissolve. Through its fast-paced narrative and richly built world, Neuromancer explores themes of identity, autonomy, and the evolving relationship between humans and technology in a future where information is the ultimate currency."
    }
};

cardButtons.forEach(button => {
    button.addEventListener('click', () => {
        let des = document.querySelector('.description');
        let data = button.parentElement.nextElementSibling;
        let title = data.querySelector('h2').textContent;
        let book = bookDescriptions[title];
        let content = document.querySelector('.bookstore');

        content.style.opacity = '0.5';
        content.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

        des.querySelector('h1').textContent = `${title}'s Description`;
        des.querySelector('h2').textContent = `Genre: ${book.genre}`;
        des.querySelector('h2').style.textAlign = 'center';
        des.querySelector('p').textContent = `${book.description}`;

        des.removeAttribute('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let close = document.querySelector('.description #close-btn');
    close.addEventListener('click', () => {
        let content = document.querySelector('.bookstore');

        content.style.opacity = '1';
        content.style.backgroundColor = 'whitesmoke';

        let des = document.querySelector('.description');
        des.setAttribute('hidden', '');
    });
});

const navLinks = document.querySelectorAll('.manual-nav span');
const imgContainer = document.querySelector('.img-container');
let currentSlide = 0;
const totalSlides = navLinks.length;

const goToSlide = slide => {
    currentSlide = slide;
    const offset = slide * -100;
    imgContainer.style.transform = `translateX(${offset}%)`;
    updateNav();
}

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

const updateNav = () => {
    navLinks.forEach((dot, index) => {
        dot.style.opacity = (index === currentSlide ? '1' : '0.5');
    });
}

navLinks.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        goToSlide(index);
        slideInterval = setInterval(nextSlide, 3000);
    });
});

let slideInterval = setInterval(nextSlide, 3000);

updateNav();

document.addEventListener('DOMContentLoaded', () => {
    const accBtn = document.querySelector('#acc-btn');
    const loginArea = document.querySelector('.login');
    let toggle = 0;

    accBtn.addEventListener('click', () => {
        if (toggle === 0) {
            accBtn.style.transform = 'rotate(90deg)';
            loginArea.removeAttribute('hidden')
            toggle = 1;
        } else {
            accBtn.style.transform = 'rotate(0deg)';
            loginArea.setAttribute('hidden', '');
            toggle = 0;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('#cart-btn');
    const cartArea = document.querySelector('.shopping-cart');
    let toggle = 0;

    cartBtn.addEventListener('click', () => {
        if (toggle === 0) {
            cartArea.removeAttribute('hidden')
            toggle = 1;
        } else {
            cartArea.setAttribute('hidden', '');
            toggle = 0;
        }
    });
});


let totalPrice = 0;
document.addEventListener('DOMContentLoaded', () => {
    const addCarts = document.querySelectorAll('.add-to-cart');

    addCarts.forEach(cart => {
        cart.addEventListener('click', () => {
            let div = document.createElement('div');
            div.style.width = '100%';

            let img = document.createElement('img');
            img.setAttribute('src', cart.parentElement.querySelector('img').src);
            img.style.width = '15%';

            let span = document.createElement('span');
            let price = document.createElement('span');
            let data = cart.previousElementSibling;

            span.innerText = data.querySelector('h2').textContent;
            price.innerText = data.querySelector('.price').textContent;

            let itemPrice = parseInt(price.innerText.replace(/[^0-9.]/g, ''));
            totalPrice += itemPrice;

            let removeBtn = document.createElement('btn');
            removeBtn.innerText = 'Remove';
            removeBtn.addEventListener('click', () => {
                div.remove();
                totalPrice -= itemPrice;
                document.querySelector('.shopping-cart h3').innerText = `Total Price: $${totalPrice}`;
            })

            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(price);
            div.appendChild(removeBtn);

            document.querySelector('#items').appendChild(div);
            document.querySelector('.shopping-cart h3').innerText = `Total Price: $${totalPrice}`;
        });
    });
});

let form = document.querySelector('form');
const USERNAME = "admin";
const PASSWORD = "password";

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === USERNAME && password === PASSWORD) {
        alert("Logging in...")
    } else {
        alert("Invalid username or password");
    }
})