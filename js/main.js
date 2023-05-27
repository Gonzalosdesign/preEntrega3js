let totalMovements = []; //este arreglo acumula los objetos de los movements

let cash = 0;

function showCash() {
    console.log(`cash: ${cash}`);
    let cashDisplay = document.getElementById("cash");
    cashDisplay.innerHTML = `<p>Your current cash is: ${cash}</p>`;
};

class Credits {
    constructor(amount, description, id, date) {
        this.amount = amount;
        this.description = description;
        this.id = id;
        this.date = date;
    }
}

let formCredits = document.getElementById("formCredits");
    formCredits.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let inputs = e.target.children;
    let credit = new Credits (inputs[0].value, inputs[1].value, totalMovements.length + 1, new Date());
    console.log(`credit: ${credit.amount}`);
    totalMovements.push(credit);//añade el objeto al arreglo
    cash = cash + parseFloat(credit.amount);
    showCash();
    displayPrint();
});