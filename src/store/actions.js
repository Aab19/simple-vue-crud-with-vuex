export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  },
  removePet: ({ commit }, payload) => {
    commit('deletePet', payload)
  },
  updatePet: ({ commit }, payload) => {
    commit('petUpdate', payload)
  }
}
