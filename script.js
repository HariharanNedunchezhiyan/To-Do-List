let input=document.getElementById('input')
let btn=document.getElementById('add')
let todo=document.getElementById('todos')

let todos=[]

window.onload = () =>{
    todos=JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}


btn.addEventListener('click',()=>{
    todos.push(input.value)
    addtodo(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    input.value=''
})

function addtodo(inputVal){
    let para=document.createElement('p')
    para.innerHTML=inputVal
    todo.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(inputVal,para)
    })
    para.addEventListener('dblclick',()=>{
        todo.removeChild(para)
        remove(inputVal,para)
    })
}


function remove(inputVal,para){
    let index=todos.indexOf(inputVal)
    if(index>-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}