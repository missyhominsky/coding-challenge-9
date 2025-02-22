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

//Task 2 - Created Manager Class with Inheritance

class Manager extends Employee{ //Creating class Mangager 
    constructor(name, id, department, salary, teamSize) { //new properties for constructor 
        super(name, id, department, salary); 
        this.teamSize = teamSize; 
    };

    getDetails() { //new getdetaisl tab after teamsize was added 
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`; 
    };

    calculateBonus() { //calculateBonus method setup
        return super.calculateAnnualSalary() * 0.1; //bonus = ten percent of annual salary
    };

    calculateAnnualSalary() { 
        return super.calculateAnnualSalary() + this.calculateBonus(); //employee's annual salary + calculateBonus()
    };
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); 

console.log(mgr1.getDetails()); 
console.log(mgr1.calculateBonus()); 