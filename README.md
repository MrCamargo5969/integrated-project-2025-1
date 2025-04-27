# integrated-project-2025-1

<!-- 
Professor, este é o codigo que fizemos e nele tem todo o Frontend + Backend.
Acontece que nosso porjeto de medidor de nivel faz a busca de dados em um site com json,
os dados ficam salvos no site de apoio que se encontra, quando rodado localmente,
no endereço 'http://localhost:3000', alterando o valor que se encontra ali o medidor muda.
Pensando nisso fariamos que no codigo do arduino ele enviasse a medição encontrada para o site,
assim quando o site buscasse uma atualização de dados no json, ele mediria a altura.

O PROBLEMA:
Quando postei ele no vercel pela primeira vez para teste, já havia testado usando por ip,
o sistema simplesmente não consegue buscar no json, tanto que o serviço localmente começa em 0,
mas na busca ele atualiza para 1, ficando só a alteração por requisição que ficaria a cargo do arduino.
Contudo, o vercel não consegue fazer os passos a cima e muito menos alterar por requisição, não sei se é o link que usei do vercel ou se estou encaminhando de forma incorreta.

PEDIDO:
Consegue olhar o codigo e me dizer qual o problema? Se devo refazer o codigo para outro serviço,
qual serviço?
-->