# Test Cases

## TC01 – Insert new employee
Input: EMP001
Expected: One new target record is created.

## TC02 – Update existing employee
Run the same import again after changing EMP001's department.
Expected: The existing EMP001 record is updated because employee_id is coalesced.

## TC03 – Duplicate prevention
Run the same CSV twice.
Expected: No duplicate employee record for the same employee_id.

## TC04 – Missing employee ID
Remove employee_id from a row.
Expected: The row is ignored by the onBefore script.

## TC05 – Email normalization
Use `  USER@EXAMPLE.COM  ` as the source email.
Expected: Target email is normalized to `user@example.com`.

## TC06 – Inactive employee
Set active=false.
Expected: Target active field becomes false.
