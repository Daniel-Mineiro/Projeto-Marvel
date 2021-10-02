import './App.css';
import Menu from './views/Menu.js';
import Personagem from './views/Personagem.js';
import Filmes from './views/Filme';
import HQS from './views/hqs'
import {BrowserRouter as Router,Route} from 'react-router-dom' 

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact component={Menu}/>
      <Route path="/personagem" component={Personagem}/>
      <Route path="/filmes" component={Filmes}/>
      <Route path="/hqs" component={HQS}/>
    </div>
    </Router>
  );
}

export default App;
