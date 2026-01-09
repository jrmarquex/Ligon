// Simple Chart Library for Dashboard
// Lightweight chart implementation inspired by reference dashboards

class SimpleChart {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.options = {
            type: options.type || 'bar',
            data: options.data || [],
            colors: options.colors || ['#10b981'],
            labels: options.labels || [],
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        if (this.options.type === 'bar') {
            this.drawBarChart();
        } else if (this.options.type === 'donut') {
            this.drawDonutChart();
        }
    }
    
    setupCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
    }
    
    drawBarChart() {
        const { data, labels, colors } = this.options;
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        const padding = 40;
        const chartWidth = width - (padding * 2);
        const chartHeight = height - (padding * 2);
        const maxValue = Math.max(...data, 1);
        const barWidth = chartWidth / data.length;
        const spacing = barWidth * 0.2;
        
        // Draw bars
        data.forEach((value, index) => {
            const barHeight = (value / maxValue) * chartHeight;
            const x = padding + (index * barWidth) + spacing;
            const y = height - padding - barHeight;
            const actualBarWidth = barWidth - (spacing * 2);
            
            // Bar color
            const color = Array.isArray(colors) ? colors[index % colors.length] : colors;
            const isHighlighted = this.options.highlightedIndex === index;
            
            // Draw bar
            this.ctx.fillStyle = isHighlighted ? color : this.lightenColor(color, 0.3);
            this.ctx.fillRect(x, y, actualBarWidth, barHeight);
            
            // Draw value on top
            if (value > 0) {
                this.ctx.fillStyle = '#111827';
                this.ctx.font = '12px Inter';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(
                    `${Math.round((value / maxValue) * 100)}%`,
                    x + actualBarWidth / 2,
                    y - 5
                );
            }
            
            // Draw label
            if (labels[index]) {
                this.ctx.fillStyle = '#6b7280';
                this.ctx.font = '11px Inter';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(
                    labels[index],
                    x + actualBarWidth / 2,
                    height - padding + 15
                );
            }
        });
        
        // Draw grid lines
        this.ctx.strokeStyle = '#e5e7eb';
        this.ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = padding + (chartHeight / 5) * i;
            this.ctx.beginPath();
            this.ctx.moveTo(padding, y);
            this.ctx.lineTo(width - padding, y);
            this.ctx.stroke();
        }
    }
    
    drawDonutChart() {
        const { data, labels, colors } = this.options;
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 20;
        const innerRadius = radius * 0.6;
        
        const total = data.reduce((sum, val) => sum + val, 0);
        let currentAngle = -Math.PI / 2;
        
        // Draw segments
        data.forEach((value, index) => {
            const sliceAngle = (value / total) * 2 * Math.PI;
            const color = Array.isArray(colors) ? colors[index % colors.length] : colors;
            
            // Outer arc
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            this.ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
            this.ctx.closePath();
            this.ctx.fillStyle = color;
            this.ctx.fill();
            
            currentAngle += sliceAngle;
        });
        
        // Draw center text
        const percentage = Math.round((data[0] / total) * 100);
        this.ctx.fillStyle = '#111827';
        this.ctx.font = 'bold 24px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${percentage}%`, centerX, centerY - 5);
        
        this.ctx.fillStyle = '#6b7280';
        this.ctx.font = '12px Inter';
        this.ctx.fillText(this.options.centerText || 'Completed', centerX, centerY + 15);
    }
    
    lightenColor(color, amount) {
        const num = parseInt(color.replace("#", ""), 16);
        const r = Math.min(255, (num >> 16) + amount * 255);
        const g = Math.min(255, ((num >> 8) & 0x00FF) + amount * 255);
        const b = Math.min(255, (num & 0x0000FF) + amount * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }
}

