/*Desarrolle los siguientes ejercicios en su proyecto TypeScript asociado a la práctica y empuje los cambios al repositorio GitHub correspondiente, una vez haya finalizado:

    Utilice un espacio de nombre para generar una FIFO con los métodos 

            push. Añade un elemento a la cola
            pop. Extrae el primer elemento insertado en la cola.
            pseek. Devuelve el primer elemento insertado en la cola sin extraerlo.
            size. Devuelve el número de elementos que contiene la cola.
            print. Visualiza el contenido de la cola.
La cola, podrá ser de cualquier tipo de datos, string, number, boolean, etc....

Recuerde que deberá incluir la documentación haciendo uso de TypeDoc, así como seguir una metodología TDD/BDD utilizando el framework de pruebas Mocha y la librería de aserciones Chai. También trate de comprobar el nivel de cubrimiento de su código mediante Instanbul, así como hacer un seguimiento de dicho cubrimiento con Coveralls. Como entrega de esta tarea deberá indicar, de nuevo,
el enlace a dicho repositorio GitHub con los ejercicios solicitados.*/


//
/*
namespace cola {
    interface StackNode<T> {
        value: T | null
        next: StackNode<T> | null
      }
      
    class StackNode<T> implements StackNode<T> {
        constructor(val: T) {
          this.value = val
          this.next = null
        }
      }
      
    interface Stack<T> {
        size: number
        top: StackNode<T> | null
        bottom: StackNode<T> | null
        push(val: T): number
        pop(): StackNode<T> | null
      }
      

    //Para funcion push
    function push(val: T) {
        const node = new StackNode(val)
        if (this.size === 0) {
          this.top = node
          this.bottom = node
        } else {
          const currentTop = this.top
          this.top = node
          this.top.next = currentTop
        }
    
        this.size += 1
        return this.size
      }

    //Para funcion pop
    function pop() {
        if (this.size > 0) {
            const nodeToBeRemove = this.top as StackNode<T>
            this.top = nodeToBeRemove.next
            this.size -= 1
            nodeToBeRemove.next = null
            return nodeToBeRemove
        }
            return null
        }
    //Para funcion pseek
    function pseek {
      return 
    }

    //Para funcion size
    function size(v):number {
        return v.length;
    }

    //Para funcion print
    function print() {
        
    }
}*/