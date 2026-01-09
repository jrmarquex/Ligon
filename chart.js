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
        const padding = { top: 20, right: 20, bottom: 40, left: 50 };
        const chartWidth = width - padding.left - padding.right;
        const chartHeight = height - padding.top - padding.bottom;
        const maxValue = Math.max(...data, 1);
        const barWidth = chartWidth / data.length;
        const spacing = barWidth * 0.15;
        const barRadius = 6;
        
        // Draw grid lines (horizontal)
        this.ctx.strokeStyle = '#f3f4f6';
        this.ctx.lineWidth = 1;
        const gridLines = 5;
        for (let i = 0; i <= gridLines; i++) {
            const y = padding.top + (chartHeight / gridLines) * i;
            this.ctx.beginPath();
            this.ctx.moveTo(padding.left, y);
            this.ctx.lineTo(width - padding.right, y);
            this.ctx.stroke();
            
            // Y-axis labels
            if (i < gridLines) {
                const value = maxValue - (maxValue / gridLines) * i;
                this.ctx.fillStyle = '#9ca3af';
                this.ctx.font = '11px Inter';
                this.ctx.textAlign = 'right';
                this.ctx.fillText(
                    this.formatValue(value, maxValue),
                    padding.left - 10,
                    y + 4
                );
            }
        }
        
        // Draw bars with rounded corners
        data.forEach((value, index) => {
            const barHeight = (value / maxValue) * chartHeight;
            const x = padding.left + (index * barWidth) + spacing;
            const y = padding.top + chartHeight - barHeight;
            const actualBarWidth = barWidth - (spacing * 2);
            
            // Bar color - more vibrant
            const color = Array.isArray(colors) ? colors[index % colors.length] : colors;
            const isHighlighted = this.options.highlightedIndex === index;
            const barColor = isHighlighted ? color : this.lightenColor(color, 0.4);
            
            // Draw rounded rectangle bar
            this.drawRoundedRect(x, y, actualBarWidth, barHeight, barRadius, barColor);
            
            // Draw value on top (only if bar is tall enough)
            if (barHeight > 25) {
                this.ctx.fillStyle = '#111827';
                this.ctx.font = 'bold 12px Inter';
                this.ctx.textAlign = 'center';
                const displayValue = this.formatValue(value, maxValue);
                this.ctx.fillText(
                    displayValue,
                    x + actualBarWidth / 2,
                    y - 8
                );
            }
            
            // Draw label
            if (labels[index]) {
                this.ctx.fillStyle = '#6b7280';
                this.ctx.font = '12px Inter';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(
                    labels[index],
                    x + actualBarWidth / 2,
                    height - padding.bottom + 20
                );
            }
        });
    }
    
    drawRoundedRect(x, y, width, height, radius, color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x + radius, y);
        this.ctx.lineTo(x + width - radius, y);
        this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        this.ctx.lineTo(x + width, y + height);
        this.ctx.lineTo(x, y + height);
        this.ctx.lineTo(x, y + radius);
        this.ctx.quadraticCurveTo(x, y, x + radius, y);
        this.ctx.closePath();
        this.ctx.fill();
    }
    
    formatValue(value, maxValue) {
        if (maxValue >= 1000) {
            return (value / 1000).toFixed(1) + 'k';
        }
        return Math.round(value).toString();
    }
    
    drawDonutChart() {
        const { data, labels, colors } = this.options;
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 30;
        const innerRadius = radius * 0.65;
        
        const total = data.reduce((sum, val) => sum + val, 0);
        if (total === 0) return;
        
        let currentAngle = -Math.PI / 2;
        
        // Draw segments with better styling
        data.forEach((value, index) => {
            if (value === 0) return;
            
            const sliceAngle = (value / total) * 2 * Math.PI;
            const color = Array.isArray(colors) ? colors[index % colors.length] : colors;
            
            // Create gradient for depth
            const gradient = this.ctx.createLinearGradient(
                centerX - radius, centerY - radius,
                centerX + radius, centerY + radius
            );
            gradient.addColorStop(0, this.lightenColor(color, 0.1));
            gradient.addColorStop(1, color);
            
            // Outer arc
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            this.ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
            this.ctx.closePath();
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Add subtle border
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            currentAngle += sliceAngle;
        });
        
        // Draw center text with better styling
        const percentage = Math.round((data[0] / total) * 100);
        this.ctx.fillStyle = '#111827';
        this.ctx.font = 'bold 28px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${percentage}%`, centerX, centerY - 8);
        
        this.ctx.fillStyle = '#6b7280';
        this.ctx.font = '13px Inter';
        this.ctx.fillText(this.options.centerText || 'Concluído', centerX, centerY + 18);
    }
    
    lightenColor(color, amount) {
        const num = parseInt(color.replace("#", ""), 16);
        const r = Math.min(255, (num >> 16) + amount * 255);
        const g = Math.min(255, ((num >> 8) & 0x00FF) + amount * 255);
        const b = Math.min(255, (num & 0x0000FF) + amount * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }
}

