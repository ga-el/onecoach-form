// Notification system
type NotificationType = 'success' | 'error' | 'warning' | 'info';

// Main notification function
export function showNotification(
    message: string, 
    type?: NotificationType, 
    duration: number = 3000
): void {
    // Set default type if not provided
    type = type || 'info';
    // Only run in browser environment
    if (typeof document === 'undefined') return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Notification colors
    const colors = {
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6'
    } as const;
    
    // Apply styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '4px',
        color: 'white',
        zIndex: '1000',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transform: 'translateY(-20px)',
        opacity: '0',
        transition: 'all 0.3s ease',
        backgroundColor: colors[type]
    });
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show with animation
    requestAnimationFrame(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    });
    
    // Hide and remove after duration
    const timer = setTimeout(() => {
        notification.style.transform = 'translateY(-20px)';
        notification.style.opacity = '0';
        
        // Remove after animation
        setTimeout(() => {
            notification.remove();
            clearTimeout(timer);
        }, 300);
    }, duration);
};

// Initialize global function in browser environment
if (typeof window !== 'undefined') {
    window.showNotification = showNotification;
}

export default showNotification;
