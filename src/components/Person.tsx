export class User {
    id?:number;
    firstName?: string;
    lastName?: string;
    dob?: string;
    password?: string;
    email?: string;
    role?:string;
    username?:string;
    otp?:string;
    verified?: boolean;
    expiration?: number
}


export class Employees {
    constructor(id?: number,employee_name?: string, employee_salary?: number, employee_age?: number) {
        this.id = id;
        this.employee_name = employee_name;
        this.employee_salary = employee_salary
        this.employee_age = employee_age
    }
  
    id?: number;
    employee_name?: string;
    employee_salary?: number;
    employee_age?: number
}