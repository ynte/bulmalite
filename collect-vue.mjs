import { glob, readFile, writeFile } from 'node:fs';

const tsProp = ' lang="ts"';

glob('src/components/**/*.vue', {}, function (err, files) {
    console.assert(err === null);

    for (const file of files) {
        console.log('Processing:', file);

        readFile(file, 'utf8', (err, data) => {
            let text = data.replace(tsProp, '');
            text = text.replace('.ts"', '.js"');

            writeFile(file.replace('src', 'dist'), text, function (err) {
                if (err !== null) {
                    console.log('Error:', file);
                    throw new Error(err);
                }
            });
        });
    }
});
