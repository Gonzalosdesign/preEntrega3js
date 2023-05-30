//display every credit into the page
function displayPrint() {
    let userStorage = localStorage.getItem("totalMovements");
    totalMovements = JSON.parse(userStorage);
    
    let display = document.getElementById("display");
    display.innerHTML = "";
    
    for ( const movement of totalMovements) {
        console.log(`amount: ${movement.amount}, description: ${movement.description}, date: ${movement.date}`);
        
        let div = document.createElement("div");
        div.className = `displayCredit`;
        div.innerHTML = `
        <h2>amount: ${movement.amount}</h2>
        <p>id: ${movement.id}</p>
        <h5>description: ${movement.description}</h5>
        <h6>date: ${movement.date}</h6>
        `;
        display.append(div);
    };
}
displayPrint();