const inquirer = require('inquirer');
const mysql = require('mysql');



const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '307298',
    database: 'employeesDB',
});



const init = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'prompt',
            message: 'What would you like to do?',
            choices: [
                'View all employees',
                'View all departments',
                'View all roles',
                'Add a department',
                'Add a role',
                'Update an employee role',
                'Quit',
            ],
        }
    ])
        .then((response) => {
            console.log(response);
            switch (response.prompt) {
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'Add a department':
                    addADepartment();
                    break;
                case 'Add a role':
                    addARole();
                    break;
                case 'Update an employee role':
                    updateAnEmployeeRole();
                    break;
                default:
                    connection.end();
            }
        })

};



const viewAllEmployees = () => {
    connection.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        console.log('viewAllEmployees');
        console.table(result);

        init();
    });

};

const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', (err, result) => {
        if (err) throw err;
        console.log('viewAllDepartments');
        console.table(result);
        init();
    });


};

const viewAllRoles = () => {
    connection.query('SELECT * FROM role', (err, result) => {
        if (err) throw err;
        console.table(result);
        init();
    }
    );
};




const addADepartment = () => {
    inquirer.prompt([
        {
            name: 'department_name',
            type: 'input',
            message: 'Enter the department name:',
        }
    ])
        .then(({ department_name }) => {
            const query = connection.query('INSERT INTO department SET ?',
                { department_name }, (err, result) => {
                    if (err) throw err;
                    viewAllDepartments();
                    
                })
        })
};

const addARole = () => {
    inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Enter the new role title:',
            },
            {
                name: 'salary',
                type: 'input',
                message: 'Enter the new role salary:',
            },
            {
                name: 'department_id',
                type: 'input',
                message: 'Enter the new role department id:',
            }
        ])
        .then(({ title, salary, department_id }) => {
            const quary = connection.query('INSERT INTO role SET ?', 
            {title, salary, department_id}, (err, result) => {
                if (err) throw err;
                viewAllDepartments();
            })
        })

};

const updateAnEmployeeRole =  () => {
    connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.id, role.title FROM employee LEFT JOIN role ON employee.role_id = role.id',  (err, result) => {
        if (err) throw err;
        console.table(result);

    inquirer
        .prompt([
            
            {
                name: "id",
                message: "Select the id of the employee to be updated: ",
                type: "input",
            },
            {
                name: "role_id",
                message: "What role id will they be updating too: ",
                type: "input",
            },
            {
                name: "update_role",
                message: "Which role to update?",
                type: "list",
                choices: [

                    'Legal Manager',
                    'Lawyer',
                    'Legal',
                    'Engineering Manager',
                    'Software Engineer',
                    'Engineer',
                    'Financial Manager',
                    'Financial Analyst',
                    'Analyst',
                    'Sales Manager',
                    'Sales Lead',
                    'Sales',
                ],
            },
        ]).then(({ role_id, id }) => {
            connection.query('UPDATE employee SET role_id = ? WHERE id = ?', 
            [role_id, id], (err, result) => {
                if (err) throw err;
                viewAllEmployees();
            })
        })
        })
};
connection.connect((err) => {
    if (err) throw err;
    init();
});
