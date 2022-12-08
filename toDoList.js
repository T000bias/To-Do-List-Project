// To Do List Project
console.log(`New: Adds a task\n.list: display all items\n. delete: removes specific task\n. quit: exits the program`)

// Steps:
    // Step 1: Create the game loop. You should be able to quit the game by typing quit.
    // Step 2: Create the list feature.
    // Step 3: Creat the new feature.
    // Step 4: Add the delete feature.

let gameOn = prompt("What would you like to do? ")
const toDos = ['Collect leaves','get eggs'];
// Use let instead of const since this variable will be updated with each input.
while (gameOn !== 'quit' && gameOn !== 'Q') {
    if (gameOn === 'list') {
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i}: ${toDos[i]}`)
        }
    } else if (gameOn === 'new') {
        const newToDo = prompt('What is the new item? ')
        toDos.push(newToDo)
        console.log("Item added.")
    } else if (gameOn === 'delete') {
        const deletedItem = parseInt(prompt('What do you want to delete? (Enter the index.) '))
        if (!Number.isNaN(deletedItem)) {
            const deleted = toDos.splice(deletedItem,1)
            console.log("Item deleted.")
        } else {
            console.log("Unknown, please enter a valid respsonse? ")
        }
        // Without this, if the user entered a string it would default to zero and delete the first index.
    }
    gameOn = prompt("What would you like to do? ")

}
console.log("Thank you for playing.")