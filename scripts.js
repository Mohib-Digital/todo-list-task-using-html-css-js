const textInput = document.getElementById('textInput');
const addTask = document.getElementById('addTask');
const showTask = document.getElementById('showTask');




addTask.addEventListener('click', () => {
// create condition for empty value
  if (!textInput.value.trim()) {
   alert('Please type todo task!')
   return; // Stop further execution if input is empty
  }

  // create an li element
  const li = document.createElement('li');
  const span = document.createElement("span")
  span.textContent = textInput.value;
  li.classList.add('liElement');
  

 
  // add & remove linethrough
    span.addEventListener("click",function(){
      span.classList.toggle("liToggle")
    })
 

// Create remove button
  const removeBtn = document.createElement("button")
  removeBtn.textContent = "Remove";
  // apply design class for remove button
  removeBtn.classList.add('removeBtnDesign');
  removeBtn.addEventListener('click', () => {
  showTask.removeChild(li);
  });
  


  // append li and removeBtn into ul element
  li.append(span)
  li.append(removeBtn);
  showTask.append(li);
  textInput.value = '';
});


