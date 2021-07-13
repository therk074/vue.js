new Vue({ //สร้าง object
    el:"#vue01", //environment
    data:{ //ส่วนที่จะนำไปแสดง
        name:"thekkao", //ตัวแปร
        job:"full stack developer",
        age:23, 
    },
    methods: { //function ทำงานกับ object
        getName:function(){
            return this.name
        },
        setName:function(n){
            return this.name = n //รับค่ามาเปลี่ยนชื่อตัวแปร
        }
    },
})