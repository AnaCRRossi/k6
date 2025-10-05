# k6 (em construção)

Escopo:

=> Elaborar testes automatizados considerando uma collection "PGATS02-API" que permite aos usuários poderem cadastrar novos usuarios e realizar transferências de valores entre as contas criadas.

🚀 Ferramentas:

=> Foi utilizado o K6 para criar e automatizar os testes
=> Foi utilizado o Grafana para demonstrar por meio de dashboards a execução dos testes

🚀 Collections:

Nome da Pasta/Arquivo: //collections/Api_trasnferência.postman_collection.json

=> O token e gerado quando e realizado o login de um usuario

🚀 Requisitos: Cadastro de contas e Consulta de transferências 

=> Para que todas as requisições de tasnferências sejam acessadas é necessário dispor de um token

## 🔖 Requisições:

 - [X] Deve retornar 201 ao Registar um novo usuario

 - [X] Deve retornar 201 ao Logar com o usuario

 - [X] Deve retornar 200 ao Listar Usuarios

 - [X] Deve retornar 201 ao Realizar uma transferência
 
 - [X] Deve retornar 201 ao listar todas as transferências realizadas
 
🚀 Mapeamento dos campos das Apis

| campos             | descrição                                      | tipo     | obrigatório |
| :----------------- | :-------------------------------------------   | :------- | :---------- |
| id                 | id gerado ao cadastrar um vote                 | numero   | sim         |
| image_id           | id da imagem ao cadastrar um vote              | texto    | sim         |
| sub_id             | sub_id ao cadastar um vote                     | texto    | nao         |
| created_at         | data da criação de um vote                     | data     | nao         |
| value              | valor de um vote                               | numero   | nao         |
| country_code       | codigo do pais de um vote                      | texto    | nao         |
| image.id           | id da imagem anexada ao vote criado            | texto    | nao         |
| image.url          | url:caminho da imagem anexada ao cote criado   | texto    | nao         |

🚀 Estrutura e Distribuição do Código
Pasta: src/test/java/Apis => estão disponibilizados os casos de testes onde serão execução e chamaram os scripts de testes automatizados

01 - CT01_Pesquisar_Vote

02 - CT02 - Incluir_Vote

03 - CT03 - Excluir_Vote

Readme - onde estão descritos detalhes sobre o desenvolvimento dos scritps de testes automatizados

Documentação: onde estão descritas as orientações base para levantamento/desenvolvimento dos testes

🚀 Casos de Testes/Evidências: Consultar/Cadastrar/Deletar um Vote

| Casos de Testes                                                   | Descrição (Cobertura dos testes)                                                 | Veja mais detalhes/Status|
| :------------------------------------------------------------     | :---------------------------------------------------------------------------     | :--------                |
| 01 - Pesquisar/Listar os Votes Cadastrados                        | Validar os cenarios considerando a Ação de Pesquisar/Listar votes Cadastrados    | [link](https://gitlab.com/antoniogmartins1/sensedia_desafio_001/blob/main/Pesquisar_Vote.md)                                                                                   |      
| 02 - Cadastrar um Vote                                            | Validar os cenarios considerando a Ação de Cadastrar um vote                     | [link](https://gitlab.com/antoniogmartins1/sensedia_desafio_001/blob/main/Incluir_vote.md)                                                                                     |     
| 03 - Deletar um Vote                                              | Validar os cenarios considerando a Ação de Deletar um vote                       | [link](https://gitlab.com/antoniogmartins1/sensedia_desafio_001/blob/main/Excluir_Vote.md)                                                                                     |
 

01 - Pesquisar/Listar os Votes Cadastrados
Validar os cenarios considerando a Ação de Pesquisar/Listar votes Cadastrados
link

02 - Cadastrar um Vote
Validar os cenarios considerando a Ação de Cadastrar um vote
link

03 - Deletar um Vote
Validar os cenarios considerando a Ação de Deletar um vote
link

🔖 Melhorias
=> Seria interessante que a cada requisição, sobre a ação de criar um vote, o registro criado fosse mantido. Neste momento, caso um vote novo seja criado, o anterior deixa de existir.

=> No collection >> Ação/Verbo: Deletar: O caminho da api deveria ser: "votes", mantendo-se no plural

=> A ação de alterar um vote não esta implementada de acordo com a documentação

=> Após realizar uma busca por um subvote inexistente, seria interessante retornar o statuscode = "404 not found" e ao mesmo tempo exibir algum tipo de mensagem

=> Ao tentar realizar um request, sem utilizar a userkey, a mensagem deveria ser padrão, tanto para incluir um vote, deletar um vote ou consultar um vote. Hoje esta mensagem varia entre:
"AUTHENTICATION_ERROR - you need to send your API Key as the 'x-api-key' header" assim como "AUTHENTICATION_ERROR"

🚀 Relatórios


🔖 Executando os testes utilizando no terminal a linha de comando: mvn test
(02) Duas Formas de executar os testes:

=> 01 Forma: Após fazer o download do projeto, basta abrir o Eclipse, importar o projeto e mandar atualizar as dependencias e em seguida, em cima do arquivo "testng.xml", ao clicar com o botão direito do mouse, selecionar a opção Manven>>Maven test e mandar executar os testes.

=> 02 Forma: Após fazer o download do projeto, basta abrir a pasta raiz do projeto <nome_projeto> em seguida acessar a pasta < automacao > que é onde se encontra o arquivo POM.xml, abrir o terminal(cmd) e digitar a seguinte linha de comando: mvn test

Obs.: detalhe:é preciso antes dispor do mvn instalado no computador

🔖 Executando os testes
Após a Execução dos testes é gerado um relatorio em formato html:
pasta: automação/target/surefire-reports/index.html


🚀 Análise dos testes(Smoke Tests) realizados
Os testes foram executados com exito.
StatusCode retornados dentro do esperado, de acordo com a documenação/metodo de cada request


🚀 Fontes - Documentação da Api:


📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
Feito com 💜  por Antonio Martins 👋   Meu linkedin
