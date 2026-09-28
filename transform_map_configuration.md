# Transform Map Configuration

## Import Set
- Import table: automatically generated staging/import-set table
- Source: `employee_import.csv`

## Target
- Recommended demo target: `sys_user`

## Suggested Field Mapping

| Source field | Target field |
|---|---|
| employee_id | u_employee_id |
| first_name | first_name |
| last_name | last_name |
| email | email |
| department | u_department |
| active | active |

## Coalesce
Set `employee_id -> u_employee_id` as the coalesce mapping.

This makes the Transform Map update an existing matching record instead of creating a duplicate.

## Transform Event Scripts
Use the JavaScript in `transform_map_script.js` in the appropriate Transform Map script fields.
