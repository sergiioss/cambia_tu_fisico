import './Breadcrumb.scss';
import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
    let location = useLocation();
    let bread = location.pathname.replaceAll('-', " ");
    let url = bread.replace('/', " ")
    let segundo = url.split(" ");
    segundo.shift();
    let probando = segundo.splice(1,3);
    console.log(probando)
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item breadcrumb-color"><a href="/">Home</a></li>
                    <li className="breadcrumb-item mayus">{segundo[0]}</li>
                    {
                        probando.map((name, index) =>{
                            return(
                                <li className="url" key={index}>{name}</li>
                            )
                        })
                    }
                </ol>
            </nav>
        </>
    )
}

export default Breadcrumb