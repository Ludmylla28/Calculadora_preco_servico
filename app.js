const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const { calcularTatoo } = require('./Servicos/tatoo.js');

// Configuração do EJS como motor de visualização
app.set('view engine', 'ejs');

// Configuração para servir arquivos estáticos
app.use(express.static('public'));

// Configuração do body-parser para lidar com dados POST
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para calcular o preço da tatuagem
app.post('/calcular', (req, res) => {
    const { qtdAgulhas, tamanho, tempoMinutos, cores, coresQuantidade, estilo } = req.body;
    const resultado = calcularTatoo(qtdAgulhas, tamanho, tempoMinutos, cores, coresQuantidade, estilo);
    const custoTotal = resultado.custoTotal;
    const margemLucro = resultado.margemLucro;
    const precoFinal = resultado.precoFinal; 
    
    res.render('index', { 
        qtdAgulhas, 
        tamanho, 
        tempoMinutos, 
        cores, 
        coresQuantidade, 
        estilo,
        custoTotal,
        margemLucro,
        precoFinal

    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
