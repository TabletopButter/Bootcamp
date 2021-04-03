/*select employees and their department names in a table_am_handler_in
make sure that employees who are not in a department are also included
*/

SELECT first_name || ' ' || last_name as "EMPLOYEE NAME", d.department_name as "DEPARTMENT NAME" 
FROM acc.hr.employees as e LEFT JOIN acc.hr.departments as d
ON e.department_id = d.department_id;

