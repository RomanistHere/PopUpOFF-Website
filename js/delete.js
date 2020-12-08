const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.form__inp')
const textArea = document.querySelector('.form__area')

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
        comment: textArea.value
    }

    console.log(send)

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
    })
    .catch(error => {
        console.log(error)
        alert('Something went wrong, sorry')
    })
})
