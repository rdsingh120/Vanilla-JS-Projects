var addBtn = document.querySelector('.add-btn');
var editBtn = document.querySelector('.edit-btn');
var list = document.querySelector('.list');
var addInput = document.querySelector('.add-item-input');
var notification = document.querySelector('.notification');
var clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', function(e) {
    e.preventDefault();
    list.textContent = '';
    notifications("red", "List cleared");
});

const clearNotifications = () => {
    notification.style.backgroundColor = "transparent";
    notification.textContent = ""
}

const notifications = (color, message) => {
    notification.style.backgroundColor = color == "red" ? "rgba(255, 0, 0, 0.2)" : "rgba(0, 125, 0, 0.2)";
    notification.style.color = color == "red" ? "rgb(125, 1, 1)" : "rgb(1, 125, 1)";
    notification.textContent = message
    
    setTimeout(clearNotifications, 1500);
};


const createTask = () => {
    if (addInput.value) {
        var li = document.createElement('li');
        li.className = "list-item";
        list.appendChild(li);

        var p = document.createElement('p');
        p.className = "list-item-text";
        p.textContent = addInput.value;
        li.appendChild(p);

        var delBtn = document.createElement('span');
        delBtn.className = 'delete-btn';
        delBtn.textContent = "❌"
        delBtn.style.cursor = "pointer";
        li.appendChild(delBtn);
        
        addInput.value = "";
        notifications("green", "Task Added");        
        
        delBtn.addEventListener('click', () => {
            li.remove();
            notifications("red", "Task Removed");        
        });  
        
        p.addEventListener("click", function() {
            li.style.backgroundColor = "rgba(0, 125, 0, 0.2)"
            p.style.textDecoration = "line-through"
            delBtn.textContent = "✔️";
            notifications("green", "Task completed");
            setTimeout(() => {
                li.remove()      
            }, 1000);
        });
    }
    else { 
        notifications("red", "Please Enter Value");
    } 
}



addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createTask();
});
addInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        createTask();
    }
});



