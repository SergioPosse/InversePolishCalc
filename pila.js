
class Pila{
    constructor(){
        this.coleccion = {};
        this.cima = 0;
    };

    push(valor){
        this.cima++;
        this.coleccion[this.cima]=valor;
       
    }

    pop(){
    let datoborrado;

    datoborrado = this.coleccion[this.cima];

     delete this.coleccion[this.cima];

    this.cima--;

    return datoborrado;
     }

    limpiar(){
        this.coleccion=[];
        this.cima=0;
            
    }

};


//NUEVA INSTANCIA DE LA CLASE LISTA
const pila = new Pila();

//FUNCIONES DE LOS BOTONES

function calcular(){
    var valor = document.getElementById("operacion").value;
    var resultado = 0;
    var aux = 0;
        if(!valor){
            alert("No escribiste nada");
        }
        else{
            
            for(let i=0;i<valor.length-aux;i++){
                console.log("For normal: "+i);
                console.log("For puntero: "+(i+aux));
                console.log("valor: "+(valor[i+aux]));

                if(valor[i+aux]==="+" || valor[i+aux]==="-" || valor[i+aux]==="*" || valor[i+aux]==="/"){
                    
                    console.log("entro a los operadores: "+valor[i+aux].toString());

                    let numero2 = parseInt(pila.pop());
                    let numero1 = parseInt(pila.pop());
                    console.log(numero1);
                    console.log(numero2);

                    switch(valor[i+aux]){

                        case "+":
                            resultado = parseInt(numero1+numero2);
                            console.log("resultado a la cima: "+(resultado));
                            pila.push(resultado);
                            break;

                        case "-":
                            resultado = parseInt(numero1-numero2);
                            console.log("resultado a la cima: "+(resultado));
                            pila.push(resultado);
                            break;
                        case "*":
                            resultado = parseInt(numero1*numero2);
                            console.log("resultado a la cima: "+(resultado));
                            pila.push(resultado);
                            break;
                        case "/":
                            resultado = parseInt(numero1/numero2);
                            console.log("resultado a la cima: "+(resultado));
                            pila.push(resultado);
                            break;

                    }
                    
                    
                }else{
                    let temp=valor[i+aux];
                    let n = i+aux+1;
                    //si el valor que sigue es un numero
                    while( !(valor[n]===" " || valor[n]==="+" || valor[n]==="-" || valor[n]==="*" || valor[n]==="/")){
                        temp=temp.toString()+valor[n].toString();
                        n++;
                        aux++;
                    }
                    
                    if(temp===" "){

                    }
                    else{
                        console.log("valor armado en: "+(aux+1)+" , "+temp);

                        pila.push(parseInt(temp));
                    }
                    
                }

                
            }

            document.getElementById("resultado").innerHTML = "Resultado: "+resultado;
        }

        

}

function limpiarLista(){
    pila.limpiar();
    document.getElementById("resultado").innerHTML = "Resultado: Nada";
    document.getElementById("operacion").value="";
}

//BOTONES
document.getElementById("calcular").addEventListener("click", calcular);
document.getElementById("limpiarLista").addEventListener("click", limpiarLista);