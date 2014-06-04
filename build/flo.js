var flo = require('fb-flo'),
    path = require('path'),
    fs = require('fs');

var server = flo( '../', 
    {
    port: 8888,
    host: 'localhost',
    verbose: true,
    glob: [ '**/*.js', '**/*.css' ]
  }, resolver);

server.once('ready', function() {
  console.log('Ready!');
});

function resolver(filepath, callback) {

  console.log("-----------------");
  console.log(filepath);
  console.log(callback);
  console.log("-----------------");

  callback({
    resourceURL: '../javascript/test' + path.extname(filepath),
    contents: fs.readFileSync('../' + filepath),
    reload: true
  });
}
