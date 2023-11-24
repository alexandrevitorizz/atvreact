import ItemServicos from "../ItemServicos"

function Servicos() {

    return (
        <div className="estilo">

            <h1 className="servicos">SERVIÇOS:</h1>
            <hr></hr>
            <ItemServicos nome={'MOLETOM QUICKSILVER CINZA'} img={'https://d2e5mvjndnxyoo.cloudfront.net/Custom/Content/Products/15/74/1574270_moletom-fech-lettering-ps-q422p0040_l1_637504459972831176.jpg'} valor={350}>
            </ItemServicos>
            <br></br>
            <hr></hr>
            <ItemServicos nome={'MOLETOM SURF QUICKSILVER'} img={'https://static.zattini.com.br/produtos/moletom-quiksilver-night-marshall-masculino/42/A46-3470-342/A46-3470-342_zoom1.jpg?ts=1593012904&ims=544x'} valor={420}>
            </ItemServicos>
            <hr></hr>
            <ItemServicos nome={'CONJUNTO QUICKSILVER'} img={'https://images.yampi.me/assets/stores/nando-produts-imports/uploads/images/moletom-esportivo-masculino-estampado-quiksilver-slim-fit-uso-casual-novas-cores-white-set-h-s-629a94db29b63-large.jpg'} valor={320}>
            </ItemServicos>


        </div >

    )
}


export default Servicos