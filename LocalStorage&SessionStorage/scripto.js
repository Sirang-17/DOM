const user = {
  name: "Ali",
  email: "ali@gmail.com",
  isAdmin: true
};

localStorage.setItem("user", JSON.stringify(user)); //JSON.stringify -> Convert object → string

const savedUser = JSON.parse(localStorage.getItem("user")); //JSON.parse -> Convert string → object

console.log(savedUser.email);
