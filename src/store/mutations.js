import * as types from './mutation-types'
// import {ADD_TO_CART, INCREMENT_COUNT} from "./mutation-types";
//[add_to_cart]
const mutations = {
	[types.ADD_TO_CART](state, goods) {
		state.cartList.push(goods)
	},
	[types.INCREMENT_COUNT](state, index) {
		state.cartList[index].count += 1
	}
}


export default mutations
