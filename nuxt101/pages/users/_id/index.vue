<template>
    <div>
        <h4>welcome! {{$route.params.id}} </h4>
        <!-- ส่งผ่าน route ผ่านตัว parameter ที่ชื่อ id -->
    </div>
</template>
<script>
export default {
    validate(data){
        return /^\d+$/.test(data.params.id) //ต้องส่งค่าเป็นตัวเลขเท่านั้น ไม่งั้นจะหาไม่เจอ
        // ^ คือเริ่มstring , \d+ คือเลข 0-9 , + คือจำนวนเต็มบวก , $ คือจบstring
    }
}
</script>