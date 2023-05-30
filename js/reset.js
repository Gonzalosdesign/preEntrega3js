
    let reset = document.getElementById("reset");
        reset.addEventListener("click", (e) => {
        alert("account deleted");
        //Prevent page reload
        e.preventDefault();
        //Clean storage
        localStorage.clear();
        location.reload();
    });
