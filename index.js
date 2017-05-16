const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
     
  ev.preventDefault()
  
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
    
     const ul = document.createElement('ul')
     const li = document.createElement('li')
 
     li.textContent = personName
     details.appendChild(li)

}

personForm.addEventListener('submit', handleSubmit)