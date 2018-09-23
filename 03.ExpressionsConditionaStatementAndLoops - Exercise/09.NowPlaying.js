function displayPlayerInfo(input) {
    let trackName = input[0];
    let artist = input[1];
    let duration = input[2];

    console.log(`Now Playing: ${artist} - ${trackName} [${duration}]`);
}

displayPlayerInfo(['Number One', 'Nelly', '4:09']);