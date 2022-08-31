
import styled from "styled-components"

export const AppContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: flex-start;
    height:100%;
    width:100%;
    padding: 20px;
    background-color: #3179ba;
`


export const ColumnContainer = styled.div`
        background-color: #ebecf0;
        width: 300px;
        min-height: 40px;
        margin-right: 20px;
        border-radius: 3px;
        padding: 8px 8px;
        flex-grow: 0;

`

export const ColumnTile = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`

export const CardCountainer = styled.div`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`

//declare boolen type for button as 
type AddItemButtonPros = {
    dark?: boolean
};

//style button 

export const AddItemButton = styled.button<AddItemButtonPros>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    color: ${(props) => (props.dark ? "#000" : "#fff")};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;
    &:hover {
    background-color: #ffffff52;
 }
`
//style form field as 

export const  NewItemFormContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`
//style form button as 
export const  NewItemButton = styled.button`
    background-color: #5aac44;
    border-radius: 3px;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 6px 12px;
    text-align: center;
`
//style input field as
export const  NewItemInput = styled.input`
    border-radius: 3px;
    border: none;
    box-shadow: #091e4240 0px 1px 0px 0px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
`

