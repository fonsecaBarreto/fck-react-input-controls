import React, { ChangeEvent, useEffect, useState } from "react"
import InputWrapper from '../Forming/Wrappers/InputWrapper'
import { FCKControls } from './protocols'

export namespace SelectBox {
    export type ItemView ={ label: string, value: string }
    export interface Params extends FCKControls.Params {
        list: ItemView[]
    }
}

export const SelectBox: React.FunctionComponent<SelectBox.Params> = ({ name, label, state, list, placeHolder, className }) =>{

    const [ observable, setObservable] = useState<SelectBox.ItemView[]>([])

    useEffect(()=>{
        const novo: any[] = list.map((v,i)=> v);
        setObservable([{ value: "", label: placeHolder ??  "Nenhum Item Selecionado " }, ...novo]);
    },[list])
    
    const handleInput = ( e:ChangeEvent<HTMLSelectElement> ) =>{
        state.data.onInput(name, { value: e.target.value, label: observable[e.target.options.selectedIndex].label }) 
    }

    return (
        <InputWrapper label={label ?? name} error={state.errors.get[name]} className={className}>  
            <select 
                disabled={list.length === 0} 
                value={ state.data.get[name]?.value ?? ""} 
                onChange={handleInput}>
                 { observable.map((u,i)=><option value={u.value} key={i}>{u.label}</option>) }
            </select>
        </InputWrapper>
    )
}

