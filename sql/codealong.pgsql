SELECT * 
FROM accsoftwarebootcamp.employees;

SELECT first_name,
    last_name,
    first_name ||' '||last_name AS full_name
FROM accsoftwarebootcamp.employees;

SELECT first_name ||' '||last_name AS full_name,
    salary AS "Before Salary",
    salary *1.10 AS "New Salary"
FROM accsoftwarebootcamp.employees;

SELECT first_name ||' '||last_name AS full_name,
    salary AS "Before Salary",
    salary *1.10 AS "New Salary"
FROM accsoftwarebootcamp.employees
WHERE salary * 1.10 > 9000;

SELECT department_id
FROM accsoftwarebootcamp.employees;

SELECT DISTINCT department_id
FROM accsoftwarebootcamp.employees;

SELECT DISTINCT manager_id
FROM accsoftwarebootcamp.employees;

SELECT COUNT(department_id)
FROM accsoftwarebootcamp.employees;

SELECT employee_id, last_name, salary,
           commission_pct
    FROM   accsoftwarebootcamp.employees 
    WHERE commission_pct IS NOT NULL;

SELECT
  first_name,
  last_name,
  salary,
  commission_pct
FROM accsoftwarebootcamp.employees LIMIT 10;

SELECT first_name|| ' ' || last_name AS full_name,
    salary,
    commission_pct,
    COALESCE(commission_pct,0) +.10
FROM accsoftwarebootcamp.employees LIMIT 10;

SELECT EXTRACT(year FROM hire_date)
FROM employees;

SELECT last_name,
EXTRACT(year FROM hire_date)
FROM employees
WHERE EXTRACT(year FROM hire_date) > 2010;

SELECT MAX(salary),
MIN(salary)
FROM accsoftwarebootcamp.employees;

SELECT AVG(salary)
FROM accsoftwarebootcamp.employees;

SELECT last_name, salary
FROM accsoftwarebootcamp.employees
WHERE salary > 8504.5652173913043478;

SELECT last_name, salary
FROM accsoftwarebootcamp.employees
WHERE salary > (SELECT AVG(salary)
                FROM accsoftwarebootcamp.employees);

Select job_id, MAX(salary)
FROM accsoftwarebootcamp.employees
GROUP BY job_id
ORDER BY MAX(salary);

SELECT last_name, first_name, job_id, salary
FROM accsoftwarebootcamp.employees
ORDER BY last_name ASC, first_name DESC;

SELECT *
FROM accsoftwarebootcamp.locations
ORDER BY city;

SELECT *
FROM accsoftwarebootcamp.locations
ORDER BY postal_code;

SELECT s.saledate AS "sales date",
p.description AS "Product Name",
s.amount AS "sales Amount"
FROM hr.products p JOIN hr.sales s
ON p.productid = s.productid;



--Formats the date

SELECT to_char(s.saledate, 'MM/DD/YYYY') AS "sales date",
p.description AS "Product Name",
s.amount AS "sales Amount"
FROM hr.products p JOIN hr.sales s
ON p.productid = s.productid;


SELECT p.fname AS "first",
p.lname AS "last",
p.height,
p.weight,
t.name
FROM hr.players p LEFT JOIN hr.teams t
ON p.team_id = t.id;

