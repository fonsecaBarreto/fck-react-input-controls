import React from 'react'
import  { Forming, Controls } from '../../lib'
import { UseStateAdapter } from  '../../lib/Controls'

const INITIAL_DATA = {
    nome: "Aqui vai ter um nome",
    outro: "Outro aqui",
    idade: "23",
    endereco: "Rua São Joaquim",
    Numeros: { label: "Seila", value: 2},
    cpf:""
}

export const ControlsExamples = (): JSX.Element =>{
  []
    const state = UseStateAdapter(INITIAL_DATA)

    return ( <div> 
        <h2> Exemplos de Controles </h2>

        <Forming.FormGrid title="" columns={[6,6,12, 12]}>
            <Controls.TextBox placeHolder="Exemplo: 99.999.999/9999-99" mask="99.999.999/9999-99" 
                state={state} label="Exemplo texto com mascara " name={"cpf"}  type={Controls.TextBoxTypes.TEXT}  > </Controls.TextBox>
            <Controls.SelectBox state={state} label="Exemplo de Select Box " name={"Numeros"} list={["Um", "dois", "tres"]}  > </Controls.SelectBox>
            <Controls.SelectBox state={state} label="Outro Exemplo de Select Box " name={"OutroNumeros"} list={[{value:"Algum_id", label:"Nome"},{value: "Ouro id", label: "Outro Nome"}]}  > </Controls.SelectBox>
            <Controls.TextBox state={state} name={"nome"} type={Controls.TextBoxTypes.TEXT}/>
            <Controls.TextBox state={state} name={"idade"} type={Controls.TextBoxTypes.NUMBER}/>
            <Controls.TextBox state={state} name={"senha"} type={Controls.TextBoxTypes.PASSWORD}/> 
            <Controls.TextBox state={state} name={"nome"} label="Viewbox" type={Controls.TextBoxTypes.VIEW}/>
            <Controls.TextBox state={state} name={"Textão aqui"} type={Controls.TextBoxTypes.TEXTAREA}/>
            <Controls.TextBox state={state} name={"Text Area Customiado"} type={Controls.TextBoxTypes.TEXTAREA} className={"custom-text-area-test"} />
            {JSON.stringify(state.data.get)}
        </Forming.FormGrid>


    </div>
    )
}

export default ControlsExamples