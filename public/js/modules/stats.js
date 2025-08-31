// Live Stats Module
export class LiveStats {
    constructor() {
        this.stats = {
            activeBuses: 124,
            totalPassengers: 2847,
            averageOccupancy: 68,
            energyEfficiency: 94
        };
        this.init();
    }

    init() {
        // Update stats every 3 seconds
        setInterval(() => this.updateStats(), 3000);
    }

    updateStats() {
        // Update active buses (±3)
        this.stats.activeBuses += Math.floor(Math.random() * 7) - 3;
        this.stats.activeBuses = Math.max(120, Math.min(130, this.stats.activeBuses));

        // Update total passengers (±20)
        this.stats.totalPassengers += Math.floor(Math.random() * 41) - 20;
        this.stats.totalPassengers = Math.max(2800, Math.min(2900, this.stats.totalPassengers));

        // Update average occupancy (±3%, keep between 45-85%)
        this.stats.averageOccupancy += Math.floor(Math.random() * 7) - 3;
        this.stats.averageOccupancy = Math.max(45, Math.min(85, this.stats.averageOccupancy));

        // Update energy efficiency (±2%, keep between 88-98%)
        this.stats.energyEfficiency += Math.floor(Math.random() * 5) - 2;
        this.stats.energyEfficiency = Math.max(88, Math.min(98, this.stats.energyEfficiency));

        this.updateDOM();
    }

    updateDOM() {
        const activeBusesEl = document.getElementById('activeBuses');
        const totalPassengersEl = document.getElementById('totalPassengers');
        const averageOccupancyEl = document.getElementById('averageOccupancy');
        const energyEfficiencyEl = document.getElementById('energyEfficiency');
        const occupancyBadgeEl = document.getElementById('occupancyBadge');

        if (activeBusesEl) {
            activeBusesEl.textContent = this.stats.activeBuses;
        }

        if (totalPassengersEl) {
            totalPassengersEl.textContent = this.stats.totalPassengers.toLocaleString();
        }

        if (averageOccupancyEl) {
            averageOccupancyEl.textContent = this.stats.averageOccupancy;
        }

        if (energyEfficiencyEl) {
            energyEfficiencyEl.textContent = this.stats.energyEfficiency;
        }

        if (occupancyBadgeEl) {
            if (this.stats.averageOccupancy > 70) {
                occupancyBadgeEl.textContent = 'High';
                occupancyBadgeEl.className = 'occupancy-badge high';
            } else {
                occupancyBadgeEl.textContent = 'Normal';
                occupancyBadgeEl.className = 'occupancy-badge';
            }
        }
    }
}
