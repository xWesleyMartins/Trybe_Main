      function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); 
      testingScope(true);
  
// ==================================================================================================

      const testingScope = (escopo) => (escopo === true) ? `ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)` ;
      
      console.log(testingScope(false));

     


      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      const array = (array) => oddsAndEvens = oddsAndEvens.sort(array) 

      console.log(oddsAndEvens); // será necessário alterar essa linha 😉
      
