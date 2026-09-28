// ServiceNow Transform Map - onBefore example
// Put this logic in an onBefore Transform Script.

(function runTransformScript(source, map, log, target) {

    // Normalize email
    if (source.email) {
        source.email = ('' + source.email).trim().toLowerCase();
    }

    // Normalize first and last names
    if (source.first_name) {
        source.first_name = ('' + source.first_name).trim();
    }

    if (source.last_name) {
        source.last_name = ('' + source.last_name).trim();
    }

    // Skip rows without a unique employee ID
    if (!source.employee_id) {
        ignore = true;
        log.warn('Skipped row because employee_id is empty.');
    }

})(source, map, log, target);


// ------------------------------------------------------------
// Optional onAfter example
// ------------------------------------------------------------
// Put this separately in an onAfter Transform Script if needed.

/*
(function runTransformScript(source, map, log, target) {

    log.info('Imported/updated user: ' + target.getDisplayValue());

})(source, map, log, target);
*/
