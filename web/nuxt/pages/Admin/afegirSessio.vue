<!-- 
Ruta de desplegament: https://tr3cine.a17danvicfer.daw.inspedralbes.cat/laravel/public
Ruta Local: http://localhost:8000
-->

<template>
  <div>
    <div class="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h1 class="text-2xl font-bold mb-4">Selecció de Pelicula</h1>
      <select
        v-model="selectedPelicula"
        class="w-full border rounded py-2 px-3 mb-4 text-gray-700"
      >
        <option value="">Seleccioneu una pel·lícula</option>
        <option v-for="pelicula in pelicules" :key="pelicula.id" :value="pelicula.id">
          {{ pelicula.títol }}
        </option>
      </select>

      <h1 class="text-2xl font-bold mb-2">Data</h1>
      <input
        type="date"
        v-model="selectedDate"
        class="w-full border rounded py-2 px-3 mb-4 text-gray-700"
      />

      <h1 class="text-2xl font-bold mb-2">Hora</h1>
      <input
        type="time"
        v-model="selectedTime"
        class="w-full border rounded py-2 px-3 mb-4 text-gray-700"
      />

      <div
        v-if="sesioGuardada"
        class="text-center text-green-600 font-semibold p-2 bg-green-100 rounded"
      >
        Sesión guardada correctamente
      </div>

      <br />
      <button
        @click="guardarDatos"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Guardar
      </button>
    </div>

    <div class="mt-4 flex justify-center">
      <nuxt-link
        to="/Admin/panelAdmin"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Tornar</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { afegirSessio } from "../services/CommunicationManager.js";
import { GetPelicules } from "../services/CommunicationManager.js"; 
export default {
  data() {
    return {
      pelicules: [],
      selectedPelicula: "",
      selectedDate: "",
      selectedTime: "",
      sesioGuardada: false,
    };
  },
  async mounted() {
    this.datosPelicula();
  },
  methods: {
    async datosPelicula() {
      const data = await GetPelicules();      
          if (Array.isArray(data)) {
            this.pelicules = data;
          } else {
            throw new Error("La respuesta de la API no tiene el formato esperado");
          }
    },
    async guardarDatos() {
      const fecha = this.formatoFecha(this.selectedDate);
      const hora = this.formatoHora(this.selectedTime);
      const data = {
        pelicula_id: this.selectedPelicula,
        fecha: fecha,
        hora: hora,
      };
      try {
        const responseData = await afegirSessio(data);
        this.sesioGuardada = true;
        //console.log("Sesión guardada:", responseData.session);
      } catch (error) {
        console.error("Error al guardar la sesión:", error);
      }
    },
    formatoFecha(fecha) {
      const d = new Date(fecha);
      return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    },
    formatoHora(hora) {
      return hora + ":00";
    },
  },
};
</script>

<style lang="scss" scoped></style>
