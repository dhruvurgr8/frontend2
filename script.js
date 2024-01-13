/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  let developer = arr.map((person) => {
    if (person.profession == "developer") {
      console.log(person.name);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((person) => {
    if (person.profession == "developer") {
      console.log(person.name);
    }
  });
}

function addData() {
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  let changedArr = arr.filter((data) => data.profession != "admin");
  console.log(changedArr);
}

function concatenateArray() {
  let arr2 = [
    { id: 4, name: "dhruv", age: "23", profession: "frontend developer" },
    { id: 5, name: "prakash", age: "22", profession: "Backend developer" },
    { id: 6, name: "Divanshu", age: "24", profession: "Software testing" },
  ];
  let newArr = arr.concat(arr2);
  console.log(newArr);
}
