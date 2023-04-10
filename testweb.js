feather.replace();

        // declaratie
        const but = document.querySelector("#button1")
        const listr = document.querySelector("#rode-error");
        const listg = document.querySelector("#groene-error");
        const listb = document.querySelector("#blauwe-error");
        //lijsten niet actief///////////////////////////////////////////////////////////////
        //col niet actief///////////////////////////////////////////////////////////////



        const valideervoornaam = () => {
            const product = document.querySelector("#product")
            console.log(product);
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
            if (listr.value != "" || listg.value != "" || listb.value != "") {

                //col naar alertstand

                if ( listr.value != "") {
                    
                    //laat list zien////////////////////////////////////////////////////////////////////////
                                    
                }
                else{                
                    
                    //lijst verberg/////////////////////
                }
    
                if (listg.value != "") {
                    
                    //laat list zien//////////////////////////////
                    
                }
                else{                
                    //lijst verberg/////////////////////
                }
    
                if (listb.value != "") {
                    //laat list zien/////////////////////////////
                }
                else{                
                    //lijst verberg/////////////////////
                }               
            }
            else{
                //col terug naar standaart/////////////////////              
                //alle lijsten verberg/////////////////////
            }
            
        }

        const valideer = () => { 
        //error lijsten leeg maken
        listr = "", listg = "", listb= ""    
        //error's zoeken en toevoegen
        valideervoornaam
        valideernaam
        valideergebuikersnaam
        valideeradres
        valideerland
        valideerprovincie
        //error's tonnen
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