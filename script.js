const colors = [ 'black', 'red', 'pink', 'yellow', 'green', 'litegreen', 'darkyellow', 'gray', 'orange', 'purple', 'blue', 'brown', 'violet', 'white']
const buttonColor = document.querySelector('button')
let index = 0

buttonColor.addEventListener('click', colorBG)

function colorBG() {

    document.body.style.backgroundColor = colors[index]

    index = index + 1

    if (index >= colors.length) {
        index = 0
    }
}

/*function randowColor () {
    const randow = Math.floor(Math.random * colors.length)

    randowColor.close()
}*/