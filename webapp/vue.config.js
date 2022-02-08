module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
    ? '../backend'
    : 'dist',
    indexPath: process.env.NODE_ENV === 'production'
    ?  'templates/index.html'
    : 'index.html',
    assetsDir: process.env.NODE_ENV === 'production'
    ?  'static/'
    : ''
}