import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/header';

function App() {
  let imagen = "kqXt7Sq2.png";
  let titulo = "Hamburguesa con Queso";
  let calorias = "289 kcal";
  let description = "Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda";
  return (
    <div className="container">
      <div> <Header/></div>
      <div className="row"></div>
      <div className='col-md-4 offset-md-2'>
        <img src={imagen} alt={titulo} className="img-fluid" />
      </div>
      <div className='col-md-4'>
        <h1>{titulo}</h1>
      <p>{calorias}</p>
      <p>{description}</p>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
