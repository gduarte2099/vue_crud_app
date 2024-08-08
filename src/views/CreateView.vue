<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar nuevo empleado</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarEmpleado">
          <div class="from-group pt-1">
            <label for="nombre">Nombre: </label>
            <input
              v-model="empleado.name"
              type="text"
              class="form-control"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              required
            />
            <small id="nombre" class="form-text text-muted"
              >Escribe el nombre</small
            >
          </div>
          <div class="from-group pt-1 pb-3">
            <label for="email">Email: </label>
            <input
              v-model="empleado.email"
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="email"
              required
            />
            <small id="email" class="form-text text-muted"
              >Escribe el email</small
            >
          </div>

          <div class="btn-group" role="group">
            <!-- <button type="submit" class="btn btn-success">Agregar</button>-->
            <router-link
              class="btn btn-primary"
              :to="{ name: 'list' }"
              @click="addEmp"
              >Agregar</router-link
            >
            <router-link class="btn btn-warning" :to="{ name: 'list' }"
              >Cancelar</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const empleado = { id: "", name: "", email: "" };

    return { empleado };
  },
  computed: {
    empleados() {
      return this.$store.state.employees;
    },
  },
  mounted() {
    this.$store.dispatch("getEmployees");
  },
  methods: {
    addEmp() {
      this.empleado.id = store.getters.getMaxId
      //console.log(this.empleado);
      this.$store.dispatch("addEmp", this.empleado);
    },
  },
});
</script>

<style scoped></style>
