let names = ["Mehrdad", "Ulf", "Erik", "Simon"];
/*console.log(names);
console.log(names[0]);
names[1] = "Test";
console.log(names);

// JS: sort(), reverse(), push(), pop(), splice(), join() ...
console.log(names.sort());
console.log(names.reverse());
// add a new element to an array at the end
names.push("Test4");
console.log(names);
// pop method removes the lates element
names.pop();

// splice takes two arguments
// first param = defines the position
// second param = define how many elements should be removed
names.splice(1, 1);
console.log(names);
*/
// write e method that takes a param and remove it
const deleteName = (name) => {
   const index = names.findIndex( n => n === name);
   console.log("index:",index); // -1 means index not found
    if(index !== -1){
        names.splice(index, 1);
        return true;
    }else {
        return false;
    }

};
const result = deleteName("ABC");
console.log(result);
console.log(names);


// join methods joins all elements into a string and returns a string value
let str = names.join(",");
console.log(str);