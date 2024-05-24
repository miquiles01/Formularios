function buscarCEP() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('resultado').innerHTML = 'CEP não encontrado!';
            } else {
                document.getElementById('resultado').innerHTML = `
                    <p><strong>CEP:</strong> ${data.cep}</p>
                    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade}</p>
                    <p><strong>Estado:</strong> ${data.uf}</p>
                `;
            }
        })
        .catch(error => {
            document.getElementById('resultado').innerHTML = 'Erro ao buscar CEP!';
            console.error('Erro:', error);
        });
}
