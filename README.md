# Import Data using Transform Maps – ServiceNow

## Objective
Import employee data from a CSV source into the ServiceNow `sys_user` table using an Import Set and Transform Map.

## Files
- `employee_import.csv` – sample source data
- `transform_map_script.js` – example transform scripts
- `transform_map_configuration.md` – field mappings and setup
- `test_cases.md` – validation scenarios

## ServiceNow Setup
1. Create a Data Source using `employee_import.csv`.
2. Load the data into an Import Set.
3. Create a Transform Map for the target table `sys_user`.
4. Set `u_employee_id` (or another unique employee identifier) as the coalesce field.
5. Map the source fields to target fields.
6. Add the supplied script logic where required.
7. Run Transform and verify the imported records.

> Note: Custom fields such as `u_employee_id` and `u_department` must exist on your target table if you use them. If they do not exist, map the corresponding source values to your organization's available fields.
