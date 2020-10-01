export function getRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);

    let itLandedOn;

    if (randomNumber === 1) {
        itLandedOn = 'Bear';

    } 

    if (randomNumber === 2) {
        itLandedOn = 'Hunter';

    }

    if (randomNumber === 3) {
        itLandedOn = 'Ninja';
    }

    return itLandedOn;

}

// export function doesUserWin(guess, value) {
//     return guess === value;
// }

export function compareResults(userThrow, computerThrow) {
    if ((userThrow === 'Bear' && computerThrow === 'Hunter') || 
        (userThrow === 'Hunter' && computerThrow === 'Ninja') || 
        (userThrow === 'Ninja' && computerThrow === 'Bear')) {
        return 'lose';
    }
    if ((userThrow === 'Bear' && computerThrow === 'Ninja') || 
        (userThrow === 'Ninja' && computerThrow === 'Hunter') || 
        (userThrow === 'Hunter' && computerThrow === 'Bear')) {
        return 'win';
    }
    if ((userThrow === 'Ninja' && computerThrow === 'Ninja') || 
        (userThrow === 'Hunter' && computerThrow === 'Hunter') || 
        (userThrow === 'Bear' && computerThrow === 'Bear')) {
        return 'draw';
    }
}