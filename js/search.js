//filter credits within the totalMovements array based on user defined values

let formSearch = document.getElementById("formSearch");
        formSearch.addEventListener("submit", (e) => {
            // prevent page reload
            e.preventDefault();
            
            // select and clean the display area
            let found = document.getElementById("found");
            found.innerHTML = "";
            
            // get user values
            let inputs = e.target.children;
            let minFilter = parseFloat(inputs[0].value);
            let maxFilter = parseInt(inputs[1].value);
            
            //if min > max alert user
            minFilter > maxFilter ? alert(`Min must be < than Max`) : displayFiltered();

            function displayFiltered () {
                // filter objects within the user range
                const filtered = totalMovements.filter((movement) => movement.amount >= minFilter && movement.amount <= maxFilter);

                //if filtered is empty
                if (filtered.length === 0 ){
                    let div = document.createElement("div");
                    div.className = `search`;
                    div.innerHTML = `
                    <h5>There aren´t any credits within defined range</h5>
                    `;
                    found.append(div);
                }
    
                // print a div for each movement between user defined values
                for ( const movement of filtered) {
                    let div = document.createElement("div");
                    div.className = `search`;
                    div.innerHTML = `
                    <h2>amount: ${movement.amount}</h2>
                    <h5>description: ${movement.description}</h5>
                    <p>id: ${movement.id}</p>
                    <h6>date: ${movement.date}</h6>
                    `;
                    found.append(div);
                };
            }

        });