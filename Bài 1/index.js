function compare(a, b) {
    return a.MSSV > b.MSSV ? 1 : a.MSSV < b.MSSV ? -1 : 0
}

var SVs = []

var SV1 = {
    MSSV: 102170268,
    Name: "Nguyễn Tuấn Đạt",
    Email: "bkdn.ntdat@gmail.com"
}

var SV2 = {
    MSSV: 102170310,
    Name: "La Hoài Trinh",
    Email: "hoaitrinh459@gmail.com"
}

SVs.push(SV1);
SVs.push(SV2);

SVs.sort(compare);

var showBtn = document.getElementById("show");
showBtn.onclick = function () {
    showSVs();
}

function showSVs() {
    document.getElementById("SVs").innerHTML = '';
    var i;
    for (i = 0; i < SVs.length; i++) {
        document.getElementById("SVs").innerHTML += "<p>" + SVs[i].MSSV + "\t" + SVs[i].Name + "\t" + SVs[i].Email +
            "<button id=\"delete_" + SVs[i].MSSV + "\" onclick=\"deleteStudent(id)\">Delete</button>" +
            "<button id=\"update_" + SVs[i].MSSV + "\" onclick=\"updateStudent(id)\">Update</button>" +
            "</p>";
    }
}

var addBtn = document.getElementById("addAStudent");
addBtn.onclick = function () {
    document.getElementById("addDiv").innerHTML = "";
    document.getElementById("addDiv").innerHTML += "<h3>Add a student</h3>" +
        "<input type=\"input\" id=\"mssv\" placeholder=\"MSSV\">" +
        "<input type=\"input\" id=\"name\" placeholder=\"Name\">" +
        "<input type=\"input\" id=\"email\" placeholder=\"Email\">" +
        "<button onclick= \"addStudent()\" id=\"confirmAdd\">Add</button>";
}

function addStudent() {
    var sv = {
        MSSV: parseInt(document.getElementById("mssv").value),
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value
    }

    document.getElementById("addDiv").innerHTML = "";

    SVs.push(sv);

    SVs.sort(compare);

    showSVs();
}

function deleteStudent(mssv) {
    var index = SVs.findIndex(({ MSSV }) => MSSV == mssv.split("_")[1])
    var confirm_var = confirm("Are you sure delete this student?")
    if (index != -1 && confirm_var) {
        SVs.splice(index, 1)
    }

    showSVs();
}

function updateStudent(mssv) {
    var index = SVs.findIndex(({ MSSV }) => MSSV == mssv.split("_")[1])
    if (index != -1) {
        document.getElementById("SVs").innerHTML = '';
        var i;
        for (i = 0; i < SVs.length; i++) {
            if (i != index) {
                document.getElementById("SVs").innerHTML += "<p>" + SVs[i].MSSV + "\t" + SVs[i].Name + "\t" + SVs[i].Email +
                    "<button id=\"delete_" + SVs[i].MSSV + "\" onclick=\"deleteStudent(id)\">Delete</button>" +
                    "<button id=\"update_" + SVs[i].MSSV + "\" onclick=\"updateStudent(id)\">Update</button>" +
                    "</p>";
            }
            else {
                document.getElementById("SVs").innerHTML += "<input disabled type=\"input\" value=\"" + SVs[i].MSSV + "\" id=\"updateMSSV\">" +
                    "\t <input type=\"input\" value=\"" + SVs[i].Name + "\" id=\"updateName\">\t" +
                    "\t <input type=\"input\" value=\"" + SVs[i].Email + "\" id=\"updateEmail\">\t" +
                    "<button id=\"delete_" + SVs[i].MSSV + "\" onclick=\"deleteStudent(id)\">Delete</button>" +
                    "<button id=\"update_" + SVs[i].MSSV + "\" onclick=\"confirmUpdate(id)\">Update</button>" +
                    "</p>";
            }
        }
    }
}

function confirmUpdate(mssv) {
    var index = SVs.findIndex(({ MSSV }) => MSSV == mssv.split("_")[1])
    var confirm_var = confirm("Are you sure update this student?")
    if (index != -1 && confirm_var) {
        SVs[index].Name = document.getElementById("updateName").value
        SVs[index].Email = document.getElementById("updateEmail").value
    }
    showSVs();
}
