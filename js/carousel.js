
document.addEventListener("DOMContentLoaded", function() {
    const events = {
        "Aditya Degree College": [
            "https://octobuzacademy.com/Wesite%20Photos/Aditya%20Degree%20College/IMG_0115.JPG",
            "https://octobuzacademy.com/Wesite%20Photos/Aditya%20Degree%20College/IMG_0118.JPG",
            "https://octobuzacademy.com/Wesite%20Photos/Aditya%20Degree%20College/IMG_0140.JPG",
            "https://octobuzacademy.com/Wesite%20Photos/Aditya%20Degree%20College/IMG_0235.JPG"
        ],
        "Narayana Career Guidance": [
            "https://octobuzacademy.com/Wesite%20Photos/Narayana%20Career%20Guidance/IMG_0337.JPG",
            "https://octobuzacademy.com/Wesite%20Photos/Narayana%20Career%20Guidance/IMG_0339.JPG",
            "https://octobuzacademy.com/Wesite%20Photos/Narayana%20Career%20Guidance/IMG_0368.JPG",
            "https://octobuzacademy.com/Wesite%20Photos/Narayana%20Career%20Guidance/IMG_0438.JPG"
        ],
        "Narayana MOU": [
            "https://octobuzacademy.com/Wesite%20Photos/NECN%20MOU/WhatsApp%20Image%202023-01-20%20at%2010.27.11%20PM.jpeg",
            "https://octobuzacademy.com/Wesite%20Photos/NECN%20MOU/WhatsApp%20Image%202023-01-20%20at%2010.27.13%20PM.jpeg",
            "https://octobuzacademy.com/Wesite%20Photos/NECN%20MOU/WhatsApp%20Image%202023-01-20%20at%2010.27.15%20PM%20(1).jpeg",
            "https://octobuzacademy.com/Wesite%20Photos/NECN%20MOU/WhatsApp%20Image%202023-01-20%20at%2010.27.15%20PM.jpeg"
        ]
    };

    const eventList = document.getElementById("custom-event-list");
    const carouselImages = document.querySelector(".custom-carousel-images");
    let currentIndex = 0;

    function updateCarousel(eventImages) {
        carouselImages.innerHTML = '';
        eventImages.forEach(imageUrl => {
            const img = document.createElement("img");
            img.src = imageUrl;
            carouselImages.appendChild(img);
        });
        showImage(0); // Show the first image initially
    }

    function showImage(index) {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
    }
    let event_name = '';
    function handleEventClick(eventName) {
        event_name = eventName;
        updateCarousel(events[eventName]);
        document.querySelector(".custom-right-btn").style.visibility="visible"
        
        // Remove 'selected' class from all list items
        document.querySelectorAll(".custom-side-nav li").forEach(li => {
            li.classList.remove("selected");
        });

        // Add 'selected' class to the clicked item
        document.querySelector(`.custom-side-nav li[data-event="${eventName}"]`).classList.add("selected");
    }

    for (const [eventName, images] of Object.entries(events)) {
        const li = document.createElement("li");
        li.textContent = eventName;
        li.setAttribute("data-event", eventName); // Store event name for identification
        li.addEventListener("click", () => handleEventClick(eventName));
        eventList.appendChild(li);
    }

    document.querySelector(".custom-left-btn").addEventListener("click", () => {
        
        if (currentIndex > 0) showImage(currentIndex - 1);
              document.querySelector(".custom-right-btn").style.visibility="visible"
    });

    document.querySelector(".custom-right-btn").addEventListener("click", () => {
        if (currentIndex < carouselImages.children.length - 1) showImage(currentIndex + 1);
        if(currentIndex >= events[event_name].length-1){
            document.querySelector(".custom-right-btn").style.visibility="hidden";
        }
    });

    // Initialize with the first event
    handleEventClick(Object.keys(events)[0]);
});



// Define card data for each category
const cardData = {
    'most-popular': [
        {
            title: "CyberSecurity",
            imgSrc: "images/cyber-security-training.png",
            logoSrc: "images/cyber-security-training.png",
            description: "Secure digital realms. Master cybersecurity in a comprehensive, proactive course."
        },
        {
            title: "PowerBI",
            imgSrc: "images/powerbi.png",
            logoSrc: "images/powerbi.png",
            description: "Unleash insights. Transform data with Power BI's compelling visual storytelling."
        }
    ],
    'newest': [
        {
            title: "Full-Stack Development",
            imgSrc: "images/fullstack course.jpg",
            logoSrc: "images/fullstack course.jpg",
            description: "Craft complete solutions. Join the journey to skilled full-stack development."
        },
        {
            title: "Front-End Development",
            imgSrc: "images/frontendcourse.jpg",
            logoSrc: "images/frontendcourse.jpg",
            description: "Frontend mastery: Design, code, create. Elevate skills with transformative course."
        }
    ]
};

// Handle navigation clicks
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove active class from all tabs
        document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active-tab'));

        // Add active class to clicked tab
        tab.classList.add('active-tab');

        // Get the category from the clicked tab
        const category = tab.querySelector('a').getAttribute('href').substring(1);

        // Get the corresponding card data
        const selectedCards = cardData[category];

        // Get the card container
        const cardList = document.querySelector('.card-list-dk');

        // Clear existing cards
        cardList.innerHTML = '';

        // Add new cards to the container
        selectedCards.forEach(card => {
            cardList.innerHTML += `
                <a class="card" target="_blank">
                    <div class="card-body">
                        <div class="card-banner">
                            <img class="program-img" src="${card.imgSrc}" alt="${card.title}">
                        </div>
                        <div class="card-info">
                            <div class="card-logo">
                                <img class="program-logo" width="16" height="9" src="${card.logoSrc}" alt="${card.title}">
                            </div>
                            <h2>${card.title}</h2>
                            <div class="card-list">
                                <p>${card.description}</p>
                            </div>
                        </div>
                    </div>
                </a>
            `;
        });
    });
});
