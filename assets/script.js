

var selected = ""

var dict = {
    dishes: "",
    drinks: "",
    desserts: "",
}

function change_options(obj){

    for (var i in dict){
        if (document.getElementById(obj).parentElement.id == i){
            dict[i] = obj
        }
    }

}

function check_options(obj){
    
    for (var i in dict){
        if (document.getElementById(obj).parentElement.id == i){
            if(dict[i] != ""){
                return true
            }
        }
    }
    return false
}

function select(obj){

    if(dict[document.getElementById(obj).parentElement.id] == obj){
        var obj1 = document.getElementById(obj)
        obj1.lastElementChild.lastElementChild.style.display = "none"
        obj1.style.boxShadow = "none" 
        for (var i in dict){
            if(document.getElementById(obj).parentElement.id == i){
                dict[i] = ""
            }
        }
        selected = ""
        console.log(dict)
    }

    else if(selected != obj && selected != "" && check_options(obj)){
        var obj1 = document.getElementById(dict[document.getElementById(obj).parentElement.id])
        change_options(obj)
        obj1.style.boxShadow = "none"
        obj1.lastElementChild.lastElementChild.style.display = "none"
        obj1 = document.getElementById(obj)
        obj1.lastElementChild.lastElementChild.style.display = "block"
        obj1.style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F"
        selected = obj
        console.log(dict)
    }

    else {
        change_options(obj)
        console.log(dict)
        var obj1 = document.getElementById(obj)
        obj1.lastElementChild.lastElementChild.style.display = "block"
        obj1.style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F"
        selected = obj
    }
    
}