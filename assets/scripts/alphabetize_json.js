/*

 This script should be run from it's origin in '/overwatch_wallpapers/assets/scripts/alphabetize_json.js'

 */


var jsonfile = require('jsonfile')
var file = '../../wallpapers_info.json'
// var file2 = 'wallpapers_info2.json'
var newobj

function sorting(json_object, key_to_sort_by) {
    function sortByKey(a, b) {
        var x = a[key_to_sort_by];
        var y = b[key_to_sort_by];
        // console.log("x: " +x);
        // console.log("y: " +y);
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    json_object.sort(sortByKey);
    // console.log(json_object);
    //
    jsonfile.writeFile(file, json_object, {spaces: 2}, function (err) {
        console.log(err);
    })

}


jsonfile.readFile(file, function (err, obj) {
    // console.dir(obj)
    newobj = sorting(obj, 'src');
    // console.log(obj);
});
