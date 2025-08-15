import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { l as NOOP_MIDDLEWARE_HEADER, n as decodeKey } from './chunks/astro/server_QaOkmb3m.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/why.gxelxzzz/luis%20form/","cacheDir":"file:///home/why.gxelxzzz/luis%20form/node_modules/.astro/","outDir":"file:///home/why.gxelxzzz/luis%20form/dist/","srcDir":"file:///home/why.gxelxzzz/luis%20form/src/","publicDir":"file:///home/why.gxelxzzz/luis%20form/public/","buildClientDir":"file:///home/why.gxelxzzz/luis%20form/dist/","buildServerDir":"file:///home/why.gxelxzzz/luis%20form/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".wpforms-container[data-astro-cid-z45uwmba]{max-width:1000px;margin:2rem auto;font-family:Arial,sans-serif}.wpforms-form[data-astro-cid-z45uwmba]{background:#fff;padding:2rem;box-shadow:0 0 10px #0000001a}.wpforms-head-container[data-astro-cid-z45uwmba]{background:var(--primary, #002366);color:#fff;padding:1rem 2rem;margin:-2rem -2rem 2rem}.wpforms-title[data-astro-cid-z45uwmba]{font-size:1.5rem;font-weight:700;text-transform:uppercase}.form-row[data-astro-cid-z45uwmba]{display:flex;flex-wrap:wrap;gap:1.5rem;margin-bottom:1.5rem}.form-group[data-astro-cid-z45uwmba]{flex:1;min-width:200px}label[data-astro-cid-z45uwmba]{display:block;margin-bottom:.5rem;font-weight:600;font-size:.9rem;color:#333}input[data-astro-cid-z45uwmba][type=text],input[data-astro-cid-z45uwmba][type=date],input[data-astro-cid-z45uwmba][type=email],input[data-astro-cid-z45uwmba][type=tel],select[data-astro-cid-z45uwmba],textarea[data-astro-cid-z45uwmba]{width:100%;padding:.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem}.checkbox-group[data-astro-cid-z45uwmba],.radio-group[data-astro-cid-z45uwmba]{display:flex;flex-wrap:wrap;gap:1rem;margin-top:.5rem}.checkbox-label[data-astro-cid-z45uwmba],.radio-label[data-astro-cid-z45uwmba]{display:flex;align-items:center;gap:.5rem;font-weight:400;cursor:pointer}.section-divider[data-astro-cid-z45uwmba]{padding:1.5rem 0;border-bottom:1px solid #eee;margin-bottom:1.5rem}.section-divider[data-astro-cid-z45uwmba] h3[data-astro-cid-z45uwmba]{color:var(--primary, #002366);margin-bottom:1rem;font-size:1.1rem}.form-actions[data-astro-cid-z45uwmba]{display:flex;justify-content:flex-end;margin-top:2rem}.submit-button[data-astro-cid-z45uwmba]{background:var(--primary, #002366);color:#fff;border:none;padding:.75rem 2rem;border-radius:4px;font-size:1rem;cursor:pointer;transition:background-color .3s}.submit-button[data-astro-cid-z45uwmba]:hover{background:#001a4d}.submit-button[data-astro-cid-z45uwmba]:disabled{background:#ccc;cursor:not-allowed}.notification[data-astro-cid-z45uwmba]{padding:1.5rem 2rem;border-radius:12px;margin-bottom:1rem;color:#fff;font-weight:600;min-width:350px;max-width:500px;box-shadow:0 8px 25px #0003;transform:translate(400px);transition:all .4s cubic-bezier(.4,0,.2,1);border-left:5px solid rgba(255,255,255,.3);font-size:14px;line-height:1.5}.notification[data-astro-cid-z45uwmba].show{transform:translate(0)}.notification-success[data-astro-cid-z45uwmba]{background:linear-gradient(135deg,#10b981,#059669);border-left-color:#34d399}.notification-error[data-astro-cid-z45uwmba]{background:linear-gradient(135deg,#ef4444,#dc2626);border-left-color:#f87171}.notification-warning[data-astro-cid-z45uwmba]{background:linear-gradient(135deg,#f59e0b,#d97706);border-left-color:#fbbf24}.notification-info[data-astro-cid-z45uwmba]{background:linear-gradient(135deg,#3b82f6,#2563eb);border-left-color:#60a5fa}.notification-icon[data-astro-cid-z45uwmba]{display:inline-block;margin-right:10px;font-size:18px}.notification-title[data-astro-cid-z45uwmba]{font-weight:700;margin-bottom:5px;font-size:16px}.notification-message[data-astro-cid-z45uwmba]{opacity:.95;font-weight:500}@media (max-width: 768px){.form-row[data-astro-cid-z45uwmba]{flex-direction:column;gap:1rem}.form-group[data-astro-cid-z45uwmba]{width:100%}.wpforms-container[data-astro-cid-z45uwmba]{padding:0 1rem}}\n:root{--primary: #002366;--secondary: #ffffff;--accent: #e74c3c;--background: #f5f7fa;--text: #2c3e50;--border: #e1e4e8;--shadow: 0 2px 10px rgba(0, 0, 0, .1)}[data-astro-cid-4gfx4ztp]{margin:0;padding:0;box-sizing:border-box}body{font-family:Roboto,sans-serif;line-height:1.6;color:var(--text);background-color:var(--background);padding:0;margin:0}.page-header[data-astro-cid-4gfx4ztp]{background-color:var(--primary);color:#fff;padding:1.5rem 2rem;text-align:center;margin-bottom:2rem;box-shadow:var(--shadow)}.page-title[data-astro-cid-4gfx4ztp]{font-size:2rem;margin-bottom:.5rem}.page-description[data-astro-cid-4gfx4ztp]{opacity:.9;font-weight:300}.container[data-astro-cid-4gfx4ztp]{max-width:1200px;margin:0 auto;padding:0 1.5rem}.forms-grid[data-astro-cid-4gfx4ztp]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem;margin-bottom:3rem}.form-card[data-astro-cid-4gfx4ztp]{background:#fff;border-radius:8px;overflow:hidden;box-shadow:var(--shadow);transition:transform .3s ease,box-shadow .3s ease}.form-card[data-astro-cid-4gfx4ztp]:hover{transform:translateY(-5px);box-shadow:0 10px 20px #00000026}.form-card-header[data-astro-cid-4gfx4ztp]{background:var(--primary);color:#fff;padding:1rem 1.5rem;font-size:1.25rem;font-weight:500}.form-card-body[data-astro-cid-4gfx4ztp]{padding:1.5rem}.form-description[data-astro-cid-4gfx4ztp]{color:#666;margin-bottom:1.5rem;font-size:.95rem}.form-link[data-astro-cid-4gfx4ztp]{display:inline-block;background:var(--primary);color:#fff;text-decoration:none;padding:.75rem 1.5rem;border-radius:4px;font-weight:500;transition:background-color .3s ease}.form-link[data-astro-cid-4gfx4ztp]:hover{background:#001a4d}footer[data-astro-cid-4gfx4ztp]{background:var(--primary);color:#fff;text-align:center;padding:1.5rem;margin-top:3rem;font-size:.9rem}@media (max-width: 768px){.forms-grid[data-astro-cid-4gfx4ztp]{grid-template-columns:1fr}.page-title[data-astro-cid-4gfx4ztp]{font-size:1.75rem}}\n"}],"routeData":{"route":"/all-forms","isIndex":false,"type":"page","pattern":"^\\/all-forms\\/?$","segments":[[{"content":"all-forms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/all-forms.astro","pathname":"/all-forms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/clean-form.rGDjM0Sc.css"}],"routeData":{"route":"/clean-form","isIndex":false,"type":"page","pattern":"^\\/clean-form\\/?$","segments":[[{"content":"clean-form","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/clean-form.astro","pathname":"/clean-form","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".wpforms-container[data-astro-cid-z45uwmba]{max-width:1000px;margin:2rem auto;font-family:Arial,sans-serif}.wpforms-form[data-astro-cid-z45uwmba]{background:#fff;padding:2rem;box-shadow:0 0 10px #0000001a}.wpforms-head-container[data-astro-cid-z45uwmba]{background:var(--primary, #002366);color:#fff;padding:1rem 2rem;margin:-2rem -2rem 2rem}.wpforms-title[data-astro-cid-z45uwmba]{font-size:1.5rem;font-weight:700;text-transform:uppercase}.form-row[data-astro-cid-z45uwmba]{display:flex;flex-wrap:wrap;gap:1.5rem;margin-bottom:1.5rem}.form-group[data-astro-cid-z45uwmba]{flex:1;min-width:200px}label[data-astro-cid-z45uwmba]{display:block;margin-bottom:.5rem;font-weight:600;font-size:.9rem;color:#333}input[data-astro-cid-z45uwmba][type=text],input[data-astro-cid-z45uwmba][type=date],input[data-astro-cid-z45uwmba][type=email],input[data-astro-cid-z45uwmba][type=tel],select[data-astro-cid-z45uwmba],textarea[data-astro-cid-z45uwmba]{width:100%;padding:.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem}.checkbox-group[data-astro-cid-z45uwmba],.radio-group[data-astro-cid-z45uwmba]{display:flex;flex-wrap:wrap;gap:1rem;margin-top:.5rem}.checkbox-label[data-astro-cid-z45uwmba],.radio-label[data-astro-cid-z45uwmba]{display:flex;align-items:center;gap:.5rem;font-weight:400;cursor:pointer}.section-divider[data-astro-cid-z45uwmba]{padding:1.5rem 0;border-bottom:1px solid #eee;margin-bottom:1.5rem}.section-divider[data-astro-cid-z45uwmba] h3[data-astro-cid-z45uwmba]{color:var(--primary, #002366);margin-bottom:1rem;font-size:1.1rem}.form-actions[data-astro-cid-z45uwmba]{display:flex;justify-content:flex-end;margin-top:2rem}.submit-button[data-astro-cid-z45uwmba]{background:var(--primary, #002366);color:#fff;border:none;padding:.75rem 2rem;border-radius:4px;font-size:1rem;cursor:pointer;transition:background-color .3s}.submit-button[data-astro-cid-z45uwmba]:hover{background:#001a4d}.submit-button[data-astro-cid-z45uwmba]:disabled{background:#ccc;cursor:not-allowed}.notification[data-astro-cid-z45uwmba]{padding:1.5rem 2rem;border-radius:12px;margin-bottom:1rem;color:#fff;font-weight:600;min-width:350px;max-width:500px;box-shadow:0 8px 25px #0003;transform:translate(400px);transition:all .4s cubic-bezier(.4,0,.2,1);border-left:5px solid rgba(255,255,255,.3);font-size:14px;line-height:1.5}.notification[data-astro-cid-z45uwmba].show{transform:translate(0)}.notification-success[data-astro-cid-z45uwmba]{background:linear-gradient(135deg,#10b981,#059669);border-left-color:#34d399}.notification-error[data-astro-cid-z45uwmba]{background:linear-gradient(135deg,#ef4444,#dc2626);border-left-color:#f87171}.notification-warning[data-astro-cid-z45uwmba]{background:linear-gradient(135deg,#f59e0b,#d97706);border-left-color:#fbbf24}.notification-info[data-astro-cid-z45uwmba]{background:linear-gradient(135deg,#3b82f6,#2563eb);border-left-color:#60a5fa}.notification-icon[data-astro-cid-z45uwmba]{display:inline-block;margin-right:10px;font-size:18px}.notification-title[data-astro-cid-z45uwmba]{font-weight:700;margin-bottom:5px;font-size:16px}.notification-message[data-astro-cid-z45uwmba]{opacity:.95;font-weight:500}@media (max-width: 768px){.form-row[data-astro-cid-z45uwmba]{flex-direction:column;gap:1rem}.form-group[data-astro-cid-z45uwmba]{width:100%}.wpforms-container[data-astro-cid-z45uwmba]{padding:0 1rem}}\n"},{"type":"external","src":"/_astro/index.Wg7xM16o.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/why.gxelxzzz/luis form/src/pages/all-forms.astro",{"propagation":"none","containsHead":true}],["/home/why.gxelxzzz/luis form/src/pages/clean-form.astro",{"propagation":"none","containsHead":true}],["/home/why.gxelxzzz/luis form/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/all-forms@_@astro":"pages/all-forms.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/clean-form@_@astro":"pages/clean-form.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BQgJf4fr.mjs","/home/why.gxelxzzz/luis form/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","/home/why.gxelxzzz/luis form/src/pages/clean-form.astro?astro&type=script&index=1&lang.ts":"_astro/clean-form.astro_astro_type_script_index_1_lang.w45Pi1Xg.js","/home/why.gxelxzzz/luis form/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CEILCzZx.js","/home/why.gxelxzzz/luis form/src/pages/index.astro?astro&type=script&index=1&lang.ts":"_astro/index.astro_astro_type_script_index_1_lang.DKcxv6KB.js","/home/why.gxelxzzz/luis form/src/pages/clean-form.astro?astro&type=script&index=0&lang.ts":"_astro/clean-form.astro_astro_type_script_index_0_lang.1TP1ymYl.js","/home/why.gxelxzzz/luis form/src/components/forms/MultipleEmpresarial.astro?astro&type=script&index=0&lang.ts":"_astro/MultipleEmpresarial.astro_astro_type_script_index_0_lang.6tgi9e10.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/why.gxelxzzz/luis form/src/pages/index.astro?astro&type=script&index=1&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{let e=1;const d=6;document.getElementById(\"wizard-form\");const l=Array.from(document.querySelectorAll(\".form-step\")),i=Array.from(document.querySelectorAll(\".nav-step\")),m=document.getElementById(\"progress-fill\"),p=document.getElementById(\"progress-percent\"),f=document.getElementById(\"current-section-name\");document.querySelector(\".theme-toggle\");const c=document.getElementById(\"theme-icon\");window.nextStep=function(){g(e)&&e<d&&(e++,goToStep(e))},window.prevStep=function(){e>1&&(e--,goToStep(e))},window.goToStep=function(o){e=o,l.forEach(t=>t.classList.remove(\"active\")),i.forEach(t=>t.classList.remove(\"active\")),document.getElementById(`step-${e}`).classList.add(\"active\"),document.querySelector(`.nav-step[data-step=\"${e}\"]`).classList.add(\"active\"),i.forEach((t,r)=>{r<e-1?t.classList.add(\"completed\"):t.classList.remove(\"completed\")}),a()};function g(o){const s=l[o-1],t=s.querySelectorAll(\"input[required], select[required], textarea[required]\");let r=!0;s.querySelectorAll(\".field-group\").forEach(n=>{n.classList.remove(\"has-error\")});for(const n of t)if(!n.checkValidity()){r=!1;const u=n.closest(\".field-group, .option-group\");u&&u.classList.add(\"has-error\")}return r}function a(){const o=(e-1)/(d-1)*100;m.style.width=`${o}%`,p.textContent=Math.round(o),f.textContent=document.querySelector(`.nav-step[data-step=\"${e}\"] .step-title`).textContent}window.toggleTheme=function(){document.body.classList.toggle(\"dark-theme\"),document.body.classList.contains(\"dark-theme\")?(c.textContent=\"☀️\",localStorage.setItem(\"theme\",\"dark\")):(c.textContent=\"🌙\",localStorage.setItem(\"theme\",\"light\"))},localStorage.getItem(\"theme\")===\"dark\"&&(document.body.classList.add(\"dark-theme\"),c.textContent=\"☀️\"),window.toggleRiskAddress=function(o){const s=document.getElementById(\"risk-address-fields\"),t=s.querySelectorAll(\"input, select\");o.checked?(s.style.display=\"none\",t.forEach(r=>r.removeAttribute(\"required\"))):(s.style.display=\"block\",t.forEach(r=>{r.setAttribute(\"required\",\"required\")}))},a()});"],["/home/why.gxelxzzz/luis form/src/components/forms/MultipleEmpresarial.astro?astro&type=script&index=0&lang.ts","const c={PUBLIC_KEY:\"9uhWKUO7vI9o1xXgK\",SERVICE_ID:\"service_6gnqp8y\",TEMPLATE_ID:\"template_2yre1uf\"};function s(n,t=\"info\",a=6e3){const o=document.getElementById(\"notification-container\");if(!o){console.error(\"❌ No se encontró el contenedor de notificaciones\");return}const e=document.createElement(\"div\");e.className=`notification notification-${t}`;const i={success:\"✅\",error:\"❌\",warning:\"⚠️\",info:\"ℹ️\"};e.innerHTML=`\n      <div class=\"notification-icon\">${i[t]||i.info}</div>\n      <div class=\"notification-content\">\n        <div class=\"notification-title\">${g(t)}</div>\n        <div class=\"notification-message\">${n}</div>\n      </div>\n    `,o.appendChild(e),setTimeout(()=>{e.classList.add(\"show\")},10),setTimeout(()=>{e.classList.remove(\"show\"),setTimeout(()=>{e.parentElement&&e.remove()},400)},a)}function g(n){const t={success:\"¡Éxito!\",error:\"Error\",warning:\"Advertencia\",info:\"Información\"};return t[n]||t.info}function u(){return new Promise((n,t)=>{if(window.emailjs){n(window.emailjs);return}const a=document.createElement(\"script\");a.src=\"https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js\",a.async=!0,a.onload=()=>{try{window.emailjs.init(c.PUBLIC_KEY),console.log(\"✅ EmailJS inicializado correctamente\"),n(window.emailjs)}catch(o){console.error(\"❌ Error al inicializar EmailJS:\",o),t(o)}},a.onerror=()=>{t(new Error(\"No se pudo cargar EmailJS SDK\"))},document.head.appendChild(a)})}async function E(n){n.preventDefault();const t=document.getElementById(\"submit-btn\");if(!t){console.error(\"❌ No se encontró el botón de envío\");return}const a=t.textContent;try{t.textContent=\"Enviando...\",t.disabled=!0,await u();const o=n.target,e=new FormData(o),i=[\"nombre_agente\",\"cotizacion\",\"moneda\",\"fecha_desde\",\"fecha_hasta\"],l=[];if(i.forEach(m=>{const r=e.get(m);(!r||Array.isArray(r)&&r.length===0)&&l.push(m)}),l.length>0){s(\"❌ Por favor completa todos los campos requeridos\",\"error\");return}const d={nombre_agente:e.get(\"nombre_agente\"),fecha:e.get(\"fecha\"),clave_one_coach:e.getAll(\"clave[]\").includes(\"CLAVE ONE COACH\")?\"Sí\":\"No\",clave_agente:e.getAll(\"clave[]\").includes(\"CLAVE AGENTE\")?\"Sí\":\"No\",clave_numero:e.get(\"clave_numero\"),cotizacion:e.get(\"cotizacion\"),moneda:e.get(\"moneda\"),fecha_desde:e.get(\"fecha_desde\"),fecha_hasta:e.get(\"fecha_hasta\"),pago_anual:e.getAll(\"pago[]\").includes(\"ANUAL\")?\"Sí\":\"No\",pago_semestral:e.getAll(\"pago[]\").includes(\"SEMESTRAL\")?\"Sí\":\"No\",pago_trimestral:e.getAll(\"pago[]\").includes(\"TRIMESTRAL\")?\"Sí\":\"No\",pago_mensual:e.getAll(\"pago[]\").includes(\"MENSUAL\")?\"Sí\":\"No\",form_type:\"MULTIPLE EMPRESARIAL\",submission_date:new Date().toLocaleString(\"es-MX\"),year:new Date().getFullYear()};console.log(\"📨 Enviando formulario con EmailJS...\",d);const f=await window.emailjs.send(c.SERVICE_ID,c.TEMPLATE_ID,d);console.log(\"✅ EmailJS resultado:\",f),s(\"¡Formulario enviado exitosamente! Se ha enviado una copia a gael.madrid.2009@gmail.com. Revisa tu correo (incluyendo spam) para confirmar la recepción.\",\"success\"),t.textContent=\"✅ Enviado Exitosamente\",t.style.background=\"linear-gradient(135deg, #10b981 0%, #059669 100%)\",setTimeout(()=>{o.reset(),t.textContent=a,t.disabled=!1,t.style.background=\"\"},3e3)}catch(o){console.error(\"❌ Error al enviar formulario:\",o);let e=\"No se pudo enviar el formulario\";o&&typeof o==\"object\"&&(\"text\"in o?e=String(o.text):\"message\"in o&&(e=String(o.message))),s(`No se pudo enviar el formulario. Error: ${e}. Por favor, verifica tu conexión a internet e intenta nuevamente. Si el problema persiste, contacta al soporte técnico.`,\"error\"),t.textContent=a,t.disabled=!1}}document.addEventListener(\"DOMContentLoaded\",function(){const n=document.getElementById(\"fecha-desde\"),t=document.getElementById(\"fecha-hasta\");if(n&&!n.value){const o=new Date;n.valueAsDate=o;const e=new Date(o);e.setFullYear(o.getFullYear()+1),t.valueAsDate=e}const a=document.getElementById(\"multiple-empresarial-form\");a&&a.addEventListener(\"submit\",E),u().catch(o=>{console.warn(\"⚠️ EmailJS no se pudo cargar previamente:\",o)})});"]],"assets":["/_astro/clean-form.rGDjM0Sc.css","/_astro/index.Wg7xM16o.css","/favicon.svg","/_astro/clean-form.astro_astro_type_script_index_0_lang.1TP1ymYl.js","/_astro/clean-form.astro_astro_type_script_index_1_lang.w45Pi1Xg.js","/_astro/index.astro_astro_type_script_index_0_lang.CEILCzZx.js","/img/logo.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"+RwRb02anB/3qbLv6xSTlSwZA405IqBTkUT0qBqAbw8=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
