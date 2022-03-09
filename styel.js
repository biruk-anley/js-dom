function dom(){

    // using doc you can find head, images, body , base Url, last modified ,  scripts and titles...those are methods


    document.getElementById("dom").innerHTML = document.lastModified
    document.getElementById("dom2").innerHTML = document.title

}

function demoelements(){

    // lets see how to acess them by id 

    document.getElementById("ids").innerHTML= "hello man"
      
    // lets see how to acces by tag name

    const store = document.getElementsByTagName("p") // find all paragraphe elements and store all elements in array form

    document.getElementById("demo2").innerHTML = store[1].innerHTML + " " + store[3].innerHTML // this one will access those stored files and acces by inner html


    



}

// Finding HTML Elements by CSS Selectors

function query(){
const store2=document.getElementsByClassName("headers")
const store3 =document.querySelectorAll("h5.headers")

// lets access the first element by class name

document.getElementById("classnamee").innerHTML = store2[0].innerHTML // heaers for teh class name will be displayed

// lets acess all heading 5 with class name called headers with query selctors

document.getElementById("queryselctors").innerHTML =  store3[1].innerHTML  // header for query selector will be printed out
    

}

// js project to show continues gallery

function imagechanger(){

    const arrays = ["two.jpg", "kkk.jpg", "fragmaetoc.jpg", "kkkk.jpg"]

    let text = "joker"
     for (let i of arrays)


    document.getElementById("images").src= "one.jpg"
}

// here is to check validation

function validate(){
    let x = document.getElementById("next").value
    let text
   if (isNaN(x)){
       text = "Texts are not allowed here"
       
   }
   else if (x<10 || x > 20){
       text = "enter with the limit"
   }
   else{
       text = alert("submited")
   }

   document.getElementById("validates").innerHTML = text
}

// here is to change style of css

function clickabel(){
    document.getElementById("holder").style.color= "red";

}

// lets see how event interact witeh the websites

function seee(id){
   id.innerHTML = "hello the changer" ; // this is done withe event handler
}
  // How to see the date


function display(){
    document.getElementById("dates").innerHTML  = Date()
}

// how to use onchange event

function upper(){
    const x = document.getElementById("value")

    x.value = x.value.toUpperCase()


}

// lets see mouse related issue

function over(){
    document.getElementById("hover").innerHTML = "YOu hover isn't it"
}

function out(){
    document.getElementById("hover").innerHTML = "hoverme"
}


function up(){
    document.getElementById("hovers").innerHTML = "press me please"
}



function down(){
    document.getElementById("hovers").innerHTML = "YOu pressed me"
}

// lets deal with event listener

const hold =  document.getElementById("buttons")

hold.addEventListener("click" , function1)
hold.addEventListener("mouseover", function2)
hold.addEventListener("mouseout", function3)
 
// click event

function function1(){
    document.getElementById("listen").innerHTML += "clicked <br>"  // here += makes not to over ride
}

// hover event


function function2(){
    document.getElementById("listen").innerHTML += "hoverd <br>" // here += makes not to over ride
}

// mouse out evnet

function function3(){
    document.getElementById("listen").innerHTML += "out <br>" // here += makes not to over ride
}

// js event couneter project

let z = 0
const xr = document.getElementById("buttonss")
xr.addEventListener("click", counterss)

function counterss(){
    
    z+=1
    document.getElementById("listens").innerHTML = z
    
}

// js repeat your workder project


function whole(){
    
    document.getElementById("whole").innerHTML += document.body.innerHTML

}

// js DOM Nodes lets add elements

function last(){
const our = document.createElement("h3") // first lets create a tag we want to add

const ours =  document.createTextNode ("here is what I want to add") // lets create text we want to add

our.appendChild(ours) // appendt the text to the tag name

const element = document.getElementById("parent") // append the paragraph to the elelment
element.appendChild(our)

}

// lets add before element

function first(){
    const our2 = document.createElement("h3") // first lets create a tag we want to add

    const ours2 =  document.createTextNode ("here is what I want to add") // lets create text we want to add

    our2.appendChild(ours2) // appendt the text to the tag name

const element = document.getElementById("parent") // append the paragraph to the elelment
const chlildoneo = document.getElementById("first")
element.insertBefore(our2,chlildoneo)


}

// lets use remove method

function remove(){
    document.getElementById("second").remove()
}




