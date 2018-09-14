'use strict';

var fse = require('fs-extra');

var filterFunc = (src, dest) => {
    if (fse.statSync(src).isDirectory()) {
        return true;
    }

    var isVue =  /.vue$/.test(src);
    var isScss = /.scss$/.test(src)

    if (isVue || isScss) {
        console.log('Collected ' + src);
    } else {
        // console.log('Skipped ' + src);
    }

    return isVue || isScss;
};

try {
    fse.copySync('./src', './lib', {
        filter: filterFunc
    });
} catch (e) {
    console.log(e);
}