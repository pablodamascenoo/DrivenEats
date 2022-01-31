let dict = {
    dishes: "",
    drinks: "",
    desserts: "",
}

function cancel_order(){
    document.getElementsByClassName("confirm-screen")[0].classList.toggle("confirm-screen-enabled")
    document.getElementsByTagName("body")[0].classList.toggle("scroll-hidden")
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

    document.getElementsByClassName("confirm-screen")[0].classList.toggle("confirm-screen-enabled")
    document.getElementsByTagName("body")[0].classList.toggle("scroll-hidden")

    let order = get_order()
    let total = 0

    for(i in order.price){
        total += order.price[i]
        order.price[i] = order.price[i].toFixed(2).replace(/\./, ",")
    }

    total = total.toFixed(2).replace(/\./, ",")
    
    let text_list = document.getElementsByClassName("confirm-content-text")
    text_list[3].lastElementChild.innerText = "R$ "+total

    for(i in order){
        let count=0
        for(x in order[i]){
            if(i == "food"){
                text_list[count].firstElementChild.innerText = order[i][x]
                count++
            }
            if(i == "price"){
                text_list[count].lastElementChild.innerText = order[i][x]
                count++
            }
        }
    } 
}

function make_order(){
    
    let nome_usuario =  prompt("Qual o seu nome? 🤔")
    let endereco =  prompt("Qual o seu endereço? 🧐")

    let order = get_order()

    let total = order.price.dishes_price+order.price.drinks_price+order.price.desserts_price

    let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${order.food.dishes}\n- Bebida: ${order.food.drinks}\n- Sobremesa: ${order.food.desserts}\nTotal: R$ ${total.toFixed(2)}\n\nNome: ${nome_usuario}\nEndereço: ${endereco}`    
    message = encodeURIComponent(message)

    let number = "84981517034"
    window.location.replace(`https://wa.me/55${number}?text=${message}`);

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
        if (obj.parentElement.id == i){
            dict[i] = obj.id
        }
    }

}

function check_options(obj){ 
    for (let i in dict){
        if (obj.parentElement.id == i){
            if(dict[i] != ""){
                return true
            }
        }
    }
    return false
}

function select(obj){
    if(obj.classList.contains("checked")){
        let food_div = obj
        food_div.classList.toggle("checked")
        for (let i in dict){
            if(obj.parentElement.id == i){
                dict[i] = ""
            }
        }
        toggle_button()
    }
    else if(check_options(obj)){
        let food_div = document.getElementById(dict[obj.parentElement.id])
        change_options(obj)
        food_div.classList.toggle("checked")
        food_div = obj
        food_div.classList.toggle("checked")
    }
    else {
        change_options(obj)
        let food_div = obj
        food_div.classList.add("checked")
        toggle_button()
    }
}

