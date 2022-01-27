

let selected = ""

let dict = {
    dishes: "",
    drinks: "",
    desserts: "",
}

function toggle_button(){

    const button = document.querySelector('button')

    for (i in dict){
        if(dict[i] == ""){
            button.disabled = true
            return false
        }
    }
    button.disabled = false
    return true
}

function change_options(obj){

    for (let i in dict){
        if (document.getElementById(obj).parentElement.id == i){
            dict[i] = obj
        }
    }

}

function check_options(obj){
    
    for (let i in dict){
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
        let obj1 = document.getElementById(obj)
        obj1.lastElementChild.lastElementChild.style.display = "none"
        obj1.style.boxShadow = "none" 
        for (let i in dict){
            if(document.getElementById(obj).parentElement.id == i){
                dict[i] = ""
            }
        }
        selected = ""
        toggle_button()
    }

    else if(selected != obj && check_options(obj)){
        let obj1 = document.getElementById(dict[document.getElementById(obj).parentElement.id])
        change_options(obj)
        obj1.style.boxShadow = "none"
        obj1.lastElementChild.lastElementChild.style.display = "none"
        obj1 = document.getElementById(obj)
        obj1.lastElementChild.lastElementChild.style.display = "block"
        obj1.style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F"
        selected = obj
    }

    else {
        change_options(obj)
        let obj1 = document.getElementById(obj)
        obj1.lastElementChild.lastElementChild.style.display = "block"
        obj1.style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F"
        toggle_button()
        selected = obj
    }
    
}