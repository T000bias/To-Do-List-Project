let command = prompt("What Do you want to do? ");
const toDo = ['Test item 1','test item 2'];
 while (command !== 'quit' && command !== 'q') {
   if (command === 'list') {
     console.log('xxxxxxxxxxxxxxxxx')
     for (let i = 0; i < toDo.length; i++){
       console.log(`${i} of ${toDo[i]}`)
     }
     console.log('xxxxxxxxxxxxxxxxx')
  //  let tryAgain = prompt("Enter a proper command: ")
 } else if (command === 'new') {
   const newToDo = prompt("What is the new to do item? ");
   toDo.push(newToDo);
   console.log(`${newToDo} was added to the list`)
 } else if (command === 'delete') {
   const index = parseInt(prompt('What do you want to delete:'));
   if (Number.isNaN(index)) {
      const deleted = toDo.splice(index,1)
      console.log(` ${deleted} was deleted.`)
   } else {
      console.log('Unknown index')
   }
 }
 command = prompt("What would you like to do?")
}
 console.log("You quit the app")

