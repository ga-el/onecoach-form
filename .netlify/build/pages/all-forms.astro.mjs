import { c as createComponent, f as addAttribute, i as renderHead, j as renderComponent, r as renderTemplate } from '../chunks/astro/server_QaOkmb3m.mjs';
import 'kleur/colors';
import { $ as $$MultipleEmpresarial } from '../chunks/MultipleEmpresarial_DNI4SnGn.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$AllForms = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Formularios Consolidados";
  const pageDescription = "Todos los formularios en una sola p\xE1gina";
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`<html lang="es" data-astro-cid-4gfx4ztp> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageTitle}</title><meta name="description"${addAttribute(pageDescription, "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Google Fonts --><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-4gfx4ztp> <header class="page-header" data-astro-cid-4gfx4ztp> <h1 class="page-title" data-astro-cid-4gfx4ztp>${pageTitle}</h1> <p class="page-description" data-astro-cid-4gfx4ztp>${pageDescription}</p> </header> <main class="container" data-astro-cid-4gfx4ztp> <div class="forms-grid" data-astro-cid-4gfx4ztp> <!-- Multiple Empresarial Form --> <article class="form-card" data-astro-cid-4gfx4ztp> <div class="form-card-header" data-astro-cid-4gfx4ztp>MULTIPLE EMPRESARIAL</div> <div class="form-card-body" data-astro-cid-4gfx4ztp> ${renderComponent($$result, "MultipleEmpresarial", $$MultipleEmpresarial, { "data-astro-cid-4gfx4ztp": true })} </div> </article> <!-- Clean Form --> <article class="form-card" data-astro-cid-4gfx4ztp> <div class="form-card-header" data-astro-cid-4gfx4ztp>Formulario Limpio</div> <div class="form-card-body" data-astro-cid-4gfx4ztp> <p class="form-description" data-astro-cid-4gfx4ztp>Versión limpia del formulario con validación mejorada.</p> <a href="/clean-form" class="form-link" data-astro-cid-4gfx4ztp>Ver formulario completo</a> </div> </article> <!-- Original Form --> <article class="form-card" data-astro-cid-4gfx4ztp> <div class="form-card-header" data-astro-cid-4gfx4ztp>Formulario Original</div> <div class="form-card-body" data-astro-cid-4gfx4ztp> <p class="form-description" data-astro-cid-4gfx4ztp>Versión original del formulario.</p> <a href="/" class="form-link" data-astro-cid-4gfx4ztp>Ver formulario original</a> </div> </article> </div> </main> <footer data-astro-cid-4gfx4ztp> <p data-astro-cid-4gfx4ztp>&copy; ${currentYear} ONE COACH DAÑOS. Todos los derechos reservados.</p> </footer> </body></html>`;
}, "/home/why.gxelxzzz/luis form/src/pages/all-forms.astro", void 0);

const $$file = "/home/why.gxelxzzz/luis form/src/pages/all-forms.astro";
const $$url = "/all-forms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AllForms,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
