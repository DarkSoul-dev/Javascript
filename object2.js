var user = {
    firstName : "Darksoul",
    lastName : "Shadow",
    role : "Admin",
    logCount : 322,
    googleSingedIn : true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};
console.log(user.role);
console.log(user.getCourseCount());
user.buyCourse("React Js course")
console.log(user.getCourseCount());