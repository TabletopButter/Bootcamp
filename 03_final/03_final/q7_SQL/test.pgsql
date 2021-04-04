SELECT  d.id AS "team_id", d.name AS "team_name", d.city, d.state, e.fname || ' ' || e.lname AS "fullanme", e.weight, 
CASE 
    WHEN e.weight>200 THEN 'Heavy'
    ELSE 'Medium'
END AS WEIGHT_CATEOGRY
FROM acc.hr.players e
JOIN acc.hr.teams d ON e.team_id = d.id
ORDER BY weight