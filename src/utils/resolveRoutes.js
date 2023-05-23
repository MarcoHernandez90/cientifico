const resolveRoutes = (route) => {
  // Si la ruta tiene un total de 3 caractéres o menos, significa que entra
  // dentro de los parámetros para ser considerado un id o la ruta raíz
  if ( route.length <= 3 ) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  // Si no, entonces se le considera una ruta estática como '/about' o
  // '/contact'
  return `/${route}`;
}

export default resolveRoutes;