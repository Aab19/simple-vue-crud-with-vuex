export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  },
  deletePet: (state, { species, index }) => {
    state[species].splice(index, 1)
  },
  petUpdate: (state, { species, name, age, index }) => {
    state[species][index].name = name
    state[species][index].age = age
  }
}
