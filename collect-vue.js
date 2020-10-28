'use strict';

const glob = require('glob');
const fs = require('fs');

const tsProp = ' lang="ts"';

glob('src/components/**/*.vue', {}, function (err, files) {
    console.assert(err === null);

    for (const file of files) {
        console.log('Processing:', file);

        fs.readFile(file, 'utf8', (err, data) => {
            let text = data.replace(tsProp, '');
            text = text.replace('.ts"', '.js"');

            fs.writeFile(file.replace('src', 'dist'), text, function (err) {
                if (err !== null) {
                    console.log('Error:', file);
                    throw new Error(err);
                }
            });
        });
    }
});
