const express = require('express');
const cors = require('cors');  // Importa o pacote cors
const app = express();

app.use(cors());  // Adiciona o middleware cors para permitir todas as origens
app.use(express.json());

app.post('/api/save', (req, res) => {
    const { nome, email } = req.body;
    res.json({ nome, email });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
