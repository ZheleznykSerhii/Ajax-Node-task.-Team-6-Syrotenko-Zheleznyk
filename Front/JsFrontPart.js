let button = document.querySelector('button')
let user = document.querySelector('.listOfUsers')

button.onclick = addUsers

async function addUsers() {
  let response = await fetch(`http://localhost:3000/api/users`)
  let bll = await response.json()

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
