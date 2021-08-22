<template>
  <b-container>
    <h4>header components</h4>
    <div>
      <b-carousel id="carousel-1" controls indicators>
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </b-container>
</template>
<style scoped>
/* scoped คือการกำหนดให้ style นี้ทำงานแค่ของหน้านี้หน้าเดียว ที่เรากำหนดในหน้า header ก็จะไม่ไปขึ้นหน้า content ด้วย */
h4 {
  color: aquamarine;
}
</style>