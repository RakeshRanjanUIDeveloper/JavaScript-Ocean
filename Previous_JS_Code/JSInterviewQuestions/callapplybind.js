let name = {
    firstName: "Jaya",
    lastName: "shukla",
  
  }
  let printFullName = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from "+ hometown+", " + state)
  }
  let name2 = {
    firstName: "Akshay",
    lastName: "Saini"
  }
  //name.printFullName();
  //name.printFullName.call(name2);
  printFullName.call(name2, "Dehradun", "uttrakhand");
  printFullName.apply(name2, ["Dehradun", "uttrakhand"]);
  let printMyName=printFullName.bind(name2, "Dehradun", "uttrakhand");
  printMyName();