import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  // Creamos un objeto routes para indicar que elementos debe renderizar la
  // aplicación a acceder a las diferentes rutas
  '/': Home,
  // Con ':' le indicamos a la ruta que el valor de id es dinámico
  '/:id': Character,
  // También se puede indicar directamente el elemento a renderizar
  '/contact': 'Contact',
}

// router es el encargado de manejar las rutas y los elementos indicados para
// mostrarlos obteniendo los valores necesarios desde el navegador
const router = async () => {
  // Primero accedemos a los elementos que queremos modificar dinámicamente
  const header = document.getElementById('header') ?? null;
  const content = document.getElementById('content') ?? null;

  // Luego les asignamos html a través de un await con el elemento que
  // definimos en las pages o templates
  header.innerHTML = await Header();

  // Obtenemos el valor del hash
  let hash = getHash();
  // Resolvemos la ruta a utiliza para ese hash
  let route = await resolveRoutes(hash);
  // Obtenemos el caso de renderizado para esa ruta o el error404 en su defecto
  let render = routes[route] ?? Error404;
  // Renderizamos el elemento
  content.innerHTML = await render();
}

export default router;