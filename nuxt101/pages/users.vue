<template>
  <!-- *จาก /user.vue ข้างนอก* ให้ users นี้ อิงจากไฟล์ users/index.vue ทำงานสัมพันธ์กัน มันจะเอาด้านนอกสุดมาแสดงก่อน-->
  <!-- การกำหนด route ซ้อนกัน -->
  <div>
    <h3>users : external</h3>
    <hr />
    <form action="">
      <input type="text" />
      <input type="submit" value="insert" />
    </form>
    <nuxt-child /> <!-- ชื่อจะต้องเหมือนกัน ตัวไฟล์ชื่อ users.vue ด้านนอกที่เป็น parent ถึงจะไปเรียก users/index.vue ด้านใน -->
  </div>
</template>