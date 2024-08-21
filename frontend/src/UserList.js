import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserList.css';

function UserList({ users, setUsers }) {
  const navigate = useNavigate();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleDeleteClick = (index) => {
    setUserToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    const newUsers = [...users];
    newUsers.splice(userToDelete, 1);
    setUsers(newUsers);
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const handleEditClick = (index) => {
    setUserToEdit(index);
    setNewName(users[index].nome);
    setNewEmail(users[index].email);
    setIsEditModalOpen(true);
  };

  const confirmEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[userToEdit] = { nome: newName, email: newEmail };
    setUsers(updatedUsers);
    setIsEditModalOpen(false);
    setUserToEdit(null);
  };

  const cancelEdit = () => {
    setIsEditModalOpen(false);
    setUserToEdit(null);
  };

  return (
    <div className="user-list-container">
      <h1>Lista de Usuários</h1>
      {users.length === 0 ? (
        <p data-test="user-n-found">Nenhum usuário cadastrado.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <p data-test="name_field"><strong  >Nome:</strong> {user.nome}</p>
              <p data-test="email_field"><strong >Email:</strong> {user.email}</p>
              <div className="button-group">
                <button className="edit-button" data-test="btn_edit" onClick={() => handleEditClick(index)}>Editar</button>
                <button className="delete-button" data-test="btn_delete" onClick={() => handleDeleteClick(index)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate('/')} className="back-button">Voltar</button>

      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Editar Usuário</h2>
            <label htmlFor="editName">Nome:</label>
            <input
              type="text"
              id="editName"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <label htmlFor="editEmail">Email:</label>
            <input
              type="email"
              id="editEmail"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <div className="modal-buttons">
              <button className="confirm-button" onClick={confirmEdit}>Salvar</button>
              <button className="cancel-button" onClick={cancelEdit}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Deseja realmente excluir este usuário?</h2>
            <div className="modal-buttons">
              <button className="confirm-button" onClick={confirmDelete}>Sim</button>
              <button className="cancel-button" onClick={cancelDelete}>Não</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
