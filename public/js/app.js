// Main App Module
import { Navigation } from './modules/navigation.js';
import { LiveStats } from './modules/stats.js';
import { Animations } from './modules/animations.js';

class App {
    constructor() {
        this.init();
    }

    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    async start() {
        try {
            // Load sections
            await this.loadSections();
            
            // Initialize modules
            this.navigation = new Navigation();
            this.liveStats = new LiveStats();
            this.animations = new Animations();
            
            console.log('ElectricFlow app initialized successfully');
        } catch (error) {
            console.error('Error initializing app:', error);
        }
    }

    async loadSections() {
        const sections = [
            { id: 'hero-section', file: './sections/hero.html' },
            { id: 'features-section', file: './sections/features.html' },
            { id: 'stats-section', file: './sections/live-stats.html' },
            { id: 'cta-section', file: './sections/cta.html' }
        ];

        const loadPromises = sections.map(section => this.loadSection(section));
        await Promise.all(loadPromises);
    }

    async loadSection(section) {
        try {
            const response = await fetch(section.file);
            if (!response.ok) {
                throw new Error(`Failed to load ${section.file}`);
            }
            const html = await response.text();
            const container = document.getElementById(section.id);
            if (container) {
                container.innerHTML = html;
            }
        } catch (error) {
            console.error(`Error loading section ${section.id}:`, error);
        }
    }
}

// Initialize the app
new App();