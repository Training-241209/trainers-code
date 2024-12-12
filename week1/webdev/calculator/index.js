
const form = document.querySelector("form");

const adding = document.querySelector("#adding"); // this is how we get our button element with id adding
const substraction = document.querySelector("#substraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector('#divison');

const resultContainer = document.getElementById("result");


let selectAction = null;
// This is how we attach Event Listeners
form.addEventListener("submit", calculate); // true will enable capturing behaviour


function calculate(event){

    event.preventDefault(); // this prevents the form from submitting and refreshing the page

    const num1 = event.target.elements["num1"].value; //these are string values
    const num2 = event.target.elements["num2"].value;


    console.log(selectAction);

    if(selectAction == "+"){

        resultContainer.textContent = Number(num1) + Number(num2);
    }
    else if(selectAction == "-"){

        resultContainer.textContent = Number(num1) - Number(num2);

    }
    else if(selectAction == "*"){
        resultContainer.textContent = Number(num1) * Number(num2);

    }
    else if(selectAction == "/"){
        resultContainer.textContent = Number(num1) / Number(num2);

    }

}


//Handle buttons clicks

const selectAddition = () => {
    selectAction = "+";
}

const selectSubstraction = () => {
    selectAction = "-";
}

// Add event Listener to 
multiplication.addEventListener("click", function (event) {
    selectAction = "*";
})

division.addEventListener("click", (event) =>{
    selectAction = "/";
})

