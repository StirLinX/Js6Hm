const items = [];

while (true) {
    const command = prompt("Введите команду (add имя, del имя, stop):");

    if (command === null || command === "stop") {
        console.log("Окончательный массив:", items);
        break;
    }

    const parts = command.split(" ");
    const action = parts[0];
    const value = parts[1];
    if (action === "add") {
        items.push(value);
        console.log("Добавлен элемент: " + value);
    } else if (action === "del") {
        const index = items.indexOf(value);
        if (index !== -1) {
            items.splice(index, 1);
            console.log("Удален элемент: " + value);
        }
    }

    console.log("Текущий массив:", items);
}







const array = [1,2,3,4,5,6,7,8,9,10,11];

const chet = [];
const nechet = [];

for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
        chet.push(array[i]);   
    }else {
        nechet.push(array[i]);  
}
}

console.log("Четные числа:", chet);
console.log("Нечетные числа:", nechet);
