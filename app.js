new Vue({ //สร้าง object
    el:"#vue01", //environment จะเรียกไปใช้งานที่ id ไหน
    data:{ //ส่วนที่จะนำไปแสดง
        name:"thekkao", //ตัวแปร
        job:"full stack developer",
        age:23, 
        web:'https://github.com/therk074/vue.js'
    },
    methods: { //function ทำงานกับ object
        getName:function(){
            return this.name
        },
        setName:function(n){
            return this.name = n //รับค่ามาเปลี่ยนชื่อตัวแปร
        },
        add:function(){
            this.age++;
            console.log(this.age);
        },
        less:function(){
            this.age--;
            console.log(this.age);
        }
    },
})