import EtiquetaDuracion from './EtiquetaDuracion.jsx'

function categorizarDuracion(duracion) {
  if (duracion <= 20) {
    return 'Partida rápida'
  } else if (duracion <= 40) {
    return 'Partida media'
  } else {
    return 'Partida larga'
  }
}

const estilosBase = {
  borderLeftWidth: '6px',
  borderLeftStyle: 'solid',
  transition: 'border-color 0.2s ease',
}

function AnadirBiblioteca() {
  // 1. Declarem l'estat i la seva funció d'actualització
  const [guardado, setGuardado] = useState(false);

  // 2. Textos segons l'estat
  const textoAnadir = "📚 Añadir a la biblioteca";
  const textoGuardado = "📚 Guardado en la biblioteca";

  // 3. Funció per canviar l'estat
  const toggleBiblioteca = () => {
    setGuardado(!guardado); // Inverteix el valor actual (true -> false, false -> true)
  };

  // 4. Retornem l'element JSX (el botó)
  return (
    <button onClick={toggleBiblioteca}>
      {guardado ? textoGuardado : textoAnadir}
    </button>
  );
}

function FichaJuego({ juego: { nombre, autoria, jugadores: numeroDeJugadores, duracion = 90, color, editorial } }) {
  const estilos = {
    ...estilosBase,
    color,
    borderLeftColor: color,
  }

  return (
    <article
      className="ficha-juego"
      style={estilos}
      title={`${nombre} — ${numeroDeJugadores} jugadores, ${duracion} min`}
    >
      <h3>{nombre}</h3>
      {autoria && <p>{autoria}</p>}
      <p>{numeroDeJugadores} jugadores · {duracion} min</p>
      <EtiquetaDuracion texto={categorizarDuracion(duracion)} />
      {editorial?.nombre && <p className="editorial">Editado por {editorial.nombre} ({editorial.pais})</p>}

      <button class="etiqueta" onClick={ AnadirBiblioteca()}>📚 Añadir a la biblioteca</button>
      <button class="etiqueta" /*onMouseEnter={}*/>❤️ Añadir a favoritos</button>
    </article>
  )
}

export default FichaJuego