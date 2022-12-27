//reference to the list input and button
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

//function that is will make the button responsive once clicked
button.addEventListener("click", (e)=> {
//clear the input field 

// Create a new list item
const item = document.createElement("li");
item.textContent = input.value
// Create a delete button for the list 
const deleteButton = document.createElement("button");
deleteButton.textContent="Delete";
deleteButton.addEventListener("click", () => {
    list.removeChild(item);
})
//append the children to the list item
item.appendChild(deleteButton);
list.appendChild(item);

//prevents the form from being submited 
    e.preventDefault();

// Clear the input feild 
input.value =" ";


});

