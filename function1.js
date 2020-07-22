var getUserRole = function getUserRole(name, role) {
switch (role)
{
case "admin":
return '${name} is admin with all access';
break;
case "subadmin":
return '${name} is sub-admin with access to create and delete courses';
break;
case"testprep":
return '${name}is atest prep with access to create and delete courses';
break;
case "user":
return '${name} is a user to consume content';
break;
default:
return '${name} is trial user';
break;
}
}
console.log(getUserRole("lovekush","testprep"));
var getRole = getUserRole("love","user");
console.log(getRole); 
