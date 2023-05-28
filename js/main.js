//every credit is pushed into this array
let totalMovements = [];
let cash = 0;

//showing total cash function
function showCash() {
    let cashDisplay = document.getElementById("cash");
    cashDisplay.innerHTML = `<p>Your current cash is: ${cash}</p>`;
};

// predefined object class
class Credits {
    constructor(amount, description, id, date) {
        this.amount = amount;
        this.description = description;
        this.id = id;
        this.date = date;
    }
}

//main function, starts with submit event
let formCredits = document.getElementById("formCredits");
    formCredits.addEventListener("submit", (e) => {
    //Prevent page reload
    e.preventDefault();
    //get user defined values
    let inputs = e.target.children;
    //creates a new object based on user values and predefined class
    let credit = new Credits (inputs[0].value, inputs[1].value, totalMovements.length + 1, new Date());
    alert(`You have succesfully added a new credit!`);
    //pushes the credit object into the array
    totalMovements.push(credit);
    //add the credit to total cash
    cash = cash + parseFloat(credit.amount);
    //call functions
    showCash();
    displayPrint();

    //SHOULD PUSH CREDITS INTO LOCAL STORAGE

    //SHOULD CALL DISPLAY getting data from storage
});