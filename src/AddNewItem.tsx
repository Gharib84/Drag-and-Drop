import { AddItemButton } from "./style";
import { useState } from "react";
//import new item form 
import NewItemFormComponent from "./NewItemForm";

//declare props for button as 
type AddNewItemProps = {
    onAdd(text: string): void,
    toggleButtonText: string,
    dark?: boolean

};

function AddNewItemComponent(props: AddNewItemProps){
    //code here 
        const [showFrom, setShowForm] = useState<boolean>(false);
        const {onAdd, toggleButtonText, dark } = props;

        //logic 
        if(showFrom){
            return (
                <NewItemFormComponent onAdd={(text)=>{
                    onAdd(text)
                    setShowForm(false)
                }} />
            )
        }

    //return 
    return (
        <AddItemButton dark={dark} onClick= {
            ()=> setShowForm(true)
        }>
            {toggleButtonText}
        </AddItemButton>
    )
}


//export our component as 
export default AddNewItemComponent