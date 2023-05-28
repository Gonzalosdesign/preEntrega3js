//showing total cash function
function showCash() {
    //load previous data
    let userCash = localStorage.getItem("cash");
    cash = JSON.parse(userCash);
    //display the current cash
    let cashDisplay = document.getElementById("cash");
    cashDisplay.innerHTML = `<p>Your current cash is: ${cash}</p>`;
};
showCash();