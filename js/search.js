let formSearch = document.getElementById("formSearch");
        formSearch.addEventListener("submit", (e) => {
            // prevent page reload
            e.preventDefault();
            
            // select and clean the display area
            let found = document.getElementById("found");
            // found.innerHTML = "";
            
            // get user values
            let inputs = e.target.children;
            let minFilter = inputs[0].value;
            let maxFilter = inputs[1].value;
            console.log(`min: ${minFilter}`);
            console.log(`max: ${maxFilter}`);

            // filter objects within the user range
            const filtered = totalMovements.filter((movement) => movement.amount >= minFilter && movement.amount <= maxFilter);
            // print a div for each movement between user defined values
            for ( const movement of filtered) {
                // console.log(`Movement amount: ${movement.amount}, description: ${movement.description}, id: ${movement.id}, date: ${movement.date}`);

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
        });