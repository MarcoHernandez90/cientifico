import router from "./routes";

// Se importan las rutas desde la función router y se ejecuta esta misma
// función al cargar el documento (NO al cargar el DOM porque eso viene después)
window.addEventListener('load', router);
window.addEventListener('hashchange', router);