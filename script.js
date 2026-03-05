const members = [
    { name: "Mariyan", stream: "Computer Science", bio: "Web developer specializing in React and Arduino automation.", image: "https://media.easy-peasy.ai/7f39171d-ebc8-49f6-9540-058d8c0e9320/5f4ea9e2-bd94-4b85-8cf0-a9378f524a94_thumb.webp" },
    { name: "Shamal", stream: "Computer Science", bio: "Focusing on backend systems and MySQL database management.", image: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg" },
    { name: "Nimali", stream: "ICT", bio: "UI/UX enthusiast dedicated to creating clean, modern web designs.", image: "https://via.placeholder.com/150" },
    { name: "Kasun", stream: "Computer Science", bio: "Embedded systems expert working with C and ESP32 hardware.", image: "https://via.placeholder.com/150" },
    { name: "Dilini", stream: "Information Systems", bio: "Business analyst exploring data science and ERP solutions.", image: "https://via.placeholder.com/150" },
    { name: "Pawan", stream: "Computer Science", bio: "App developer passionate about Flutter and cross-platform tools.", image: "https://via.placeholder.com/150" },
    { name: "Anjana", stream: "ICT", bio: "Future ICT lecturer interested in educational software development.", image: "https://via.placeholder.com/150" },
    { name: "Malith", stream: "Computer Science", bio: "Python developer exploring machine learning and AI algorithms.", image: "https://via.placeholder.com/150" },
    { name: "Nuwan", stream: "Computer Science", bio: "Specialist in systems programming and network security architecture.", image: "https://via.placeholder.com/150" },
    { name: "Ishara", stream: "Information Systems", bio: "Full-stack developer with experience in PHP and E-commerce.", image: "https://via.placeholder.com/150" }
];

let currentIndex = 0;
let autoScrollInterval;
const scrollSpeed = 3500; // 3.5 seconds

function initApp() {
    const container = document.getElementById('team-container');
    const viewport = document.getElementById('carousel-viewport');
    
    // Inject members into the track
    members.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${m.image}" alt="${m.name}" class="profile-img">
            <div class="stream-badge">${m.stream}</div>
            <h3>${m.name}</h3>
            <p class="bio">${m.bio}</p>
        `;
        container.appendChild(card);
    });

    // Event Listeners
    document.getElementById('nextBtn').addEventListener('click', () => {
        moveSlide(1);
        resetTimer();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        moveSlide(-1);
        resetTimer();
    });

    // Hover to pause functionality
    viewport.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    viewport.addEventListener('mouseleave', () => startTimer());

    startTimer();
}

function moveSlide(direction) {
    const container = document.getElementById('team-container');
    const card = document.querySelector('.card');
    if (!card) return;

    const cardWidth = card.offsetWidth + 32; // card width + gap (2rem = 32px)
    const viewportWidth = document.getElementById('carousel-viewport').offsetWidth;
    
    // Calculate how many cards can actually fit in view
    const visibleCards = Math.floor(viewportWidth / cardWidth);
    const maxIndex = members.length - (visibleCards > 0 ? visibleCards : 1);

    currentIndex += direction;

    // Loop through the 10 members
    if (currentIndex > maxIndex) currentIndex = 0;
    if (currentIndex < 0) currentIndex = maxIndex;

    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function startTimer() {
    autoScrollInterval = setInterval(() => moveSlide(1), scrollSpeed);
}

function resetTimer() {
    clearInterval(autoScrollInterval);
    startTimer();
}

document.addEventListener('DOMContentLoaded', initApp);