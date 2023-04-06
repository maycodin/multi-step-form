var contentInfo = document.querySelectorAll(".content");
var roundBtn = document.querySelectorAll(".round");
const name = document.getElementById('Name');
const email = document.getElementById('Email');
const number = document.getElementById('Number');
const form = document.getElementById('form');
const errEl = document.getElementById('error');
const errEl1 = document.getElementById('error-1');
const errEl2 = document.getElementById('error-2');
let plan = document.querySelectorAll(".plan");
let toggle = document.querySelector(".toggle");
let text1 = document.querySelector(".text-1");
let text2 = document.querySelector(".text-2");
let monthLy = document.querySelectorAll(".monthly");
let yearLy = document.querySelectorAll(".yearly");
let gameDetail = document.querySelector(".game-detail")
const arcade = document.querySelector(".arcade");
const advanced = document.querySelector(".advanced");
const pro = document.querySelector(".pro");
const arcCost = document.querySelector(".arccost");
const adCost = document.querySelector(".adcost");
const proCost = document.querySelector(".procost");
const online = document.querySelector(".online");
const larger = document.querySelector(".larger");
const customize = document.querySelector(".customize");
const year = document.querySelectorAll(".year");
const month = document.querySelectorAll(".month");
const addBox = document.querySelector("addbox");
const addOn =  document.querySelectorAll(".add-on");
const check1 = document.getElementById('check1')
const Pri1 = document.querySelector(".pri-1");
const Pri2 = document.querySelector(".pri-2");
const Pri3 = document.querySelector(".pri-3");
const Cri1 = document.querySelector(".cri-1");
const Cri2 = document.querySelector(".cri-2");
const Cri3 = document.querySelector(".cri-3");
const Arc= document.querySelector(".arc");
const Adv = document.querySelector(".adv");
const Pros = document.querySelector(".pros");
const onl = document.querySelector(".onl");
const lar = document.querySelector(".lar");
const cust = document.querySelector(".cust");
const Online = document.querySelector(".Online");
const Larger = document.querySelector(".Larger");
const Custom = document.querySelector(".Custom");
const toggleButton = document.querySelector(".toggle-button");
const totalPrice = document.querySelector(".tot-price");
const total = document.querySelector(".total")





// if(check1.checked){
//     picked(0);
// }

var clicked = false
toggleButton.addEventListener('click', () => {
    clicked = true
})
Online.addEventListener('click', () => {
    onl.classList.remove("hidden")
})
Larger.addEventListener('click', () => {
    lar.classList.remove("hidden")
})
Custom.addEventListener('click', () => {
    cust.classList.remove("hidden")
})
arcade.addEventListener('click', () => {
    Arc.classList.remove("hidden")
    if(arcCost.classList.contains("hidden")){
        let cost = 90
        console.log(cost)
    }
    else{
        let cost = 9
        console.log(cost)
    } 
});
advanced.addEventListener('click', () => {
    Adv.classList.remove("hidden")
    if(adCost.classList.contains("hidden")){
        let cost = 120
        console.log(cost)
    }
    else{
        let cost = 12
        console.log(cost)
    } 
});
pro.addEventListener('click', () => {
    Pros.classList.remove("hidden")
    if(proCost.classList.contains("hidden")){
        let cost = 150
        console.log(cost)
    }
    else{
        let cost = 15
        console.log(cost)
    } 
});


form.addEventListener('submit', (e) => {

    let messages = []

    if (name.value === '' || name.value == null) {
        messages.push('This field is required')
    }

    if (messages.length > 0){
     e.preventDefault()
     errEl.innerText = messages.join(', ')
    }
   
    let messages1 = []
    if (email.value === '' || email.value == null) {
        messages1.push('This field is required')
    }

    if (messages1.length > 0){
     e.preventDefault()
     errEl1.innerText = messages1.join(', ')
    }
   
    let messages2 = []
    if (number.value === '' || number.value == null) {
        messages2.push('This field is required')
    }

    if (messages2.length > 0){
     e.preventDefault()
     errEl2.innerText = messages2.join(', ')
    }
 })

const showContent = (panelIndex) => {

    contentInfo.forEach(function(node) {
        node.classList.add("hidden")

    });
    
    contentInfo[panelIndex].classList.remove("hidden")

    roundBtn.forEach(function(node) {
        node.classList.remove("clicked")

    });
    roundBtn[panelIndex].classList.add("clicked")

    if(gameDetail.classList.contains("hidden")){
        year.forEach(y => {
            y.classList.remove("hidden");
        });
        month.forEach(y => {
            y.classList.add("hidden");
        });
        
    }
    else{
        year.forEach(y => {
            y.classList.add("hidden");
        });
        month.forEach(y => {
            y.classList.remove("hidden");
        });
    }

    

};
showContent(0);




function Animatedtoggle(){
    toggle.classList.toggle("active");

    if (text1.classList.contains("bold")){
        text1.classList.remove("bold");
        text1.classList.add("faints");
        text2.classList.remove("faints");
        text2.classList.add("bold");
    }
    else{
        text1.classList.add("bold");
        text1.classList.remove("faints");
        text2.classList.add("faints");
        text2.classList.remove("bold");
    }
    if(!gameDetail.classList.contains("hidden")){
        monthLy.forEach(monthly => {
            monthly.classList.add("hidden");
        });
        yearLy.forEach(yearly => {
            yearly.classList.remove("hidden");
        });
    }
    else{
        monthLy.forEach(monthly => {
            monthly.classList.remove("hidden");
        });
        yearLy.forEach(yearly => {
            yearly.classList.add("hidden");
        });
    }

}
const selected = (index) => {
    plan[index].classList.add("focus")

    // if(plan[index].classList.contains("arcade")){
    //     if(monthLy.classList.contains("hidden")){
    //         let cost = 90
    //     }
    //     else{
    //         let cost = 9
    //     }
    //     console.log(cost)
    // }
    let post = 0
    if(!clicked){
        if(index == 0){
            post += 9 
            let Price = `+$${post}/mo`
            Cri1.innerText = Price  
           
        };
        if(index == 1){
            post += 12   
            let Price = `+$${post}/mo`
            Cri2.innerText = Price
           
        };
        if(index == 2){
            post += 15
            let Price = `+$${post}/mo`
            Cri3.innerText = Price
           
        };
    } else{
        if(index == 0){
            post += 90 
            let Price = `+$${post}/yr`
            Cri1.innerText = Price  
        
        };
        if(index == 1){
            post += 120   
            let Price = `+$${post}/yr`
            Cri2.innerText = Price
            
        };
        if(index == 2){
            post += 150
            let Price = `+$${post}/yr`
            Cri3.innerText = Price
        
        };
    }

    console.log(Price.post)
    
    
}
const picked = (panelIndex) => {
    addOn[panelIndex].classList.add("focuss");
   
    let cost = 0
if(!clicked){
    if(panelIndex == 0){
        cost += 1  
        let Price = `+$${cost}/mo`  
        Pri1.innerText = Price
    };
    if(panelIndex == 1){
        cost += 2   
        let Price = `+$${cost}/mo`
        Pri2.innerText = Price
    };
    if(panelIndex == 2){
        cost += 2
        let Price = `+$${cost}/mo`
        Pri3.innerText = Price
    };
} else{
    if(panelIndex == 0){
        cost += 10  
        let Price = `+$${cost}/yr`  
        Pri1.innerText = Price
    };
    if(panelIndex == 1){
        cost += 20   
        let Price = `+$${cost}/yr`
        Pri2.innerText = Price
    };
    if(panelIndex == 2){
        cost += 20
        let Price = `+$${cost}/yr`
        Pri3.innerText = Price
    };

}
    
   
}
totalPrice.innerText = ''
if(!clicked){
    totalPrice.innerText += ""
} else{
    totalPrice.innerText += "year"
};
