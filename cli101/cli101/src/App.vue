<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div
          class="card col-md-2"
          v-for="(prod, index) in products"
          :key="index"
        >
          <img :src="prod.img" class="card-img-top h-100" />
          <div class="card-body">
            <h5 class="card-title">
              <b>name: {{ prod.name }}</b>
            </h5>
            <p class="card-text">
              <b>price: {{ prod.price }}</b>
            </p>
            <button class="btn btn-primary" @click="add(prod)">add cart</button>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <br />
          <h4>Cart</h4>
          <hr />
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>price</th>
                <th>amount</th>
                <th>sum</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ cart.name }}</td>
                <td>{{ cart.price }}</td>
                <td>
                  <i class="fas fa-minus" @click="mQty(cart)"></i>
                  {{ cart.qty }}
                  <i class="fas fa-plus" @click="pQty(cart)"></i>
                </td>
                <td>{{ cart.total }}</td>
                <td><button class="btn btn-danger btn-sm" @click="del(cart)">del</button></td>
              </tr>
            </tbody>
          </table>
          total amount {{total()}}
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
          id: 1,
          name: "bottle of water",
          price: 7,
          img: "https://static.bigc.co.th/media/catalog/product/8/8/8851952350147.jpg",
          active: false,
        },
        {
          id: 2,
          name: "a cup of tea",
          price: 35,
          img: "https://lh3.googleusercontent.com/proxy/mPAnLE0QNq6ByCPMlrhzfkoO504urkXxQXGFNq0Z0VX0mWXPR8t5MF9YaUguHfCa3zZQaAaKSyP4vj3KLTgL3VDsepMFdYhGOEl-GQbSyIV18lqmhXrnlQ",
          active: false,
        },
      ],
      carts: [],
      coffee: 0,
      tea: 0,
    };
  },
  methods: {
    add: function (prod) {
      if (prod.id == 1) {
        this.coffee += 1;
        if (this.coffee <= 1) {
          this.push(prod);
        } else {
          var found = this.increase_qty(prod);
          this.carts[found].qty += 1;
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price;
        }
      } else {
        this.tea += 1;
        if (this.tea <= 1) {
          this.push(prod);
        } else {
          var found2 = this.increase_qty(prod);
          this.carts[found2].qty += 1;
          this.carts[found2].total =
            this.carts[found2].qty * this.carts[found2].price;
        }
      }
    },
    push: function (prod) {
      this.carts.push({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        qty: 1,
        total: prod.price,
      });
    },
    increase_qty: function (prod) {
      for (var i = 0; i < this.products.length; i++) {
        //วน i ตามจำนวนสินค้า
        if (this.carts[i].id == prod.id) {
          //ถ้า id ของ array card ตัวที่ i == prod.id
          return i;
        }
      }
      return -1;
    },
    mQty: function (cart) {
      cart.qty-=1;
      if(cart.qty<=1){
        cart.qty = 1;
      }
      cart.total=cart.price*cart.qty;
    },
    pQty: function (cart) {
      cart.qty+=1;
      cart.total=cart.price*cart.qty;
    },
    del:function(cart){
      if(confirm("delete ?")){
          var index = this.carts.indexOf(cart);
          this.carts.splice(index,1);
          if(cart.id==1){
            this.coffee = 0;
          }else{
            this.tea = 0;
          }
      } 
    },
    total:function(){
      var sum = 0;
      this.carts.forEach(function(item){
        sum += item.total;
      });
      return sum;
    }
  },
};
</script>
