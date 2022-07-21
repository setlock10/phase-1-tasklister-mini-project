document.addEventListener("DOMContentLoaded", () => {
  // your code here
  

  // get the reuired elements from the DOM

  const taskForm= document.querySelector('#create-task-form');
  const newTask= document.querySelector('#new-task-description');
  const taskList= document.getElementById('tasks');


  // add dropdown list  **not finished yet
  // const dropDown=document.createElement('select');
  // dropDown.style.color='red';
  
  // const optionGreen= document.createElement('option');
  // optionGreen.value='green';
  // optionGreen.style.color='green';
  // optionGreen.text="Low Priority";

  // const optionRed= document.createElement('option');
  // optionRed.value='red';
  // optionRed.style.color='red';
  // optionRed.text="High Priority";

  
  // dropDown.append(optionRed);
  // dropDown.append(optionGreen);
  // taskForm.append(dropDown);
  


  


  
  //Event Listeners
  
  taskForm.addEventListener('submit',(e)=>{       // Create New Task
    e.preventDefault();                           // stops the automatic refresh


    // Create a new list element for the new task
    const li =document.createElement('li');       
    li.textContent=newTask.value;    
    //li.style.color='blue';

    
    // Create a delete button for the new task
    const btn=document.createElement('button');
    btn.textContent='X';
    li.append(btn);
    taskList.append(li);

    //  Handle the delete button
    btn.addEventListener('click',(e)=>{
      li.remove();
    })
   

 





  });
 





  
});


