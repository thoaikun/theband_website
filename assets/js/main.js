function imageSlider() {
    var id = 1
    var sliderImage = document.querySelector('#slider')
    var destination = document.querySelector('.showInfo>h3')
    var solgan = document.querySelector('.showInfo>p>b')
    sliderImage.style.backgroundImage= 'url(/TheBand/assets/images/la.jpg)'
    destination.innerHTML = "Los Angeles"
    solgan.innerHTML = "We had the best time playing at Venice Beach!"
    setInterval(function() {
        if (id === 0) {
            sliderImage.style.backgroundImage = 'url(assets/images/la.jpg)'
            destination.innerHTML = "Los Angeles"
            solgan.innerHTML = "We had the best time playing at Venice Beach!"
            id = 1
        }
        else if (id === 1) {
            sliderImage.style.backgroundImage = 'url(assets/images/ny.jpg)'
            destination.innerHTML = "New York"
            solgan.innerHTML = "The atmosphere in New York is lorem ipsum."
            id = 2
        }
        else {
            sliderImage.style.backgroundImage = 'url(assets/images/chicago.jpg)'
            destination.innerHTML = "Chicago"
            solgan.innerHTML = "Thank you, Chicago - A night we won't forget."
            id = 0
        }
    }, 2500)
}

function navigateBar() {
    var menuButton = document.querySelector('#header>div:last-child')
    var navBar = document.getElementById('header')
    menuButton.addEventListener("click", function() {
        var isClose = navBar.clientHeight === 50
        if (isClose) {
            navBar.classList.add('openNav')
            navBar.classList.remove('closeNav')
        }
        else {
            navBar.classList.add('closeNav')
            navBar.classList.remove('openNav')
        }
    })

    var navigateList = document.querySelectorAll('#navigate>li')
    navigateList.forEach(function(navigateButton) {
        navigateButton.addEventListener('click', function() {
            navBar.classList.add('closeNav')
            navBar.classList.remove('openNav')
        })
    })
}

function buyTicketBox() {
    var closebutton = document.querySelector(".cancel-or-need-help .close-button")
    closebutton.addEventListener('click', function() {
        document.querySelector('.buy-ticket-box').classList.remove('active-buy-box')
    })

    var buyTicketButtons = document.querySelectorAll('#date .buy-ticket')
    buyTicketButtons.forEach(button=> {
        button.addEventListener('click', function() {
            document.querySelector('.buy-ticket-box').classList.add('active-buy-box')
        })
    })
}


navigateBar()
imageSlider()
buyTicketBox()
