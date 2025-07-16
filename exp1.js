const randomWords = require('random-words');
const figlet = require('figlet');

const word = randomWords(3);

figlet(word, function(err, data)  {
    if (err) {
        console.error("Something went wrong with figlet...");
        console.dir(err);
        return;
    }

    console.log(`Random Word: ${word}\n`);
    console.log(data);
});
