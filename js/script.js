// --- GLOBAL CONFIG & CORE CONSTANTS ---
const caseStudiesData = {
    'meeting-room': {
        title: 'Meeting Room Booking System',
        category: 'Enterprise / Product Design',
        meta: 'UI/UX Design · Swift Technologies',
        image: 'images/p3.png',
        brief: 'A real-world B2B enterprise room reservation platform engineered to optimize workspace utilization and streamline booking flows across corporate offices.',
        sections: [
            {
                title: '01 — OVERVIEW',
                html: '<p>During my professional experience at Swift Technologies, I served as a central designer on this real-world corporate product. The platform serves to reconcile space scheduling friction, providing clear, real-time availability indicator grids and booking capabilities for multi-site organizations.</p>'
            },
            {
                title: '02 — PROBLEM',
                html: '<p>Corporate environments suffer from overlapping bookings, ghost meetings (where rooms are reserved but unoccupied), and cognitive friction when filtering for specific room resources (e.g., video conferencing devices, physical capacity). The task was to build a system that handles complex scheduling states while remaining instantly understandable for busy personnel.</p>'
            },
            {
                title: '03 — MY ROLE',
                html: '<p>As a <strong>Product/UI/UX Designer</strong>, my work spanned the complete product lifecycle. I worked directly alongside engineering teams to bridge technical feasibility and interactive clarity. My duties included:</p><ul><li>Conducting research and technical reviews.</li><li>Developing user flows and interface blueprints.</li><li>Assembling visual wireframes and design token variables.</li><li>Conducting design audits and engineering reviews.</li></ul>'
            },
            {
                title: '04 — RELEVANT WORK SCOPE',
                html: '<p>The project demanded high structure and architectural systems. Key activities included:</p><ul><li><strong>User Research:</strong> Understanding workspace habits and scheduling pain points.</li><li><strong>User Flows:</strong> Designing predictable navigation paths.</li><li><strong>Wireframes & High-Fidelity UI:</strong> Building scalable grid systems for resource filtering.</li><li><strong>Design Systems:</strong> Creating flexible interface components.</li><li><strong>Usability Reviews:</strong> Validating reservation paths with active testers.</li><li><strong>Collaboration:</strong> Aligning component specs with engineering libraries.</li></ul>'
            },
            {
                title: '05 — WIREFRAMES & DESIGN SYSTEM',
                html: `<p>We established a clean corporate design system utilizing a modular grid. Below is a representative visual of the booking grid architecture:</p>
                <div class="case-study-visual">
                    <span class="visual-title">Enterprise Booking Layout Abstract</span>
                    <div class="visual-wireframe-container">
                        <div class="wireframe-element-row">
                            <div class="wireframe-box" style="flex: 2;">Resource Filters</div>
                            <div class="wireframe-box" style="flex: 5;">Timeline Booking Grid (Time Intervals vs. Rooms)</div>
                        </div>
                        <div class="wireframe-element-row">
                            <div class="wireframe-box" style="flex: 1;">Room 101 (Available)</div>
                            <div class="wireframe-box" style="flex: 1; background: var(--skin-color); color: #fff;">Booked (10:00 - 11:30)</div>
                            <div class="wireframe-box" style="flex: 1;">Room 101 (Available)</div>
                        </div>
                    </div>
                </div>`
            },
            {
                title: '06 — LEARNINGS',
                html: '<p>Working on this corporate scheduling ecosystem deepened my design thinking about strict grid rules, system constraints, and developer handoffs. Creating flexible design tokens ensured seamless visual syncing during the frontend implementation phase.</p>'
            }
        ]
    },
    'saha-yatri': {
        title: 'Saha-Yatri',
        category: 'Product & Service Design',
        meta: 'Real-Time Bus Management System',
        image: 'images/p2.png',
        brief: 'A dual-sided ecosystem designed to resolve chaotic public transit tracking by offering separate intuitive experiences for commuters and bus operators.',
        sections: [
            {
                title: '01 — OVERVIEW',
                html: '<p>Saha-Yatri represents a comprehensive transit product. Public transit systems often suffer from unpredictable delays, lack of live location transparency, and difficult driver-passenger synchronization. This case study details our journey from user research to interactive tracking screens.</p>'
            },
            {
                title: '02 — THE DUAL EXPERIENCE',
                html: '<p>The main differentiator of Saha-Yatri is its dual-focused user experience architecture:</p><ul><li><strong>The Commuter App:</strong> Designed for rapid legibility. Focuses on route maps, arrival notifications, live bus location points, and clear delay indicators.</li><li><strong>The Driver App:</strong> Engineered to minimize distraction. Features high-contrast tap interfaces, simple timeline routes, and basic status toggles (e.g., "Active", "Delay", "Break").</li></ul>'
            },
            {
                title: '03 — USER RESEARCH & JOURNEY MAPPING',
                html: '<p>Through contextual observation and commuter interviews, we mapped real user journeys to identify friction points:</p><ul><li>Commuters wasted significant time waiting at bus stations due to lack of real-time tracking data.</li><li>Bus drivers were overwhelmed by complex mobile screens while navigating heavy traffic.</li><li>Our design focused on large-scale interactions and high information hierarchy to prioritize speed and safety.</li></ul>'
            },
            {
                title: '04 — INTERACTIVE SCREEN BLUEPRINT',
                html: `<p>We prioritized geospatial maps as the root navigation element. Below is an abstract representation of the passenger home tracking layout:</p>
                <div class="case-study-visual">
                    <span class="visual-title">Commuter Real-Time Tracking UI Architecture</span>
                    <div class="visual-wireframe-container">
                        <div class="wireframe-box" style="height: 120px;">Geospatial Map Canvas (Live Route Points & Bus Nodes)</div>
                        <div class="wireframe-element-row">
                            <div class="wireframe-box" style="flex: 3;">Route S1 — Arriving in 4m</div>
                            <div class="wireframe-box" style="flex: 1; background: #e74c3c; color: #fff;">Delay +2m</div>
                        </div>
                    </div>
                </div>`
            },
            {
                title: '05 — USABILITY TESTING & FIELD ITERATIONS',
                html: '<p>We took wireframes directly onto active public buses to conduct contextual tests. Insights gathered:</p><ul><li>Sunlight glare required us to implement an extremely high-contrast light theme with prominent typography.</li><li>Bumpy road conditions necessitated larger tap-target areas (minimum 48dp) across both user views.</li></ul>'
            }
        ]
    },
    'kanunai': {
        title: 'KanunAI',
        category: 'AI Platform Design',
        meta: 'AI Legal Research Platform',
        image: 'images/p6.png',
        brief: 'An advanced search and review interface utilizing a custom Retrieval-Augmented Generation (RAG) model trained on complex Nepali statutory laws.',
        sections: [
            {
                title: '01 — OVERVIEW',
                html: '<p>KanunAI is a professional legal research platform designed to bring machine intelligence to statutory analysis. It allows legal practitioners to query dense legislation, access verified citations, and view context-specific summaries.</p>'
            },
            {
                title: '02 — THE CHALLENGE',
                html: '<p>AI search models can often generate inaccurate references, which can damage a legal case. The product design challenges included:</p><ul><li>Establishing absolute trust and reference verification.</li><li>Designing complex RAG document review workflows.</li><li>Creating clean interaction models to refine AI queries step-by-step.</li></ul>'
            },
            {
                title: '03 — BLUEPRINTING NAVIGATION & INTERACTION',
                html: '<p>We formulated a split-screen workspace layout that displays the AI chat console alongside the original referenced statutory text. This ensures lawyers can instantly cross-reference quotes with legal codes without flipping screens.</p>'
            },
            {
                title: '04 — USER INTERFACE WORKFLOW',
                html: `<p>Below is an architectural diagram of our split-screen RAG workspace model:</p>
                <div class="case-study-visual">
                    <span class="visual-title">Split-Screen Legal Workspace Abstract</span>
                    <div class="visual-wireframe-container">
                        <div class="wireframe-element-row" style="height: 140px;">
                            <div class="wireframe-box" style="flex: 1;">AI Conversational Panel & Prompt Logs</div>
                            <div class="wireframe-box" style="flex: 1.2;">Interactive statutory document viewer (with automatic highlight markers)</div>
                        </div>
                    </div>
                </div>`
            },
            {
                title: '05 — DESIGN FOR ERROR DIAGNOSTICS',
                html: '<p>Recognizing the risks of AI hallucination, we designed specific error diagnostics and confidence-level meters for every query response. Users can hover over citation links to view source integrity states, facilitating rapid and trustworthy review cycles.</p>'
            }
        ]
    },
    'backdropx': {
        title: 'BackdropX',
        category: 'Mobile Application',
        meta: 'High-Definition Wallpaper Application',
        image: 'images/p4.png',
        brief: 'A visually intensive, image-heavy mobile platform optimized for high-definition wallpapers, tactile micro-interactions, and swift saving workflows.',
        sections: [
            {
                title: '01 — OVERVIEW',
                html: '<p>BackdropX is a high-end visual product built with sensory layout rules. Focus was dedicated to spatial balance, image proportions, and seamless animations that elevate mobile aesthetic experiences.</p>'
            },
            {
                title: '02 — GRID SYSTEM ARCHITECTURE',
                html: '<p>To highlight photography and graphics, we engineered a custom staggered-column masonry grid layout. It maintains consistent aspect ratios across varying mobile screen scales, minimizing white-space overhead while preserving artistic assets.</p>'
            },
            {
                title: '03 — MICRO-INTERACTIONS & NAVIGATION',
                html: '<p>A major emphasis was placed on responsive touch-based physics:</p><ul><li><strong>One-Tap Save:</strong> A responsive floating button that dynamically displays file download progressions through haptic micro-interactions.</li><li><strong>Seamless Category Swipe:</strong> An infinite horizontal scrolling carousel that uses parallax transitions to preview neighboring visual themes.</li></ul>'
            },
            {
                title: '04 — VISUAL SYSTEM BLUEPRINT',
                html: `<p>Representative mobile grid blueprint utilized to ensure visual breathing room:</p>
                <div class="case-study-visual">
                    <span class="visual-title">Staggered Columns Grid Abstract</span>
                    <div class="visual-wireframe-container">
                        <div class="wireframe-element-row" style="height: 120px;">
                            <div class="wireframe-box" style="flex: 1; height: 100px;">Visual Thumbnail (Portait)</div>
                            <div class="wireframe-box" style="flex: 1; height: 130px;">Visual Thumbnail (Tall)</div>
                        </div>
                        <div class="wireframe-element-row">
                            <div class="wireframe-box">Floating Download (One-Tap Action)</div>
                        </div>
                    </div>
                </div>`
            },
            {
                title: '05 — DASHBOARD & SAVE INTERFACE',
                html: '<p>The user dashboard is personalized around chosen palettes, featuring visual theme groupings. Micro-interactions utilize hardware-accelerated CSS filters and spring animations, ensuring the app remains extremely fast on all responsive viewport frames.</p>'
            }
        ]
    },
    'sikai': {
        title: 'SikAI',
        category: 'Data Visualization',
        meta: 'AI-Powered E-Learning Platform',
        image: 'images/p1.png',
        brief: 'An e-learning environment built with complex analytical dashboard layouts to present course performance metrics and learner trends simply.',
        sections: [
            {
                title: '01 — OVERVIEW',
                html: '<p>SikAI bridges data-heavy analytics and educational experiences. The core objective of this design sprint was to turn raw student progress data, submission states, and grading trajectories into interactive visual layouts.</p>'
            },
            {
                title: '02 — DUAL-ROLE DASHBOARD ARCHITECTURE',
                html: '<p>The product layout changes dynamically based on the active role:</p><ul><li><strong>Teacher Console:</strong> Displays class trends, student risk warnings, and assignment completion heatmaps.</li><li><strong>Student Hub:</strong> Visualizes personalized progress metrics, study pathways, and real-time diagnostic alerts.</li></ul>'
            },
            {
                title: '03 — DATA VISUALIZATION SYSTEMS',
                html: `<p>To avoid clutter, we curated a minimal system using color codes (alert warnings in warm tones, progress states in neutral skins). Below is an abstract mockup of the data layout:</p>
                <div class="case-study-visual">
                    <span class="visual-title">Analytical Dashboard Interface Blueprint</span>
                    <div class="visual-wireframe-container">
                        <div class="wireframe-element-row">
                            <div class="wireframe-box" style="flex: 1;">Completion Progress (Bar Chart)</div>
                            <div class="wireframe-box" style="flex: 1;">Active Engagement (Line Graph)</div>
                        </div>
                        <div class="wireframe-element-row">
                            <div class="wireframe-box" style="flex: 2;">Live Performance Heatmap (Student Log vs. Days)</div>
                        </div>
                    </div>
                </div>`
            },
            {
                title: '04 — INTERACTIVE DIAGNOSTICS & ALERTS',
                html: '<p>Real-time notifications inform educators of learning drops. Usability assessments demonstrated that introducing visual diagnostic cards rather than listing alerts in text format accelerated teacher responses by 40%.</p>'
            }
        ]
    }
};

// --- CORE APPLICATION INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeToggle();
    initHeroInteractions();
    initContactForm();
    setCurrentYear();
});

// --- STICKY & RESPONSIVE TOP HEADER NAVIGATION ---
function initNavigation() {
    const header = document.querySelector('.site-header');
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = mobileMenuOverlay.querySelectorAll('.nav-item');
    const desktopLinks = document.querySelectorAll('.nav-desktop .nav-item');
    const sections = document.querySelectorAll('section');

    // Sticky Scroll Action
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Toggle
    navToggleBtn.addEventListener('click', () => {
        const isOpen = mobileMenuOverlay.classList.toggle('open');
        navToggleBtn.classList.toggle('open');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Mobile Menu Links Clicking
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('open');
            navToggleBtn.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Active Section State Tracking with IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;

                // Desktop Nav Active State
                desktopLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    }
                });

                // Mobile Nav Active State
                mobileLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(sec => observer.observe(sec));
}

// --- VISUAL LIGHT/DARK MODE TOGGLE ---
function initThemeToggle() {
    const themeBtn = document.getElementById('day-night-btn');
    const icon = themeBtn.querySelector('i');

    // System theme preference check
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark');
        icon.className = 'fas fa-sun';
    } else {
        document.body.classList.remove('dark');
        icon.className = 'fas fa-moon';
    }

    // Toggle Action
    themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// --- HIGH-END HERO INTERACTIONS & PHYSICS ---
function initHeroInteractions() {
    const card = document.getElementById('interactive-design-card');
    const container = document.querySelector('.hero-canvas-container');

    if (!card || !container) return;

    // Smooth Interactive Tilting Physics
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left; // x coordinate inside the container
        const y = e.clientY - rect.top;  // y coordinate inside the container

        // Map coordinates to degrees (-10deg to 10deg)
        const xRotate = ((y / rect.height) - 0.5) * -15;
        const yRotate = ((x / rect.width) - 0.5) * 15;

        // Apply interactive transformation
        card.style.transform = `rotateX(${xRotate}deg) rotateY(${yRotate}deg) scale(1.03)`;
        card.style.transition = 'transform 0.1s ease';
    });

    // Reset Transformation on Leave
    container.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(-3deg) rotateY(0deg) scale(1)';
        card.style.transition = 'transform 0.5s ease';
    });

    // Touch Interactive Actions for Mobile Devices
    container.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            const rect = container.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const xRotate = ((y / rect.height) - 0.5) * -10;
                const yRotate = ((x / rect.width) - 0.5) * 10;
                card.style.transform = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
            }
        }
    }, { passive: true });
}

// --- FULL-SCREEN CASE STUDY MODAL WORKFLOWS ---
window.openCaseStudy = function(projectId) {
    const modal = document.getElementById('case-study-modal');
    const contentArea = document.getElementById('case-study-modal-content');
    const project = caseStudiesData[projectId];

    if (!project) return;

    // Assemble Beautiful Case Study Template
    let sectionsHtml = '';
    project.sections.forEach(sec => {
        sectionsHtml += `
            <section class="case-study-section">
                <h3 class="case-study-section-title">${sec.title}</h3>
                <div class="case-study-section-body">${sec.html}</div>
            </section>
        `;
    });

    const fullHtml = `
        <div class="case-study-header">
            <span class="case-study-category">${project.category}</span>
            <h2 class="case-study-title">${project.title}</h2>
            <p class="case-study-brief">${project.brief}</p>

            <div class="case-study-info-grid">
                <div class="case-study-info-item">
                    <h4>My Role</h4>
                    <p>Product & UI/UX Designer</p>
                </div>
                <div class="case-study-info-item">
                    <h4>Enterprise / Platform</h4>
                    <p>${project.meta}</p>
                </div>
                <div class="case-study-info-item">
                    <h4>Timeline</h4>
                    <p>Verified Core Sprints</p>
                </div>
            </div>
        </div>

        <div class="case-study-hero-image-wrapper">
            <img src="${project.image}" alt="${project.title}">
        </div>

        ${sectionsHtml}

        <div style="text-align: center; margin-top: 80px;">
            <button onclick="closeCaseStudy()" class="btn btn-primary">Back to Portfolio <i class="fa-solid fa-arrow-left"></i></button>
        </div>
    `;

    // Render & Open with transitions
    contentArea.innerHTML = fullHtml;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
};

window.closeCaseStudy = function() {
    const modal = document.getElementById('case-study-modal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
};

// --- CONTACT FORM ACTION ---
function initContactForm() {
    const form = document.getElementById('contact-form-redesign');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple success feedback animation
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
        btn.style.pointerEvents = 'none';

        setTimeout(() => {
            btn.innerHTML = 'Message Sent! <i class="fa-solid fa-check"></i>';
            btn.style.backgroundColor = '#2ecc71';
            form.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                btn.style.pointerEvents = '';
            }, 3000);
        }, 1500);
    });
}

// --- GENERAL UTILITY FUNCTIONS ---
function setCurrentYear() {
    const element = document.getElementById('current-year');
    if (element) {
        element.textContent = new Date().getFullYear();
    }
}
