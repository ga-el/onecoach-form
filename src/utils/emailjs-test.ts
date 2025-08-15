// EmailJS Test Script
// Usa este script para probar la configuración de EmailJS

import { loadEmailJSSDK, sendEmail, showNotification, validateEmailJSConfig } from '../config/emailjs';

export async function testEmailJS() {
  console.log('🧪 Iniciando prueba de EmailJS...');
  
  try {
    // 1. Validar configuración
    if (!validateEmailJSConfig()) {
      console.error('❌ Configuración de EmailJS inválida');
      return false;
    }
    
    // 2. Cargar SDK
    console.log('📦 Cargando EmailJS SDK...');
    const emailjs = await loadEmailJSSDK();
    console.log('✅ SDK cargado correctamente');
    
    // 3. Enviar email de prueba
    console.log('📨 Enviando email de prueba...');
    
    const testParams = {
      to_name: 'Usuario de Prueba',
      from_name: 'Sistema de Formularios',
      message: 'Este es un email de prueba para verificar la configuración de EmailJS.',
      form_type: 'PRUEBA',
      submission_date: new Date().toLocaleString('es-MX'),
      test_data: {
        rfc: 'TEST123456789',
        razon_social: 'Empresa de Prueba S.A.',
        telefono: '(+52) 667-123-4567',
        correo: 'test@example.com'
      }
    };
    
    const result = await sendEmail(
      'service_1234567', // Reemplaza con tu Service ID real
      'template_1234567', // Reemplaza con tu Template ID real
      testParams
    );
    
    console.log('✅ Email de prueba enviado exitosamente:', result);
    showNotification('✅ Prueba de EmailJS exitosa', 'success');
    
    return true;
    
  } catch (error) {
    console.error('❌ Error en la prueba de EmailJS:', error);
    showNotification('❌ Error en la prueba de EmailJS', 'error');
    return false;
  }
}

// Función para probar desde la consola del navegador
export function runEmailJSTest() {
  console.log('🚀 Ejecutando prueba de EmailJS...');
  testEmailJS().then(success => {
    if (success) {
      console.log('🎉 Prueba completada exitosamente');
    } else {
      console.log('💥 Prueba falló');
    }
  });
}

// Hacer la función disponible globalmente
if (typeof window !== 'undefined') {
  (window as any).testEmailJS = runEmailJSTest;
}
