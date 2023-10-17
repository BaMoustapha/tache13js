
function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var job = document.getElementById("job").value;
    var email = document.getElementById("email").value;

    if(firstName == "") {
        alert("FirstName is required");
        return false;
    }

    if(lastName == "") {
        alert("LastName is required");
        return false;
    }

    if(job == "") {
        alert("Job is required");
        return false;
    }

    if(email == "") {
        alert("Email is required");
        return false;
    }
    return true;

}

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = "";

peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.firstName + "</td>";
    html += "<td>" + element.lastName + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.job + "</td>";
    html += 
    '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>';
    html += "</tr>";
});

document.querySelector("#crudTable tbody").innerHTML = html;

}

window.onload = showData;

function AddData() {
    if(validateForm() == true) {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var job = document.getElementById("job").value;
        var email = document.getElementById("email").value;
    
        var peopleList;
        if(localStorage.getItem("peopleList") == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"))
        }

        peopleList.push({
            firstName : firstName,
            lastName : lastName,
            job : job,
            email : email,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("job").value = "";
}
}

function deleteData(index) {
    var peopleList;
        if(localStorage.getItem("peopleList") == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.splice(index,  1);
        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
}


function updateData(index) {
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var peopleList;
        if(localStorage.getItem("peopleList") == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        document.getElementById("firstName").value = peopleList[index].firstName;
        document.getElementById("lastName").value = peopleList[index].lastName;
        document.getElementById("job").value = peopleList[index].job;
        document.getElementById("email").value = peopleList[index].email;

        document.querySelector("#Update").onclick = function() {
            if(validateForm() == true) {
                peopleList[index].firstName = document.getElementById("firstName").value;
                peopleList[index].lastName = document.getElementById("lastName").value;
                peopleList[index].job = document.getElementById("job").value;
                peopleList[index].email = document.getElementById("email").value;
            
                localStorage.setItem("peopleList", JSON.stringify(peopleList));
                showData();

                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";
                document.getElementById("email").value = "";
                document.getElementById("job").value = "";
                

                document.getElementById("Submit").style.display = "block";
                document.getElementById("Update").style.display = "none";

            
            }
        }

    
}