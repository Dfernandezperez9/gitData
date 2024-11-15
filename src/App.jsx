import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buscarUsuario } from './redux/acciones/usuarioAcciones';

function App() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const usuario = useSelector((state) => state.usuario.usuario);
  const cargando = useSelector((state) => state.usuario.cargando);
  const error = useSelector((state) => state.usuario.error);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(buscarUsuario(nombreUsuario));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombreUsuario}
          onChange={(event) => setNombreUsuario(event.target.value)}
          placeholder="Ingrese el nombre de usuario"
        />
        <button type="submit">Buscar</button>
        <button type="reset" onClick={() => location.reload()}>Limpiar</button>
      </form>
      {cargando ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : usuario ? (
        <div>
          <h2>{usuario.name}</h2>
          <p>Nombre de usuario: {usuario.login}</p>
          <p>Seguidores: {usuario.followers}</p>
          <p>Repositorios públicos: {usuario.public_repos}</p>
          <img src={usuario.avatar_url} alt={usuario.name} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
