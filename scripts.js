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
  li.textContent = textInput.value;
  

  // append li in ul element
  showTask.append(li);
  li.classList.add('liElement');




});


