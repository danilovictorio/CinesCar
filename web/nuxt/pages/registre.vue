<!-- 
Ruta de desplegament: https://tr3cine.a17danvicfer.daw.inspedralbes.cat/laravel/public
Ruta Local: http://localhost:8000
-->
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto w-auto" src="/cineCar.jpg" alt="Your Company" />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Registrar
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Nom</label
          >
          <div class="mt-2">
            <input
              v-model="name"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Correu electrònic</label
          >
          <div class="mt-2">
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Contrasenya</label
            >
          </div>
          <div class="mt-2">
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
            />
          </div>
        </div>

        <div>
          <button
            @click="registre"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Registra
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "../services/CommunicationManager.js";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async registre() {
      try {
        const data = await register(this.name, this.email, this.password);

        // Almacena el token en localStorage o Vuex
        localStorage.setItem("token", data.token);
        // Redirige al usuario a la página de inicio, por ejemplo
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      }
    },
  },
};
</script>
