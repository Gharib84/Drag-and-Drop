import { useState } from "react";
import * as React from "react";
import {
    NewItemFormContainer,
    NewItemButton,
    NewItemInput
} from "./style";

import { useFocus } from "./useFocus"

//define props 
type NewItemFormPros = {
     onAdd(text: string): void,
     childern?: React.ReactNode   
};


//create our function component
function NewItemFormComponent({onAdd}: NewItemFormPros){
    //codde here
    const [text, setText] = useState<string>("");
    const inputRef = useFocus();
    const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Enter"){
            onAdd("text")
        }
    }
    return (
        <NewItemFormContainer>
            <NewItemInput ref={inputRef} value={text} 
            onChange={(event)=> setText(event.target.value)} 
            onKeyPress={handleAddText}
            />
            <NewItemButton onClick={()=> onAdd(text)}>
                create
            </NewItemButton>
        </NewItemFormContainer>
    )

};


export default NewItemFormComponent;

