var src = './src';
var dest = './build';

module.exports = {
    browserSync: {
        browser: "google chrome",
        server: {
            baseDir: [dest]
        },
        files: [
            dest + '/**',
        ]
    },
    images: {
        src: src + '/img/**',
        dest: dest + '/img'
    },
    html: {
        src: src + '/*.html',
        dest: dest + '/js'
    },
    browserify: {
        bundleConfigs: [{
            entries: src + '/js/app.jsx',
            dest: dest,
            outputName: 'app.js'
        }]
    }
};
