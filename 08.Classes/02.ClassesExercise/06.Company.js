function solve() {
    class Company {
        constructor() {
            this.departments = {};
        }

        addEmployee(name, salary, position, department) {
            if (name == '' || salary == '' || position == '' || department == '' ||
                name == null || salary == null || position == null || department == null ||
                name == undefined || salary == undefined || position == undefined || department == undefined ||
                Number(salary) < 0) {
                throw new Error('Invalid input!');
            }

            const employee = {
                name,
                salary: Number(salary),
                position,
            };

            if (!this.departments[department]) {
                this.departments[department] = [];
            }

            this.departments[department].push(employee);

            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }

        bestDepartment() {
            const bestDepartment = Object.entries(this.departments)
                .sort((a, b) => {
                    Object.values(b)[1].reduce((avgSalary, employee) => {
                        const salary = Object.values(employee)[1];
                        return avgSalary += salary;
                    });
                    - Object.values(a)[1].reduce((avgSalary, employee) => {
                        const salary = Object.values(employee)[1];
                        return avgSalary += salary;
                    });
                })[0];

            const bestDepartmentAvgSalary = Object.values(bestDepartment[1])
                .reduce((avgSalary, employee) => {
                    const salary = Object.values(employee)[1];
                    return avgSalary += salary;
                }, 0) / bestDepartment[1].length;

            const employeesSortedBySalaryDescending = Object.values(bestDepartment[1])
                .sort((a, b) => {
                    if (a.salary > b.salary) return -1;
                    if (a.salary < b.salary) return 1;
                    if (a.name.localeCompare(b.name) < 1) return -1;
                    if (a.name.localeCompare(b.name) > 1) return 1;
                    return 0;
                })
                .map(employee => `${employee.name} ${employee.salary} ${employee.position}`);

            return `Best Department is: ${bestDepartment[0]}\nAverage salary: ${bestDepartmentAvgSalary.toFixed(2)}\n${employeesSortedBySalaryDescending.join('\n').trim()}`;
        }
    }

    let c = new Company();
    c.addEmployee("Stanimir", 2000, "engineer", "Construction");
    c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
    c.addEmployee("Slavi", 500, "dyer", "Construction");
    c.addEmployee("Stan", 2000, "architect", "Construction");
    c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
    c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
    c.addEmployee("Gosho", 1350, "HR", "Human resources");
    console.log(c.bestDepartment());
}

solve();