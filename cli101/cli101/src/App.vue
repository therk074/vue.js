<template>
  <div id="app">
    <div class="container">
      <h4 style="text-align: center">Limit Message</h4>
      <hr />
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          v-model="message"
          :maxlength="max"
        />
        <div class="input-group-prepend">
          <span class="input-group-text" v-text="max-message.length">20</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
      max: 20,
    };
  },
};
</script>
