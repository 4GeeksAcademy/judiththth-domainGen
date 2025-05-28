
let pronouns = ['la', 'nuestra', 'tu'];
let adjs = ['gran', 'pequeña', 'bonita'];
let nouns = ['ciudad', 'aldea', 'villa'];

function list() {
    for (let pronoun of pronouns) {
        for (let adj of adjs) {
            for (let noun of nouns) {
                let domains = pronoun + adj + noun;
                console.log("www." + domains + ".es");
            }
        }
    }
}


