const A=[10,5,7,3,2,8,9,11,12,1]
const B=[7,4,8,9,10,3,0,2,1]
const C=[15,12,13,16,17,11,10,18,19]
const D=[5,3,2,4,8,7,12,11,1,0,13]
const E=[10,3,2,4,8,7,12,11,1,0,13]

class Nodo {
    constructor(value){
      this.valor = value;
      this.derecha = null;
      this.izquierda = null;
    }
  }
  
  
  class ArbolBinario {
    constructor(){
      this.cabeza = null;
    }
  
   
    esta_vacio(){
      return this.cabeza === null;
    }
  
    
    agregar(value){
      
      if(this.esta_vacio()){
        
        this.cabeza = new Nodo(value);
        
        return;
      }
  
      
      var aux = this.cabeza;
  
      while(aux){
        
        if (value < aux.valor){
          if (aux.izquierda){
            aux = aux.izquierda
          }else{
            aux.izquierda = new Nodo(value);
            
            return;
          }
          
        } else { 
          if (aux.derecha){
            aux = aux.derecha
          }else{
            aux.derecha = new Nodo(value);
            
            return;
          }
        }
      }

    }
  
    
    pre_order(nodo = this.cabeza){
      if (!nodo){
        return;
      }
      console.log(nodo.valor);
      this.pre_order(nodo.izquierda);
      this.pre_order(nodo.derecha);
    }
    
    post_order(nodo = this.cabeza){
      if (!nodo){
        return;
      }
      this.post_order(nodo.izquierda);
      this.post_order(nodo.derecha);
      console.log(nodo.valor);
    }
  
    
    in_order(nodo = this.cabeza){
      if(!nodo){
        return;
      }
      this.in_order(nodo.izquierda);
      console.log(nodo.valor);
      this.in_order(nodo.derecha);
    }
    
    Mayor(nodo = this.cabeza)
    {
    let count = 0
    let num = 0
    if(!nodo){
      return (`el mayor es ${num} y el número de niveles fue ${count}`) ;
    }
    num = nodo.num   
    this.Mayor(nodo.derecha);
    count++
    }
    Menor(nodo = this.cabeza)
    {
        let count = 0
        let num = 0
        if(!nodo){
        return (`el Menor es ${num} y el número de niveles fue ${count}`) ;
        }
        num = nodo.num   
        this.Menor(nodo.izquierda);
        count++
    }
    generadorConArreglo(arbol, arreglo)
    {
        for(let x = 0;x < arreglo.length;x++)
        {
            arbol.agregar(arreglo[x]);
            console.log("Pos:" + x)
            console.log("num: " + arreglo[x])
        }

    }   


  }
 
 
let arbol = new ArbolBinario(); 
for(let x = 0;x < A.length;x++)
{
    arbol.agregar(A[x]);
    console.log("Pos:" + x)
    console.log("Valor: " + A[x])
}
console.log("Pre-Order")
arbol.pre_order();
console.log("Pos-Order")
arbol.post_order();
console.log("In-Order")
arbol.in_order()
