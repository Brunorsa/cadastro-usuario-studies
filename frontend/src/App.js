import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserList from './UserList';
import './index.css'; // Importar estilos globais

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
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <form onSubmit={handleSubmit} className="user-form">
              <h1>Cadastrar Usuário</h1>
              <label htmlFor="nome">Nome</label>
              <input type="text" name="nome" id="nome" data-test="name_field" placeholder="Nome" required />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" data-test="email_field" placeholder="example@mail.com" required />
              <button type="submit">Salvar</button>
              <button onClick={() => navigate('/users')} className="results-button">
                Lista de Usuários
              </button>
            </form>
          }
        />
        <Route path="/users" element={<UserList users={users} setUsers={setUsers} />} />
      </Routes>
    </div>
  );
}

export default App;
