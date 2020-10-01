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
    if (userThrow === 'Bear' && computerThrow === 'Hunter') {
        return 'lose';
    }
    if (userThrow === 'Hunter' && computerThrow === 'Ninja') {
        return 'lose';
    }
    if (userThrow === 'Ninja' && computerThrow === 'Bear') {
        return 'lose';
    }
    if (userThrow === 'Bear' && computerThrow === 'Ninja') {
        return 'win';
    }
    if (userThrow === 'Ninja' && computerThrow === 'Hunter') {
        return 'win';
    }
    if (userThrow === 'Hunter' && computerThrow === 'Bear') {
        return 'win';
    }
    if (userThrow === computerThrow) {
        return 'draw';
    }
   
}