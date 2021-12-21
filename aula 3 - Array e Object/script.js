// let array = ["string", 1, true];
// console.log(array);

// array seria o mesmo que lista em python

// let array = ["string", 1, true, ["array1"], ["array2"], ["array3"]]
// console.log(array);

// array.forEach(function(item, index){console.log(item, index)});

// array.push("adicionando novo item");

// array.pop(); //remove o último item do array

// array.shift(); // remove o primeiro item do array

// array.unshift("novo item no inicio do array")

// console.log(array.indexOf(true)); // passa o valor do indice

// array.splice(3, 5); //removendo o conteudo dos indice pelo intervalo passado
// console.log(array);

// let novoArray = array.slice(0, 3); //slice server para passar o array para o outro array por partes
// console.log(novoArray);

// let array4 = array;
// console.log(array4);

// objeto, seria o mesmo que dicionario em python???? acho que sim!!!

let object = {string: "string", 
                number: 1, 
                boolean: true, 
                array: ["array"], 
                objectInterno: {objectInterno: "objeto interno"}
            };
console.log(object.objectInterno);

var string = object.string; // recebendo um valor dentro do object

var {object.objectInterno} = object // outra maneira de passar o conteudo do object