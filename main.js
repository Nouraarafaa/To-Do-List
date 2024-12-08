//select elements
var searchBar = document.getElementById('search-bar');
var addTodos = document.getElementById('add-Todos');
var addBtn = document.getElementById('addBtn');
var List;

if (localStorage.getItem('Todo-item') !== null) {
	List = JSON.parse(localStorage.getItem('Todo-item'));
	ShowData();
} else {
	List = [];
}

function addTodoItem() {
    var itemText = addTodos.value.trim();
    if (itemText === "") {
        alert("To-do item couldn't be empty");
        return;
    }
    var TodosList = { item: itemText };
    List.push(TodosList);
    localStorage.setItem('Todo-item', JSON.stringify(List));
    ShowData();

    addTodos.value = "";
    addTodos.focus();
}
function ShowData(){
	var cartoona = ``;
	for(var i = 0 ; i<List.length ; i++){
		cartoona += `
				<div id="list-item">
					<h5>${List[i].item}</h5>
					<i onclick="deleteItem(${i})" class="fa-solid fa-trash-alt"></i>
				</div>
		`
	}
	document.getElementById('todoList').innerHTML = cartoona;
}

function deleteItem(index){
	var index;
	List.splice(index,1);
	localStorage.setItem('Todo-item', JSON.stringify(List));
	ShowData();
}

searchBar.addEventListener('input', function () {
    var searchValue = searchBar.value.toLowerCase();
    var box = ``;
    for (var i = 0; i < List.length; i++) {
        if (List[i].item.toLowerCase().includes(searchValue)) {
            box += `
                <div id="list-item">
                    <h5>${List[i].item}</h5>
                    <i onclick="deleteItem(${i})" class="fa-solid fa-trash-alt"></i>
                </div>
            `;
        }
    }
    document.getElementById('todoList').innerHTML = box;
});
