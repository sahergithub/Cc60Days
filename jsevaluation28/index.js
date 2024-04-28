// let table = document.getElementById("table-cont");

 async function getData(page, limit) {
  try{
   let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=${limit}`
 
   let res = await fetch (url);
   let data = await res.json();
   // return data;
   console.log(data)
  } catch (err) {
   console.log("err:", err)
  }
  
 }
 getData();


  async function displayData(page, limit) {
   let employees = await getData(page, limit);
   let filterDepartment = document.getElementById("department").value;
   let filterGender = document.getElementById("gender").value;

   let filteredEmployees = employees;
   if(filterDepartment){
    filteredEmployees = filteredEmployees.filter(employee => employee.department === filterDepartment);
   }
   if (filterGender) {
    filteredEmployees = filteredEmployees.filter(employee => employee.gender === filterGender)
   }

   let sortedEmployees = filteredEmployees.sort((a,b) => a.salary - b.salary);

   let tableBody = document.getElementById("employeeBody");
   // console.log(tableBody)
   tableBody.innerHTML = "";

   sortedEmployees.forEach((el, index) => {
    let row = document.createElement('tr');
    
    let td1 = document.createElement('td');
    td1.textContent = index + 1;

    let name = document.createElement('td');
    name.textContent = `Name: ${el.name}`;
    let gender = document.createElement('td');
    gender.textContent = `Gender: ${el.gender}`;
    let department = document.createElement('td');
    department.textContent = `Department: ${el.department}`;
    let salery = document.createElement('td');
    salery.textContent = `Salary: ${el.salery}`;

     row.append(td1, name, gender, department, salery)
     tableBody.appendChild(row);
   });

   
 }

 function sortedEmployees(){
  
 }