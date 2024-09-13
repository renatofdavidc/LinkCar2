const Perfil = () =>{
    return(
        <>
        <main>
            <body>
                <div className="content">
                    <div className="itens_login">
                        <section className="quadro_dir">
                            <h1 className="titulo_form">Login</h1>
                            <form action="" className="form_login">
                                <label htmlFor="email_login">Email: </label>
                                <input type="text" name="email_login" id="email_login" required/>
                                <br />
                                <label htmlFor="senha_login">Senha: </label>
                                <input type="password" name="senha_login" id="senha_login" required/>
                                <br />
                                <div className="botao_enviar">
                                    <input type="submit" name="enviar" id="enviar" value="Entrar" required/>
                                </div>
                            </form>
                        </section>
                        <section className="quadro_esq">
                            <h1 className="titulo_form">Registrar</h1>
                            <form action="" className="form_register">
                                <label htmlFor="nome_completo">Nome completo: </label>
                                <input type="text" name="nome_completo" id="nome_completo" required/>
                                <br />
                                <label htmlFor="email_register">Email :</label>
                                <input type="text" name="email_register" id="email_register" required/>
                                <br />
                                <label htmlFor="senha_register">Senha:</label>
                                <input type="password" name="senha_register" id="senha_register" required/>
                                <br />
                                <label htmlFor="confirmar_senha_register">Confirmar senha:</label>
                                <input type="password" name="confirmar_senha_register" id="confirmar_senha_register" required/>
                                <div className="botao_enviar">
                                    <input type="submit" name="enviar" id="enviar" value="Registrar" required/>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </body>
        </main>
        </>
    )
}
export default Perfil;