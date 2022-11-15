require('./utils/dbmongocon');
const Game = require('./models/game')
const Publisher = require('./models/publisher')

async function createPublisher(companyName, firstParty, website) {
    const publisher = new Publisher({
        companyName,
        firstParty,
        website
    });

    const result = await publisher.save();
    console.log(result);
}

async function createGame(title, publisher) {
    const publisherId = await Publisher.findOne({'companyName': publisher}).select('_id')
    const game = new Game({
        'title': title,
        'publisher': publisherId      
    });
    const result = await game.save();
    console.log(result);
}

async function listGames() {
    const games = await Game
        .find()
        .populate('publisher', 'companyName website -_id')
        .select('title publisher -_id');
    console.log(games);
}

//createPublisher('Nintendo', true, 'https://www.nintendo.com/');
// createGame('GTA', 'Nintendo');
//listGames()