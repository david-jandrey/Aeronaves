
# inicializar projeto

  Abrir o terminal e certificar que está na pasta dentro da pasta back do projeto.

  mvn clean install
  
  mvn spring-boot:run
  
  ou usar a IDE para baixar e rodar 

# End point do projeto
  
  GET(http://localhost:8080/api/aeronaves/) retorna uma lista de todas as aeronaves cadastradas.
  
  GET(http://localhost:8080/api/aeronaves/id) retorna uma aeronave espefica cadastrada filtrada por id.
  
  GET(http://localhost:8080/api/aeronaves/decada) retorna a década e a quantidade de aeronaves que existe o ano cadastrado nessa decada.
  
  GET(http://localhost:8080/api/aeronaves/marca) retorna marca e quantidade de aeronaves cadastrada para aquela marca.
  
  GET(http://localhost:8080/api/aeronaves/vendido) retorna quantidade de aeronaves vendidas.
  
  POST(http://localhost:8080/api/aeronaves) cadastra aeronave e salva no banco a data que foi criada(creadted).
  
  PUT(http://localhost:8080/api/aeronaves) Atualiza aeronave e salva no banco a data que foi atualiza(updated).
  
  DELETE(http://localhost:8080/api/aeronaves/id) Deleta aeronave conforme ID que foi passado por parametro.
  
  
  

