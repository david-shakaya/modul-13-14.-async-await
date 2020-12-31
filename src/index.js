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



// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Класический пример АСИНХРОННОЙ функции
// function getFruit(name) {
//     const fruits = {
//         strawberry: '🍓',
//         kiwi: '🥝 ',
//         apple: '🍎',
//     }
    
//     return fruits[name]
// }

// async function makeAsyncSmothie() { //Указываем что это асинхр функц.async
//     console.time('Время на резолв')
    
//     const kivi = await getFruit('kiwi')   //await - Ждем когда выполниться 
//     const apple = await getFruit('apple')  //По результату вызова первой ждем и выполняем это

//     console.timeEnd('Время на резолв')
//     return [kivi, apple]
// }
// makeAsyncSmothie().then(fruit => console.log(fruit))


/* 
* - Если нам не нужно ждать результата одного await а потом на его результате выполнять другой await
* - Мы можем запустить паралельное выполнение промисов с помощю Promise.all
*
*/

function getFruit(name) {
    const fruits = {
        strawberry: '🍓',
        kiwi: '🥝 ',
        apple: '🍎',
    }
    
    return fruits[name]
}

async function makeAsyncSmothie() { 
    console.time('Время на резолв')
    const kivi = await getFruit('kiwi')  
    const apple = await getFruit('apple') 
    
    console.timeEnd('Время на резолв')
    return await Promise.all([kivi,apple])
}
makeAsyncSmothie().then(fruit => console.log(fruit))



/* 
* - Обработка ошибок
*/

const getUsers = async () => {
  try {                            //try{}catch  - служит для отлова ошибок
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
      throw 'Поломалось'   //Просто имитируем поломку (в реальном коде не пишем)
      return result
  } catch (err) {
     
    throw err  //для проброски ошибки во внешний код пишем throw
  }
};
getUsers()
  .then(users => console.log(users))
  .catch(err => console.log(err));