let selected = ""

let dict = {
    dishes: "",
    drinks: "",
    desserts: "",
}

function teste(){
    const regex = /\-?\d+\.\d+/g

    let dishes_price = document.getElementById(dict.dishes).lastElementChild.getElementsByTagName('h5')[1].innerText
    dishes_price = parseFloat(dishes_price.match(regex))

    let drinks_price = document.getElementById(dict.drinks).lastElementChild.getElementsByTagName('h5')[1].innerText
    drinks_price = parseFloat(drinks_price.match(regex))

    let desserts_price = document.getElementById(dict.desserts).lastElementChild.getElementsByTagName('h5')[1].innerText
    desserts_price = parseFloat(desserts_price.match(regex))

    let total = dishes_price+drinks_price+desserts_price

    alert("Olá, gostaria de fazer o pedido\n- Prato: "+ dict.dishes+"\n- Bebida: "+ dict.drinks+ "\n- Sobremesa: "+ dict.desserts+ "\nTotal: R$ "+ total.toFixed(2))

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

    const food_id = document.getElementById(obj)

    if(dict[food_id.parentElement.id] == obj){
        let food_div = food_id
        food_div.lastElementChild.lastElementChild.style.display = "none"
        food_div.style.boxShadow = "none" 
        for (let i in dict){
            if(food_id.parentElement.id == i){
                dict[i] = ""
            }
        }
        selected = ""
        toggle_button()
    }

    else if(selected != obj && check_options(obj)){
        let food_div = document.getElementById(dict[food_id.parentElement.id])
        change_options(obj)
        food_div.style.boxShadow = "none"
        food_div.lastElementChild.lastElementChild.style.display = "none"
        food_div = food_id
        food_div.lastElementChild.lastElementChild.style.display = "block"
        food_div.style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F"
        selected = obj
    }

    else {
        change_options(obj)
        let food_div = food_id
        food_div.lastElementChild.lastElementChild.style.display = "block"
        food_div.style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F"
        toggle_button()
        selected = obj
    }
    
}