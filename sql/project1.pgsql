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

SELECT first_name || ' ' || last_name AS "Full Name",
department_name AS "Department"
FROM accsoftwarebootcamp.employees e JOIN accsoftwarebootcamp.departments d
ON e.department_id = d.department_id
WHERE d.department_name = 'Sales';

--Task 5

SELECT e.first_name, e.last_name, e.email, d.department_name, l.city
FROM accsoftwarebootcamp.employees e 
JOIN accsoftwarebootcamp.departments d ON e.department_id = d.department_id
JOIN accsoftwarebootcamp.locations l ON d.location_id = l.location_id
WHERE l.city='Seattle';

--Task 6
SELECT e.first_name, e.last_name,mgr.first_name || ' ' || mgr.last_name AS "Manager Full Name", e.email, d.department_name, l.city
FROM accsoftwarebootcamp.employees e
LEFT JOIN accsoftwarebootcamp.employees mgr ON e.manager_id = mgr.employee_id
JOIN accsoftwarebootcamp.departments d ON e.department_id = d.department_id
JOIN accsoftwarebootcamp.locations l ON d.location_id = l.location_id
WHERE l.city='Seattle';

--Task 7



