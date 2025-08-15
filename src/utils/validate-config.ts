// EmailJS Configuration Validator
import { EMAILJS_CONFIG } from '../config/emailjs';

export function validateEmailJSConfiguration(): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check Public Key
  if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === '') {
    errors.push('Public Key está vacío');
  } else if (EMAILJS_CONFIG.PUBLIC_KEY.length < 10) {
    warnings.push('Public Key parece ser muy corto');
  }

  // Check Service ID
  if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === '') {
    errors.push('Service ID está vacío');
  } else if (EMAILJS_CONFIG.SERVICE_ID === 'service_1234567') {
    errors.push('Service ID no ha sido configurado (usa el valor por defecto)');
  } else if (!EMAILJS_CONFIG.SERVICE_ID.startsWith('service_')) {
    warnings.push('Service ID no parece tener el formato correcto');
  }

  // Check Template ID
  if (!EMAILJS_CONFIG.TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID === '') {
    errors.push('Template ID está vacío');
  } else if (EMAILJS_CONFIG.TEMPLATE_ID === 'template_1234567') {
    errors.push('Template ID no ha sido configurado (usa el valor por defecto)');
  } else if (!EMAILJS_CONFIG.TEMPLATE_ID.startsWith('template_')) {
    warnings.push('Template ID no parece tener el formato correcto');
  }

  // Check if running in browser
  if (typeof window === 'undefined') {
    warnings.push('No se puede validar completamente en el servidor');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

export function logConfigurationStatus(): void {
  const validation = validateEmailJSConfiguration();
  
  console.log('🔧 EmailJS Configuration Status:');
  console.log('================================');
  
  if (validation.isValid) {
    console.log('✅ Configuración válida');
  } else {
    console.log('❌ Configuración inválida');
  }
  
  if (validation.errors.length > 0) {
    console.log('\n❌ Errores:');
    validation.errors.forEach(error => {
      console.log(`   - ${error}`);
    });
  }
  
  if (validation.warnings.length > 0) {
    console.log('\n⚠️ Advertencias:');
    validation.warnings.forEach(warning => {
      console.log(`   - ${warning}`);
    });
  }
  
  console.log('\n📋 Configuración actual:');
  console.log(`   Public Key: ${EMAILJS_CONFIG.PUBLIC_KEY}`);
  console.log(`   Service ID: ${EMAILJS_CONFIG.SERVICE_ID}`);
  console.log(`   Template ID: ${EMAILJS_CONFIG.TEMPLATE_ID}`);
  console.log('================================\n');
}

// Auto-run validation in browser
if (typeof window !== 'undefined') {
  // Run validation after a short delay to ensure DOM is ready
  setTimeout(() => {
    logConfigurationStatus();
  }, 1000);
}
