import './Footer.scss'


const Footer = () => {

    return (

        <div className="footer">
           <span className="icon-github"><a className="link-github" href="https://github.com/sergiioss/" target="blank" >© Copyright 2023 - sergiioss</a></span>
           <span className="links-privacy">
                <a className="link-github" href="/contacto" target="blank">Contacto</a>
                <a className="link-github" href="/aviso-legal" target="blank">Aviso Legal</a>
                <a className="link-github" href="/politica-de-privacidad" target="blank">Politica de Privacidad</a>
                <a className="link-github" href="/politica-de-cookies" target="blank">Politica de Cookies</a>
            </span>
        </div>
    )
}

export default Footer