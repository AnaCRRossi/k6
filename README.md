# k6 (em construção)

Escopo:

=> Elaborar testes automatizados considerando a collection "PGATS02-API" do Julio de Lima, que permite aos usuários poderem cadastrar novos usuarios e realizar transferências de valores entre as contas criadas.

🚀 Ferramentas:

=> Foi utilizado o K6 para criar e automatizar os testes
=> Foi utilizado o Grafana para demonstrar por meio de dashboards a execução dos testes

🚀 Collections:

Nome da Pasta/Arquivo: //collections/Api_transferência.postman_collection.json

=> O token e gerado quando e realizado o login de um usuario

🚀 Requisitos: Cadastro de ususarios e Consulta de transferências 

=> Para que todas as requisições de transferências sejam acessadas é necessário dispor de um token

## 🔖 Requisições:

 - [X] Deve retornar 201 ao Registar um novo usuario

 - [X] Deve retornar 201 ao Logar com o usuario

 - [X] Deve retornar 200 ao Listar Usuarios

 - [X] Deve retornar 201 ao Realizar uma transferência
 
 - [X] Deve retornar 201 ao Listar todas as transferências realizadas
 
🚀 Mapeamento dos campos das Apis

| campos             | descrição                                             | tipo     | obrigatório |
| :----------------- | :---------------------------------------------------- | :------- | :---------- |
| username           | Nome do usuário a ser cadastrado                      | texto    | sim         |
| password           | Senha de um usuario a ser cadastrado                  | texto    | sim         |
| favorecidos        | Favorecido ao cadastrar um usuario                    | texto    | nao         |
| from               | qual o nome do remetente da conta para transferência  | texto    | sim         |
| to                 | qual o nome do favorecido para transferência          | texto    | sim         |
| value              | qual valor da conta a ser transferida                 | numero   | sim         |
| token              | qual o token gerado ao logar na aplicação             | texto    | nao         |

🚀 Estrutura e Distribuição do Código
Pasta: Scritps/ => será disponibilizado o script de teste automatizado

Readme - onde estão descritos detalhes sobre o desenvolvimento da automação de testes deste projeto

Documentação: onde estão descritas as orientações base para levantamento/desenvolvimento dos testes

🚀 Relatórios

<img width="1887" height="1001" alt="image" src="https://github.com/user-attachments/assets/86fb5ecb-f229-443f-b1cb-3b19578e72f2" />

<img width="1867" height="932" alt="image" src="https://github.com/user-attachments/assets/4ccfba2a-3d81-45ae-8fa5-ffcd8d1457c5" />

<img width="1852" height="922" alt="image" src="https://github.com/user-attachments/assets/47007ae3-8e71-4adb-bee6-85f00e2b657c" />

<img width="1837" height="894" alt="image" src="https://github.com/user-attachments/assets/b381b7fd-18a9-4ad4-bb64-91d20b176311" />

<img width="1824" height="895" alt="image" src="https://github.com/user-attachments/assets/bfed50bd-db63-4aba-b800-ee7ce6c9827c" />


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
