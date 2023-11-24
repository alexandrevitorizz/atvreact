import ItemFormulario from "./ItemFormulario";

function Contato() {
    return (

        <div>
            <h1 className="contato">CONTATO:</h1>
            <hr></hr>
            <ItemFormulario name="nome" label="Nome" tipo="text" ph="Digite seu nome">x</ItemFormulario>
            <ItemFormulario name="nome" label="E-mail" tipo="text" ph="Digite seu e-mail">x</ItemFormulario>
            <ItemFormulario name="nome" label="Assunto" tipo="text" ph="Assunto">x</ItemFormulario>
            <ItemFormulario name="nome" label="Mensagem" tipo="text" ph="Mensagem">x</ItemFormulario>
            <button>Enviar</button>
        </div>

    )
}
export default Contato;