import getData from "../utils/getData";

const Home = async () => {
  // Obtenemos la información de todos los personajes
  const characters = await getData();
  // Por cada personaje creamos un elemento article con sus datos
  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="Characters-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return view;
}

export default Home;