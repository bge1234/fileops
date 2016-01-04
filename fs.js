var fs = require("fs");

fs.readFile('stuff.txt', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});

fs.appendFile('stuff.txt', 'Here is the new stuff.\n', function (err) {
  if (err) return console.log(err);
});

fs.writeFile('newstuff.txt', 'Here is the new stuff file.', function (err) {
  if (err) return console.log(err);
});
