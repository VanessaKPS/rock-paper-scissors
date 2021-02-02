const options = ['paper', 'scissors', 'rock']

let counter = 0

const gameOn = (input) => {
    let computerChoice = options[Math.floor(Math.random() * 3)]
    setBorderColor(input.target.classList[0], 'player')
    setBorderColor(computerChoice, 'computer')
    verdict(input.target.classList[0], computerChoice)
    document
        .querySelector('.player-pick')
        .setAttribute('src', `images/icon-${input.target.classList[0]}.svg`)

    document
        .querySelector('.computer-pick')
        .setAttribute('src', `images/icon-${computerChoice}.svg`)

    document.querySelector('.play-area').classList.add('hide')

    document.querySelector('.game-on').classList.remove('hide')
}

const setBorderColor = (choice, user) => {
    if (choice === 'paper') {
        document.querySelector(`.${user}-wrapper`).style.borderColor =
            'hsl(230, 89%, 62%) hsl(230, 89%, 65%)'
    } else if (choice === 'scissors') {
        document.querySelector(`.${user}-wrapper`).style.borderColor =
            'hsl(39, 89%, 49%)  hsl(40, 84%, 53%)'
    } else {
        document.querySelector(`.${user}-wrapper`).style.borderColor =
            'hsl(349, 71%, 52%)  hsl(349, 70%, 56%)'
    }
}

const verdict = (playerHand, computerHand) => {
    if (playerHand === computerHand) {
        document.querySelector('.verdict').innerHTML = 'DRAW'
        counter = counter
    } else if (playerHand === 'paper') {
        if (computerHand === 'scissors') {
            document.querySelector('.verdict').innerHTML = 'YOU LOSE'
            counter = counter
        } else if (computerHand === 'rock') {
            document.querySelector('.verdict').innerHTML = 'YOU WIN'
            counter++
        }
    } else if (playerHand === 'scissors') {
        if (computerHand === 'rock') {
            document.querySelector('.verdict').innerHTML = 'YOU LOSE'
            // counter = counter;
        } else if (computerHand === 'paper') {
            document.querySelector('.verdict').innerHTML = 'YOU WIN'
            counter++
        }
    } else if (playerHand === 'rock') {
        if (computerHand === 'paper') {
            document.querySelector('.verdict').innerHTML = 'YOU LOSE'
            counter = counter
        } else if (computerHand === 'scissors') {
            document.querySelector('.verdict').innerHTML = 'YOU WIN'
            counter++
        }
    }
    document.querySelector('.score-value').innerHTML = counter
    // console.log(counter);
}

/**************USER INTERACTION ****************/

document.querySelector('.paper').addEventListener('click', gameOn)
document.querySelector('.scissors').addEventListener('click', gameOn)
document.querySelector('.rock').addEventListener('click', gameOn)

/******************RESTART DISPLAY************/
document.querySelector('.restart').addEventListener('click', function () {
    document.querySelector('.play-area').classList.remove('hide')
    document.querySelector('.game-on').classList.add('hide')
})

/****************RULES*****************/
document.querySelector('.rules-link').addEventListener('click', function () {
    document.querySelector('.rules-bg').classList.remove('hide')
    document.querySelector('.rules-text').classList.add('reveal')
})

document.querySelector('.close-icon').addEventListener('click', function () {
    document.querySelector('.rules-bg').classList.add('hide')
    document.querySelector('.rules-text').classList.remove('reveal')
})
