import { c as createComponent, i as renderHead, f as addAttribute, k as renderScript, r as renderTemplate } from '../chunks/astro/server_QaOkmb3m.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$CleanForm = createComponent(($$result, $$props, $$slots) => {
  const formConfig = {
    title: "M\xDALTIPLE EMPRESARIAL - ONE COACH DA\xD1OS",
    logo: "/images/logo-one-coach.png"};
  return renderTemplate`<html lang="es" data-astro-cid-qsw7yq4j> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${formConfig.title}</title><meta name="description" content="Formulario de solicitud múltiple empresarial para ONE COACH DAÑOS"><!-- Bootstrap CSS --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"><!-- Font Awesome --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderHead()}</head> <body data-astro-cid-qsw7yq4j> <div class="form-container" data-astro-cid-qsw7yq4j> <header class="form-header" data-astro-cid-qsw7yq4j> <img${addAttribute(formConfig.logo, "src")} alt="ONE COACH DAÑOS" class="logo" data-astro-cid-qsw7yq4j> <h1 class="form-title" data-astro-cid-qsw7yq4j>MÚLTIPLE EMPRESARIAL</h1> </header> <form id="solicitudForm" class="form-body" data-astro-cid-qsw7yq4j> <section class="form-section" data-astro-cid-qsw7yq4j> <h2 class="section-title" data-astro-cid-qsw7yq4j>DATOS GENERALES</h2> <div class="form-row" data-astro-cid-qsw7yq4j> <div class="form-group" data-astro-cid-qsw7yq4j> <label for="nombreAgente" class="required" data-astro-cid-qsw7yq4j>NOMBRE DEL AGENTE</label> <input type="text" id="nombreAgente" name="nombreAgente" required data-astro-cid-qsw7yq4j> </div> <div class="form-group" data-astro-cid-qsw7yq4j> <label for="fecha" data-astro-cid-qsw7yq4j>FECHA</label> <input type="date" id="fecha" name="fecha" data-astro-cid-qsw7yq4j> </div> </div> <div class="form-row" data-astro-cid-qsw7yq4j> <div class="form-group" data-astro-cid-qsw7yq4j> <label for="tipoSolicitud" data-astro-cid-qsw7yq4j>TIPO DE SOLICITUD</label> <select id="tipoSolicitud" name="tipoSolicitud" data-astro-cid-qsw7yq4j> <option value="" data-astro-cid-qsw7yq4j>Seleccione una opción</option> <option value="nueva" data-astro-cid-qsw7yq4j>Nueva</option> <option value="renovacion" data-astro-cid-qsw7yq4j>Renovación</option> <option value="cambio" data-astro-cid-qsw7yq4j>Cambio</option> </select> </div> <div class="form-group" data-astro-cid-qsw7yq4j> <label for="prioridad" data-astro-cid-qsw7yq4j>PRIORIDAD</label> <select id="prioridad" name="prioridad" data-astro-cid-qsw7yq4j> <option value="baja" data-astro-cid-qsw7yq4j>Baja</option> <option value="media" selected data-astro-cid-qsw7yq4j>Media</option> <option value="alta" data-astro-cid-qsw7yq4j>Alta</option> </select> </div> </div> </section> <section class="form-section" data-astro-cid-qsw7yq4j> <div class="company-header" data-astro-cid-qsw7yq4j> <h2 class="section-title" data-astro-cid-qsw7yq4j>EMPRESAS</h2> <button type="button" id="btnAgregarEmpresa" class="btn btn-primary" data-astro-cid-qsw7yq4j> <i class="fas fa-plus" data-astro-cid-qsw7yq4j></i> Agregar Empresa
</button> </div> <div id="empresasContainer" data-astro-cid-qsw7yq4j> <!-- Las empresas se agregarán aquí dinámicamente --> </div> </section> <section class="form-section" data-astro-cid-qsw7yq4j> <h2 class="section-title" data-astro-cid-qsw7yq4j>COMENTARIOS ADICIONALES</h2> <div class="form-group" data-astro-cid-qsw7yq4j> <textarea id="comentariosAdicionales" name="comentariosAdicionales" rows="4" placeholder="Escriba aquí cualquier comentario adicional..." data-astro-cid-qsw7yq4j></textarea> </div> </section> <footer class="form-footer" data-astro-cid-qsw7yq4j> <div class="form-note" data-astro-cid-qsw7yq4j> <i class="fas fa-info-circle" data-astro-cid-qsw7yq4j></i> Los campos marcados con * son obligatorios
</div> <div class="form-actions" data-astro-cid-qsw7yq4j> <button type="button" id="btnLimpiar" class="btn btn-secondary" data-astro-cid-qsw7yq4j> <i class="fas fa-eraser" data-astro-cid-qsw7yq4j></i> Limpiar Formulario
</button> <button type="submit" class="btn btn-primary" data-astro-cid-qsw7yq4j> <i class="fas fa-paper-plane" data-astro-cid-qsw7yq4j></i> Enviar Solicitud
</button> </div> </footer> </form> </div> <!-- Bootstrap JS Bundle with Popper --> ${renderScript($$result, "/home/why.gxelxzzz/luis form/src/pages/clean-form.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/home/why.gxelxzzz/luis form/src/pages/clean-form.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/home/why.gxelxzzz/luis form/src/pages/clean-form.astro", void 0);

const $$file = "/home/why.gxelxzzz/luis form/src/pages/clean-form.astro";
const $$url = "/clean-form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CleanForm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
