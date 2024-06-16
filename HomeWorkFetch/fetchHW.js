
// Напишите функцию getTodos(username), которая в качестве аргумента принимает никнейм пользователя (api /users) и выводит список его задач (api /todos).
// В качестве ответа в консоль выведите массив с задачами указанного пользователя



// async function getTodos(username) {
//     try {
//         // Шаг 1: Формируем URL для получения данных о пользователе
//         let url = `https://jsonplaceholder.typicode.com/users?username=${username}`;

//         // Шаг 2: Отправляем GET-запрос к API
//         let response = await fetch(url);

//         // Шаг 3: Проверяем, что запрос выполнен успешно
//         if (response.ok) {
//             let data = await response.json();

//             // Шаг 4: Проверяем, что данные были получены и массив не пустой
//             if (data.length > 0) {
//                 // Шаг 5: Получаем userId пользователя
//                 let userId = data[0].id; // Поскольку data - массив, мы берем первый элемент
                
//                 // Шаг 6: Формируем URL для получения задач пользователя
//                 let todosUrl = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
                
//                 // Шаг 7: Отправляем GET-запрос для получения задач
//                 let todosResponse = await fetch(todosUrl);

//                 if (todosResponse.ok) {
//                     let todos = await todosResponse.json();
//                     console.log(`Задачи пользователя с никнеймом '${username}':`, todos);
//                 } else {
//                     throw new Error(`Ошибка HTTP при получении задач: ${todosResponse.status}`);
//                 }
//             } else {
//                 console.log(`Пользователь с никнеймом '${username}' не найден.`);
//             }
//         } else {
//             throw new Error(`Ошибка HTTP: ${response.status}`);
//         }
//     } catch (err) {
//         console.error('Произошла ошибка:', err);
//     }
// }

// // Вызов функции для примера
// getTodos('Bret');


// Напишите функцию getСomments(title), которая в качестве аргумента принимает заголовок поста (api /posts) и выводит список всех его комментариев (api /comments).
// В качестве ответа в консоль выведите массив с комментариями. Если у заданного поста комментариев нет, выведите в консоль соответствующее сообщение.

// async function getСomments(title) {
//     try {
//         let url = `https://jsonplaceholder.typicode.com/posts?title=${title}`;
//         let response = await fetch(url);
//         if(response.ok) {
//             let data = await response.json()
//             if(data.length > 0){
//                let postId = data[0].id
//                let commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
//                let commentsResponse = await fetch(commentsUrl)
//                if(commentsResponse.ok) {
//                 let commentsData = await commentsResponse.json()
//                 console.log(`Комментарии на пост с id '${postId}':`, commentsData);
//                }else {
//                 throw new Error(`Ошибка HTTP при получении задач: ${commentsResponse.status}`);
//                }
//             }
//         }else {
//             throw new Error(`Ошибка HTTP:${response.status}`)
//         }
//     }catch(err){
//         console.error('Произошла ошибка:', err);
//     }
// }

// getСomments("qui est esse")

// Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает никнейм пользователя (api /users) и выводит все его фотографии (api /photos). В качестве ответа выведите в консоль массив со всеми фотографиями указанного пользователя.

async function getPhotoByNickName(username){
    try{
        let url = 'https://jsonplaceholder.typicode.com/users'
        let response = await fetch(url)
        let data = await response.json();
        let user = data.find((elem) =>  elem.username === username);
        if(user){
            let userId = user.id
            getPhotos(userId)
        }else{
            console.log(`Пользователь с никнеймом '${username}' не найден.`);
        }
    }catch(error){
        console.log("Сетевой запрос выполнился неуспешно", error);
    }
}


async function getPhotos(userId) {
    try{
        let url = `https://jsonplaceholder.typicode.com/photos?userId=${userId}`;
        let response = await fetch(url)
        let data = await response.json()
        let arrayPhotos = data.map(photo => photo.url)
        console.log(arrayPhotos);
    }catch (error) {
        console.log("Сетевой запрос для задач выполнился неуспешно", error);
    }
}

getPhotos(2)