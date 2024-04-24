const school = {
 name: "XYZ School",
 establishYear: 1990,
 departments: {
   math: { teachers: 5, students: 150 },
   science: { teachers: 4, students: 120 },
   history: { teachers: 3, students: 100 },
   english: { teachers: 4, students: 130 },
 },
 courses: ["math", "science", "history", "english"],
 students: [
   {
     name: "Alice",
     className: "Grade 5",
     scores: { math: 95, science: 88, history: 85, english: 92 },
   },
   {
     name: "Bob",
     className: "Grade 4",
     scores: { math: 80, science: 78, history: 92, english: 85 },
   },
   {
     name: "Charlie",
     className: "Grade 5",
     scores: { math: 88, science: 90, history: 78, english: 88 },
   },
   {
     name: "Diana",
     className: "Grade 4",
     scores: { math: 92, science: 85, history: 88, english: 90 },
   },
 ],
};

// Problem 10: countCalculation

function countCalculation(school){
   const {math: { teachers: mathTeachersCount, students: mathStudentsCount},
           history: { teachers: historyTeachersCount, students: historyStudentsCount}} = school.departments
           return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount, };
}


// Problem 11: findTopStudent
function findTopStudent(school, courseName){
   const topStudent = school.students.reduce((prev, curr) => {
       return curr.scores[courseName] > prev.scores[courseName] ? curr : prev;
   });
   return topStudent;
}


// Problem 12: addNewDept
function addNewDept(school, newDepartment){
   const updatedSchool = {
       ...school,
       departments: {
           ...school.departments,
           ...newDepartment
       }
   };
   return updatedSchool;
}

// Problem 13: highestStudentCountDepartment

function highestStudentCountDepartment(school){
   let highestCount = 0;
   let deptWithHighestCount = '';
   for(const [dept, { students }] of Object.entries(school.departments)) {
       if(students > highestCount) {
           highestCount = students;
           deptWithHighestCount = dept;
       }
   }
   return deptWithHighestCount;
}


// Problem 14: generateGreeting
function generateGreeting(name, language = 'English'){
   const greetings = {
       English: `Hello, ${name}!`,
       Spanish: `¡Hola, ${name}!`,
       French: `Bonjour, ${name}!`

   };
   return greetings[language];

}

console.log(countCalculation(school));
console.log(findTopStudent(school, 'math'));
const newDepartment = {arts: {teacher: 2, students: 50} };
console.log(addNewDept(school, newDepartment));
console.log(highestStudentCountDepartment(school));
console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));