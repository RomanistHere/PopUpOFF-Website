const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.form__inp')
const textArea = document.querySelector('.form__area')
const popup = document.querySelector('.popup_overlay')

const browser = (function() {
    const test = function(regexp) {return regexp.test(window.navigator.userAgent)}
    switch (true) {
        case test(/edg/i): return "Microsoft Edge";
        case test(/trident/i): return "Microsoft Internet Explorer";
        case test(/firefox|fxios/i): return "Mozilla Firefox";
        case test(/opr\//i): return "Opera";
        case test(/ucbrowser/i): return "UC Browser";
        case test(/samsungbrowser/i): return "Samsung Browser";
        case test(/chrome|chromium|crios/i): return "Google Chrome";
        case test(/safari/i): return "Apple Safari";
        default: return "Other";
    }
})();

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}

form.addEventListener('submit', e => {
    e.preventDefault()
    let checked = []

    inputs.forEach(item => {
        if (item.checked) {
            checked.push(item.value)
        }
    })

    const send = {
        inputs: checked,
        comment: browser + ' || ' + textArea.value
    }

    fetch('https://romanisthere.com:3000/quiz', {
        method: "POST",
        body: JSON.stringify(send),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(handleErrors)
    .then(response => {
        form.reset()
        popup.classList.add('popup_overlay-show')
    })
    .catch(error => {
        console.log(error)
        alert('Something went wrong, sorry')
    })
})
