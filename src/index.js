import "./styles.css"
import { todo } from './todo.js'


const testDiv = document.createElement('button')
const body = document.querySelector('body')
body.appendChild(testDiv)
testDiv.textContent = 'Add task'

testDiv.addEventListener('click', () => {
    const inputField = document.createElement('input')
    inputField.setAttribute('type', 'text')
    body.appendChild(inputField)

    const testBtn = document.createElement('button')
    inputField.setAttribute('id', 'submitTask')
    body.appendChild(testBtn)
    testBtn.textContent = 'Submit'
    testBtn.addEventListener('click', () => {
        let inputValue = document.getElementById('submitTask').value
        let tempObj = new todo(inputValue)
        tempObj.testAlert();
        
    })

})