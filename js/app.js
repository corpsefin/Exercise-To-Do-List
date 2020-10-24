const addNewListItemButton = document.getElementById('addNewListItem');
const toDoForm = document.getElementById('toDo');

let items = [];

function addItem(content){
    const item = {
        content,
        checked: false,
        id: Math.floor(Date.now() / (Math.random() * 77))
    }
    items.push(item);
    console.log(items);
    toDoForm.reset();

    renderItem(item);
}

function readyItem(item, toDoItem){
    if(!item.checked){
        toDoItem.style.textDecoration = 'line-through';
        item.checked = true;
    }
    else{
        item.checked = false;
        toDoItem.style.textDecoration = 'none';
    }
}

function deleteItem(key, toDoItem){
    let index = items.findIndex(item => item.id === Number(key));
    items.splice(index,1);
    toDoItem.parentNode.removeChild(toDoItem);
}

function renderItem(item) {
    let toDoItem = document.createElement('li');
    let toDoItemLabel = document.createElement('label');

    toDoItemLabel.innerHTML = `${item.content}`;

    toDoItemLabel.setAttribute('class', 'toDoItemLabel');
    toDoItem.setAttribute('class', 'toDoItem');

    toDoItem.appendChild(toDoItemLabel);
    toDoList.appendChild(toDoItem);

    toDoItem.addEventListener('dblclick', function () {
        deleteItem(item.id, toDoItem);
        console.log(items)
    }, false)

    toDoItemLabel.addEventListener('click', function(){
        readyItem(item, toDoItem);
    })
}

addNewListItemButton.addEventListener('click', (ev) =>{
    ev.preventDefault();
    let toDoContent = document.getElementById('toDoContent').value;
    addItem(toDoContent);
});