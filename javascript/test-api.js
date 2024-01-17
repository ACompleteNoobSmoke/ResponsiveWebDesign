async function myFunction() {
    console.log('test');
    var title = "Resident Evil 4"
    var transformedtitle = title.replaceAll(' ', '%').toLowerCase();
    console.log(transformedtitle);
    const res = await fetch(`https://api.rawg.io/api/games?key=798f6727eeee4984a6b46812fd89441f&search=${transformedtitle}`)
    const results = await res.json();

    const game =results.results.find((game) => ( game.name === 'Resident Evil 4' && game.platforms.filter(p => p.name === 'Playstation 5')))
    

    console.log(game);

}
