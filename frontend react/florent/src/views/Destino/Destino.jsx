import React from "react";


export default function Destino() {
    return (
        <>
         <div class="content">      
      
     
        <form method="post" action=""> 
        
          <p> 
            <label for="origem_1">Origem</label>
            <input id="origem_1" name="Origem" required="required" type="text" placeholder="Ex:Rio de Janeiro"/>
          </p>
           
          <p> 
            <label for="destino_1">Destino</label>
            <input id="destino_1" name="Destino" required="required" type="text" placeholder="Ex: Cancun" /> 
          </p>  
          <p> 
            <input type="submit" value="Pesquisar"/> 
          </p>             
    </form>
    
     </div>

        </>
    );
}