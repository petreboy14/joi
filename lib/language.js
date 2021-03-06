// Load modules


// Declare internals

var internals = {};


exports.errors = {
    any: {
        unknown: 'the key {{key}} is not allowed',
        invalid: 'the value of {{key}} is not allowed to be {{value}}',
        empty: 'the value of {{key}} is not allowed to be empty',
        validate: {
            allowOnly: 'the value of {{key}} must be one of {{value}}'
        }
    },
    array: {
        base: 'the value of {{key}} must be an array',
        includes: 'the {{key}} array value in position {{pos}} does not match any of the allowed types',
        'includes-single': 'the {{key}} array value in position {{pos}} fails because {{reason}}',
        excludes: 'the value {{value}} in {{key}} cannot violates exclusion rule {{pos}}',
        min: 'the length of {{key}} must include at least {{value}} items',
        max: 'the length of {{key}} must include less than (or equal to) {{value}} items',
        length: 'the length of {{key}} must include {{value}} items'
    },
    boolean: {
        base: 'the value of {{key}} must be a boolean'
    },
    binary: {
        base: 'the value of {{key}} must be a buffer or a string',
        min: 'the length of {{key}} must be at least {{value}}',
        max: 'the length of {{key}} must be less than (or equal to) {{value}}',
        length: 'the length of {{key}} must be {{value}}'
    },
    date: {
        base: 'the value of {{key}} must be a number of milliseconds or valid date string',
        min: 'the value of {{key}} must be larger than or equal to {{value}}',
        max: 'the value of {{key}} must be less than or equal to {{value}}'
    },
    function: {
        base: 'the value of {{key}} must be a Function'
    },
    object: {
        base: 'the value of {{key}} must be an object',
        allowUnknown: 'the key {{key}} is not allowed',
        rename: {
            multiple: 'cannot rename {{from}} because multiple renames are disabled and another key was already renamed to {{to}}',
            override: 'cannot rename {{from}} because override is disabled and target {{to}} exists'
        },
        with: '{{key}} missing required peer {{peer}}',
        without: '{{key}} conflict with forbidden peer {{peer}}',
        xor: {
            conflict: 'conflict within exclusive peers {{peers}}',
            missing: 'at least one of {{peers}} is required'
        },
        or: 'missing at least one of alternative peers {{peers}}'
    },
    number: {
        base: 'the value of {{key}} must be a number',
        min: 'the value of {{key}} must be larger than or equal to {{value}}',
        max: 'the value of {{key}} must be less than or equal to {{value}}',
        float: 'the value of {{key}} must be a float or double',
        int: 'the value of {{key}} must be an integer'
    },
    string: {
        base: 'the value of {{key}} must be a string',
        min: 'the length of {{key}} must be at least {{value}} characters long',
        max: 'the length of {{key}} must be less than or equal to {{value}} characters long',
        length: 'the length of {{key}} must be {{value}} characters long',
        alphanum: 'the value of {{key}} must only contain alpha-numeric characters',
        token: 'the value of {{key}} must only contain alpha-numeric and underscore characters',
        regex: 'the value of {{key}} must match the regular expression {{value}}',
        email: 'The value of {{key}} must be a valid email',
        isoDate: 'the value of {{key}} must be a valid ISO 8601 date',
        guid: 'the value of {{key}} must be a valid GUID'
    }
};
