// Utility functions for admin panel

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

// Generate ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Image to Base64
function imageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize data storage
function initStorage() {
    if (!localStorage.getItem('ligon_produtos')) {
        localStorage.setItem('ligon_produtos', '[]');
    }
    if (!localStorage.getItem('ligon_servicos')) {
        localStorage.setItem('ligon_servicos', '[]');
    }
    if (!localStorage.getItem('ligon_vendas')) {
        localStorage.setItem('ligon_vendas', '[]');
    }
    if (!localStorage.getItem('ligon_galeria')) {
        localStorage.setItem('ligon_galeria', '[]');
    }
    if (!localStorage.getItem('ligon_agendamentos')) {
        localStorage.setItem('ligon_agendamentos', '[]');
    }
    if (!localStorage.getItem('ligon_profissionais')) {
        const profissionais = [
            { id: 'prof1', nome: 'Profissional 1', login: 'prof1', senha: '123456' },
            { id: 'prof2', nome: 'Profissional 2', login: 'prof2', senha: '123456' },
            { id: 'prof3', nome: 'Profissional 3', login: 'prof3', senha: '123456' }
        ];
        localStorage.setItem('ligon_profissionais', JSON.stringify(profissionais));
    }
}

// Initialize on load
if (typeof window !== 'undefined') {
    initStorage();
}

