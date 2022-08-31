import React from 'react';
import { AppContainer } from "./style";
import ColumnComponet from "./Column";
import AddNewItemComponent from './AddNewItem';
function App() {
  return (
   <AppContainer>
       
        <ColumnComponet text ="To Do Now"></ColumnComponet>

          <AddNewItemComponent toggleButtonText='+ add another list'
            onAdd={console.log}/>
   </AppContainer>
  );
}

export default App;
