//Dato un numero a tua scelta tra 20 e 50 controlla se tale numero sia un numero che corrisponde a uno dei seguenti numeri:
//2, 3, 11, 19, 23, 37, 41.
//In caso di corrispondenza stampa a video "ho trovato il numero: <<numero>>".
//In caso contrario dovrai sottrarre 5 al numero scelto e rifare il check fino a quando non si trova un numero valido presente nella lista.
//Se il numero diventa minore di 0 mostra a schermo "nessun numero trovato".
//Di seguito troverai due punti totalmente opzionali, non richiesti per proseguire con l'iter. Sono solo una sfida!
//Bonus point 1: il numero in ingresso viene generato randomicamente tra 20 e 50.
//Bonus point 2: in ingresso viene fornita una lista di numeri generati randomicamente, per ognuno di questi viene applicata la stessa logica.

function checkNumber(nums) {
  const controlNumArr = [2, 3, 11, 19, 23, 37, 41];
  let randomNumberList = [];
  if (nums === undefined) {
    for (let i = 0; i < 10; i++) {
      //first function call: fill randomNumberList with 10 numbers randomly chosen from 20 to 50. BONUS 1 & 2.
      randomNumberList[i] = Math.floor(Math.random() * 31 + 20);
    }
  } else {
    randomNumberList = nums; //for the recursive calls
  }
  let recursiveNums = [];
  for (const number of randomNumberList) {
    if (number < 0) {
      console.log("nessun numero trovato");
    } else if (controlNumArr.includes(number)) {
      console.log(`ho trovato il numero: ${number}`);
    } else {
      recursiveNums.push(number - 5);
    }
  }
  if (recursiveNums.length > 0) {
    return checkNumber(recursiveNums);
  }
}

checkNumber();
