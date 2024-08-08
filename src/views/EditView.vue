<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar empleado:
        <span class="text-success fw-bold"> {{ empleados[id_route-1].name }} </span>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="editarEmpleado">
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
            <!-- <button type="submit" class="btn btn-success" @click="modifyEmp">
              Modificar
            </button> -->
            <router-link @click="modifyEmp" class="btn btn-success" :to="{ name: 'list' }"
              >Modificar</router-link
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
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
//import { ref } from "vue";

export default defineComponent({
  data() {
    const route = useRoute();
    const id_route = route.params.id;
    const empleado = { id: id_route, name: "", email: "" };

    return { route, id_route, empleado };
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
    modifyEmp() {
      this.$store.dispatch("modifyEmp", this.empleado);
    },
  },
});
</script>

<style scoped></style>
