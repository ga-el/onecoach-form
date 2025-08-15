import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_Txt5FFux_8YMMdwnUTF4fzK6qPpXGqzVh");
const POST = async ({ request }) => {
  console.log("🚀 API /send-email iniciada");
  try {
    const formData = await request.formData();
    const fields = Object.fromEntries(formData.entries());
    console.log("📊 Datos recibidos:", Object.keys(fields).length, "campos");
    console.log("📝 Primeros campos:", Object.keys(fields).slice(0, 5));
    let htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Formulario Múltiple Empresarial</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #002366 0%, #003d82 100%); color: white; padding: 20px; text-align: center; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          .section { margin: 30px 0; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
          .section h2 { color: #002366; border-bottom: 2px solid #002366; padding-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin: 15px 0; }
          th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
          th { background-color: #f8fafc; font-weight: bold; }
          .highlight { background-color: #eff6ff; }
          .files { background-color: #dcfce7; padding: 10px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>📋 Nueva Solicitud de Seguro Múltiple Empresarial</h1>
          <p>Fecha de recepción: ${(/* @__PURE__ */ new Date()).toLocaleString("es-MX")}</p>
        </div>
        <div class="container">
    `;
    const fieldCategories = {
      "Datos Fiscales": ["rfc", "razon_social", "cp", "estado", "telefono", "correo"],
      "Ubicación de Riesgo": ["cp_riesgo", "calle_riesgo", "numero_riesgo", "colonia_riesgo", "entre_calles", "referencias"],
      "Características Constructivas": ["anio_construccion", "niveles", "uso_inmueble", "superficie_terreno", "superficie_construida", "tipo_construccion"],
      "Medidas de Seguridad": ["sistema_extintores", "sistema_hidrantes", "alarma_robo", "alarma_incendio", "vigilancia", "cercado"],
      "Coberturas": ["suma_edificio", "suma_contenidos", "cobertura_explosion", "cobertura_huelgas", "cobertura_terremoto"],
      "Información del Asegurado": ["nombre_asegurado", "fecha_firma"]
    };
    for (const [category, fieldNames] of Object.entries(fieldCategories)) {
      const categoryFields = fieldNames.filter((fieldName) => fields[fieldName] && fields[fieldName].toString().trim() !== "");
      if (categoryFields.length > 0) {
        htmlContent += `
          <div class="section">
            <h2>${category}</h2>
            <table>
        `;
        categoryFields.forEach((fieldName) => {
          const value = fields[fieldName];
          const displayName = fieldName.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
          htmlContent += `
            <tr>
              <td><strong>${displayName}</strong></td>
              <td>${value}</td>
            </tr>
          `;
        });
        htmlContent += `
            </table>
          </div>
        `;
      }
    }
    const categorizedFields = Object.values(fieldCategories).flat();
    const otherFields = Object.entries(fields).filter(
      ([key, value]) => !categorizedFields.includes(key) && !(value instanceof File) && value.toString().trim() !== ""
    );
    if (otherFields.length > 0) {
      htmlContent += `
        <div class="section">
          <h2>Información Adicional</h2>
          <table>
      `;
      otherFields.forEach(([key, value]) => {
        const displayName = key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
        htmlContent += `
          <tr>
            <td><strong>${displayName}</strong></td>
            <td>${value}</td>
          </tr>
        `;
      });
      htmlContent += `
          </table>
        </div>
      `;
    }
    const fileEntries = Array.from(formData.entries()).filter(([, value]) => value instanceof File);
    if (fileEntries.length > 0) {
      htmlContent += `
        <div class="section files">
          <h2>📎 Archivos Adjuntos</h2>
          <ul>
      `;
      fileEntries.forEach(([, file]) => {
        const fileObj = file;
        htmlContent += `<li><strong>${fileObj.name}</strong> (${(fileObj.size / 1024).toFixed(2)} KB)</li>`;
      });
      htmlContent += `
          </ul>
        </div>
      `;
    }
    htmlContent += `
        </div>
        <div style="text-align: center; padding: 20px; background-color: #f8fafc; color: #666;">
          <p>Este email fue generado automáticamente desde el formulario web.</p>
          <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} ONE COACH DAÑOS - Sistema de Solicitudes</p>
        </div>
      </body>
      </html>
    `;
    console.log("📤 Enviando email a gael.madrid.2009@gmail.com");
    console.log("📋 Tamaño del HTML:", htmlContent.length, "caracteres");
    const emailResponse = await resend.emails.send({
      from: "Formularios ONE COACH <onboarding@resend.dev>",
      to: ["gael.madrid.2009@gmail.com"],
      subject: "🏢 Nueva Solicitud - Seguro Múltiple Empresarial",
      html: htmlContent,
      // Agregar headers para mejorar entregabilidad
      headers: {
        "X-Entity-Ref-ID": `form-${Date.now()}`
      },
      // Agregar versión de texto plano como respaldo
      text: `Nueva solicitud de seguro empresarial recibida el ${(/* @__PURE__ */ new Date()).toLocaleString("es-MX")}. Ver detalles en la versión HTML de este email.`
    });
    console.log("✅ Email enviado exitosamente:", emailResponse);
    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
