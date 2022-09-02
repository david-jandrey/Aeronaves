
# inicializar projeto

  Abrir o terminal e certificar que está na pasta dentro da pasta back do projeto.

  mvn clean install
  
  mvn spring-boot:run
  
  ou usar a IDE para baixar e rodar 

# End point do projeto
  
  GET(/api/aeronaves/) retorna uma lista de todas as aeronaves cadastradas.
  
  GET(/api/aeronaves/id) retorna uma aeronave espefica cadastrada filtrada por id.
  
  GET(/api/aeronaves/decada) retorna a década e a quantidade de aeronaves que existe o ano cadastrado nessa decada.
  
  GET(/api/aeronaves/marca) retorna marca e quantidade de aeronaves cadastrada para aquela marca.
  
  GET(/api/aeronaves/vendido) retorna quantidade de aeronaves vendidas.
  
  POST(/api/aeronaves) cadastra aeronave e salva no banco a data que foi criada(creadted).
  
  PUT(/api/aeronaves) Atualiza aeronave e salva no banco a data que foi atualiza(updated).
  
  DELETE(/api/aeronaves/id) Deleta aeronave conforme ID que foi passado por parametro.
  
  
  

