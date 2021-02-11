// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// let store = new Vuex.Store({
//   state: {
//     basket: {
//       isOpened: false
//     }
//   },
//   mutations: {
//     openBasket(state) {
//       console.log(state)
//     }
//   }
// })
//
// export default store

export const state = () => ({
  isOpened: false,
  //Товары добавленные в корзину
  clothes:[]
})

export const mutations = {
  //Открыть корзину
  open(state) {
    state.isOpened = true
  },
  //Закрыть корзину
  close(state) {
    state.isOpened = false
  },
  //Добавить товар в корзину
  add(state,cloth) {
      state.clothes.push(cloth)
  },
  //Удалить товар из корзины
  delete(state,cloth) {
    // метод массива indexOf принимает аргумент-элемент массива.IndexOf возвращает индекс этого элемента.
    // 1-Найти индекс товара
    let indexOfClose = state.clothes.indexOf(cloth)
    // 2-Удалить товар по индексу
    state.clothes.splice(indexOfClose,1)
  },
  //Очистить корзину
  removeClothes(state){
    state.clothes.splice(0)
  }
}
