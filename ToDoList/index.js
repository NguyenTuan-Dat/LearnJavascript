var add_btn = document.getElementById("add");

show();

add_btn.onclick = function () {
    var name = document.getElementById("title").value;
    localStorage.setItem(name, false);
    show();
}

function show() {
    document.getElementById("to-do-list").innerHTML = "";
    var key = Object.keys(localStorage)
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(key[i]) == "false") {
            document.getElementById("to-do-list").innerHTML += "<div class=\"item\"><p class=\"string\">" + key[i] + "</p><a class=\"delete\" id=\"" + key[i] + "\">X</a></div> ";
        } else {
            document.getElementById("to-do-list").innerHTML += "<div class=\"item\"><p class=\"string\"> <span>&#10003;</span> <del>" + key[i] + "</del></p><a class=\"delete\" id=\"" + key[i] + "\" onclick=\"deleteItem(id)\">X</a></div>";;
        }
    }

    var delete_btns = document.getElementsByClassName("delete")
    for (let item of delete_btns) {
        item.onclick = function (mouseEvent) {
            localStorage.removeItem(mouseEvent.path[0].id);
            show();
        }
    }

    var items = document.getElementsByClassName("string")
    for (let item of items) {
        item.onclick = function (mouseEvent) {
            var id = mouseEvent.toElement.textContent;
            var done = localStorage.getItem(id);
            if (done == "false")
                localStorage.setItem(id, true);
            else
                localStorage.setItem(id, false);

            show();
        }
    }
}