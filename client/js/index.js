//set variables

var isLemonade = false
var clicksBeforLemonade = generateClicksBeforLemonade()
var newLemonade = 0;
const formatter = Intl.NumberFormat("en", {notation: "compact"})
if(getCookie("lemonade") == null) {
    //function newUser()
    window.alert("welcome to super lemonade maker 3000, by using this websites you agree to cookies (and please don't block the popup windows, it'll be important for the game)")
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
            document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
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
        fetch("https://gougoule.ch/otherapis/lemonadeMaker/api/add-lemonade/"+newLemonade)
    }
    
    newLemonade = 0
}

function tickFunction() {
    lemonade += calculateLpsFunction()
    document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
}

function longTickFunction() {
    lemonade += mixerLps()+plantationLps()+hydraulicPressLps()
    document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
}

function calculateLpsFunction() {
    return factoryLps()+nuclearReactorLps()+limonadierLps()+weatherControllerLps()+lemondasHandLps()+socialMediaLps()
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
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
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
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
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
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
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

//factory functions
function priceFactory() {
    let amountOwned = howManyOccurencesOfACharacterInAString(buildings, "d")
    return 5000n+BigInt(parseInt(5000*1.15**amountOwned))
}

function buyFactory() {
    if(priceFactory() <= lemonade) {
        lemonade -= priceFactory()
        buildings += "d"
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
        document.getElementById("shop-factory-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.factory())
        document.getElementById("shop-factory-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "d")
        alert("you bought a factory")
    }
    else{
        alert("you don't have enough money")
    }
}

function factoryLps() {
    let numberOfFactory = howManyOccurencesOfACharacterInAString(buildings, "d")
    return BigInt(numberOfFactory*1)
}

//nuclearReactor functions
function priceNuclearReactor() {
    let amountOwned = howManyOccurencesOfACharacterInAString(buildings, "e")
    return 50000n+BigInt(parseInt(50000*1.15**amountOwned))
}

function buyNuclearReactor() {
    if(priceNuclearReactor() <= lemonade) {
        lemonade -= priceNuclearReactor()
        buildings += "e"
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
        document.getElementById("shop-nuclearReactor-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.nuclearReactor())
        document.getElementById("shop-nuclearReactor-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "e")
        alert("you bought a nuclearReactor")
    }
    else{
        alert("you don't have enough money")
    }
}

function nuclearReactorLps() {
    let numberOfNuclearReactor = howManyOccurencesOfACharacterInAString(buildings, "e")
    return BigInt(numberOfNuclearReactor*5)
}

//limonadier functions
function priceLimonadier() {
    let amountOwned = howManyOccurencesOfACharacterInAString(buildings, "f")
    return 500000n+BigInt(parseInt(500000*1.15**amountOwned))
}

function buyLimonadier() {
    if(priceLimonadier() <= lemonade) {
        lemonade -= priceLimonadier()
        buildings += "f"
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
        document.getElementById("shop-limonadier-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.limonadier())
        document.getElementById("shop-limonadier-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "f")
        alert("you bought a lemonade tree")
    }
    else{
        alert("you don't have enough money")
    }
}

function limonadierLps() {
    let numberOfLimonadier = howManyOccurencesOfACharacterInAString(buildings, "f")
    return BigInt(numberOfLimonadier*25)
}

//weatherController functions
function priceWeatherController() {
    let amountOwned = howManyOccurencesOfACharacterInAString(buildings, "g")
    return 5000000n+BigInt(parseInt(5000000*1.15**amountOwned))
}

function buyWeatherController() {
    if(priceWeatherController() <= lemonade) {
        lemonade -= priceWeatherController()
        buildings += "g"
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
        document.getElementById("shop-weatherController-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.weatherController())
        document.getElementById("shop-weatherController-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "g")
        alert("you bought a weather controller")
    }
    else{
        alert("you don't have enough money")
    }
}

function weatherControllerLps() {
    let numberOfweatherController = howManyOccurencesOfACharacterInAString(buildings, "g")
    return BigInt(numberOfweatherController*125)
}

//lemondasHand functions
function priceLemondasHand() {
    let amountOwned = howManyOccurencesOfACharacterInAString(buildings, "h")
    return 50000000n+BigInt(parseInt(50000000*1.15**amountOwned))
}

function buyLemondasHand() {
    if(priceLemondasHand() <= lemonade) {
        lemonade -= priceLemondasHand()
        buildings += "f"
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
        document.getElementById("shop-lemondasHand-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.lemondasHand())
        document.getElementById("shop-lemondasHand-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "h")
        alert("you bought a lemonade tree")
    }
    else{
        alert("you don't have enough money")
    }
}

function lemondasHandLps() {
    let numberOflemondasHand = howManyOccurencesOfACharacterInAString(buildings, "h")
    return BigInt(numberOflemondasHand*625)
}

//socialMedia functions
function priceSocialMedia() {
    let amountOwned = howManyOccurencesOfACharacterInAString(buildings, "i")
    return 500000000n+BigInt(parseInt(500000000*1.15**amountOwned))
}

function buySocialMedia() {
    if(priceSocialMedia() <= lemonade) {
        lemonade -= priceSocialMedia()
        buildings += "f"
        document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
        document.getElementById("shop-socialMedia-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.socialMedia())
        document.getElementById("shop-socialMedia-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "i")
        alert("you bought a lemonade tree")
    }
    else{
        alert("you don't have enough money")
    }
}

function socialMediaLps() {
    let numberOfsocialMedia = howManyOccurencesOfACharacterInAString(buildings, "i")
    return BigInt(numberOfsocialMedia*3130)
}


//others
function daFinalFunction() {
    if(lemonade >= 10000000000n) {
        window.alert("stop playing this game and do something of your life")
        window.alert("and i'm going to kick you from this page so you can do something useful")
        document.write("LEAVE THIS PAGE !!!!!!!!")
        setTimeout(() => {
            window.close()
        },2000)
    }
    else {
        window.alert("you don't have enough money")
    }
    console.log(formatter.format(10000000000))
}
const lemonadeMaker = {
    click: clickFunction,
    save: saveFunction,
    tick: tickFunction,
    longTick: longTickFunction,
    daFinalFunction: daFinalFunction,
    calculateLps: {
        general: calculateLpsFunction,
        mixer: mixerLps,
        plantation: plantationLps,
        hydraulicPress: hydraulicPressLps,
        factory: factoryLps,
        nuclearReactor: nuclearReactorLps,
        limonadier: limonadierLps,
        weatherController: weatherControllerLps,
        lemondasHand: lemondasHandLps,
        socialMedia: socialMediaLps
    },
    buy: {
        mixer: buyMixer,
        plantation: buyPlantation,
        hydraulicPress: buyHydraulicPress,
        factory: buyFactory,
        nuclearReactor: buyNuclearReactor,
        limonadier: buyLimonadier,
        weatherController: buyWeatherController,
        lemondasHand: buyLemondasHand,
        socialMedia: buySocialMedia
    },
    calculatePrice: {
        mixer: priceMixer,
        plantation: pricePlantation,
        hydraulicPress: priceHydraulicPress,
        factory: priceFactory,
        nuclearReactor: priceNuclearReactor,
        limonadier: priceLimonadier,
        weatherController: priceWeatherController,
        lemondasHand: priceLemondasHand,
        socialMedia: priceSocialMedia
    },
}

//DOM
document.getElementById("lemonade").innerHTML = formatter.format(lemonade) + " litters of lemonade"
document.getElementById("shop-mixer-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.mixer())
document.getElementById("shop-mixer-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "a")

document.getElementById("shop-plantation-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.plantation())
document.getElementById("shop-plantation-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "b")

document.getElementById("shop-hydraulicPress-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.hydraulicPress())
document.getElementById("shop-hydraulicPress-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "c")

document.getElementById("shop-factory-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.factory())
document.getElementById("shop-factory-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "d")

document.getElementById("shop-nuclearReactor-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.nuclearReactor())
document.getElementById("shop-nuclearReactor-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "e")

document.getElementById("shop-limonadier-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.limonadier())
document.getElementById("shop-limonadier-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "f")

document.getElementById("shop-weatherController-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.weatherController())
document.getElementById("shop-weatherController-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "g")

document.getElementById("shop-lemondasHand-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.lemondasHand())
document.getElementById("shop-lemondasHand-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "h")

document.getElementById("shop-socialMedia-price").innerHTML = "price: " + formatter.format(lemonadeMaker.calculatePrice.socialMedia())
document.getElementById("shop-socialMedia-numberOwned").innerHTML = "owned: " + howManyOccurencesOfACharacterInAString(buildings, "i")

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
