
    let reset = document.getElementById("reset");
        reset.addEventListener("click", (e) => {
            alert("delete");
        //Prevent page reload
        e.preventDefault();
        //Clean storage
        localStorage.clear();
        location.reload();
    });
