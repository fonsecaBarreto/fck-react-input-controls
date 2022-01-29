import React, { useState } from "react";
import './style.css'
import ReactDOM from "react-dom";
import FormatingExamples from './formatting-examples'
import InputControlExamples from './input-control-examples'

export const ExampleApplication = () =>{
    const [ pageIndex, setPageIndex ] = useState(0)
    return (
        <div id="App" className='fck-examples container'>
            <h2> fck-react-input-controls</h2>
            <h3> Autor: 
                <a href={"https://github.com/fonsecaBarreto"}> Lucas Fonseca </a>
            </h3>

            <button onClick={()=>setPageIndex(0)}>Formatação</button>
            <button onClick={()=>setPageIndex(1)}>Controle de entrada</button>
            {
                pageIndex == 0 ?
                <FormatingExamples/>
                :
                <InputControlExamples/>
            }
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <ExampleApplication/>
</React.StrictMode>, document.getElementById("root") );