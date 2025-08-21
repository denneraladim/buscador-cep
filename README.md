

# Buscador de Cep

![Print do Projeto](src\assets\BuscadorCep.png)


Um Buscador de CEP desenvolvido com React.js, com design pensado em mobile first e totalmente responsivo. Permite consultar endereços a partir de um CEP utilizando a API do ViaCEP.

## Funcionalidades

1. Buscar CEP digitando no input.

2. Exibir informações do CEP: logradouro, complemento, bairro, cidade e estado.

3. Validação de input vazio.

4. Mensagem de erro caso o CEP não exista ou ocorra falha na requisição.

5. Layout responsivo, adaptado para dispositivos móveis e telas maiores.

## Como Executar

1. Clone ou baixe este repositório.
2. Abra o arquivo React em um navegador moderno (Chrome, Firefox, Edge, etc) pelo comando npm run dev.

## Estrutura do Projeto

buscador-cep/
│
├─ public/
│
├─ src/
│ ├─ components/
│ │ ├─ BuscadorCep.jsx
│ │ └─ BuscadorCep.module.css
│ ├─ services/
│ │ └─ api.js
│ ├─ App.jsx
│ ├─ index.js
│ └─ index.css
│
├─ package.json
└─ README.md

## Tecnologias Utilizadas

- **`React`**  
- **`CSS3`** (Mobile First e responsivo)  
- **`JavaScript`** (ES6+)
- **`Axios`**
- **`React Icons`**


##  Etapas do Desenvolvimento

1. Configuração do projeto React e reset global no index.css.

2. Criação do componente BuscadorCep.

3. Implementação da funcionalidade de busca utilizando Axios.

4. Validação de input e tratamento de erros.

5. Estilização do layout com CSS responsivo.

6. Adição de ícones utilizando React Icons.

##  Responsividade

- O layout foi projetado para funcionar bem em **dispositivos móveis**, mas também se adapta a telas maiores, garantindo boa experiência em diferentes resoluções.

## Licença

- Este projeto está licenciado sob a **[MIT License](LICENSE)**.







