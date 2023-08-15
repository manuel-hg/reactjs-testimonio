import './App.css';
import Testimonio from './components/Testimonio';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='w-100'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        </div>
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='testimonio1'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        <Testimonio 
          nombre='Emma Bostian2'
          pais='Suecia2'
          imagen='testimonio2'
          cargo='Ingeniera de Software2'
          empresa='Spotify2'
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      </div>
    </div>
  );
}

export default App;
