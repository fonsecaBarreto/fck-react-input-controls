import React from 'react'
import  { Forming }  from '../../lib'

export const FormingExamples = (): JSX.Element =>{
  
    return ( <div> 
        <h2> &gt; Exemplos de Formatação </h2>

        <h3> &gt;&gt;  Formularios </h3>
        <Forming.FormGrid title="Titulo do formulario" columns={[5,7, 12]}>
            <Forming.InputWrapper label={"Um Valor Aqui"}> <input type="text" ></input> </Forming.InputWrapper>
            <Forming.InputWrapper label={"Um Texto aqui"}> <input type="text" ></input> </Forming.InputWrapper>
            <Forming.InputWrapper label={"Outro"}> <textarea></textarea> </Forming.InputWrapper>
        </Forming.FormGrid>

        <h3> &gt;&gt; Dicionarios </h3>
        <Forming.FormGrid title="Titulo do formulario" columns={[{lg: 12, sm: 6}, {lg: 12, sm:6}, {lg:12, sm: 6},{ lg: 12, sm: 6}]}>
            <Forming.LabelWrapper label="Chave">  Valor </Forming.LabelWrapper>
            <Forming.LabelWrapper label="Nome"> Lucas Fonseca </Forming.LabelWrapper>
            <Forming.LabelWrapper label="Idade">  25  </Forming.LabelWrapper>
        </Forming.FormGrid>

    </div>
    )
}

export default FormingExamples