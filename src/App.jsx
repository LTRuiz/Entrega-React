import './App.css';
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import NavBar from './componentes/NavBar/NavBar';

function App() {
  return (
    <div className='container'>
      <NavBar/>
      <ItemsListContainer greetings='Bienvenido a mi proyecto'/>
    </div>
  );
};

export default App;