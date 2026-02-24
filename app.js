// Initialize Lucide icons
lucide.createIcons();

// Data fallback in case profile.json is not reachable (e.g., local file system)
const fallbackData = {
    "name": "Viktor Horák",
    "bio": "Student IT na SPŠ a VOŠ Příbram",
    "skills": [
        "HTML5 & CSS3 (Moderní design)",
        "JavaScript (ES6+)",
        "Základy programování (Python/C#)",
        "Správa operačních systémů",
        "Počítačové sítě (Cisco)",
        "Databáze SQL",
        "Hardware & Sestavování PC",
        "Office 365 & Administrativa"
    ],
    "projects": [
        {
            "title": "Školní projekt - Web",
            "description": "Moderní responsivní web vytvořený jako součást studia IT v Příbrami.",
            "tech": "HTML, CSS, JS"
        },
        {
            "title": "Správa sítě",
            "description": "Konfigurace routerů a switchů v rámci hodin síťových technologií.",
            "tech": "Cisco CLI"
        }
    ]
};

// Function to populate the UI with data
function populateUI(data) {
    const nameEl = document.getElementById('name');
    const bioEl = document.getElementById('bio');
    const skillsGrid = document.getElementById('skills');
    const projectsGrid = document.getElementById('projects');

    if (nameEl) nameEl.textContent = data.name;
    if (bioEl) bioEl.textContent = data.bio;

    // Populate Skills
    if (skillsGrid && data.skills) {
        skillsGrid.innerHTML = '';
        data.skills.forEach((skill, index) => {
            const div = document.createElement('div');
            div.className = 'skill-item reveal';
            div.style.transitionDelay = `${index * 0.05}s`;
            div.innerHTML = `<i data-lucide="check-circle-2" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 8px; color: var(--accent-blue);"></i>${skill}`;
            skillsGrid.appendChild(div);
        });
    }

    // Populate Projects
    if (projectsGrid && data.projects) {
        projectsGrid.innerHTML = '';
        data.projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card reveal';
            card.style.transitionDelay = `${(index + 2) * 0.1}s`;

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                    <span class="project-tag">${project.tech || 'Tech'}</span>
                    <i data-lucide="external-link" style="width: 18px; height: 18px; color: var(--text-dim);"></i>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsGrid.appendChild(card);
        });
    }

    // Re-initialize Lucide icons for dynamic content
    lucide.createIcons();

    // Initialize reveal animations after content is loaded
    initReveal();
}

// Fetch data from profile.json
fetch('profile.json')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => populateUI(data))
    .catch(error => {
        console.warn('Could not load profile.json, using fallback data. Error:', error);
        populateUI(fallbackData);
    });

// Cursor Glow Effect
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    }
});

// Scroll Reveal Animation
function initReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// Log for debugging
console.log("Viktor Horák's portfolio script initialized.");
