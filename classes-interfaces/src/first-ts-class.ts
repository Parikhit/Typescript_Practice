class Department {
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
        console.log(`Department (${this.id}): ` + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (!this.lastReport) {
            throw new Error('No reports found!');
        }

        return this.lastReport;
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please provide a value!');
        }

        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'Max') return;

        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    getReports() {
        console.log(this.reports);
    }
}

const itDept = new ITDepartment('B1', ['Maxyy']);

// itDept.addEmployee('Max');
// itDept.addEmployee('Sara');
// itDept.printEmployeeInformation();
// itDept.describe();
// console.log(itDept);

const accounting = new AccountingDepartment('C1', ['Billy']);

console.log(accounting.mostRecentReport);
console.log((accounting.mostRecentReport = 'Jamie'));

accounting.addReport('Sally');
accounting.addReport('Curran');
accounting.getReports();
accounting.addEmployee('Maxyyyy');

accounting.printEmployeeInformation();
