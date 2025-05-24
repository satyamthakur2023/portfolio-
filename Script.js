
  // Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-links a[href*=${sectionId}]`).classList.add('active');
        } else {
            document.querySelector(`.nav-links a[href*=${sectionId}]`).classList.remove('active');
        }
    });
});

// Sticky navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsContainer = document.getElementById('projects-container');

// Sample project data
const projects = [
    {
        id: 1,
        title: 'Neural Network Image Classifier',
        description: 'A deep learning model that classifies images with high accuracy using convolutional neural networks.',
        image: 'https://via.placeholder.com/600x400',
        category: 'ml',
        tags: ['Deep Learning', 'CNN', 'Computer Vision'],
        demoLink: '#',
        codeLink: '#'
    },
    {
        id: 2,
        title: 'Sentiment Analysis API',
        description: 'An API that analyzes text sentiment using natural language processing techniques.',
        image: 'https://via.placeholder.com/600x400',
        category: 'nlp',
        tags: ['NLP', 'API', 'BERT'],
        demoLink: '#',
        codeLink: '#'
    },
    {
        id: 3,
        title: 'Object Detection System',
        description: 'Real-time object detection system using YOLO algorithm for video streams.',
        image: 'https://via.placeholder.com/600x400',
        category: 'cv',
        tags: ['Computer Vision', 'YOLO', 'Real-time'],
        demoLink: '#',
        codeLink: '#'
    },
    {
        id: 4,
        title: 'Chatbot with GPT Integration',
        description: 'An intelligent chatbot that uses GPT models to generate human-like responses.',
        image: 'https://via.placeholder.com/600x400',
        category: 'nlp',
        tags: ['NLP', 'GPT', 'Chatbot'],
        demoLink: '#',
        codeLink: '#'
    },
    {
        id: 5,
        title: 'Predictive Analytics Dashboard',
        description: 'A dashboard that uses machine learning to predict business metrics and visualize trends.',
        image: 'https://via.placeholder.com/600x400',
        category: 'ml',
        tags: ['ML', 'Dashboard', 'Visualization'],
        demoLink: '#',
        codeLink: '#'
    },
    {
        id: 6,
        title: 'Facial Recognition System',
        description: 'A system that recognizes and verifies faces using deep learning techniques.',
        image: 'https://via.placeholder.com/600x400',
        category: 'cv',
        tags: ['Computer Vision', 'Face Recognition', 'Security'],
        demoLink: '#',
        codeLink: '#'
    }
];

// Display all projects initially
window.addEventListener('DOMContentLoaded', () => {
    displayProjects('all');
});

// Filter projects
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        const filterValue = button.getAttribute('data-filter');
        displayProjects(filterValue);
    });
});

// Function to display projects based on filter
function displayProjects(filter) {
    projectsContainer.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.demoLink}" class="project-link btn-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                    <a href="${project.codeLink}" class="project-link btn-secondary" target="_blank">
                        <i class="fas fa-code"></i> Code
                    </a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// GitHub API integration
const username = 'yourusername'; // Replace with your GitHub username
const repoCount = document.getElementById('repo-count');
const starsCount = document.getElementById('stars-count');
const commitsCount = document.getElementById('commits-count');
const githubRepos = document.getElementById('github-repos');

// Simulated GitHub data (replace with actual API calls in production)
const simulateGitHubData = () => {
    // Update stats
    repoCount.textContent = '25';
    starsCount.textContent = '142';
    commitsCount.textContent = '1,253';
    
    // Sample repositories data
    const repos = [
        {
            name: 'deep-learning-models',
            description: 'A collection of deep learning models implemented in PyTorch and TensorFlow',
            stars: 48,
            forks: 23,
            language: 'Python',
            languageColor: '#3572A5'
        },
        {
            name: 'nlp-toolkit',
            description: 'A toolkit for natural language processing tasks',
            stars: 36,
            forks: 15,
            language: 'Python',
            languageColor: '#3572A5'
        },
        {
            name: 'computer-vision-projects',
            description: 'Various computer vision projects and experiments',
            stars: 29,
            forks: 12,
            language: 'Python',
            languageColor: '#3572A5'
        }
    ];
    
    // Display repositories
    repos.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.className = 'repo-card';
        
        repoCard.innerHTML = `
            <div class="repo-header">
                <a href="#" class="repo-name">${repo.name}</a>
                <div class="repo-stats">
                    <div class="repo-stat">
                        <i class="fas fa-star"></i>
                        <span>${repo.stars}</span>
                    </div>
                    <div class="repo-stat">
                        <i class="fas fa-code-branch"></i>
                        <span>${repo.forks}</span>
                    </div>
                </div>
            </div>
            <p class="repo-description">${repo.description}</p>
            <div class="repo-footer">
                <div class="repo-language">
                    <span class="language-color" style="background-color: ${repo.languageColor}"></span>
                    <span>${repo.language}</span>
                </div>
                <a href="#" class="repo-link">View</a>
            </div>
        `;
        
        githubRepos.appendChild(repoCard);
    });
};

// Load GitHub data
window.addEventListener('DOMContentLoaded', simulateGitHubData);


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll (simple implementation)
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .stat-item, .github-stat, .contact-info, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.skill-category, .project-card, .stat-item, .github-stat, .contact-info, .contact-form');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial animation
    animateOnScroll();
});

// Listen for scroll to trigger animations
window.addEventListener('scroll', animateOnScroll);

 // Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        lightbox.style.display = 'flex';
        lightboxImg.src = imgSrc;
        setTimeout(() => lightbox.style.opacity = 1, 10);  // Ensures smooth fade-in effect
        lightbox.style.pointerEvents = 'auto';  // Enables click functionality
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.opacity = 0;
    setTimeout(() => {
        lightbox.style.display = 'none';
        lightbox.style.pointerEvents = 'none';
    }, 500);
});
