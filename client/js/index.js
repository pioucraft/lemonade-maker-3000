//set variables

var isLemonade = false
var clicksBeforLemonade = generateClicksBeforLemonade()
var newLemonade = 0;
const formatter = Intl.NumberFormat("en", {notation: "compact"})
if(getCookie("lemonade") == null) {
    //function newUser()
    var lemonade = 0n
    var buildings = ""
    setCookie("lemonade", 0n, 999999)
    setCookie("buildings", "", 999999)
}
else {
    var lemonade = BigInt(getCookie("lemonade"))
    var buildings = getCookie("buildings")
}

function generateClicksBeforLemonade() {
    let x = parseInt(Math.random() * 5)
    while(x == 0) {
        x = parseInt(Math.random() * 5)
    }
    return x
}



//basic functions
function clickFunction() {
    if(isLemonade == false) {
        clicksBeforLemonade--
        if(clicksBeforLemonade == 0) {
            isLemonade = true
            document.getElementById("lemonOrLemonade").src = "images/lemonade.png"
            document.getElementById("lemonOrLemonade").alt = "a lemonade"
            lemonade++
            document.getElementById
            document.getElementById("lemonade").innerHTML = formatter.format(lemonade)
        }
    }
    else {
        clicksBeforLemonade = generateClicksBeforLemonade()
        isLemonade = false
        document.getElementById("lemonOrLemonade").src = "images/lemon.png"
        document.getElementById("lemonOrLemonade").alt = "a lemon"
        newLemonade++
    }
}

function saveFunction() {
    setCookie("lemonade", lemonade, 999999)
    setCookie("buildings", buildings, 999999)
    if(newLemonade < 499) {
        fetch("http://localhost:3000/api/add-lemonade/"+newLemonade)
    }
    
    newLemonade = 0
}

function tickFunction() {
}

function longTickFunction() {
    lemonade += mixerLps()+plantationLps()+hydraulicPressLps()
    document.getElementById("lemonade").innerHTML = formatter.format(lemonade)
}

function calculateLpsFunction() {
    return 0
}


//mixer functions
function priceMixer() {
    let amountOwned = howManyOccurencesOfACharacterInAString(buildings, "a")
    return 7n+BigInt(parseInt(7*1.15**amountOwned))
}

function buyMixer() {
    if(priceMixer() <= lemonade) {
        lemonade -= priceMixer()
        buildings += "a"
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade)
        document.getElementById("shop-mixer-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.mixer())
        document.getElementById("shop-mixer-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "a")
        alert("you bought a mixer")
    }
    else{
        alert("you don't have enough money")
    }
}

function mixerLps() {
    let numberOfMixer = howManyOccurencesOfACharacterInAString(buildings, "a")
    return BigInt(numberOfMixer*1)
}

//plantation functions
function pricePlantation() {
    let amountOwned = howManyOccurencesOfACharacterInAString(buildings, "b")
    return 50n+BigInt(parseInt(50*1.15**amountOwned))
}

function buyPlantation() {
    if(pricePlantation() <= lemonade) {
        lemonade -= pricePlantation()
        buildings += "b"
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade)
        document.getElementById("shop-plantation-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.plantation())
        document.getElementById("shop-plantation-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "b")
        alert("you bought a plantation")
    }
    else{
        alert("you don't have enough money")
    }
}

function plantationLps() {
    let numberOfPlantation = howManyOccurencesOfACharacterInAString(buildings, "b")
    return BigInt(numberOfPlantation*5)
}

//hydraulic press functions
function priceHydraulicPress() {
    let amountOwned = howManyOccurencesOfACharacterInAString(buildings, "c")
    return 500n+BigInt(parseInt(500*1.15**amountOwned))
}

function buyHydraulicPress() {
    if(priceHydraulicPress() <= lemonade) {
        lemonade -= priceHydraulicPress()
        buildings += "c"
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade)
        document.getElementById("shop-hydraulicPress-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.hydraulicPress())
        document.getElementById("shop-hydraulicPress-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "c")
        alert("you bought a hydraulic press")
    }
    else{
        alert("you don't have enough money")
    }
}

function hydraulicPressLps() {
    let numberOfHydraulicPress = howManyOccurencesOfACharacterInAString(buildings, "c")
    return BigInt(numberOfHydraulicPress*25)
}



const lemonadeMaker = {
    click: clickFunction,
    save: saveFunction,
    tick: tickFunction,
    longTick: longTickFunction,
    calculateLps: {
        general: calculateLpsFunction,
        mixer: mixerLps,
        plantation: plantationLps,
        hydraulicPress: hydraulicPressLps
    },
    buy: {
        mixer: buyMixer,
        plantation: buyPlantation,
        hydraulicPress: buyHydraulicPress
    },
    calculatePrice: {
        mixer: priceMixer,
        plantation: pricePlantation,
        hydraulicPress: priceHydraulicPress
    },
}

//DOM
document.getElementById("lemonade").innerHTML = formatter.format(lemonade)
document.getElementById("shop-mixer-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.mixer())
document.getElementById("shop-mixer-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "a")

document.getElementById("shop-plantation-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.plantation())
document.getElementById("shop-plantation-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "b")

document.getElementById("shop-hydraulicPress-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.hydraulicPress())
document.getElementById("shop-hydraulicPress-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "c")



window.onload = function() {
    loop = setInterval(() => {
        lemonadeMaker.tick()
    }, 100)
    loop2 = setInterval(() => {
        lemonadeMaker.longTick()
        lemonadeMaker.save()
    }, 10000)
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;";
}

function howManyOccurencesOfACharacterInAString(daString = String, daCharacter = String) {
    let daReturnValue = 0
    for(let i =0; i<daString.length;i++) {
        if(daString[i] == daCharacter) {
            daReturnValue++
        }
    }
    return daReturnValue
}
