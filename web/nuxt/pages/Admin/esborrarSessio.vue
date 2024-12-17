<!-- 
Ruta de desplegament: https://tr3cine.a17danvicfer.daw.inspedralbes.cat/laravel/public
Ruta Local: http://localhost:8000
-->
<template>
  <div class="sesiones-list">
    <h1 class="text-2xl font-bold mb-8">SESSIONS DEL DIA</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="session in sessions"
        :key="session.sesion.id"
        class="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg"
      >
        <div class="relative">
          <img
            :src="session.pelicula.imagen"
            :alt="session.pelicula.titulo"
            class="w-full h-78 object-cover"
          />
          <div class="absolute inset-0 bg-black opacity-40"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="text-white text-2xl font-bold">{{ session.pelicula.titulo }}</h2>
          </div>
        </div>
        <div class="p-4">
          <p class="text-gray-700">{{ session.pelicula.descripcion }}</p>
          <p class="text-gray-700 mt-2">
            {{ session.sesion.fecha }} - {{ session.sesion.hora }}
          </p>
          <button
            @click="borrarSession(session.sesion.id, session)"
            class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Esborrar Sessió
          </button>
        </div>
      </div>
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
import { borrarSessio } from "../services/CommunicationManager.js";
import { GetSessions } from "../services/CommunicationManager.js";
export default {
  data() {
    return {
      pelicula: null,
      sessions: [],
    };
  },
  async mounted() {
    try {
      const sessions = await GetSessions();
      this.sessions = sessions;
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  },
  methods: {
    async borrarSession(sessionId, session) {
      try {
        const data = await borrarSessio(sessionId);
        this.sessions = this.sessions.filter((s) => s.sesion.id !== session.sesion.id);
        console.log(data.message); // o realiza cualquier acción necesaria
      } catch (error) {
        console.error("Error al borrar sesión:", error);
      }
    },
  },
};
</script>

<style scoped>
.sesiones-list {
  max-width: 800px;
  margin: auto;
}
</style>
