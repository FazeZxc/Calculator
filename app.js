let outScreen = document.getElementById("out");

let box = document.querySelector(".keyWrapper");
function addKeys() {
  for (let i = 9; i >= 0; i--) {
    let keys = document.createElement("button");
    keys.setAttribute("class", "keys");
    box.appendChild(keys);
    keys.innerText = i;
  }
}

addKeys();

let eval = document.querySelector(".solve");
let key = document.querySelectorAll(".keys");

key.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (
      outScreen.value.charAt(outScreen.value.length - 1) == "+" ||
      outScreen.value.charAt(outScreen.value.length - 1) == "-" ||
      outScreen.value.charAt(outScreen.value.length - 1) == "*" ||
      outScreen.value.charAt(outScreen.value.length - 1) == "/"
    ) {
      outScreen.value = `${outScreen.value}${elem.innerText}`;
      expression = outScreen.value;
    } else if (outScreen.value.length <= 9 || outScreen.value == "") {
      outScreen.value = `${outScreen.value}${elem.innerText}`;
    } else if (outScreen.value > 9) {
      alert("Cant enter more than 10 digits");
    }
  });
});

let fnkeys = document.querySelectorAll(".fnkeys");

let result;
let expression = "";
let listener = 0;
fnkeys.forEach((elem) => {
  elem.addEventListener("click", () => {
    switch (elem.innerText) {
      case "+":
        if (listener == 0 && outScreen.value != "") {
          outScreen.value = `${outScreen.value}${elem.innerText}`;
          listener = 1;
        }
        break;
      case "-":
        if (listener == 0 && outScreen.value != "") {
          outScreen.value = `${outScreen.value}${elem.innerText}`;
          listener = 1;
        }
        break;
      case "x":
        if (listener == 0 && outScreen.value != "") {
          outScreen.value = `${outScreen.value}*`;
          listener = 1;
        }
        break;
      case "/":
        if (listener == 0 && outScreen.value != "") {
          outScreen.value = `${outScreen.value}${elem.innerText}`;
          listener = 1;
        }
        break;
      case "(":
        outScreen.value = `${outScreen.value}${elem.innerText}`;

        break;
      case ")":

        outScreen.value = `${outScreen.value}${elem.innerText}`;
        expression = outScreen.value;
        break;
    }
  });
});

eval.addEventListener("click", () => {
  if (outScreen.value != "" && expression != "") {
    outScreen.value = math.evaluate(expression);
    expression = "";
    listener = 0;
  }
});

let clear = document.querySelector(".clear")

clear.addEventListener("click", () => {
      outScreen.value = "";
    }
);


setInterval(()=>{
    if(outScreen.value!= 0){
        expression = outScreen.value;
    }
},1)


document.addEventListener('keypress', (event)=>{

    let keyCode = event.keyCode ? event.keyCode : event.which;

    if(keyCode === 13) {
      eval.click();
    }
      
  });
 