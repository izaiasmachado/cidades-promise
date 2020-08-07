const axios = require('axios');

async function getCidadesByEstado(siglaEstado) {
    
    const url = `http://educacao.dadosabertosbr.com/api/cidades/${siglaEstado}`;

    try {
        return await axios.get(url);
        
    } catch (error) {
        throw new Error("Erro ao buscar cidades");
    }
}

module.exports = getCidadesByEstado;