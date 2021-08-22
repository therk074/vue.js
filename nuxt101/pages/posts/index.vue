<template>
  <div>
    <Header />
    <h4>posts</h4>
    <Content />
  </div>
</template>
<script>
// import ชื่อ components จากตำแหน่งโฟล์เดอร์ต่อด้วยชื่อไฟล์
import Header from "@/components/posts/header";
import Content from "@/components/posts/content";
export default {
  components: { // component คือการออกแบบ tag ของเราเอง
    Header,
    Content
  },
};
</script>