// Con getHash obtenemos el hash de la url y lo parseamos para obtener
// sólamente el valor y no todas las diagonales y otros símbolos innecesarios,
// y en caso de que no haya un hash, se retorna la raíz de la página
const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;