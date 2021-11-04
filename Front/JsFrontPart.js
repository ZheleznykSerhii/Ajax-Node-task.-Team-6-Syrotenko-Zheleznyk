// Цей масив буду малювати//

let bll = [
  {
    id: 1,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    photo: 'https://reqres.in/img/faces/7-image.jpg',
  },
  {
    id: 2,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    photo: 'https://reqres.in/img/faces/8-image.jpg',
  },
  {
    id: 3,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    photo: 'https://reqres.in/img/faces/9-image.jpg',
  },
  {
    id: 4,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    photo: 'https://reqres.in/img/faces/10-image.jpg',
  },
  {
    id: 5,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    photo: 'https://reqres.in/img/faces/11-image.jpg',
  },
  {
    id: 6,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    photo: 'https://reqres.in/img/faces/12-image.jpg',
  },
]

// Робочий шматок коду, який малює користувачів. Якщо розкоментувати строки 57 ы 68, то буде фетч запит, все картинки будуть однакові

let button = document.querySelector('button')
let user = document.querySelector('.listOfUsers')

button.onclick = addUsers

async function addUsers() {
  /* let response = await fetch(`https://reqres.in/img/faces/8-image.jpg`) */

  for (let key in bll) {
    user.innerHTML += `<content class="theUser">                       
               <h4>User ID: ${bll[key].id}</h4>
               <div>Name: <span class="name">${bll[key].first_name}</span></div>
               <div>Lastname: 
               <span class="name">${bll[key].last_name}</span></div>
               <div class="eMail">${bll[key].email}</div>
               <div class="userPhoto"><img src="${
                 bll[key].photo /*response.url*/
               }" alt="photo"></div>   
    </content>`
  }
  button.innerHTML = 'Remove users'
  button.onclick = removeUsers
}
// Видаляю створений HTML, щоб якщо клацати по кнопнці не дублювались користувачі. Можна було б їх видалити і одразу намалювати той результат, який прийшов. Їх б було б далі 6шт, але так ніби гарніше.
function removeUsers() {
  button.innerHTML = 'Download users info'
  document.querySelectorAll('.theUser').forEach((e) => e.remove())
  button.onclick = addUsers
}

//масив з потрібних фото витягнуто запитом, воно і без нього працює, але на всякий випадок нехай буде, але у фінальній версії мабуть зітру. Зараз це не використовую

async function takePhotos() {
  for (let i = 7; i < 13; i++) {
    await fetch(`https://reqres.in/img/faces/${i}-image.jpg`)
  }
}
takePhotos()
