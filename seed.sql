USE employeesDB;

INSERT INTO department(department_name)
VALUES ('Engineering'), ('Sales'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Legal Manager', 230000, 1),
('Lawyer', 180000, 1),
('Legal', 150000, 1),
('Engineering Manager', 170000, 2),
('Software Engineer', 100000, 2),
('Engineer', 90000, 2),
('Financial Manager', 140000, 3),
('Financial Analyst', 90000, 3),
('Analyst', 80000, 3),
('Sales Manager', 90000, 4),
('Sales Lead', 70000, 4),
('Sales', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Rachel', 'Thiim','1', '1'),
('Ana', 'Moreno','2', '2'),
('Austin', 'Smith','3', '3'),
('Cesar', 'Campos','4', '4'),
('Denis', 'Salvino','5', '1'),
('George', 'Huliaris','6', '2'),
('Matthew', 'Miller','7', '3'),
('Michael', 'Galloway','8', '4'),
('Rodgrigo', 'Galicia','9', '1'),
('Sean', 'Francis','10', '2'),
('Susan', 'Fuijii','11', '3'),
('David', 'Roe','12', '4');





