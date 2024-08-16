document.addEventListener("DOMContentLoaded", function () {
    const events = {
        "Aditya Degree College": [
            "images/events/11.jpg",
            "images/events/12.jpg",
            "images/events/13.jpg",
            "images/events/14.jpg"
        ],
        "Narayana Career Guidance": [
            "images/events/21.jpg",
            "images/events/22.jpg",
            "images/events/23.jpg",
            "images/events/24.jpg"
        ],
        "Narayana MOU": [
            "images/events/31.jpeg",
            "images/events/32.jpeg",
            "images/events/33.jpeg",
            "images/events/34.jpeg"
        ]
    };

    const eventList = document.getElementById("custom-event-list");
    const carouselImages = document.querySelector(".custom-carousel-images");
    const rightButton = document.querySelector(".custom-right-btn");
    const leftButton = document.querySelector(".custom-left-btn");
    let currentIndex = 0;
    let eventName = '';
    let autoScrollInterval;
    const autoScrollDelay = 3000; 

    function updateCarousel(eventImages) {
        carouselImages.innerHTML = '';
        eventImages.forEach(imageUrl => {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.loading = "eager"; 
            carouselImages.appendChild(img);
        });
        carouselImages.style.transition = 'transform 0.5s ease-in-out';
        showImage(0);
    }

    function showImage(index) {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
        carouselImages.style.transition = ' 1s ease-in-out';
        currentIndex = index;
        updateButtonVisibility();
    }

    function updateButtonVisibility() {
        if (carouselImages.children.length === 0) {
            rightButton.style.visibility = "hidden";
            leftButton.style.visibility = "hidden";
            return;
        }

        rightButton.style.visibility = currentIndex < carouselImages.children.length - 1 ? "visible" : "hidden";
        leftButton.style.visibility = currentIndex > 0 ? "visible" : "hidden";
    }

    function handleEventClick(eventName) {
        event_name = eventName;
        updateCarousel(events[eventName]);
        resetAutoScroll();
        document.querySelectorAll(".custom-side-nav li").forEach(li => {
            li.classList.remove("selected");
        });
        document.querySelector(`.custom-side-nav li[data-event="${eventName}"]`).classList.add("selected");
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (currentIndex < carouselImages.children.length - 1) {
                showImage(currentIndex + 1);
            } else {
                
                const eventNames = Object.keys(events);
                let nextEventIndex = (eventNames.indexOf(event_name) + 1) % eventNames.length;
                handleEventClick(eventNames[nextEventIndex]);
            }
        }, 2000); 
    }

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        startAutoScroll(); 
    }

    for (const [eventName, images] of Object.entries(events)) {
        const li = document.createElement("li");
        li.textContent = eventName;
        li.setAttribute("data-event", eventName);
        li.addEventListener("click", () => handleEventClick(eventName));
        eventList.appendChild(li);
    }

    rightButton.addEventListener("click", () => {
        if (currentIndex < carouselImages.children.length - 1) {
            showImage(currentIndex + 1);
        } else {
            
            const eventNames = Object.keys(events);
            let nextEventIndex = (eventNames.indexOf(event_name) + 1) % eventNames.length;
            handleEventClick(eventNames[nextEventIndex]);
        }
        resetAutoScroll(); 
    });

    leftButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            showImage(currentIndex - 1);
        } else {
            
            const eventNames = Object.keys(events);
            let prevEventIndex = (eventNames.indexOf(event_name) - 1 + eventNames.length) % eventNames.length;
            handleEventClick(eventNames[prevEventIndex]);
        }
        resetAutoScroll(); 
    });

    
    handleEventClick(Object.keys(events)[0]);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           setTimeout(()=> startAutoScroll(),500)
        } else {
            clearInterval(autoScrollInterval); 
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 
});

observer.observe(document.querySelector(".custom-carousel-wrapper"));


function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        if (currentIndex < carouselImages.children.length - 1) {
            showImage(currentIndex + 1);
        } else {
            
            const eventNames = Object.keys(events);
            let nextEventIndex = (eventNames.indexOf(event_name) + 1) % eventNames.length;
            handleEventClick(eventNames[nextEventIndex]);
        }
    }, 2000); 
}

function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll(); 
}
