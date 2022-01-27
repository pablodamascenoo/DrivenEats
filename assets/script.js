let selected = ""

let dict = {
    dishes: "",
    drinks: "",
    desserts: "",
}


function cancel_order(){

    let confirm = document.getElementsByClassName("confirm-screen")[0]

    confirm.style.display = "none"

    let scroll = document.getElementsByTagName("body")[0]
    scroll.style.overflowY = "initial"

}

function get_order(){

    const regex = /\-?\d+\.\d+/g

    let dishes= document.getElementById(dict.dishes).lastElementChild.getElementsByTagName('h5')
    let dishes_price = dishes[1].innerText.replace(/,/, '.')
    dishes_price = parseFloat(dishes_price.match(regex))
    dishes = dishes[0].innerText

    let drinks = document.getElementById(dict.drinks).lastElementChild.getElementsByTagName('h5')
    let drinks_price = drinks[1].innerText.replace(/,/, '.')
    drinks_price = parseFloat(drinks_price.match(regex))
    drinks = drinks[0].innerText

    let desserts = document.getElementById(dict.desserts).lastElementChild.getElementsByTagName('h5')
    let desserts_price = desserts[1].innerText.replace(/,/, '.')
    desserts_price = parseFloat(desserts_price.match(regex))
    desserts = desserts[0].innerText

    let food = {
        dishes: dishes,
        drinks: drinks,
        desserts: desserts
    }

    let price = {
        dishes_price: dishes_price,
        drinks_price: drinks_price,
        desserts_price: desserts_price,
    }

    let order = {
        food: food,
        price: price
    }

    return order

}

function confirm_screen(){

    let confirm = document.getElementsByClassName("confirm-screen")[0]

    confirm.style.display = "flex"

    let scroll = document.getElementsByTagName("body")[0]
    scroll.style.overflowY = "hidden"

}


function make_order(){
    
    let order = get_order()

    let total = order.price.dishes_price+order.price.drinks_price+order.price.desserts_price

    let message = "Olá, gostaria de fazer o pedido\n- Prato: "+ order.food.dishes+"\n- Bebida: "+ order.food.drinks+ "\n- Sobremesa: "+ order.food.desserts+ "\nTotal: R$ "+ total.toFixed(2)
    message = encodeURIComponent(message)

    let number = "84981517034"
    window.location.replace("https://wa.me/55"+ number +"?text="+message);

}

function toggle_button(){

    const button = document.getElementsByClassName("footer-button")[0]

    for (i in dict){
        if(dict[i] == ""){
            button.disabled = true
            button.innerText = "Selecione os 3 itens para fechar o pedido"
            return false
        }
    }
    button.disabled = false
    button.innerText = "Fechar pedido"
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