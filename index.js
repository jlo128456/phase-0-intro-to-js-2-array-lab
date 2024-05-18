// Write your solution here!
//initial values in the array
const cats =["Milo", "Otis", "Garfield"];
// appends a cat to the end of the cats array
function destructivelyAppendCat(name)
{
    cats.push(name);
}
//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name)
{
    cats.unshift(name);
}
//remove last item in the array
function destructivelyRemoveLastCat()
{
    cats.pop();
}
// remove frist item in the array
function destructivelyRemoveFirstCat()
{
    cats.shift();
}
//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name)
{
    const cat = [...cats];
    cat.push(name);
    return cat;
}
// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name)
{
    const cat = [...cats];
    cat.unshift(name);
    return cat;
}
//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat()
{
    const cat = [...cats];
    cat.pop();
    return cat;

}
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat()
{
    const cat = [...cats];
    cat.shift();
    return cat;
}