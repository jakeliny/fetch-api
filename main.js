/*
É importante lembrar que o Fetch não considera erros de requisição a partir do código de retorno, na verdade ele so considera falha quando não recebe uma resposta do servidor.
*/
/*
Não funciona no IE
*/
const url = 'http://localhost:5500/api';

async function getUsers() {
  try {
    const response = await fetch(url);

    console.log(`getUsers with status ${response.status}`);

    const data = await response.json();

    renderApiResult.textContent = JSON.stringify(data);
  } catch (error) {
    console.log(error);
  }
}

async function getUser(id) {
  try {
    const response = await fetch(`${url}/${id}`);

    console.log(`getUser with status ${response.status}`);

    const data = await response.json();

    userAvatar.src = data.avatar;
    userName.textContent = data.name;
    userId.textContent = data.id;
    userCity.textContent = data.city;
  } catch (error) {
    console.log(error);
  }
}

async function addNewUser(newUser) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

    const data = await response.json();

    alert(data);
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(user, id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

    const data = await response.json();

    alert(data);
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

    const data = await response.json();

    alert(data);
  } catch (error) {
    console.log(error);
  }
}

//post
// addNewUser({
//   name: 'Olivia Zars',
//   avatar: 'http://lorempixel.com/400/200',
//   city: 'Rio do Sul'
// });

// updateUser(
//   {
//     name: 'Marcelo Calvis',
//     avatar: 'http://lorempixel.com/400/200',
//     city: 'Recife'
//   },
//   2
// );

//delete
// deleteUser(2);

//gets
getUsers();
getUser(1);
