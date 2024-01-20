// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
import Employee from "./Employee.js";
export default class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // TODO: Add validation
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}
