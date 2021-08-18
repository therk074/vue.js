<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div align="center">menu</div>
        <div class="col-md-3" v-for="(prod, index) in products" :key="index">
          <p>
            product name : <b>{{ prod.name }}</b>
          </p>
          <p>
            price : <b>{{ prod.price }}</b>
          </p>
          <img :src="prod.img" style="width: 50%" />
          <input type="checkbox" class="form-check-input" @change="chk(prod)" />
        </div>
        <div class="col-md-4" style="text-align: right">
          total {{ total() }} baht
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
      products: [
        {
          name: "bottle of water",
          price: 7,
          img: "https://static.bigc.co.th/media/catalog/product/8/8/8851952350147.jpg",
          active: false,
        },
        {
          name: "a cup of tea",
          price: 35,
          img: "https://lh3.googleusercontent.com/proxy/mPAnLE0QNq6ByCPMlrhzfkoO504urkXxQXGFNq0Z0VX0mWXPR8t5MF9YaUguHfCa3zZQaAaKSyP4vj3KLTgL3VDsepMFdYhGOEl-GQbSyIV18lqmhXrnlQ",
          active: false,
        },
      ],
    };
  },
  methods: {
    chk: function (item) {
      item.active = !item.active;
    },
    total: function () {
      var sum = 0;
      this.products.forEach(function (item) {
        if (item.active) {
          //ถ้าเป็น boolean ถ้าจริงมันก็เข้า if เลย
          sum += item.price;
        }
      });
      return sum;
    },
  },
};
</script>
