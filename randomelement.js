function random_item(items){
return items[Math.floor(Math.random()*items.length)];    
}
var items = [3, 7, 9, 11];
console.log(random_item(items));
