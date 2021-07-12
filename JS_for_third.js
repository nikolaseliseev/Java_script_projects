document.querySelector('form').onsubmit = function(event) {
    event.preventDefault();
    console.log(event);

    let form = event.target;
    console.log(form['name'].value);
    console.log(form['like'].value);
    console.log(form['likeHamster'].checked);
    console.log(form['education'].value);
    console.log(form['agree'].checked);

    if (!form['agree'].checked) {
        document.querySelector('label[for=agree]').style.color = "red";
        document.querySelector('label[for=agree]').style.fontWeight = "bold";
    }
    else {
        document.querySelector('label[for=agree]').style.color = null;
        document.querySelector('label[for=agree]').style.fontWeight = null;

        let message = form['name'].value;
        if (form['education'].value == "school") message += " учится в школе и ";
        else if (form['education'].value == "univer") message += " учится в университете и ";
        else if (form['education'].value == "work") message += " работает и ";
        else if (form['education'].value == "other") message += " ничего не расскажет, но ";
        else message += " просто ";

        message += "обожает ";
        
        if (form['like'].value == "cats") message += "кошек.";
        else if (form['like'].value == "dogs") message += "собак.";

        if (form['likeHamster'].checked) message += " А так же хомяков.";

        alert(message);

        let newBlock = document.createElement("p");
        newBlock.innerText = message;
        document.querySelector("body").appendChild(newBlock);
    }
}