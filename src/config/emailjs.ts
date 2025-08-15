// EmailJS Configuration
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: '9uhWKUO7vI9o1xXgK',
  SERVICE_ID: 'service_6gnqp8y', // Service ID real
  TEMPLATE_ID: 'template_2yre1uf' // Template ID real
};

// EmailJS Service IDs for different forms
export const EMAILJS_SERVICES = {
  MULTIPLE_EMPRESARIAL: {
    SERVICE_ID: 'service_6gnqp8y', // Service ID real
    TEMPLATE_ID: 'template_2yre1uf' // Template ID real
  },
  WIZARD_FORM: {
    SERVICE_ID: 'service_6gnqp8y', // Service ID real
    TEMPLATE_ID: 'template_2yre1uf' // Template ID real
  }
};

// Load EmailJS SDK
export function loadEmailJSSDK(): Promise<any> {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if ((window as any).emailjs) {
      resolve((window as any).emailjs);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    
    script.onload = () => {
      try {
        (window as any).emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('✅ EmailJS inicializado correctamente');
        resolve((window as any).emailjs);
      } catch (error) {
        console.error('❌ Error al inicializar EmailJS:', error);
        reject(error);
      }
    };
    
    script.onerror = () => {
      reject(new Error('No se pudo cargar EmailJS SDK'));
    };
    
    document.head.appendChild(script);
  });
}

// Send email function
export async function sendEmail(
  serviceId: string,
  templateId: string,
  params: Record<string, any>
): Promise<any> {
  try {
    const emailjs = await loadEmailJSSDK();
    const result = await emailjs.send(serviceId, templateId, params);
    console.log('✅ EmailJS resultado:', result);
    return result;
  } catch (error) {
    console.error('❌ Error al enviar email:', error);
    throw error;
  }
}

// Notification system
export function showNotification(
  message: string, 
  type: 'success' | 'error' | 'warning' | 'info' = 'info', 
  duration: number = 4000
): void {
  // Create notification container if it doesn't exist
  let container = document.getElementById('notification-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-container';
    container.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999;';
    document.body.appendChild(container);
  }

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add styles if not already present
  if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      .notification {
        padding: 1rem 1.5rem;
        border-radius: 8px;
        margin-bottom: 0.5rem;
        color: white;
        font-weight: 500;
        min-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(400px);
        transition: transform 0.3s ease;
      }
      .notification.show {
        transform: translateX(0);
      }
      .notification-success {
        background: #10b981;
      }
      .notification-error {
        background: #ef4444;
      }
      .notification-warning {
        background: #f59e0b;
      }
      .notification-info {
        background: #3b82f6;
      }
    `;
    document.head.appendChild(style);
  }
  
  container.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Auto remove
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 300);
  }, duration);
}

// Validate EmailJS configuration
export function validateEmailJSConfig(): boolean {
  const hasValidServiceId = EMAILJS_CONFIG.SERVICE_ID !== 'service_1234567';
  const hasValidTemplateId = EMAILJS_CONFIG.TEMPLATE_ID !== 'template_1234567';
  
  if (!hasValidServiceId || !hasValidTemplateId) {
    showNotification(
      '⚙️ Configura SERVICE_ID y TEMPLATE_ID de EmailJS para poder enviar.', 
      'warning'
    );
    return false;
  }
  
  return true;
}
