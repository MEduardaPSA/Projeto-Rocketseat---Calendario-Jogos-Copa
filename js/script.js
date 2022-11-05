function createGame(playerOne, hour, playerTwo){
    return ` 
    <li>
        <img src="./icons/${playerOne}.svg" alt="${playerOne}">
        <strong>${hour}</strong>
        <img src="./icons/${playerTwo}.svg" alt="${playerTwo}">
    </li>`
}


let delay = -0.4;
function createCard(date, day, games){
    delay += 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2 class="card-date">${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div> `
}

document.querySelector("#cards").innerHTML =

        createCard('24/11', 'Quinta',
        createGame('uruguay-flag', '10:00', 'south-korea-flag') + 
        createGame('portugal-flag', '13:00', 'ghana-flag') +
        createGame('brazil-flag', '16:00', 'serbia-flag')) +

        createCard('28/11', 'Segunda',
        createGame('south-korea-flag', '10:00', 'ghana-flag') +
        createGame('brazil-flag', '13:00', 'switzerland-flag') +
        createGame('portugal-flag', '16:00', 'uruguay-flag')) +
        

        createCard('02/12', 'Sexta',
        createGame('ghana-flag', '12:00', 'uruguay-flag') +
        createGame('brazil-flag', '16:00', 'cameroon-flag')) +

        createCard('01/12', 'Quinta',
        createGame('croatia-flag', '12:00', 'belgium-flag') +
        createGame('costaRica-flag', '16:00', 'germany-flag'))
        
