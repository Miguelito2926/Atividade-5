import React from "react";


export default function Contato() {
    return (
        <>

<header className="header">
        <h1 className="container">Contatos</h1>
      </header>
        
    <table className="container-fluid sm-2">
        
        <tr id="contato">
          <td><img class="imgcontato"  width="150px" src="./img/zap.png" alt="whatssapp"/><p>21-99856425</p></td>
          <td> <img class="imgcontato"width="150px" src="./img/email.png" alt="email"/><p>florentviagens.com.br</p></td>        
          <td><img  class="imgcontato" width="120px" src="./img/instagram-logo.png" alt="instagram"/><p>ViagensFlorent</p></td>
         
     </tr>
     </table>
     
        </>
    );
}