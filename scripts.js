const textInput = document.getElementById('textInput');
const addTask = document.getElementById('addTask');
const showTask = document.getElementById('showTask');




addTask.addEventListener('click', () => {

  if (!textInput.value.trim()) {
   alert('Please type todo task!')
  }
});


