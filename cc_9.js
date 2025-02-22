//Task 1 - Created Employee Class

class Employee { 
    constructor(name, id, department, salary) { //assign properties to constructor 
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };
    
    getDetails() { 
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`; //employee details being returned 
    };
    
    calculateAnnualSalary() { //calculateAnnualSalary being set up 
        return this.salary * 12; //employee salary multiplied by twelve months
    };
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); 

console.log(emp1.getDetails()); 
console.log(emp1.calculateAnnualSalary()); 