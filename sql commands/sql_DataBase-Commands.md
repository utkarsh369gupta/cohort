## while creating the database, upper or lower case does not matters.

CREATE DATABASE mydb;  -> will create database

USE mydb;

drop database mydb;   -> will delete database

ALTER DATABASE mydb READ ONLY = 1;  -> this will only allow to read only database

ALTER DATABASE mydb READ ONLY = 0;  -> this will remove the database from read only mode.

## think that database is kind of folder which contains a bunch of tables.

# to create a table employees:

CREATE TABLE employees(
    employee_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hourly_pay DECIMAL(5,2),
    hire_data DATE
);

$
SELECT * FROM employees; to select a table

RENAME TABLE employees TO workers; -> to rename the table name.

DROP TABLE employees; -> to delete the table employee.

ALTER TABLE employees ADD PHONE_NUMBER VARCHAR(15);  want to add a new column

alter table employees rename column phone_number to email; want to change the name of column

alter table employees modify column email varchar(50); want to modify the datatype of email

alter table employees modify email varchar(50) after last_name; want to change the order of column

alter table employees modify email varchar(50) first; want to make it as a first column

alter table employees drop column email; want ot drop the column
$



## how to insert rows or the data in a table:
$
insert into employees values(1, "utkarsh", "gupta", 25.50, "2023-01-02");

insert into employees values(), (), (),(); to insert multiple data at the same time.

insert into employees (employee_id, first_name, last_name) values (6, "khushi", "yadav"); insert insufficient data in the table. 
$


## Select data from the table:
$
select first_name, last_name from employees; you can also change the order of columns

select * from employees where first_name = "utkarsh"; want to apply certain condition to gain the data

select * from employees where hire_date <= "2023-01-03";

select * from employees where hire_date is null; if to data of employees have hire_date as null.
                                        is not null;
$


## update and delete data from the table:
$
update employees set hourly_pay = 10.25 where employee_id = 1;

update employees set hourly_pay = null where employee_id = 1;

delete from employees;  it will delete all the rows from our table

delete from employees where employee_id = 1; to delete the perticular row or data
$


## autocommit, commit and rollback
$
set autocommit = off; 
aftertyping this, whereevery you write commit your status will be stored their safely and if you want to rollback then you can by typing:
rollback;
$

## CURRENT_DATE() & CURRENT_TIME()

$
create table dt(
    my_date date,
    my_time time,
    my_datetime datetime
);

insert into dt values(CURRENT_DATE(), CURRENT_TIME(), NOW());
$

## unique constraint
$
crete table products(
    product_id INT,
    product_name VARCHAR(25) UNIQUE,
    price DECIMAL(4,2)
);

alter table products add constraint unique(product_name);
$

## not null constraint
$
crete table products(
    product_id INT,
    product_name VARCHAR(25),
    price DECIMAL(4,2) NOT NULL
);

alter table products modify price decimal(4,2) not null;
$


## check constraint
$
CREATE TABLE employees(
    employee_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hourly_pay DECIMAL(5,2),
    hire_data DATE,
    constraint chk_hourly_pay check (hourly_pay >= 10.00)
);

alter table employees add constraint chk_hourly_payN check (hourly_pay >= 10.00);
$

## default constraint

$
create table products(
    product_id INT,
    product_name VARCHAR(25),
    price DECIMAL(4,2) default 0
);

alter table products alter price set default 0;

create table transaction(
    transaction_id INT, amount decimal(5,2),
    transaction_date datetime default now()
)
$


## primary key: only column can be a primary key
$
create table transaction(
    transaction_id int primary key,
    amount decimal(5,2)
);

alter table transaction add constraint primary key(transaction_id);

$

## auto_increment
$
create table transaction(
    transaction_id int primary key auto_increment,
    amount decimal(5,2)
);

alter table transactions auto_increment  = 100;
$

## foreign key: it is the primary key of the another table, which you want to join with current table.
$
create table customers(
    customer_id int primary key auto_increment, 
    first_name varchar(50),
    last_name varchar(50)
)

create table transactions(
    transaction_id int primary key auto_increment, 
    amount decimal(5,2),
    customer_id(int),
    add constraint fk foreign key(customer_id) references customers(customer_id)
);

alter table transactions drop foreign key fk;

delete from customers where customer_id = 3;  
// you will not able to delete this due to foreign key constraint
$

## joins

$

$

















