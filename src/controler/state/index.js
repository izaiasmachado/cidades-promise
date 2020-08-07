const getCidades = require('../../service/state');

async function getCidadesEstado(siglaEstado){

    if (siglaEstado.length !== 2) {
        throw new Error("UF incorreto.");
    }

    try {

        const listaDeCidades   = await getCidades(siglaEstado);
        const respostaTratada  = await trataResposta(listaDeCidades);
        
        return respostaTratada;
    
    } catch (error) {
        throw new Error("UF não existe.");
    }

}

/* Trata a resposta que vem da API do INEP
 * Limpamos os dados deixando apenas os nomes das Cidades
 */
function trataResposta(res) {
    const cidades = res.data.reduce((dadoPuro, linhaCidade) =>{
        const cidade = linhaCidade.split(":");
        return [...dadoPuro, cidade[1]];
    }, []);

    return cidades;
} 

module.exports = getCidadesEstado;