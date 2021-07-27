new Vue({ //สร้าง object
    el:"#vue01", //environment จะเรียกไปใช้งานที่ id ไหน
    data:{ //ส่วนที่จะนำไปแสดง
        name:"thekkao", //ตัวแปร
        job:"full stack developer",
        age:23, 
        web:'https://github.com/therk074/vue.js',
        girlgroups:[],
        dinner:''
    },
    methods: {
        addCount:function(){
            this.count++;
            console.log(this.count);
        }
    },
})