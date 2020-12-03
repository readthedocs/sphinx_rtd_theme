#!/usr/bin/env node

const package = require('../package.json');

// Sorry everyone, this is the closest we can get to commenting on package.json
// dependencies :(
if (package.devDependencies['bourbon-neat'] !== '~1.9') {
    // Wyrm is not compatible with Neat 2.0+, and Neat 1.9 at least pins a
    // node-sass version that doesn't require Python 2. The changes to Wyrm to
    // support Neat 2.0+ are all fairly minor changes, but it deeply affects the
    // grid system and might be more of a liability than an old release of Neat.
    // See: https://github.com/readthedocs/sphinx_rtd_theme/pull/771
    console.error(
        'bourbon-neat 1.9 is required, Wyrm is not compatible with Neat 2.0+.'
    );
    console.error(
        'The expected selector for the bourbon-neat dependency in package.json is "~1.9".'
    );
    process.exit(1);
}
