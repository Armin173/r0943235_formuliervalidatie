feather.replace();

        // declaratie
        const but = document.querySelector("#button1")
        const listr = document.querySelector("#rode-error");
        const listg = document.querySelector("#groene-error");
        const listb = document.querySelector("#blauwe-error");
        var alertstandr = document.getElementById("rode");
        var alertstandb = document.getElementById("blauwe");
        var alertstandg = document.getElementById("groene");
        
          
        //col niet actief///////////////////////////////////////////////////////////////



        function checkEmptyField(input) {
            if ( input.value != "") {
            }
            else
        }



        const valideervoornaam = () => {
            
            checkEmptyField(input)
            
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
            
            listr.push('pear');
            if (listr.value != "" || listg.value != "" || listb.value != "") {

                //col naar alertstand

                if ( listr.value != "") {   
                    if (alertstandr.style.display === "none") {
                        alertstandr.style.display = "block";
                }
                else{
                    if (alertstandr.style.display === "block") {                     
                        alertstandr.style.display = "none";                                             
                }
    
                if (listg.value != "") {
                    if (alertstandg.style.display === "none") {
                        alertstandg.style.display = "block";
                }
                else{
                    if (alertstandg.style.display === "block") {                     
                        alertstandg.style.display = "none";                                             
                }
    
                if (listb.value != "") {
                    if (alertstandb.style.display === "none") {
                        alertstandb.style.display = "block";
                }
                else{
                    if (alertstandb.style.display === "block") {                     
                        alertstandb.style.display = "none";                                             
                }               
            }
            else{
                //col terug naar standaart/////////////////////              
                                     
                alertstandr.style.display = "none";                 
                alertstandg.style.display = "none";                                         
                alertstandb.style.display = "none";
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