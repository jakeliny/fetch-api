/*
É importante lembrar que o Fetch não considera erros de requisição a partir do código de retorno, na verdade ele so considera falha quando não recebe uma resposta do servidor.
*/
/*
Não funciona no IE
*/
const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url)
    .then(response => {
      console.log(`getUsers statusCode: ${response.status}`)
      return response.json()
    })
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => {
      console.log(`getUser statusCode: ${response.status}`)
      return response.json()
    })
    .then(data => {
      userAvatar.src = data.avatar
      userNome.textContent = data.name
      userId.textContent = data.id
      userCity.textContent = data.city
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) {
  fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      console.log(`getUser statusCode: ${response.status}`)
      return response.json()
    })
    .then(data => alert(data))
    .catch(error => console.error(error));
}

function updateUser(user, id) {
  fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      console.log(`UpdateUser statusCode: ${response.status}`)
      return response.json()
    })
    .then(data => alert(data))
    .catch(error => console.error(error));

}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      console.log(`deleteUser statusCode: ${response.status}`)
      return response.json()
    })
    .then(data => alert(data))
    .catch(error => console.error(error))
}


//post
// addNewUser({
//   name: "Olivia Zars",
//   avatar: "http://lorempixel.com/400/200",
//   city: "Rio do Sul"
// });

// updateUser({
//   name: "Marcelo Calvis",
//   avatar: "http://lorempixel.com/400/200",
//   city: "Recife"
// }, 5);

//delete
// deleteUser(3);

//gets
getUsers();
getUser(1);