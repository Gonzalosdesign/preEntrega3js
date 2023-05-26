

let movementCreationForm = document.getElementById("movementCreationForm");
// console.log(movementCreationForm);

movementCreationForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    let input = e.target.children;
    console.log(input[0].value);
    console.log(input[3].value);
    console.log(input[6].value);
    // console.log(input[9].value);
    
})