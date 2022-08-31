import {CardCountainer } from "./style";
//declare card pros as 
type cardPros = {
    text:string,
    childern?: string
};

//create functional component react typescript as
function CardComponent({text}: cardPros){
    return (
        <CardCountainer>
            {text}
        </CardCountainer>
    )
};

//export our card component as 
export default CardComponent


