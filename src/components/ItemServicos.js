
function ItemServicos({ nome, img, valor, }) {
    return (
        <div className="fundo">
            <h1>{nome}</h1>
            <img src={img} />
            <h1>{valor}</h1>

        </div>
    )
}



export default ItemServicos;
