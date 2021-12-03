import './App.css';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';
import Repositorio from './components/Repositorio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Titulo texto="Meu Segundo Projeto React do Zero" />
      <Subtitulo texto="Meus repositórios" />
      <Repositorio/>
      
      
      
  
      </header>
    </div>
  );
}

export default App;