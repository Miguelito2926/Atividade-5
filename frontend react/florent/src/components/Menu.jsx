
import React from "react";
import { Link } from "react-router-dom";





export default function Menu() {

    return (

        <>

            <header>
                <div className="container-fluid"  >
                <nav className="navbar navbar-expand-sm" >
                    <div className="container-fluid" >
                        
                        <Link className="container container-sm" to="/"><strong>Florent Viagens</strong></Link>
                        <Link className="container container-sm"  to="/Promocao"><strong>Promoção</strong></Link>
                        <Link className="container container-sm"  to="/Destino"><strong>Destino</strong></Link>
                        <Link className="container container-sm"  to="/Cadastro"><strong>Cadastro</strong></Link>
                        <Link className="container"  to="/Contato"><strong>Contato</strong></Link>

                    </div>
                </nav>
                </div>
            </header>




        </>


    );

}
