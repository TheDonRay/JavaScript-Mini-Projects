/*Task: Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.  */  

// implementation 
const myobject = { 
    name: "John", 
    surname: "Smith", 
}; 

myobject.name = "Pete";  
console.log(myobject.name);  

console.log('Next Part');

// now we can remove the property name from the object 
delete myobject.name; 
console.log(myobject);  


/*Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. */  
let ExampleObject = {
    name: "ray"
}; 

let myFunction = (AnObject) => { 
    return Object.keys(AnObject).length === 0; 
}; 

// invoke the function here as such 
myFunction(ExampleObject);  


let result = Object.keys(ExampleObject); 
console.log(result); 