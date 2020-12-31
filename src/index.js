import './styles.css';

/* 
* - Асинхронные функции - это Альтернатива Promise.
* - ИСПОЛЬЗУЕМ либо async-await ЛИБО Promise
*/

// // Это обычная функция из которой Мы ДЕЛАЕМ асинхронную
// function getFruit(name) {
//     const fruits ={
//         strawberry: '🍓',
//         kiwi: '🥝 ',
//         apple: '🍎',
//     }
//     return Promise.resolve(fruits[name]) //ПРОМИС ДЕЛАЕТ АСИНХРОННУЮ ФУНКЦ
// }
//     getFruit('apple')
//     .then(fruit => console.log(fruit))
// // В таких простых вызовах можно использовать промисы.
//    // Если по результату вызова нам нужно вернуть еще что-то.
//    //Тоесть после того как мы получим яблоко нам нужно получить киви. ИСПОЛЬЗУЕМ async-await

// Класический пример АСИНХРОННОЙ функции
function getFruit(name) {
    const fruits = {
        strawberry: '🍓',
        kiwi: '🥝 ',
        apple: '🍎',
    }
    
    return fruits[name]
}

async function makeAsyncSmothie() { //Указываем что это асинхр функц.async
    const kivi = await getFruit('kiwi')   //await - Ждем когда выполниться 
    const apple = await getFruit('apple')  //По результату вызова первой ждем и выполняем это
    
    return {kivi, apple}
}
makeAsyncSmothie().then(fr => console.log(fr))