<template>
  <div class="container">
    <router-link to="/create" class="btn btn-success"
      >Agregar Empleado</router-link
    >
    <br />
    <br />
    <div class="card">
      <div class="card-header">Empleados</div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>EMAIL</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="empleado in empleados" :key="empleado.id">
              <td>{{ empleado.id }}</td>
              <td>{{ empleado.name }}</td>
              <td class="td-email">{{ empleado.email }}</td>
              <td>
                <div class="" role="">
                  <button type="button" class="btn-action" style="background-color: darkblue; margin-right: 0.1rem;">
                    <router-link
                      :to="{ name: 'edit', params: { id: empleado.id } }"
                      >Editar</router-link
                    >
                  </button>
                  <button
                    v-on:click="deleteEmp(empleado.id)"
                    type="button"
                    class="btn-action"
                    style="background-color: rgb(224, 16, 16)"
                  >
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    empleados() {
      return this.$store.state.employees;
    },
  },
  mounted() {
    this.$store.dispatch("getEmployees");
    console.log("Desarrollado por gduarte2999@gmail.com");
  },
  methods: {
    deleteEmp(id) {
      let opcion = confirm("Seguro que desea eliminar al empleado?");
      if (opcion == true) {
        this.$store.dispatch("deleteEmp", id);
        alert("Se ha eliminado al empleado de a lista");
      }
    },
  },
});
</script>

<style scoped>

a{
  text-decoration: none;
  color: aliceblue;
}

.btn-action {
  border: none;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  /*display: inline-block;
  font-size: 16px;*/
}

@media (max-width: 428px) {
  * {
    font-size: 0.6rem;
  }
}

@media (max-width: 360px) {
  * {
    font-size: 0.55rem;
  }
}

@media (max-width: 991px) {
  .btn-action {
    padding: 4px 8px;
    margin-bottom: 0.1rem;
  }
}
</style>
