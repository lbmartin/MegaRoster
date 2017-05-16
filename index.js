const personForm = document.querySelector('form')


const handleSubmit = (ev) => {
     
  ev.preventDefault()
  
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value

  
     //const list = document.getElementByClassName('.details')
     const li = document.createElement('li')
     li.textContent = personName
     details.appendChild(li)
     const button = document.createElement("button");
     button.innerHTML = "delete";
     li.appendChild(button);
     //list.insertBefore(li,list)
    
}

personForm.addEventListener('submit', handleSubmit)