class GlobalFooter {
    constructor(containerId = 'global-footer') {
        this.containerId = containerId;
        this.rootPath = this.calculateRootPath();
    }

    calculateRootPath() {
        const path = window.location.pathname;
        if (path.includes('/screens/countries/spain/curso-cap/')) return '../../../../';
        if (path.includes('/screens/general/')) return '../../../';
        if (path.includes('/screens/countries/')) return '../../../';
        return './';
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`GlobalFooter: Container #${this.containerId} not found.`);
            return;
        }

        container.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; margin-bottom: 40px; text-align: left;">
                        <div>
                            <div style="margin-bottom: 16px;">
                                <img src="${this.rootPath}assets/icons/logo/logo-sm.png" alt="Asesoría para Inmigrantes"
                                    style="height: 96px; width: auto;">
                            </div>
                            <p style="opacity: 0.7;">Expertos en derecho migratorio y extranjería. Soluciones legales para un
                                mundo sin fronteras.</p>
                        </div>
                        <div>
                            <h4 style="color: white; margin-bottom: 20px;">Enlaces Rápidos</h4>
                            <ul style="list-style: none; opacity: 0.8;">
                                <li style="margin-bottom: 10px;"><a href="${this.rootPath}index.html"
                                        style="color: white; text-decoration: none;">Inicio</a></li>
                                <li style="margin-bottom: 10px;"><a href="${this.rootPath}index.html#servicios"
                                        style="color: white; text-decoration: none;">Servicios</a></li>
                                <li style="margin-bottom: 10px;"><a href="${this.rootPath}screens/countries/spain/curso-cap/index.html"
                                        style="color: white; text-decoration: none;">Curso CAP</a></li>
                                <li style="margin-bottom: 10px;"><a href="${this.rootPath}screens/general/dashboard/index.html"
                                        style="color: white; text-decoration: none;">Área de Clientes</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style="color: white; margin-bottom: 20px;">Contacto</h4>
                            <ul style="list-style: none; opacity: 0.8;">
                                <li style="margin-bottom: 10px;"><i class="fas fa-map-marker-alt"
                                        style="margin-right: 10px;"></i> Calle de Galileo 70, Madrid</li>
                                <li style="margin-bottom: 10px;"><i class="fas fa-phone" style="margin-right: 10px;"></i> +34
                                    682 51 83 39</li>
                                <li style="margin-bottom: 10px;"><i class="fas fa-envelope" style="margin-right: 10px;"></i>
                                    info@asesoriaparainmigrantes.com</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; text-align: center; opacity: 0.6;">
                        <p>&copy; 2024 Asesoría para Inmigrantes. Abog. Milagros Mena. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Auto-initialize
const initFooter = () => {
    const footer = new GlobalFooter();
    footer.render();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}
