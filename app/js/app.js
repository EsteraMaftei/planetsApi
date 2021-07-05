
async function getApiUrl() {
    let response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/?filter%5B%5D=isPlanet,neq,true`)
    let data = await response.json()
    return data
}

async function getPlanets() {
    let planets = await getApiUrl()
    const source = document.querySelector('#planetsInfo').innerHTML
    const template = Handlebars.compile(source)
    const target = document.querySelector('#info')
    target.innerHTML += template(planets)

    document.querySelectorAll('.navbar-nav li').forEach(link => {
        link.addEventListener('click', e =>{
            const temp = document.querySelector('#planet-container')
            if (document.querySelectorAll('.active').length > 0) {
                document.querySelector('.active').classList.remove('active')
            } else if (temp) {
                temp.remove()
            }
            document.querySelector('#' + link.dataset.id).classList.add('active')
        })
    })
}
getPlanets()

document.querySelectorAll('li').forEach( el => {
    let nav = document.querySelector('.navbar-nav')
    el.addEventListener('click', e => {
        nav.querySelector('.nav-border').classList.remove('nav-border')
        el.classList.add('nav-border')
    })
})

