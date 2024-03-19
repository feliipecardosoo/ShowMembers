import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import Administracao from './paginas/Administracao/ListarRestaurantes';
import RestaurantesPost from './paginas/Administracao/CadastrarRestaurante';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<Administracao />} />
      <Route path="/admin/restaurantes/post" element={<RestaurantesPost />} />
    </Routes>
  );
}

export default App;
