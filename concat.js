const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/cvs-elements/runtime.js',
        './dist/cvs-elements/polyfills.js',
        // './dist/cvs-elements/scripts.js',
        './dist/cvs-elements/main.js',
    ]
    await fs.ensureDir('elements');
    await concat(files, 'elements/elements.js');;
    await fs.copyFile('./dist/cvs-elements/styles.css', 'elements/styles.css');
    // await fs.copy('./dist/cvs-elements/assets/', 'elements/assets/' );
})();