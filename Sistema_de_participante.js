var participantes = ['nome ','email', 'sexo' , 'aprovado', 'reprovado'];
sexo =(masculino = 1 , feminino = 2;
aprovado = true;
reprovado = false;
console.log(participantes);
function(adicionar_participante){
dados_do_participante("João" , "Mendes" ,"joamdes@gmail.com", 56 , 1 , 90 , true);
dados_do_participante("Maria", "Silva" , "mariasilva@hotmail.com" , 28 , 2 , 45 , false);
dados_do_participante("Joana" , "Souza" ,"joasouza@gmail.com" , 35 , 2 , 84 , true);
dados_do_participante("Roberto", "Andrade" , "robertoand@outlook.com", 29 , 1 , 30 , false)	;
dados_do_participante("Joana" , "Souza" , "joasouza@gmail.com" , 35 , 2 , 84 ,true);
<erro while adding a partipant with an email within the base >
QUnit.test( "adicionar_participante", function(assert)){
dados_do_participante("Joana" ,"Souza", "joasouza@gmail.com")
};
  var removeItem = dados_do_participante.splice(pos.4); // removido ("joamdes@gmail.com");
QUnit.test("remover_participante" , function (assert)){
	dados.remover_parcticipante("joasouza@gmail.com");
	assert.confirm("Joana", successfully removed!);
};


}