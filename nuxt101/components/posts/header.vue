<template>
  <b-container>
    <h4>header components</h4>
    <b-carousel id="carousel-1" controls indicators>
      <div v-for="(item, index) in items" :key="index">
        <b-carousel-slide
          :caption=item.caption
          :img-src=item.image
          :text=item.text
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </b-container>
</template>

<style scoped>
/* scoped คือการกำหนดให้ style นี้ทำงานแค่ของหน้านี้หน้าเดียว ที่เรากำหนดในหน้า header ก็จะไม่ไปขึ้นหน้า content ด้วย */
h4 {
  color: aquamarine;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          caption: "A",
          // ถ้าเรียกไฟล์จากโฟลเดอร์ใน template ให้ใช้ ~ชื่อโฟลเดอร์ ~assets/image/XXX.jpg ## ถ้าใช้ใน script ให้ใช้ @ 
          image: require("@/assets/image/image1.jpg"),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          caption: "B",
          image: require("@/assets/image/image2.jpg"),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          caption: "C",
          image: require("@/assets/image/image3.jpg"),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
  },
};
</script>