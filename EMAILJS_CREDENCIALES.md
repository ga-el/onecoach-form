# Credenciales EmailJS Actualizadas

## Tus Credenciales:
- **Public Key:** `9uhWKUO7vI9o1xXgK`
- **Private Key:** `IoS2aWSvRTxSFlsL93ezz`
- **Email de destino:** `gael.madrid.2009@gmail.com`

## Configuración en el Código:

### 1. Actualizar src/config/emailjs.ts:
```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: '9uhWKUO7vI9o1xXgK',
  SERVICE_ID: 'TU_SERVICE_ID_REAL', // Obtén esto del dashboard
  TEMPLATE_ID: 'TU_TEMPLATE_ID_REAL' // Obtén esto del dashboard
};
```

### 2. Actualizar src/components/forms/MultipleEmpresarial.astro:
```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: '9uhWKUO7vI9o1xXgK',
  SERVICE_ID: 'TU_SERVICE_ID_REAL', // Obtén esto del dashboard
  TEMPLATE_ID: 'TU_TEMPLATE_ID_REAL' // Obtén esto del dashboard
};
```

## Código HTML para la Plantilla de EmailJS:

### Plantilla para MultipleEmpresarial:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Formulario Multiple Empresarial</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #002366 0%, #003d82 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 30px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .section {
            margin-bottom: 25px;
            padding: 20px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background: #fafafa;
        }
        .section h3 {
            color: #002366;
            margin-top: 0;
            border-bottom: 2px solid #002366;
            padding-bottom: 10px;
        }
        .field {
            margin-bottom: 15px;
        }
        .field-label {
            font-weight: bold;
            color: #555;
            display: block;
            margin-bottom: 5px;
        }
        .field-value {
            background: white;
            padding: 10px;
            border-radius: 5px;
            border-left: 4px solid #002366;
        }
        .checkbox-list {
            list-style: none;
            padding: 0;
        }
        .checkbox-list li {
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }
        .checkbox-list li:before {
            content: "✓ ";
            color: #10b981;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            border-top: 3px solid #002366;
        }
        .timestamp {
            color: #666;
            font-size: 14px;
        }
        .highlight {
            background: #fff3cd;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #ffc107;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📋 NUEVO FORMULARIO MULTIPLE EMPRESARIAL</h1>
            <p>Se ha recibido una nueva solicitud de cotización</p>
        </div>

        <div class="highlight">
            <strong>📧 Email de destino:</strong> gael.madrid.2009@gmail.com<br>
            <strong>📅 Fecha de envío:</strong> {{submission_date}}<br>
            <strong>🏢 Tipo de formulario:</strong> {{form_type}}
        </div>

        <!-- Información del Agente -->
        <div class="section">
            <h3>👤 Información del Agente</h3>
            <div class="field">
                <span class="field-label">Nombre del Agente:</span>
                <div class="field-value">{{nombre_agente}}</div>
            </div>
            <div class="field">
                <span class="field-label">Fecha de Solicitud:</span>
                <div class="field-value">{{fecha}}</div>
            </div>
        </div>

        <!-- Información de Clave -->
        <div class="section">
            <h3>🔑 Información de Clave</h3>
            <div class="field">
                <span class="field-label">Clave ONE COACH:</span>
                <div class="field-value">{{clave_one_coach}}</div>
            </div>
            <div class="field">
                <span class="field-label">Clave Agente:</span>
                <div class="field-value">{{clave_agente}}</div>
            </div>
            <div class="field">
                <span class="field-label">Número de Clave:</span>
                <div class="field-value">{{clave_numero || 'No especificado'}}</div>
            </div>
        </div>

        <!-- Cotización -->
        <div class="section">
            <h3>💰 Cotización</h3>
            <div class="field">
                <span class="field-label">Solicitud de Cotización:</span>
                <div class="field-value">{{cotizacion}}</div>
            </div>
        </div>

        <!-- Moneda y Vigencia -->
        <div class="section">
            <h3>💱 Moneda y Vigencia</h3>
            <div class="field">
                <span class="field-label">Moneda:</span>
                <div class="field-value">{{moneda}}</div>
            </div>
            <div class="field">
                <span class="field-label">Vigencia Desde:</span>
                <div class="field-value">{{fecha_desde}}</div>
            </div>
            <div class="field">
                <span class="field-label">Vigencia Hasta:</span>
                <div class="field-value">{{fecha_hasta}}</div>
            </div>
        </div>

        <!-- Forma de Pago -->
        <div class="section">
            <h3>💳 Forma de Pago</h3>
            <ul class="checkbox-list">
                <li>Pago Anual: {{pago_anual}}</li>
                <li>Pago Semestral: {{pago_semestral}}</li>
                <li>Pago Trimestral: {{pago_trimestral}}</li>
                <li>Pago Mensual: {{pago_mensual}}</li>
            </ul>
        </div>

        <div class="footer">
            <p><strong>ONE COACH DAÑOS</strong></p>
            <p>📞 (+52) 667-236-1545</p>
            <p class="timestamp">Este email fue generado automáticamente el {{submission_date}}</p>
        </div>
    </div>
</body>
</html>
```

### Plantilla para Wizard Form:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Formulario de Seguro Empresarial</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 700px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #002366 0%, #003d82 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 30px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .section {
            margin-bottom: 25px;
            padding: 20px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background: #fafafa;
        }
        .section h3 {
            color: #002366;
            margin-top: 0;
            border-bottom: 2px solid #002366;
            padding-bottom: 10px;
        }
        .field {
            margin-bottom: 15px;
        }
        .field-label {
            font-weight: bold;
            color: #555;
            display: block;
            margin-bottom: 5px;
        }
        .field-value {
            background: white;
            padding: 10px;
            border-radius: 5px;
            border-left: 4px solid #002366;
        }
        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        .highlight {
            background: #fff3cd;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #ffc107;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            border-top: 3px solid #002366;
        }
        .timestamp {
            color: #666;
            font-size: 14px;
        }
        .coverage-list {
            background: #e8f5e8;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #10b981;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏢 NUEVO FORMULARIO DE SEGURO EMPRESARIAL</h1>
            <p>Se ha recibido una nueva solicitud de seguro</p>
        </div>

        <div class="highlight">
            <strong>📧 Email de destino:</strong> gael.madrid.2009@gmail.com<br>
            <strong>📅 Fecha de envío:</strong> {{submission_date}}<br>
            <strong>🏢 Tipo de formulario:</strong> {{form_type}}
        </div>

        <!-- Datos Fiscales -->
        <div class="section">
            <h3>📋 Datos Fiscales del Cliente</h3>
            <div class="grid-2">
                <div class="field">
                    <span class="field-label">RFC:</span>
                    <div class="field-value">{{rfc}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Razón Social:</span>
                    <div class="field-value">{{razon_social}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Teléfono:</span>
                    <div class="field-value">{{telefono}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Correo Electrónico:</span>
                    <div class="field-value">{{correo}}</div>
                </div>
            </div>
        </div>

        <!-- Ubicación de Riesgo -->
        <div class="section">
            <h3>📍 Ubicación del Domicilio de Riesgo</h3>
            <div class="grid-2">
                <div class="field">
                    <span class="field-label">Código Postal:</span>
                    <div class="field-value">{{cp_riesgo}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Calle:</span>
                    <div class="field-value">{{calle_riesgo}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Número:</span>
                    <div class="field-value">{{numero_riesgo}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Colonia:</span>
                    <div class="field-value">{{colonia_riesgo}}</div>
                </div>
            </div>
            <div class="field">
                <span class="field-label">Referencias:</span>
                <div class="field-value">{{referencias || 'No especificadas'}}</div>
            </div>
        </div>

        <!-- Características Constructivas -->
        <div class="section">
            <h3>🏗️ Características Constructivas</h3>
            <div class="grid-2">
                <div class="field">
                    <span class="field-label">Año de Construcción:</span>
                    <div class="field-value">{{anio_construccion}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Número de Niveles:</span>
                    <div class="field-value">{{niveles || 'No especificado'}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Uso del Inmueble:</span>
                    <div class="field-value">{{uso_inmueble}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Tipo de Construcción:</span>
                    <div class="field-value">{{tipo_construccion}}</div>
                </div>
            </div>
        </div>

        <!-- Coberturas -->
        <div class="section">
            <h3>🛡️ Coberturas de Seguro</h3>
            <div class="grid-2">
                <div class="field">
                    <span class="field-label">Suma Asegurada - Edificio:</span>
                    <div class="field-value">{{suma_edificio || 'No especificada'}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Suma Asegurada - Contenidos:</span>
                    <div class="field-value">{{suma_contenidos || 'No especificada'}}</div>
                </div>
            </div>
            <div class="field">
                <span class="field-label">Coberturas Adicionales:</span>
                <div class="coverage-list">{{cobertura_extra}}</div>
            </div>
        </div>

        <!-- Datos Finales -->
        <div class="section">
            <h3>✍️ Datos Finales</h3>
            <div class="grid-2">
                <div class="field">
                    <span class="field-label">Nombre del Asegurado:</span>
                    <div class="field-value">{{nombre_asegurado}}</div>
                </div>
                <div class="field">
                    <span class="field-label">Fecha de Solicitud:</span>
                    <div class="field-value">{{fecha_firma}}</div>
                </div>
            </div>
            <div class="field">
                <span class="field-label">Documentos Adjuntos:</span>
                <div class="field-value">{{documentos_links}}</div>
            </div>
        </div>

        <div class="footer">
            <p><strong>ONE COACH DAÑOS</strong></p>
            <p>📞 (+52) 667-236-1545</p>
            <p class="timestamp">Este email fue generado automáticamente el {{submission_date}}</p>
        </div>
    </div>
</body>
</html>
```

## Pasos para Configurar:

1. **Ve a EmailJS Dashboard:** https://dashboard.emailjs.com/
2. **Crea un nuevo servicio** (Gmail, Outlook, etc.)
3. **Crea una nueva plantilla** y copia el código HTML correspondiente
4. **Anota el Service ID y Template ID** que te proporciona EmailJS
5. **Actualiza el código** con esos IDs

## Para Probar:

1. Abre la consola del navegador (F12)
2. Ejecuta: `testEmailJS()`
3. Completa un formulario y haz clic en "Enviar"

¿Necesitas ayuda con algún paso específico?
