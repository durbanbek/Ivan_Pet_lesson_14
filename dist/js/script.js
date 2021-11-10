class Options {
    constructor(height, width, color, bg, paddingTop, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.color = color;
        this.bg = bg;
        this.paddingTop = paddingTop;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let les = document.querySelector('.lesson__block'),
            elem = document.createElement('div');
        les.appendChild(elem);
        
        let param = `height: ${this.height}px;
                        width: ${this.width}px;
                        color: ${this.color};
                        background-color: ${this.bg};
                        padding-top: ${this.paddingTop}px;
                        font-size: ${this.fontSize}px;
                        text-align: ${this.textAlign};
                        //margin-bottom: ${this.marginBottom}px`;
        
        elem.style.cssText = param;
        elem.textContent = 'hello';
    }
}

const item = new Options(200, 400, 'white', 'blue', 20, 30, 'center');

item.createDiv();

//* -------------------

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //* request.open(method, url, async, login, pass);

    request.open('GET', '../json/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //* status
    //* statusText
    //* responseText / response
    //* readyState

    request.addEventListener('readystatechange', function() {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = (inputRub.value / data.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то не так!";
        }
    });
});



