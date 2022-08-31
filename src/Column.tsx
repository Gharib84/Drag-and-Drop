import * as React from "react";

//imports your style here 
import { ColumnContainer , ColumnTile } from "./style";

//import card Component as 
import CardComponent from "./Card";

//import add item AddNewItemComponent as
import AddNewItemComponent from "./AddNewItem";



//declare type for props object via typescript
type props = {
    text: string,
    childern?: React.ReactNode
};

//create Column function component via typescript

function ColumnComponet({text}: props){
        //code here 
        return (
            <ColumnContainer>
                <ColumnTile>{text}</ColumnTile>
                <CardComponent text="Generate app scaffold"></CardComponent>
                <CardComponent text="Learn TypeScript"></CardComponent>
                <CardComponent text="Begin to use static typing"></CardComponent>
                <AddNewItemComponent toggleButtonText="+Add Another Task"
                 onAdd={console.log} dark/>
            </ColumnContainer>
        )
    
}


export default ColumnComponet;