var el = document.querySelector("#demo");
var text = 'iego Carvalho';
var interval = 150; 

function showText(i, text, speed ) {
    const char = text.split("").reverse();
    const typer =  setInterval(() => {

        if(!char.length) {
            return clearInterval(typer);
        }
        const next = char.pop()
        el.innerHTML += next;
    }, interval);
}

showText(el, text, interval)