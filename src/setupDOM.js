export function initialDOMSetup(classConstructor){

    let categoryArray = []

    //Build Containers
    const body = document.querySelector('body')
    const mainContain = document.createElement('div')
    mainContain.setAttribute('id', 'mainContain')
    body.appendChild(mainContain)

    const categoryColumn = document.createElement('div')
    categoryColumn.setAttribute('id', 'left')
    const taskColumn = document.createElement('div')
    taskColumn.setAttribute('id', 'right')
    mainContain.appendChild(categoryColumn)
    mainContain.appendChild(taskColumn)

    let taskColumnInnerContainer = document.createElement('div')
    taskColumn.appendChild(taskColumnInnerContainer)

    let tcicTop = document.createElement('div')
    tcicTop.setAttribute('class', 'tcicTop')
    let tcicBot = document.createElement('div')
    tcicBot.setAttribute('class', 'tcicBot')

    taskColumnInnerContainer.appendChild(tcicTop)
    taskColumnInnerContainer.appendChild(tcicBot)

    const newCategoryBtn = document.createElement('button')
    newCategoryBtn.textContent = 'New Category'
    categoryColumn.appendChild(newCategoryBtn)

    newCategoryBtn.addEventListener('click', () =>{
        let inputField = document.createElement('input')
        inputField.setAttribute('type', 'text')
        inputField.setAttribute('id', 'submitTask')
        taskColumnInnerContainer.appendChild(inputField)
        let submitCategoryBtn = document.createElement('button')
        submitCategoryBtn.textContent = 'Add Category'
        taskColumnInnerContainer.appendChild(submitCategoryBtn)

        submitCategoryBtn.addEventListener('click', () => {
            let newCategoryTitle = document.getElementById('submitTask').value
            let newCategory = new classConstructor(newCategoryTitle)
            categoryArray.push(newCategory)

            let categoryHeader = document.createElement('div')
            categoryHeader.textContent = newCategory.title
            categoryColumn.appendChild(categoryHeader)

            categoryHeader.addEventListener('click', () => {

                let divArray = document.querySelectorAll('.tcicTop>*')
                divArray.forEach(element => element.remove())
                
                let taskColumnCategoryHeader = document.createElement('div')
                taskColumnCategoryHeader.setAttribute('class', 'taskHeader')

                taskColumnCategoryHeader.textContent = newCategory.title
                tcicTop.appendChild(taskColumnCategoryHeader)
                let addNewTaskBtn = document.createElement('button')
                addNewTaskBtn.textContent = '+'
                tcicTop.appendChild(addNewTaskBtn)
            })


            inputField.remove()
            submitCategoryBtn.remove()



            /* addNewTaskBtn.addEventListener('click', ()=>{
                let newTaskInputField = document.createElement('input')
                newTaskInputField.setAttribute('type', 'text')
                let newTaskSubmitBtn = document.createElement('button')
                newTaskSubmitBtn.textContent = 'Add Task'
                taskColumn.appendChild(newTaskInputField)
                taskColumn.appendChild(newTaskSubmitBtn)
                
                newTaskSubmitBtn.addEventListener('click', ()=>{
                    let newTask = newTaskInputField.value

                })
            })
            */

        
    })
    
})
}