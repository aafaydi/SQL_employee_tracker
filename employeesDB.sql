DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE     employeesDB;

USE employeesDB;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) DEFAULT ' ' NOT NULL,
    PRIMARY KEY (id)
);



CREATE TABLE ROLE(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30),
    salary DECIMAL (10, 2) DEFAULT 0,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);