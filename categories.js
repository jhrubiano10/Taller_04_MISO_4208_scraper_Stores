//Listado de categorías...
const categories = [
    "BOOKS",
    "BUSINESS",
    "EDUCATION",
    "ENTERTAINMENT",
    "FINANCE",
    "FOOD_AND_DRINK",
    "GAMES",
    "GAMES_ACTION",
    "GAMES_ADVENTURE",
    "GAMES_ARCADE",
    "GAMES_BOARD",
    "GAMES_CARD",
    "GAMES_CASINO",
    "GAMES_EDUCATIONAL",
    "GAMES_MUSIC",
    "GAMES_PUZZLE",
    "GAMES_RACING",
    "GAMES_ROLE_PLAYING",
    "GAMES_SIMULATION",
    "GAMES_SPORTS",
    "GAMES_STRATEGY",
    "GAMES_TRIVIA",
    "GAMES_WORD",
    "HEALTH_AND_FITNESS",
    "LIFESTYLE",
    "NAVIGATION",
    "MEDICAL",
    "MUSIC",
    "NEWS",
    "PHOTO_AND_VIDEO",
    "PRODUCTIVITY",
    "SHOPPING",
    "SOCIAL_NETWORKING",
    "SPORTS",
    "UTILITIES",
    "TRAVEL",
    "WEATHER"
];

exports.convalidateStore = [
    {base : 'BOOKS', replace : 'BOOKS_AND_REFERENCE'},
    {base : 'GAMES', replace : 'GAME'},
    {base : 'GAMES_ACTION', replace : 'GAME_ACTION'},
    {base : 'GAMES_ADVENTURE', replace : 'GAME_ADVENTURE'},
    {base : 'GAMES_ARCADE', replace : 'GAME_ARCADE'},
    {base : 'GAMES_BOARD', replace : 'GAME_BOARD'},
    {base : 'GAMES_CARD', replace : 'GAME_CARD'},
    {base : 'GAMES_CASINO', replace : 'GAME_CASINO'},
    {base : 'GAMES_EDUCATIONAL', replace : 'GAME_EDUCATIONAL'},
    {base : 'GAMES_MUSIC', replace : 'GAME_MUSIC'},
    {base : 'GAMES_PUZZLE', replace : 'GAME_PUZZLE'},
    {base : 'GAMES_RACING', replace : 'GAME_RACING'},
    {base : 'GAMES_ROLE_PLAYING', replace : 'GAME_ROLE_PLAYING'},
    {base : 'GAMES_SIMULATION', replace : 'GAME_SIMULATION'},
    {base : 'GAMES_SPORTS', replace : 'GAME_SPORTS'},
    {base : 'GAMES_STRATEGY', replace : 'GAME_STRATEGY'},
    {base : 'GAMES_TRIVIA', replace : 'GAME_TRIVIA'},
    {base : 'GAMES_WORD', replace : 'GAME_WORD'},
    {base : 'NAVIGATION', replace : 'MAPS_AND_NAVIGATION'},
    {base : 'MUSIC', replace : 'MUSIC_AND_AUDIO'},
    {base : 'NEWS', replace : 'NEWS_AND_MAGAZINES'},
    {base : 'PHOTO_AND_VIDEO', replace : 'PHOTOGRAPHY'},
    {base : 'SOCIAL_NETWORKING', replace : 'SOCIAL'},
    {base : 'UTILITIES', replace : 'TOOLS'},
    {base : 'TRAVEL', replace : 'TRAVEL_AND_LOCAL'}
];

exports.validateCategory = (compare) => {
    let exist = false;
    for(let category of categories) {
        if(category === compare) {
            exist = true;
            break;
        }
    }
    return exist;
};

module.exports.categories = categories;