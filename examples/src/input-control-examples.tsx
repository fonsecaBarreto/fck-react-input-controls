import React from 'react'
import  { Forming, Controls } from '../../lib'
import { UseStateAdapter } from  '../../lib/Controls'

const INITIAL_DATA = {
    nome: "Aqui vai ter um nome",
    outro: "Outro aqui",
    idade: "23",
    endereco: "Rua São Joaquim",
    Numeros: { label: "Seila", value: 2},
    cpf:"",
    test1:" Text qualquer que nao pode ser alterado por hora",
    test2: {}
}

export const ControlsExamples = (): JSX.Element =>{
  []
    const state = UseStateAdapter(INITIAL_DATA)

    return ( <div> 
        <h2> &gt; Exemplos de Controles </h2>

        <Forming.FormGrid title="" columns={[6,6,12, 12]}>
            <Controls.TextBox placeHolder="Exemplo: 99.999.999/9999-99" mask="99.999.999/9999-99" state={state} label="Exemplo texto com mascara " name={"cpf"}  type={Controls.TextBoxTypes.TEXT}  > </Controls.TextBox>
            <Controls.SelectBox state={state} label="Outro Exemplo de Select Box " name={"OutroNumeros"} list={[{value:"Algum_id", label:"Nome"},{value: "Ouro id", label: "Outro Nome"}]}  > </Controls.SelectBox>
            <Controls.TextBox state={state} name={"nome"} type={Controls.TextBoxTypes.TEXT}/>
            <Controls.TextBox state={state} name={"idade"} noLabel placeHolder='Idade (Sem a label em cima)' type={Controls.TextBoxTypes.NUMBER}/>
            <Controls.TextBox state={state} name={"senha"} type={Controls.TextBoxTypes.PASSWORD}/> 
            <Controls.TextBox state={state} name={"nome"} label="Viewbox" type={Controls.TextBoxTypes.VIEW}/>
            <Controls.TextBox state={state} name={"qualquer"} type={Controls.TextBoxTypes.TEXTAREA}/>
            
            <hr></hr>

            <h3> Desabilitados </h3>
            <Controls.TextBox disabled={true} state={state} label={"Desabilitado forçado"} name={"test1"} type={Controls.TextBoxTypes.TEXT}/>
            <Controls.SelectBox disabled={true} state={state} label="Desabilitado forçado" name={"test2"} list={[{value:"Algum_id", label:"Nome"},{value: "Ouro id", label: "Outro Nome"}]}  > </Controls.SelectBox>
        </Forming.FormGrid>
    </div>
    )
}

export default ControlsExamples