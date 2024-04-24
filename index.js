
let container = document.getElementById("container");

let data = [];

function fetchUsers (){
  fetch("https://reqres.in/api/users")
 .then(function (res){
   res = res.json();
   return res;
 })
 .then(function (res){
  data = res.data;
  console.log("data:", data);
  getData(data);
 })
}

 function getData(data){
 data.forEach(function (user){
  let div = document.createElement('div');
  div.classList.add('card');

  let avatar = document.createElement('img');
  avatar.src = user.avatar;

  let first_name = document.createElement("p");
  first_name.innerText = `First Name: ${user.first_name}`;

  let id = document.createElement('p');
  id.innerText = `ID: ${user.id}`;

  let email = document.createElement('p');
  email.innerText = `Email: ${user.email}`;

  let last_name = document.createElement("p");
  last_name.innerText = `Last Name: ${user.last_name}`;
  
  div.append(avatar, id, first_name, last_name, email);
  container.append(div);

 })

 };
//  fetchUsers();