class GlobalNavbar {
    constructor(containerId = 'global-navbar') {
        this.containerId = containerId;
        this.rootPath = this.calculateRootPath();
        this.currentPath = window.location.pathname;
        this.menuItems = [
            { label: 'Inicio', href: `${this.rootPath}index.html`, active: this.isPage('index.html') },
            {
                label: 'Servicios',
                href: '#',
                isWide: true, // Marker for full-width/wide alignment behavior
                megaMenu: [
                    {
                        country: 'España',
                        icon: '🇪🇸',
                        services: [
                            { label: 'Curso CAP', href: `${this.rootPath}screens/countries/spain/curso-cap/index.html` },
                            { label: 'Nacionalidad Española', href: '#' },
                            { label: 'Residencia y Permisos', href: '#' },
                            { label: 'Arraigo Sociolaboral', href: '#' },
                            { label: 'Nómada Digital', href: '#' },
                            { label: 'Trámites Específicos', href: '#' }
                        ]
                    },
                    {
                        country: 'Portugal',
                        icon: '🇵🇹',
                        services: [
                            { label: 'Ciudadanía Portuguesa', href: '#' },
                            { label: 'Autorización de Residencia', href: '#' },
                            { label: 'Visa de Trabajo', href: '#' },
                            { label: 'Visa de Estudiante', href: '#' },
                            { label: 'Reagrupación Familiar', href: '#' }
                        ]
                    },
                    {
                        country: 'Estados Unidos',
                        icon: '🇺🇸',
                        services: [
                            { label: 'Visas de Inmigrante', href: '#' },
                            { label: 'Visas de No Inmigrante', href: '#' },
                            { label: 'Permisos de Trabajo', href: '#' },
                            { label: 'Waivers y TPS', href: '#' }
                        ]
                    },
                    {
                        country: 'Venezuela',
                        icon: '🇻🇪',
                        services: [
                            { label: 'Pasaporte', href: '#' },
                            { label: 'Apostilla', href: '#' },
                            { label: 'Antecedentes Penales', href: '#' },
                            { label: 'Cédula de Identidad', href: '#' }
                        ]
                    },
                    {
                        country: 'Dubái',
                        icon: '🇦🇪',
                        services: [
                            { label: 'Residencia Dorada', href: '#' },
                            { label: 'Asesoría General', href: '#' }
                        ]
                    }
                ]
            },
            {
                label: 'Sistema de Procesos',
                href: '#',
                megaMenu: [
                    {
                        services: [
                            { label: 'Consulta Inicial', href: '#' },
                            { label: 'Asesoría Personalizada', href: '#' },
                            { label: 'Gestión de Trámites', href: '#' }
                        ]
                    }
                ]
            },
            {
                label: 'Centro de Recursos',
                href: '#',
                megaMenu: [
                    {
                        services: [
                            { label: 'Blog y Noticias', href: '#' },
                            { label: 'Guías Descargables', href: '#' },
                            { label: 'Casos de Éxito', href: '#' }
                        ]
                    }
                ]
            },
            {
                label: 'Información Corporativa',
                href: `${this.rootPath}screens/general/informacion-corporativa/index.html`
            },
        ];
    }

    calculateRootPath() {
        const path = window.location.pathname;
        if (path.includes('/screens/countries/spain/curso-cap/')) return '../../../../';
        if (path.includes('/screens/general/')) return '../../../';
        if (path.includes('/screens/countries/')) return '../../../';
        return './';
    }

    isPage(filename) {
        return this.currentPath.endsWith(filename) || (filename === 'index.html' && this.currentPath === '/');
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`GlobalNavbar: Container #${this.containerId} not found.`);
            return;
        }

        // Inject CSS if not present
        if (!document.getElementById('global-navbar-css')) {
            const link = document.createElement('link');
            link.id = 'global-navbar-css';
            link.rel = 'stylesheet';
            link.href = `${this.rootPath}src/styles/components/navbar.css`;
            document.head.appendChild(link);
        }

        // HTML Structure
        container.innerHTML = `
            <nav class="global-navbar" id="navbar">
                <div class="navbar-container">
                    <a href="${this.rootPath}index.html" class="navbar-logo">
                        <img src="${this.rootPath}assets/icons/logo/logo-md.png" alt="AsesoríaGlobal Logo" class="brand-logo">
                    </a>

                    <button class="navbar-toggle" id="navbar-toggle">
                        <i class="fas fa-bars"></i>
                    </button>

                    <ul class="navbar-menu" id="navbar-menu">
                        ${this.renderMenuItems()}
                        <li class="nav-item mobile-only">
                             <a href="https://wa.me/34682518339" target="_blank" class="whatsapp-btn-nav">
                                <i class="fab fa-whatsapp"></i> Contactar
                            </a>
                        </li>
                    </ul>

                    <div class="navbar-cta desktop-only">
                        <a href="https://wa.me/34682518339" target="_blank" class="whatsapp-btn-nav">
                            <i class="fab fa-whatsapp"></i> Contactar
                        </a>
                    </div>
                </div>
            </nav>
            
            <!-- Floating Client Area Button -->
            <a href="${this.rootPath}screens/general/dashboard/index.html" class="floating-client-btn" title="Área de Clientes">
                <i class="fas fa-user-circle"></i>
                <span class="tooltip">Área de Clientes</span>
            </a>
        `;

        this.addEventListeners();
    }

    renderMenuItems() {
        return this.menuItems.map(item => {
            const staticClass = item.isWide ? 'nav-item-static' : '';
            if (item.megaMenu) {
                return `
                    <li class="nav-item has-dropdown ${staticClass}">
                        <a href="${item.href}" class="nav-link dropdown-toggle">
                            ${item.label} <i class="fas fa-chevron-down" style="font-size: 0.8em;"></i>
                        </a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                ${item.megaMenu.map(country => `
                                    <div class="mega-menu-column">
                                        ${(country.country || country.icon) ? `
                                            <div class="mega-menu-header">
                                                ${country.icon ? `<span class="mega-menu-icon">${country.icon}</span>` : ''}
                                                ${country.country ? `<h3>${country.country}</h3>` : ''}
                                            </div>
                                        ` : ''}
                                        <ul class="mega-menu-list">
                                            ${country.services.map(service => `
                                                <li>
                                                    <a href="${service.href}">${service.label}</a>
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </li>
                `;
            } else if (item.dropdown) {
                return `
                    <li class="nav-item has-dropdown">
                        <a href="${item.href}" class="nav-link dropdown-toggle">
                            ${item.label} <i class="fas fa-chevron-down" style="font-size: 0.8em;"></i>
                        </a>
                        <ul class="dropdown-menu">
                            ${item.dropdown.map(subItem => `
                                <li>
                                    <a href="${subItem.href}">${subItem.label}</a>
                                </li>
                            `).join('')}
                        </ul>
                    </li>
                `;
            }
            return `
                <li class="nav-item">
                    <a href="${item.href}" class="nav-link ${item.active ? 'active' : ''}">${item.label}</a>
                </li>
            `;
        }).join('');
    }

    addEventListeners() {
        // Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile Toggle
        const toggle = document.getElementById('navbar-toggle');
        const menu = document.getElementById('navbar-menu');

        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
                const icon = toggle.querySelector('i');
                if (menu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }

        // Mobile Dropdown Toggle
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.target.closest('.nav-item').classList.toggle('open');
                }
            });
        });
    }
}

// Auto-initialize
const initNavbar = () => {
    const navbar = new GlobalNavbar();
    navbar.render();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}
