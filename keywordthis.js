// console.log(this);

var user = {
    firstName : "lovekush",
    courseCount: 5,
    getCourseCount : function (){
        console.log("line 7", this);
        function sayHello() {
            console.log("Heloo");
            console.log("line 10",this);
        }
        sayHello();
    },
};

user.getCourseCount();