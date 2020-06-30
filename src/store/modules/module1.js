const state = {
    moudle1Value: 'module1-value',
}

const mutations = {
    changeModule1(state, newValue) {
        console.log("1")
        state.moudle1Value = newValue
    },

}

const getters = {
    getModule1(state) {
        return state.moudle1Value
    }
}

const actions = {
    useActionChangeModule1({
        commit
    }) {
        commit('getModule1')
    },
}
export default { state, mutations, actions, getters }
