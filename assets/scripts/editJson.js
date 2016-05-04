var jsonfile = require('jsonfile')
var file = 'wallpapers_info.json'
var file2 = 'wallpapers_info2.json'
var newobj

jsonfile.readFile(file, function(err, obj) {
  newobj = obj;
  newobj.forEach(function(f) {
    console.log(f.src.slice(0,14)+'thumbs'+f.src.slice(40,-4)+'_thumb'+f.src.slice(-4));
    thb = (f.src.slice(0,14)+'thumbs'+f.src.slice(40,-4)+'_thumb'+f.src.slice(-4));
    f.thb=thb;
  });

  // write the object 'newobj' to 'file' with correct spacing
  jsonfile.writeFile(file,newobj, {spaces: 2},function (err) {
    console.log(err);
  })
});
