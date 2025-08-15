# Configuración de EmailJS

## Problema Identificado
Los formularios no se conectan correctamente con EmailJS porque faltan las credenciales reales de EmailJS.

## Solución

### 1. Obtener Credenciales de EmailJS

1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Inicia sesión o crea una cuenta
3. Crea un nuevo servicio de email (Gmail, Outlook, etc.)
4. Crea una nueva plantilla de email
5. Anota los siguientes IDs:
   - **Service ID** (ej: `service_abc123`)
   - **Template ID** (ej: `template_xyz789`)
   - **Public Key** (ya tienes: `9uhWKUO7vI9o1xXgK`)

### 2. Configurar las Credenciales

#### Opción A: Editar archivo de configuración
Edita el archivo `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: '9uhWKUO7vI9o1xXgK', // Ya está configurado
  SERVICE_ID: 'TU_SERVICE_ID_REAL', // Reemplaza aquí
  TEMPLATE_ID: 'TU_TEMPLATE_ID_REAL' // Reemplaza aquí
};
```

#### Opción B: Editar directamente en los formularios
En `src/components/forms/MultipleEmpresarial.astro`:

```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: '9uhWKUO7vI9o1xXgK',
  SERVICE_ID: 'TU_SERVICE_ID_REAL', // Reemplaza aquí
  TEMPLATE_ID: 'TU_TEMPLATE_ID_REAL' // Reemplaza aquí
};
```

En `src/pages/index.astro`:

```javascript
const SERVICE_ID = 'TU_SERVICE_ID_REAL'; // Reemplaza aquí
const TEMPLATE_ID = 'TU_TEMPLATE_ID_REAL'; // Reemplaza aquí
```

### 3. Configurar Plantilla de Email

En tu plantilla de EmailJS, usa estas variables:

#### Para MultipleEmpresarial:
```
Nombre del Agente: {{nombre_agente}}
Fecha: {{fecha}}
Clave ONE COACH: {{clave_one_coach}}
Clave Agente: {{clave_agente}}
Clave Número: {{clave_numero}}
Cotización: {{cotizacion}}
Moneda: {{moneda}}
Fecha Desde: {{fecha_desde}}
Fecha Hasta: {{fecha_hasta}}
Pago Anual: {{pago_anual}}
Pago Semestral: {{pago_semestral}}
Pago Trimestral: {{pago_trimestral}}
Pago Mensual: {{pago_mensual}}
Tipo de Formulario: {{form_type}}
Fecha de Envío: {{submission_date}}
```

#### Para Wizard Form:
```
RFC: {{rfc}}
Razón Social: {{razon_social}}
Teléfono: {{telefono}}
Correo: {{correo}}
CP Riesgo: {{cp_riesgo}}
Calle Riesgo: {{calle_riesgo}}
Número Riesgo: {{numero_riesgo}}
Colonia Riesgo: {{colonia_riesgo}}
Referencias: {{referencias}}
Año Construcción: {{anio_construccion}}
Niveles: {{niveles}}
Uso Inmueble: {{uso_inmueble}}
Tipo Construcción: {{tipo_construccion}}
Suma Edificio: {{suma_edificio}}
Suma Contenidos: {{suma_contenidos}}
Cobertura Extra: {{cobertura_extra}}
Nombre Asegurado: {{nombre_asegurado}}
Fecha Firma: {{fecha_firma}}
Documentos: {{documentos_links}}
```

### 4. Verificar Configuración

1. Abre la consola del navegador (F12)
2. Completa y envía un formulario
3. Deberías ver:
   ```
   ✅ EmailJS inicializado correctamente
   📨 Enviando formulario con EmailJS...
   ✅ EmailJS resultado: {status: 200, text: "OK"}
   ```

### 5. Solución de Problemas

#### Error: "EmailJS no está disponible"
- Verifica que el SDK se cargue correctamente
- Revisa la consola para errores de red

#### Error: "Invalid Service ID"
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo en EmailJS

#### Error: "Invalid Template ID"
- Verifica que el Template ID sea correcto
- Asegúrate de que la plantilla esté publicada

#### Error: "Public Key not found"
- Verifica que la Public Key sea correcta
- Asegúrate de que la cuenta esté verificada

### 6. Ejemplo de Configuración Completa

```typescript
// src/config/emailjs.ts
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: '9uhWKUO7vI9o1xXgK',
  SERVICE_ID: 'service_abc123def', // Tu Service ID real
  TEMPLATE_ID: 'template_xyz789ghi' // Tu Template ID real
};
```

### 7. Prueba de Funcionamiento

1. Configura las credenciales reales
2. Completa un formulario
3. Haz clic en "Enviar"
4. Deberías recibir una notificación de éxito
5. Revisa tu email para confirmar la recepción

### 8. Notas Importantes

- **Nunca** subas las credenciales reales a Git
- Usa variables de entorno en producción
- La Public Key es segura de exponer públicamente
- Los Service ID y Template ID deben mantenerse privados

### 9. Variables de Entorno (Recomendado)

Crea un archivo `.env.local`:

```env
EMAILJS_PUBLIC_KEY=9uhWKUO7vI9o1xXgK
EMAILJS_SERVICE_ID=tu_service_id_real
EMAILJS_TEMPLATE_ID=tu_template_id_real
```

Y úsalo en tu código:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.EMAILJS_PUBLIC_KEY,
  SERVICE_ID: import.meta.env.EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.EMAILJS_TEMPLATE_ID
};
```
