import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import Administracao from './paginas/Administracao/ListarRestaurantes';
import RestaurantesPost from './paginas/Administracao/CadastrarRestaurante';
import PaginaBaseAdmin from './componentes/navBarAdm';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path="/admin" element={<PaginaBaseAdmin />}>  
        <Route path="restaurantes" element={<Administracao />} />
        <Route path="restaurantes/:id" element={<RestaurantesPost />} />
        <Route path="restaurantes/post" element={<RestaurantesPost />} />
      </Route>
      
    </Routes>
  );
}

export default App;
