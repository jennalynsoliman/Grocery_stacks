//PROBLEM 5

// Creating an empty array that represents the grocery stacks
const groceryStack = [];

// Function to peek at the top item of the stack
function peek() {
    if (groceryStack.length === 0) { 
        return null; //return null to indicate an empty stack
        //return the last element of the array
    } else {
        return groceryStack[groceryStack.length - 1];
    }
}

// Function to add the item to end of the array, this simulating pushing onto the stack
function push(item) {
    groceryStack.push(item);
    console.log(`Item pushed: ${item}`);
    console.log("Current stack:", groceryStack);
}

// this function is to remove and return the item from the top of the stack
function pop() {
    //if the stack is empty
    if (groceryStack.length === 0) {
        console.log("Stack is empty.");
        return null;
    } else {
        //this remove and return the last element of the array
        const item = groceryStack.pop();
        console.log(`Item popped: ${item}`);
        console.log("Current stack:", groceryStack);
        return item;
    }
}

// Prompt the user for 5 grocery items and them to the stack
for (let i = 0; i < 5; i++) {
    const item = prompt(`Enter grocery item ${i + 1}:`);
    push(item);
}