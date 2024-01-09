// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function(error, data){
    data = data + "\nhello this is appended data that i want to add to the sample text file.";
    console.log(data);
    fs.writeFile('sample.txt', data, function(){});

})