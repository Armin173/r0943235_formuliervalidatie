feather.replace();

        // declaratie
        const but = document.querySelector("#button1")
        const listr = document.querySelector("#rode-error");
        const listg = document.querySelector("#groene-error");
        const listb = document.querySelector("#blauwe-error");
       

        const valideervoornaam = () => {
        }
        const valideernaam = () => {
        }
        const valideergebuikersnaam = () => {
        }
        const valideeradres = () => {
        }
        const valideerland = () => {
        }
        const valideerprovincie = () => {
        }
        const showlist = () => {
            if (listb.value != "" && listr.value != "" && listg.value != "") {
                //constrole 1ste keer
                if(firstTime){
                    list.textContent= "";
                    firstTime = false;
                }
                
                //porduct toevoegen
                addToList(product.value);

                //leegmaken veld
                product.value = "";
            }
            else{
                //foutmelding
                alert("alles is goed"); //geen errors = errors nietlaten zien.
            }
        }



        const valideer = () => {        
        valideervoornaam
        valideernaam
        valideergebuikersnaam
        valideeradres
        valideerland
        valideerprovincie
        showlist       
        }

        //event
        but.addEventListener('click', valideer, false)



















       //toevoegen aan list (ol)
       const addToList =(tijd, kleur) => {
           const li = document.createElement('li')
           //onsole.log(li);
           li.textContent = tijd + " - " + kleur;
           list.appendChild(li);
       }
       
       function addcolor(event) {
           //console.log(event);
           //kleur uit het data atribuut halen
           const col = this.dataset.color;

           // we houden de tijd bij
           const today = new Date();
           const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
           //console.log(col);

           //list item aanmaken met tijd en kleur
           addToList(time, col);
           //console.log(tijd);

       }


       //event koppelen aan iedere butten      
       
       for (let i = 0 ; i < buttons.length ; i++) {
           buttons[i].addEventListener('click', addcolor, false);
       } 