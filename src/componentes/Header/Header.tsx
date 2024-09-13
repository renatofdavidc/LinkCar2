import { Link } from "react-router-dom";

const Header=() =>{
    return(
        <>
            <main>
                <header>
                    <div className="content">
                        <div className="content_header">
                            <div className="header_esq">
                                <div className="logo">
                                    <Link to="/" className="titulo" ><img src="/imagem/logo.png" alt="imagem" /></Link>
                                </div>
                            </div>
                            <div className="header_dir">
                                <div id = "bemvindo">
                                    <span>Bem vindo! <Link to="/perfil" className="Login">(Login | Register)</Link> </span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </header>       
                    <nav id="menu_principal">
                        <div className="content">
                            <ul id="menu_principal_itens">
                                <li>
                                    <Link to="/seguros" className="menu_item">Seguros</Link>
                                </li>
                                <li>
                                <Link to="/registrarcarro" className="menu_item">Registrar Carro</Link>
                                </li>
                                <li>
                                <Link to="/contato" className="menu_item">Contato</Link>
                                </li>
                                <li>
                                    <Link to="/integrantes" className="menu_item">Integrantes</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </main>
        </>
    )
}

export default Header;