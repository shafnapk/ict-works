var checkedCount = 0;

function loadTodoList(){
    var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState==4 && this.status==200) {
                var ajaxson= JSON.parse(this.responseText);
                let allTodos = "";
                ajaxson.forEach(element => {
                    comp = createTodoAppList(element);
                    allTodos = allTodos + comp;
                });
                document.getElementById("appContainerDiv").innerHTML = allTodos;
                console.log(ajaxson)                                                       
            }
        };
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
}

function createTodoAppList(element){

    let checked = "";
    if(element.completed) checked = "checked disabled";

    let comp = "<div class='row' style='height: 60px;margin:5px;'>" +
               "<div class='col-3' style='height: 60px;'></div>" + 
               "<div class='col-6' style='height: 60px;background-color: aqua;line-height:3.5;border-radius:10px'> " +
                    "&nbsp;&nbsp; <input id=app_"+ element.id + " " + checked +" type='checkbox' onclick='countChecks("+element.id+")'/>" +
                    "&nbsp;&nbsp; " + element.title + 
                "</div>" +
                "<div class='col-3' style='height: 60px;'></div> </div>";
    return comp;        
                
}


function countChecks(id){
    
    let checkBox = document.getElementById("app_"+id);
    if(checkBox.checked){
        checkedCount++;
    }
    else{
        checkedCount--;
    }
    console.log(checkedCount);
    if(checkedCount>=5){
        let promise = new Promise(function(resolve, reject){
            setTimeout(function(){
                alert('Congrats. 5 Tasks have been Successfully Completed');
            }, 1000);
        });
    }
}