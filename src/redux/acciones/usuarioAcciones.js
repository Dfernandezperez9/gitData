import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const buscarUsuario = createAsyncThunk(
  'usuario/buscar',
  async (nombreUsuario) => {
    const respuesta = await axios.get(`https://api.github.com/users/${nombreUsuario}`);
    return respuesta.data;
  }
);