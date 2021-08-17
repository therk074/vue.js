<template>
  <div id="app">
    <div class="container">
      <br />
      <div v-if="!image">
        <input type="file" class="form-control" @change="onFileChange" />
      </div>
      <div v-else>
        <img :src="image" class="img-fluid" />
        <br /><br />
        <button class="btn btn-danger" @click="removeImage">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      image: "",
    };
  },
  methods: {
    onFileChange: function (event) {
      var files = event.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(files) {
      var reader = new FileReader();
      reader.onload = (event) => {
        this.image = event.target.result;
      };
      reader.readAsDataURL(files);
      console.log(this.image);
    },
    removeImage() {
      this.image = "";
    },
  },
};
</script>
