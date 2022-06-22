function GenerateFibonacci(number){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  
      if(fibonacci[i] == number) {
        console.log("O numero informado está na sequencia");
        break;
      } else if (fibonacci[i] > number) {
        console.log("O numero digitado nao encontra-se na sequencia.");
        break;
      }
    }
    return fibonacci;
  }
  
  var f = GenerateFibonacci(55);
  console.log(f);
  
  