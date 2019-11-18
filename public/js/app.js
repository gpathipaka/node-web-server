console.log('client side java script file loaded')


fetch('http://localhost:3000/test').then((response)=>{
    console.log(response.json().then(data => {
        console.log(data)
    }))
})

const myForm = document.querySelector('form')
const search = document.querySelector('input')

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('testing....' + search.value)
})