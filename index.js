function superbowlWin(someArray) {
    let victories = someArray.find( ({ result }) => result === 'W');
    if (victories === undefined) {
        return undefined;
    }
    return victories.year;
}