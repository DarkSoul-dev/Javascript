var User = function (firstName, courseCount) 
{
	this.firstName = firstName;
	this.courseCount = courseCount;
	this.getCourseCount = function(){
		console.log(`Course count is: ${this.courseCount}`);
	};
};

var lovekush = new User("lovekush", 2);

console.log(lovekush);

var sam = new User("Sam", 1);

console.log(sam);

