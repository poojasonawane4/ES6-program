//? Method Overriding
// - If you define a method in the sub class to replace the inherited method
//   of parent class having same name then it is called method overriding
// - When super class method does not fulfill the requirement of sub class
//   then sub class can override super class method

// ex:
class Person {
  name;
  mobile;
  email;
  constructor(name, mobile, email) {
    this.name = name;
    this.mobile = mobile;
    this.email = email;
  }

  //overridden
  printProfile() {
    console.log(`Name: ${this.name}
    Mobile: ${this.mobile}
    Email: ${this.email}`);
  }
}

class Employee extends Person {
  empId;
  salary;
  dept;
  constructor(id, name, sal, dept, mo, email) {
    super(name, mo, email);
    this.empId = id;
    this.salary = sal;
    this.dept = dept;
  }

  //ovrriding method
  printProfile() {
    console.log(`
      ID: ${this.empId}
      Salary: ${this.salary}
      Dept: ${this.dept}
      Name: ${this.name}
      Mobile: ${this.mobile}
      Email: ${this.email}`);
  }
}

const e = new Employee(11, "topper", 10000, "civil", "133456", "abc@hh.com");

console.log(e);
e.printProfile();
