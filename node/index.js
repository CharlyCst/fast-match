fs = require("fs");
fastMatch = require("fast-match");

// let dataPath = "data/helloWorld.txt";
// let wordsPath = "data/wordsTest.txt";

let dataPath = "data/les-miserables.txt";
let wordsPath = "data/words.txt";

fs.readFile(dataPath, { encoding: "utf-8" }, (err, data) => {
  const lines = data.split("\n");
  fs.readFile(wordsPath, { encoding: "utf-8" }, (err, data) => {
    let words = data.split("\n");
    // console.log(lines);
    // console.log(words);

    // Initialize the matcher
    let matcher = fastMatch.Matcher.new(words);

    for (i = 0; i < 10; i++) {
      for (line of lines) {
        matcher.run(line);
      }
    }
  });
});

// let matcher = fastMatch.Matcher.new(["Hello", "Newton", "llo"]);
// console.log(matcher.run("Hello, World"));
