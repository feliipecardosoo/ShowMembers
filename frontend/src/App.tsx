import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import RestaurantesPost from './paginas/Administracao/CadastrarRestaurante';
import PaginaBaseAdmin from './componentes/navBarAdm';
import AdministracaoRestaurantes from './paginas/Administracao/ListarRestaurantes';
import AdministracaoPratos from './paginas/Administracao/ListarPratos';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path="/admin" element={<PaginaBaseAdmin />}>  

        <Route path="pratos" element={<AdministracaoPratos />} />
        <Route path="restaurantes" element={<AdministracaoRestaurantes />} />

        <Route path="restaurantes/:id" element={<RestaurantesPost />} />
        <Route path="restaurantes/post" element={<RestaurantesPost />} />
      </Route>
      
    </Routes>
  );
}

export default App;
