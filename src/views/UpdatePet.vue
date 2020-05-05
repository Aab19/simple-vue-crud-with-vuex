<template>
  <div>
    <h1>Update Pet.</h1>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="exampleInputGroup2" label="Pet's Name:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="animal.name"
          required
          placeholder="Enter name" />
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Pet's Age:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="number"
          v-model="animal.age"
          required
          placeholder="Enter age" />
      </b-form-group>

      <b-button type="submit" variant="primary">Update</b-button>
      <router-link :to="`/${animal.species}s`">
        <b-button type="reset" variant="danger">Batal</b-button>
      </router-link>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'updatePet',
  data() {
    return {
      previousName: '',
      previousAge: '',
      index: '',
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  methods: {
    ...mapActions(['updatePet']),
    handleSubmit(e) {
      if (this.previousName !== this.animal.name || this.previousAge !== this.animal.age) {
        const { name, age } = this.animal
        const species = `${this.animal.species}s`
        const index = this.index

        const payload = {
          species,
          name,
          age,
          index
        }

        this.updatePet(payload)
        this.$router.push({ path: `/${this.animal.species}s` })
      } else {
        alert('Name or Age must be changed.')
      }
    }
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
    this.previousName = animal.name
    this.previousAge = animal.age
    this.index = this.$route.params.id
  }
}
</script>
