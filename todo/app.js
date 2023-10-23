var list = document.getElementById("list")


function addTodo() {
    var todo_item = document.getElementById("inputbx")

    //create li tag with text node
    var li = document.createElement('li')
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)

    //create delete button
    var delbtn = document.createElement("button")
    var dletetex = document.createTextNode("DELETE")
    delbtn.setAttribute("class", "btn1")
    delbtn.setAttribute("onclick", "deletItem(this)")

    delbtn.appendChild(dletetex)
    list.appendChild(li)
    li.appendChild(delbtn)




    //edit btn
    var edtbtn = document.createElement("button")
    var ediettex = document.createTextNode("ediet")
    edtbtn.setAttribute("class", "btn2")
    edtbtn.setAttribute("onclick", "editItem(this)")

    edtbtn.appendChild(ediettex)
    list.appendChild(li)
    li.appendChild(edtbtn)
    todo_item.value = ""
    // console.log(li)
}
function deletItem(e) {
    console.log(e)
    e.parentNode.remove()
}

function editItem(e) {
    
var input = prompt("nter upgrated value") 
    e.parentNode.firstChild.nodeValue = input
    
}
function dleatall() {
    list.innerHTML = ""
}