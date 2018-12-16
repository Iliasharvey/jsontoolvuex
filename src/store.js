import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* List with chosen elements **/
    list: [],

    /* List with active elements that are used at the moment **/
    active: [],

    /* Add Elements **/
    options: ['input', 'textarea', 'textareaAdvanced', 'text'],
    selected: 'input',

    /* Inputs got different types. User should be able to change the type */
    inputTypeList: ['text', 'submit','email'],
    selectedInputType: 'text',

  },
  getters: {

  },
  mutations: {
    /* Change value of list */
    changeList: (state, value) => {
      state.list = value
    },

    /* Change value of active list */
    changeActiveList: (state, value) => {
      state.active = value
    },
    
    /* Change value of selected option */
    selected: (state, value) => {
      state.selected = value
    },

    /* Change value of selected input type */
    selectedInputType: (state, value) => {
      state.selectedInputType = value
    },

    /* Add Element based on what user chose */
    addElement: (state) => {
      if (state.selected == 'input') {
        state.list.push({
          value: 'Example added',
          setting: {
            type: state.selectedInputType
          }
        })
      } else {
        state.list.push({
          value: 'Example added',
          setting: {
            type: 'text'
          }
        })
      }
    }
  },
  actions: {

  }
})