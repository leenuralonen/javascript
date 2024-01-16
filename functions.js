const users = [
  {
    userId: 995,
    firstName: "Leenur",
    lastName: "Alonen",
    isActive: true,
  },
  {
    userId: 923,
    firstName: "Len",
    lastName: "Alonen",
    isActive: false,
  },
  {
    userId: 100,
    firstName: "Joe",
    lastName: "Mama",
    isActive: true,
  }
];

function getfullname(users){
  const fullname = users.firstName + " " +users.lastName;
  return fullname;
}

const fullName = getfullname(users[1])
function printUser(users) {
  console.log(fullName);
}

// Call the function and pass the 'users' array as an argument
printUser(users);



