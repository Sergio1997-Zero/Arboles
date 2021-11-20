class arbol {
    constructor(value){
      this.valor = value;
      this.derecha = null;
      this.izquierda = null;
    }
  }
  
  
  class Cabeza_Arbol {
    constructor(){
      this.Cabeza_Arbol = null;
    }
  
    
    Vacio(){
      return this.Cabeza_Arbol === null;
    }
  
    
    Agregar(value){
      
      if(this.Vacio()){
        
        this.Cabeza_Arbol = new arbol(value);
        
        return;
      }
  
     
      var aux = this.Cabeza_Arbol;
  
      while(aux){
        
        if (value < aux.valor){
          if (aux.izquierda){
            aux = aux.izquierda
          }else{
            aux.izquierda = new arbol(value);
            
            return;
          }
          
        } else { 
          if (aux.derecha){
            aux = aux.derecha
          }else{
            aux.derecha = new arbol(value);
            
            return;
          }
        }
      }
    }
  
    
    pre_order(arbol = this.Cabeza_Arbol){
      if (!arbol){
        return;
      }
      console.log(arbol.valor);
      this.pre_order(arbol.izquierda);
      this.pre_order(arbol.derecha);
    }
    
    post_order(arbol = this.Cabeza_Arbol){
      if (!arbol){
        return;
      }
      this.post_order(arbol.izquierda);
      this.post_order(arbol.derecha);
      console.log(arbol.valor);
    }
  
    
    in_order(arbol = this.Cabeza_Arbol){
      if(!arbol){
        return;
      }
      this.in_order(arbol.izquierda);
      console.log(arbol.valor);
      this.in_order(arbol.derecha);
    }
  }
 

 function punto3(arbol)
{
    let ejecutar = true;
    while(ejecutar)
    {
        console.log("Ingrese el número, para salir del ciclo escriba la palabra 'salir' ");
        let ingreso = prompt("ingrese el valor")
        if(ingreso == "salir")
        {
            ejecutar = false;
        }
        else
        {
            let valor = parseInt(ingreso)
            arbol.Agregar(valor);
        }

    }
}
 
let arbol = new Cabeza_Arbol();
punto3(arbol);
arbol.in_order();