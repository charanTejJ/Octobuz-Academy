
const mostPopularTab = document.querySelector('.category-tab.active-tab');
const fullStackTab = document.getElementById('full-stack');


const cardList = document.querySelector('.card-list-dk');
const originalCards = cardList.innerHTML; 
const mostPopularCards = [
    {
        imgSrc: 'images/cyber-security-training.png',
        logoSrc: 'images/cyber-security-training.png',
        title: 'CyberSecurity',
        description: 'Secure digital realms. Master cybersecurity in a comprehensive, proactive course.'
    },
    {
        imgSrc: 'images/powerbi.png',
        logoSrc: 'images/powerbi.png',
        title: 'PowerBI',
        description: 'Unleash insights. Transform data with Power BI\'s compelling visual storytelling.'
    },
    {
        imgSrc: 'images/backenddevelopement.png',
        logoSrc: 'images/backenddevelopement.png',
        title: 'Back-End Development',
        description: 'Architect digital foundations. Learn backend, data management for modern applications.'
    },
    {
        imgSrc: 'images/fullstack course.jpg',
        logoSrc: 'images/fullstack course.jpg',
        title: 'Full-Stack Development',
        description: 'Craft complete solutions. Join the journey to skilled full-stack development.'
    },
    {
        imgSrc: 'images/frontendcourse.jpg',
        logoSrc: 'images/frontendcourse.jpg',
        title: 'Front-End Development',
        description: 'Frontend mastery: Design, code, create. Elevate your skills with this transformative course.'
    }
]
const fullStackCards = [
    {
        imgSrc: 'images/banners-MIT_NEW_Homepage_Thumbnail_a.jpg',
        logoSrc: 'images/fullstack course.jpg',
        title: 'Advanced Full-Stack Development',
        description: 'Master the art of full-stack development with our advanced course.',
    },
    {
        imgSrc: 'images/frontendcourse.jpg',
        logoSrc: 'images/frontendcourse.jpg',
        title: 'Front-End Development Mastery',
        description: 'Take your frontend skills to the next level with advanced topics and techniques.',
    },
       {
        imgSrc: 'images/powerbi.png',
        logoSrc: 'images/powerbi.png',
        title: 'PowerBI',
        description: 'Unleash insights. Transform data with Power BI\'s compelling visual storytelling.'
    },
    {
        imgSrc: 'images/assets-pdp-slider_1.jpg',
        logoSrc: 'images/new-logo-mix-Purdue_HM_40px.svgz',
        title: 'Project Management Certification',
        description: 'Get certified in project management with this professional certificate program.',
    },
    {
        imgSrc: 'images/assets-pdp-slider_1.jpg',
        logoSrc: 'images/new-logo-mix-Purdue_HM_40px.svgz',
        title: 'Leadership in Tech Projects',
        description: 'Develop leadership skills for managing technical projects efficiently.',
    }
];

mostPopularTab.addEventListener('click', function(event) {
    event.preventDefault();

    
    document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active-tab'));

    
    fullStackTab.classList.add('active-tab');

    
    cardList.innerHTML = '';

    
 
    
    mostPopularCards.forEach(card => {
        const cardElement = `
         <a class="card " target="_blank">
                                        <div class="card-body">
                                            <div class="card-banner "><img class="program-img "
                                                    src="${card.imgSrc}" alt="${card.title}"></div>
                                            <div class="card-info">
                                                <div class="card-logo"><img class="program-logo " width="16" height="9"
                                                        src="${card.logoSrc}" alt="${card.title}"></div>
                                                <h2>${card.title}</h2>
                                                <div class="card-list">
                                                    <p class="">${card.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
           
        `;
        cardList.innerHTML += cardElement;
    });
});


fullStackTab.addEventListener('click', function(event) {
    event.preventDefault();

    
    document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active-tab'));

    
    fullStackTab.classList.add('active-tab');

    
    cardList.innerHTML = '';

    
 
    
    fullStackCards.forEach(card => {
        const cardElement = `
         <a class="card " target="_blank">
                                        <div class="card-body">
                                            <div class="card-banner "><img class="program-img "
                                                    src="${card.imgSrc}" alt="${card.title}"></div>
                                            <div class="card-info">
                                                <div class="card-logo"><img class="program-logo " width="16" height="9"
                                                        src="${card.logoSrc}" alt="${card.title}"></div>
                                                <h2>${card.title}</h2>
                                                <div class="card-list">
                                                    <p class="">${card.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
           
        `;
        cardList.innerHTML += cardElement;
    });
});


mostPopularTab.addEventListener('click', function(event) {
    event.preventDefault();

    
    document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active-tab'));

    
    mostPopularTab.classList.add('active-tab');

});

mostPopularTab.click();


document.addEventListener("DOMContentLoaded", function () {
    const partnerContainer = document.querySelector('.partners-info.partner-desk .part-card');
  
    let scrollSpeed = 4; 
  
    
    const partnerClone = partnerContainer.innerHTML;
    partnerContainer.innerHTML += partnerClone;
  
    function scrollPartners() {
      partnerContainer.scrollLeft += scrollSpeed;
      if (partnerContainer.scrollLeft >= partnerContainer.scrollWidth / 2) {
        partnerContainer.scrollLeft = 0;
      }
      requestAnimationFrame(scrollPartners);
    }
  
    scrollPartners();
  });
  