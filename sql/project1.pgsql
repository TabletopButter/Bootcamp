-- Task 1
SELECT first_name, last_name, salary
FROM accsoftwarebootcamp.employees
WHERE salary > 3000 AND salary <4000;

SELECT first_name, last_name, salary
FROM accsoftwarebootcamp.employees
WHERE salary BETWEEN  3000 AND 4000;

--Task 2
SELECT first_name, last_name, salary
FROM accsoftwarebootcamp.employees
WHERE LENGTH(last_name) >6;

SELECT first_name, LEFT(last_name,6), salary
FROM accsoftwarebootcamp.employees
WHERE LENGTH(last_name) >6;

--Task 3

SELECT first_name, last_name, TO_CHAR(hire_date, 'MM/DD/YYYY') AS "Hire Date", salary
FROM accsoftwarebootcamp.employees
WHERE salary > 8000 AND EXTRACT( YEAR FROM hire_date)>1996;

SELECT first_name, last_name, salary
FROM accsoftwarebootcamp.employees
WHERE salary = (SELECT min(salary) FROM accsoftwarebootcamp.employees)

-- I multiplied instead of just adding, adding just a commision pct to the salary total didnt make sense
SELECT first_name, last_name, TO_CHAR(hire_date, 'MM/DD/YYYY') AS "Hire Date", salary, commission_pct, COALESCE(commission_pct, 0)* salary+salary AS "Total Compensation"
FROM accsoftwarebootcamp.employees
WHERE salary > 8000 AND EXTRACT( YEAR FROM hire_date)>1996;

--Task 4



