import './App.css';
import Lifecycle from './components/Contador/Lifecycle';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Contador from './components/Contador/Contador';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div className="container">
      <NavBar />
      <Lifecycle />
      <ItemListContainer greetings="Bienvenido a mi proyecto" />
    </div>
  );
};

export default App;