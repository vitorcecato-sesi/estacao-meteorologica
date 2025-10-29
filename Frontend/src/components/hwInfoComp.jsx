
import "./hwInfoComp.css"

export default function HwInfoComp(props) {
    return (
        <>
        {props.lado === "L" ?
            <section className={"hwComponentesBox hwLeft"}>
                <img className="hwComponentesImg" src={props.imgSrc} alt={props.imgAlt} />
                <section className="hwComponentesTexto">
                    <h2>{props.Titulo}</h2>
                    <p>{props.Desc}</p>
                </section>
            </section>
            
            :
                
            <section className={"hwComponentesBox hwRight"}>
                <section className="hwComponentesTexto">
                    <h2>{props.Titulo}</h2>
                    <p>{props.Desc}</p>
                </section>
                <img className="hwComponentesImg" src={props.imgSrc} alt={props.imgAlt} />
            </section>
            }
        </>
    )
}