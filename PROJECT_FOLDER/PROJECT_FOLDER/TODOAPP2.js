let todoList=[{
Item:'Go to College',
dueDate:'14/5/2024'
},
{
    Item:'Buy milk',
    dueDate:'23/5/2024'
}

];
displayItems();
function AddTodo(){
 let inputElement=document.querySelector('#input-todo');
 let dateElement=document.querySelector('#todo-date');
 let todoItem=inputElement.value;
 let todoDate=dateElement.value;
 todoList.push({Item:todoItem,dueDate:todoDate});
inputElement.value='';
dateElement.value='';
displayItems();
}
function displayItems(){
    let containerElement=document.querySelector('.todo-container');
    let newHtml='';
   for(let i=0;i<todoList.length;i++){
   // let item=todoList[i].Item;
  //  let duedate=todoList[i].dueDate;
    let {Item,dueDate}=todoList[i];
        newHtml+=`
            <span>${Item}</span>
             <span>${dueDate}</span>
            <button class='btn-delete' onclick="todoList.splice(${i},1);
            displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML=newHtml;
}