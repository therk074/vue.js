new Vue({
    el: "#vue01",
    data: {
        newData: {
            empName: '',
            empSalary: 0
        },
        empData: [
            {
                empName: 'ทดสอบ',
                empSalary: 1000
            },
            {
                empName: 'ไม่ทดสอบ',
                empSalary: 2000
            }
        ]
    },
    methods: {
        AddEmployee: function(){
            this.empData.push({ // push value จาก this.ชื่อdata.ชื่อinput
                empName: this.newData.empName,
                empSalary: this.newData.empSalary
            });
            // เมื่อ push เสร็จ ให้รีเซ็ตเป็น
            this.newData.empName = '';
            this.newData.empSalary = 0;
        }
    },
})