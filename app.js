var getJSON = " ";
var updStatus = " ";
var updatedVal = " ";
var doneCount = 0;
var doneHTML = '';
var inComplete = '';
var todoCount = 0;
var editCard = " "

function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = function () {
        const getValue = (this.response);
        getJSON = JSON.parse(getValue);
        getJSON.map((todo) => {
            if (todo.completed == true) {
                doneCount++
                doneHTML += `<div class="card" id="btn1" style="width: 18rem;">
                                        <button type="button" class="btn btn-light" onClick = "myBtnFun('${todo.id}', '${todo.title}', '${todo.completed}')" >EDIT</button>
                                        <div class="card-body">
                                        <h5 class="card-title">ID:${todo.id}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Title:${todo.title}</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">Status:Done</h6>
                                    </div>
                                </div>`
            } else if (todo.completed == false) {
                todoCount++
                inComplete += `<div class="card" style="width: 18rem;">
                                        <button type="button" class="btn btn-light" onClick = "myBtnFun('${todo.id}', '${todo.title}', '${todo.completed}')" >EDIT</button>
                                        <div class="card-body">
                                        <h5 class="card-title">ID:${todo.id}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Title:${todo.title}</h6>
                                        <h6 class="card-subtitle mb-2 text-muted">Status:Doing</h6>
                                    </div>
                                </div>`
            }
        });
        document.getElementById("complete").innerHTML = doneHTML;
        document.getElementById('count1').innerHTML = todoCount;


        document.getElementById("doing").innerHTML = inComplete;
        document.getElementById('count2').innerHTML = doneCount;


    };
    xhr.send();
}

fetchData();

function myBtnFun(id, title) {
    editCard = `<div class="card d-block mx-auto" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">ID:${id}</h5>
<h6 class="card-subtitle mb-2 text-muted">Title:${title}</h6>
<h6 class="card-subtitle mb-2 text-muted" id = "updatedStatus"></h6>
</div>
<select class="form-select" id ="options" aria-label="Default select example">
  <option value="true">Done</option>
  <option value="false">Doing</option>
</select>
<button type="button" class="btn btn-primary d-block mx-auto" onClick = "statusSubmit(${id})">SUBMIT</button>
</div>`
    document.getElementById('edit').innerHTML = editCard;
}

function statusSubmit(upId) {
    doneCount = 0;
    doneHTML = '';
    inComplete = '';
    todoCount = 0;
    updStatus = document.getElementById('options').value;
    elementIndex = getJSON.findIndex((obj => obj.id == upId));
    getJSON[elementIndex].completed = updStatus === "true";
    getJSON.map((todo) => {
        if (todo.completed == true) {
            doneCount++
            doneHTML += `<div class="card" id="btn1" style="width: 18rem;">
                                    <button type="button" class="btn btn-light" onClick = "myBtnFun('${todo.id}', '${todo.title}', '${todo.completed}')" >EDIT</button>
                                    <div class="card-body">
                                    <h5 class="card-title">ID:${todo.id}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Title:${todo.title}</h6>
                                <h6 class="card-subtitle mb-2 text-muted">Status:Done</h6>
                                </div>
                            </div>`
        } else if (todo.completed == false) {
            todoCount++
            inComplete += `<div class="card" style="width: 18rem;">
                                    <button type="button" class="btn btn-light" onClick = "myBtnFun('${todo.id}', '${todo.title}', '${todo.completed}')" >EDIT</button>
                                    <div class="card-body">
                                    <h5 class="card-title">ID:${todo.id}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Title:${todo.title}</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">Status:Doing</h6>
                                </div>
                            </div>`
        }
    });
    document.getElementById("complete").innerHTML = doneHTML;
    document.getElementById('count1').innerHTML = todoCount;


    document.getElementById("doing").innerHTML = inComplete;
    document.getElementById('count2').innerHTML = doneCount;

    document.getElementById('edit').innerHTML = " ";
}

function SearchFunc() {
    filteredData = document.getElementById("inputSearch").value;
    doneHTML = " ";
    inComplete = " ";
    todoCount = 0;
    doneCount = 0;
    getJSON.filter(obj => obj.title.includes(filteredData)).map((todo) => {
        if (todo.completed == true) {
            doneCount++
            doneHTML += `<div class="card" id="btn1" style="width: 18rem;">
                                        <button type="button" class="btn btn-light" onClick = "myBtnFun('${todo.id}', '${todo.title}', '${todo.completed}')" >EDIT</button>
                                        <div class="card-body">
                                        <h5 class="card-title">ID:${todo.id}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Title:${todo.title}</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">Status:Done</h6>
                                    </div>
                                </div>`
        } else if (todo.completed == false) {
            todoCount++
            inComplete += `<div class="card" style="width: 18rem;">
                                        <button type="button" class="btn btn-light" onClick = "myBtnFun('${todo.id}', '${todo.title}', '${todo.completed}')" >EDIT</button>
                                        <div class="card-body">
                                        <h5 class="card-title">ID:${todo.id}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Title:${todo.title}</h6>
                                        <h6 class="card-subtitle mb-2 text-muted">Status:Doing</h6>
                                    </div>
                                </div>`
        }
    });
    document.getElementById("complete").innerHTML = doneHTML;
    document.getElementById('count1').innerHTML = todoCount;


    document.getElementById("doing").innerHTML = inComplete;
    document.getElementById('count2').innerHTML = doneCount;
}
