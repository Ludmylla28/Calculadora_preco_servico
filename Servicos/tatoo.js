const calcularTatoo = (qtdAgulhas, tamanho, tempoMinutos, cores, coresQuantidade, estilo) => {
    const custoAgulhas = qtdAgulhas * 8.50;
    const tempoHoras = tempoMinutos / 60;
    const custoMaoDeObra = tempoMinutos * 0.87;
    const custoVariavel = tempoHoras * 5;

    // Adicionar a margem de lucro baseado no tamanho ta tatoo
    let margemLucro = 0;
    if (tamanho <= 2.9) {
        margemLucro = 10;
    } else if (tamanho <= 6) {
        margemLucro = 15;
    } else if (tamanho <= 15) {
        margemLucro = 20;
    } else {
        margemLucro = 30;
    }

    // Adiciona a margem de lucro baseada no estilo
    const estilos = {
        "Pb solido": 10,
        "Pb sombreado": 12,
        "solido": 14,
        "Degrade": 16,
        "gliter": 18,
        "aquarela": 20,
        "realismo": 22,
        "patch (bordado)": 24,
        "Stiker": 26,
        "stiker holografico": 28,
        "UV": 30
    };
    margemLucro += estilos[estilo];

    let custoCores = 0;
    if (cores === 'colorida' && coresQuantidade > 0) {
        const mlPorCor = 10;  // ml por cor
        const custoCorPorMl = 2.43;
        const custoBatoque = 0.35;
        custoCores = coresQuantidade * (mlPorCor * custoCorPorMl + custoBatoque);
    }

    const custoTotal = custoAgulhas + custoMaoDeObra + custoVariavel + custoCores;
    const precoFinal = custoTotal * (1 + margemLucro / 100);
    const precoFinal2 = precoFinal*1.15;

    return {
        custoTotal: custoTotal.toFixed(2),
        margemLucro,
        precoFinal: precoFinal2.toFixed(2),
    };
};

module.exports = { calcularTatoo };
