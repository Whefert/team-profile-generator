// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
import Employee from "./Employee.js";
export default class Intern extends Employee {
  constructor(name, id, email, school) {
    // TODO: Add validation
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
