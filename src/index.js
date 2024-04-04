document.addEventListener("DOMContentLoaded", () => {
  
  const taskList = document.getElementById('tasks');
  
  const form = document.getElementById('create-task-form');
  
  const formValue = document.getElementById('new-task-description');
  
  form.addEventListener('submit', (e) => {
 
  e.preventDefault()

  let newTask = e.target["new-task-description"].value 
  
  let newLi = document.createElement('li')
  
  newLi.textContent = newTask
  
  taskList.append(newLi)
  })

  document.getElementById('submit').addEventListener('click', (e) => {
    console.log(e)

    e.preventDefault()
  })
});
  
