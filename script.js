let main = document.createElement("main")
main.className="container"
document.body.prepend(main)

let projectName = document.createElement("h1")
projectName.innerHTML = "let's do it"
main.append(projectName)

let listBlock = document.createElement("div")
listBlock.className = "mainBlock"
main.append(listBlock)

let firsDiv = document.createElement("div")
listBlock.append(firsDiv)

let texIn = document.createElement("input")
texIn.className = 'texIn'
texIn.setAttribute('placeholder','иштерди жаз...')
firsDiv.append(texIn)

let setDate = document.createElement("input")
setDate.className = 'setDate'
setDate.setAttribute('type','date')
firsDiv.append(setDate)

let addBtn = document.createElement("button")
addBtn.innerHTML = 'ADD'
addBtn.id='addBtn'
firsDiv.append(addBtn)

let list = document.createElement('ul')
listBlock.append(list)


let todoArray = localStorage.getItem('todo')  == null ?
[]

:[...JSON.parse(localStorage.getItem('todo'))]





const addTodo = () => {
 let newTask = texIn.value
 let date = setDate.value

if(newTask !=''){
todoArray.push({
  text:newTask,
  checked:false,
  date,

})
localStorage.setItem('todo',JSON.stringify(todoArray))

    texIn.value =''
    setDate.value = ''
    renderTodoItem()
}

}


const completeTodo =(e) =>{
 


  let todoTemporary=[...todoArray]
  let index = e.target.parentNode.id
  
  let objectElement = todoTemporary[index].checked
  // todoTemporary[index].checked = !
console.log(objectElement)






let isDone = e.target.parentNode.classList.contains('done')

isDone
?
e.target.parentNode.classList.remove('done') 
:
e.target.parentNode.classList.add('done')
}


const deletTodo=(e)=>{
// console.log(e.target.parentNode)

// e.target.parentNode.remove(e.parentNode)

let index = e.target.parentNode.id
todoArray.splice(index,1)

localStorage.setItem('todo',JSON.stringify(todoArray))
renderTodoItem()
}

// renderTodoItem()
addBtn.addEventListener("click",addTodo)


const renderTodoItem = () => {
  list.innerHTML = ''
  todoArray.map((todo,id)=>{
    
    let li =document.createElement("li")
    li.className = todo.checked ? 'taskItem done':"taskItem"
    li.id=id
  
  let doneBtn = document.createElement("img")
  doneBtn.src = "done.png"
  doneBtn.className="btn"
  doneBtn.addEventListener('click',completeTodo)
  
  let deletBtn = document.createElement("img")
  deletBtn.src = "delet.png"
  deletBtn.className = "btn"
  deletBtn.addEventListener('click',deletTodo)
  
  
      let label = document.createElement('label')
      label.append(todo.text + " - "+todo.date)
  
      li.append(label)
    li.append(doneBtn)
  li.append(deletBtn)
  list.append(li)
  })
  }
  renderTodoItem()