# EmailJS Template HTML

## Plantilla HTML para EmailJS

Copia este código HTML en tu plantilla de EmailJS en el dashboard:

```html
<table style="width:100%; font-family:Arial, sans-serif; border-collapse:collapse; background-color:#f8fafc; color:#1e293b;">
  <!-- Encabezado -->
  <tr>
    <td style="background:linear-gradient(90deg, #002366, #003d82); padding:20px; text-align:center; color:white;">
      <h1 style="margin:0; font-size:22px;">🏢 Solicitud de Seguro Empresarial</h1>
      <p style="margin:5px 0 0; font-size:14px; opacity:0.9;">Datos enviados desde el formulario web</p>
    </td>
  </tr>

  <!-- Datos Fiscales -->
  <tr>
    <td style="padding:20px;">
      <h2 style="color:#002366; border-bottom:2px solid #002366; padding-bottom:5px;">📄 Datos Fiscales del Cliente</h2>
      <table style="width:100%; border:1px solid #ddd; border-collapse:collapse; margin-top:10px;">
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>RFC:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{rfc}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Razón Social:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{razon_social}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Teléfono:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{telefono}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Correo Electrónico:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{correo}}</td></tr>
      </table>
    </td>
  </tr>

  <!-- Ubicación de Riesgo -->
  <tr>
    <td style="padding:20px;">
      <h2 style="color:#002366; border-bottom:2px solid #002366; padding-bottom:5px;">📍 Ubicación de Riesgo</h2>
      <table style="width:100%; border:1px solid #ddd; border-collapse:collapse; margin-top:10px;">
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>CP:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{cp_riesgo}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Calle:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{calle_riesgo}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Número:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{numero_riesgo}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Colonia:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{colonia_riesgo}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Referencias:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{referencias}}</td></tr>
      </table>
    </td>
  </tr>

  <!-- Características Constructivas -->
  <tr>
    <td style="padding:20px;">
      <h2 style="color:#002366; border-bottom:2px solid #002366; padding-bottom:5px;">🏗️ Características Constructivas</h2>
      <table style="width:100%; border:1px solid #ddd; border-collapse:collapse; margin-top:10px;">
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Año de Construcción:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{anio_construccion}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Niveles:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{niveles}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Uso del Inmueble:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{uso_inmueble}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Tipo de Construcción:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{tipo_construccion}}</td></tr>
      </table>
    </td>
  </tr>

  <!-- Coberturas -->
  <tr>
    <td style="padding:20px;">
      <h2 style="color:#002366; border-bottom:2px solid #002366; padding-bottom:5px;">🛡️ Coberturas</h2>
      <table style="width:100%; border:1px solid #ddd; border-collapse:collapse; margin-top:10px;">
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Edificio:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{suma_edificio}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Contenidos:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{suma_contenidos}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Cobertura Adicional:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{cobertura_extra}}</td></tr>
      </table>
    </td>
  </tr>

  <!-- Datos Finales -->
  <tr>
    <td style="padding:20px;">
      <h2 style="color:#002366; border-bottom:2px solid #002366; padding-bottom:5px;">🖊️ Datos Finales</h2>
      <table style="width:100%; border:1px solid #ddd; border-collapse:collapse; margin-top:10px;">
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Nombre del Asegurado:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{nombre_asegurado}}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Fecha de Solicitud:</strong></td><td style="padding:8px; border:1px solid #ddd;">{{fecha_firma}}</td></tr>
      </table>
    </td>
  </tr>

  <!-- Archivos Adjuntos -->
  <tr>
    <td style="padding:20px;">
      <h2 style="color:#002366; border-bottom:2px solid #002366; padding-bottom:5px;">📎 Documentos Adjuntos</h2>
      <p style="margin-top:10px; font-size:14px; color:#555;">
        {{documentos_links}}
      </p>
    </td>
  </tr>

  <!-- Pie -->
  <tr>
    <td style="background:#f1f5f9; text-align:center; padding:15px; font-size:12px; color:#555;">
      📧 Este mensaje fue generado automáticamente desde el formulario web.<br>
      © {{year}} Múltiple Empresarial - Todos los derechos reservados.
    </td>
  </tr>
</table>
```

## Variables Disponibles

Las siguientes variables están disponibles en la plantilla:

### Datos Fiscales:
- `{{rfc}}` - RFC del cliente
- `{{razon_social}}` - Razón social
- `{{telefono}}` - Teléfono
- `{{correo}}` - Correo electrónico

### Ubicación de Riesgo:
- `{{cp_riesgo}}` - Código postal
- `{{calle_riesgo}}` - Calle
- `{{numero_riesgo}}` - Número
- `{{colonia_riesgo}}` - Colonia
- `{{referencias}}` - Referencias

### Características Constructivas:
- `{{anio_construccion}}` - Año de construcción
- `{{niveles}}` - Número de niveles
- `{{uso_inmueble}}` - Uso del inmueble
- `{{tipo_construccion}}` - Tipo de construcción

### Coberturas:
- `{{suma_edificio}}` - Suma asegurada edificio
- `{{suma_contenidos}}` - Suma asegurada contenidos
- `{{cobertura_extra}}` - Coberturas adicionales

### Datos Finales:
- `{{nombre_asegurado}}` - Nombre del asegurado
- `{{fecha_firma}}` - Fecha de solicitud
- `{{documentos_links}}` - Lista de documentos adjuntos
- `{{year}}` - Año actual

## Configuración en EmailJS Dashboard

1. Ve a https://dashboard.emailjs.com/
2. Selecciona tu servicio: `service_6gnqp8y`
3. Selecciona tu plantilla: `template_2yre1uf`
4. Copia y pega el código HTML anterior
5. Guarda la plantilla

## Prueba de Funcionamiento

Una vez configurado:

1. Completa el formulario en tu sitio web
2. Haz clic en "Enviar"
3. Verifica que recibas el email en `gael.madrid.2009@gmail.com`
4. El email debe tener el formato HTML con todos los datos del formulario
