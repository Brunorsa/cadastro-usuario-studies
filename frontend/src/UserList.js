import React from 'react';

function UserList({ users, setUsers }) {
  const handleDelete = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const handleEdit = (index) => {
    const newName = prompt('Editar nome:', users[index].nome);
    const newEmail = prompt('Editar email:', users[index].email);
    const newUsers = [...users];
    if (newName) newUsers[index].nome = newName;
    if (newEmail) newUsers[index].email = newEmail;
    setUsers(newUsers);
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {users.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <p>Nome: {user.nome}</p>
              <p>Email: {user.email}</p>
              <button onClick={() => handleEdit(index)}>Editar</button>
              <button onClick={() => handleDelete(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
