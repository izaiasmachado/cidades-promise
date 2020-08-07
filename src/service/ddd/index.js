const axios = require('axios');

async function getCidadesByDdd(ddd) {

    const csvUrl = `http://ddd.pricez.com.br/ddds/${ddd}`
    
    try {
        return await axios.get(csvUrl, { headers: {'Accept': 'application/json'}});
        
    } catch (error) {
        throw new Error("Erro ao buscar cidades");
    }
}

module.exports = getCidadesByDdd;