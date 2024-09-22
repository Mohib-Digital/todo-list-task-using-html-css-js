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
  li.classList.add('liElement');
  

  // add & remove linethrough
    li.addEventListener("click",function(){
      li.classList.toggle("liToggle")
    })
 

// Remove button code start here
  const removeBtn = document.createElement("button")
   removeBtn.textContent = "Remove"


  // append li in ul element
  li.append(removeBtn);
  showTask.append(li);
});


