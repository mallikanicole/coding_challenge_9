//Task 1 Creating an Employee Class


class Employee {
    constructor(name,id,department,salary) {
        this.name=name;
        this.id=id;
        this.department=department;
        this.salary=salary;
    };//create class with properties
    getDetails(){
        return `Employee:${this.name},ID:${this.id},Department:${this.department},Salary:$${this.salary}`;
    };//method to return employee details
    calculateAnnualSalary(){
        return this.salary*12;
    };//calculate annual salary by multiplying times 12
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000



//Task 2 Creating a Manager Class

class Manager extends Employee{
    constructor(name,id,department,salary,teamSize){
        super(name,id,department,salary);
        this.teamSize=teamSize
    };//add team size
    getDetails(){
        return `Manager:${this.name},ID:${this.id},Department:${this.department},Salary:$${this.salary},Team Size:${this.teamSize}`
    }//update employee details
    calculateBonus(){
        return (this.salary*12)*.1
    };//calculate manager bonus
    calculateAnnualSalary(){
        return this.salary*12+this.calculateBonus();
    }
};//add manager to class

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600



//Task 3 Creating a Company Class

class Company {
    constructor(name) {
        this.name=name;
        this.employees=[];
    }//add employee array
    addEmployee(employee){
        this.employees.push(employee);
    }//add in employees to array
    listEmployees(){
        return this.employees.forEach(employee=>console.log(employee.getDetails()));
    }//log employee details
//create company class



//Task 4 Implementing a Payroll System

    calculateTotalPayroll(){
        return this.employees.reduce((total,employee)=>{ return total+employee.calculateAnnualSalary();
        },0);
    };//calculate total payroll



//Task 5 Implementing Promotions


    promoteToManager (employee, teamSize){
        const index=this.employees.indexOf(employee);
        this.employees[index]=new Manager(employee.name,employee.id,employee.department,employee.salary,teamSize)
    }//promote an employee to manager

};//end of class


//OUTPUT TESTS
//Task 3 output test
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
//Task 4 output test
console.log(company.calculateTotalPayroll()); 
// Expected output: 165600 (assuming emp1 and mgr1 salaries)
//Task 5 output test
company.promoteToManager(emp1, 3);
company.listEmployees();
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"