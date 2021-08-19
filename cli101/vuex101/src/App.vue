<template>
  <div id="app">
    <food />
    <game />
    <display />
  </div>
</template>

<script>
import food from "./components/food.vue";
import game from "./components/game.vue";
import display from "./components/display.vue";
import { store } from "./store/store.js";

export default {
  name: "App",
  store,
  components: { food, game, display },
};
</script>
