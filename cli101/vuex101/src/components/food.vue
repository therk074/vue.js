<template>
  <div>
    <h1>favorite food</h1> 
    <input type="text" name="food_name" value="" @input="changeFood">
  </div>
</template>
<script>
export default {
    methods:{
        changeFood:function(e){
            this.$store.commit('setFood',e.target.value);
            //ชี้ไปที่storeที่mutations setFood ด้วยค่าของ input ตัวนี้
        }
    }
};
</script>
