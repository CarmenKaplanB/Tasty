import logo from './logo.svg';
import './App.css';
import './server.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const container = document.querySelector(".container")
const cakes = [
  { name: "Pastel Chocolate.", descrip:"El pastel de chocolate, es un postre conocido internacionalmente, que se popularizó a finales del siglo XIX...", image: "https://i.pinimg.com/736x/7b/68/2d/7b682ddd11feedd48288c69aa8494cc4.jpg" },
  { name: "Pastel rosa.", descrip:"La decoración es una mezcla peculiar con elementos modenosby minimalistas, pero con un toque tradicional, por aquello...", image: "https://i.pinimg.com/originals/f8/86/57/f886572ebae96dcc8d2ee0f3dba04654.jpg" },
  { name: "Pastel tradicional.", descrip:"La calidad de los ingredientes que ocupamos para preparar un pastel determina también la calidad...", image: "https://i.pinimg.com/736x/cf/b8/a2/cfb8a2be02d9a829089a5b60ffd27b86.jpg" },
  { name: "Pastel de Merengue.", descrip:"Los deliciosos pasteles de merengue se caracterizan por tener una...", image: "https://i.pinimg.com/originals/24/d1/5f/24d15fc2edafcf1daa02ed02b44cc206.jpg" },
  { name: "Pastel Angel.", descrip:"Consiguió su nombre gracias a que tiene una textura aireada y suave...", image: "https://thumbs.dreamstime.com/b/pastel-rosa-tierno-decorado-con-macarons-de-chocolate-blanco-fundido-merengues-pasteles-y-caramelos-fondo-plano-tarta-decorada-182804971.jpg" },
  { name: "Pastel Malvado.", descrip:"Elegancia y el color rojizo que lo caracteriza, tiene un sabor inigualable...", image: "https://i.pinimg.com/736x/75/af/49/75af49f20bf95a9f6ef6e959b07e8641.jpg" },
]

const showCakes = () => {
  let output = ""
  cakes.forEach(
    ({ name, descrip, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h2 class="card--title">${name}</h2>
                <p class="card--title">${descrip}</p>
                <button class="button is-light">Comprar</button>
                <button class="button is-light is-link">Ver detalles</button>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCakes)
export default App;
