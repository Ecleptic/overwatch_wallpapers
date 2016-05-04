var jsonfile = require('jsonfile')
var file = '../../wallpapers_info.json'
var file2 = '../../wallpapers_info2.json'
var newobj




jsonfile.readFile(file2, function(err, obj) {
  // console.dir(obj)
  newobj = obj;
  // console.log(newobj);

  newobj.forEach(function(f) {

    console.log(f.src.slice(0,-4)+'_thumb'+f.src.slice(-4));
    // if (newobj.hasOwnProperty(i)) {
    //     console.log(i);
    // }
    thb = (f.src.slice(0,-4)+'_thumb'+f.src.slice(-4));

    f.thb=thb;
  });
  jsonfile.writeFile(file,newobj, {spaces: 2},function (err) {
    console.log(err);
  })
  // console.log(newobj);
});



// jsonfile.writeFile(file2,newobj,function (err) {
//   console.log(err);
// })

//
// json.sort(function(a, b) {
//     return parseFloat(a.src) - parseFloat(b.src);
// });
//
