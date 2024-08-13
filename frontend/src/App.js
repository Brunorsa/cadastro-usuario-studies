import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const email = e.target.email.value;

    const response = await fetch('http://localhost:8080/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email }),
    });

    const newUser = await response.json();
    setUsers([...users, newUser]);
    navigate('/users');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <form onSubmit={handleSubmit}>
            <h1>Cadastrar Usuário</h1>
            <label>Nome</label>
            <input type="text" data-test="campoNome" name="nome" placeholder="Nome" required />
            <label>Email</label>
            <input type="email" data-test="campoEmail" name="email" placeholder="example@mail.com" />
            <button type="submit">Salvar</button>
          </form>
        }
      />
      <Route path="/users" element={<UserList users={users} setUsers={setUsers} />} />
    </Routes>
  );
}

export default App;
