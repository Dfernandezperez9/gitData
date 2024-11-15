import { createReducer } from '@reduxjs/toolkit';
import { buscarUsuario } from './acciones/usuarioAcciones';

const initialState = {
  usuario: {},
  error: null,
  cargando: false,
};

const usuarioReducer = createReducer(initialState, (builder) => {
  builder.addCase(buscarUsuario.pending, (state) => {
      state.cargando = true;
    }).addCase(buscarUsuario.rejected, (state, action) => {
      state.error = action.error;
      state.cargando = false;
    }).addCase(buscarUsuario.fulfilled, (state, action) => {
      state.usuario = action.payload;
      state.cargando = false;
    });
});

export default usuarioReducer;