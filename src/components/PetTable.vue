<template>
  <div>
    <h1>{{ species }} for Adoption</h1>
    <b-table striped hover :items="pets">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
        <router-link :to="`/update/${species}/${data.index}`">
          <b-button variant="outline-primary">Update</b-button>
        </router-link>
        <b-button :id="data.index" @click="deletePet" variant="danger">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    species: String,
    pets: Array
  },
  methods: {
    ...mapActions(['removePet']),
    deletePet(e) {
      const index = e.target.id
      const species = this.species
      const payload = {
        species,
        index
      }
      this.removePet(payload)
    }
  }
}
</script>

<style scoped>
  .table {
    position: relative;
  }

  .btn {
    position: absolute;
    right: -90px;
    transform: translateY(-6px);
  }

  .btn-danger {
    right: -170px;
  }
</style>
