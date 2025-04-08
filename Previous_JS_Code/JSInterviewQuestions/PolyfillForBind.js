let name = {
    firstName: "Jaya",
    lastName: "Shukla"
  }
  let printName = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + ',' + hometown + ',' + state);
  }
  let printMyName = printName.bind(name, "Dehradun");
  printMyName("Uttrakhand");
  Function.prototype.mybind = function(...args) {
    let obj = this,
    params=args.slice(1);
    return function(...args2) {
      obj.apply(args[0], [...params, ...args2]);
    }
  }
  let printMyName2 = printName.mybind(name, "Dehradun" );
  printMyName2("Uttrakhand");