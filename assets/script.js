let selected = ""

let dict = {
    dishes: "",
    drinks: "",
    desserts: "",
}

function make_order(){
    const regex = /\-?\d+\.\d+/g

    let dishes= document.getElementById(dict.dishes).lastElementChild.getElementsByTagName('h5')
    let dishes_price = parseFloat(dishes[1].innerText.match(regex))
    dishes = dishes[0].innerText

    let drinks = document.getElementById(dict.drinks).lastElementChild.getElementsByTagName('h5')
    let drinks_price = parseFloat(drinks[1].innerText.match(regex))
    drinks = drinks[0].innerText

    let desserts = document.getElementById(dict.desserts).lastElementChild.getElementsByTagName('h5')
    let desserts_price = parseFloat(desserts[1].innerText.match(regex))
    desserts = desserts[0].innerText

    let total = dishes_price+drinks_price+desserts_price

    let message = "Olá, gostaria de fazer o pedido\n- Prato: "+ dishes+"\n- Bebida: "+ drinks+ "\n- Sobremesa: "+ desserts+ "\nTotal: R$ "+ total.toFixed(2)
    message = encodeURIComponent(message)

    window.location.replace("https://wa.me/5584991175905?text="+message);

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