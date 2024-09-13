
const Integrantes = () =>{
    return(
        <>
        <main>
            <body>
                <div className="content">
                    <h1 className="titulo_pagina">Integrantes</h1>
                    <div className="container_integrantes">
                        <div className="quadro_imagem">
                            <div id="foto_renato"><img src="/public/imagem/renatosantista.png" alt="" /></div>
                            <p className="nomes">Renato de Freitas David Campiteli <br />RM: 555627 <br /> <a href="https://github.com/renatofdavidc">Github</a></p>
                        </div>
                        <div className="quadro_imagem">
                            <div id="foto_pedro"><img src="/public/imagem/pedrovaisantos.png" alt="" /></div>
                            <p className="nomes">Pedro Lucas de Oliveira Bezerra <br />RM: 558439 <br /> <a href="https://github.com/PedrinDev1447">Github</a></p>
                        </div>
                        <div className="quadro_imagem">
                            <div id="foto_jaba"><img src="/public/imagem/jabapexao.png" alt="" /></div>
                            <p className="nomes">Gabriel Santos Jablonski <br />RM: 555425 <br /><a href="https://github.com/Jablonski17">Github</a></p>
                        </div>
                    </div>        
                </div>
            </body>
        </main>
        </>
    )
}

export default Integrantes;