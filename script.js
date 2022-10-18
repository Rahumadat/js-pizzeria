
var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
console.log(sandwich);


function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);

var pizza = {
    tipoCorteza: ["delgada", "gruesa", "borde de queso"],
    tipoSalsa: ["tradicional", "extra", "hot-sauce"],
    quesos: ["normal", "extra queso", "mozzarella" ],
    salsas: ["salsa verde", "pesto", "barbecue"]
}
console.log(pizza);

function pizzaOven (tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
var p1 = pizzaOven("delgada", "tradicional", "normal", "salsa verde");
console.log(p1);
var p2 = pizzaOven("tradicional", "estilo Chicago", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(p2);
var p3 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(p3);
var p4 = pizzaOven("Masa fina", "ranchera", ["chanco", "extra queso"], ["pesto", "barbecue"]);
console.log(p4);
var p5 = pizzaOven(["gruesa", "borde queso"], "marinara", ["sin lactosa", "extra queso"], "salsa verde");
console.log(p5);
/*
function randompizza() {
    let tipcortrandom = Math.random()*3;
    let tipsalsrandom = Math.random()*3;
    let tipquesrandom = Math.random()*3;
    let tipsalsrandom = Math.random()*3;
    let p6 = pizzaOven("Masa fina", "ranchera", ["chanco", "extra queso"], ["pesto", "barbecue"]);
    console.log(p6);
}
*/