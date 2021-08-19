import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 
export const store = new Vuex.Store({
    state: {
        food: "burger",
        game: "don't starve"
    },
    mutations: {
        setFood(state, food) { //การใส่ค่าจากตัวแปรfood ลงไปที่ state.food
            state.food = food;
        },
        setGame(state, game) {
            state.game = game;
        }
    },
    getters: {
        //parameter ดึง state => ()
        food: state => state.food,
        game: state => state.game
    }
});