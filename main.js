// tengo que manipular con queryselector el boton, el input, el div donde esta el empty
//armo constantes
//para el unico boton input
const input = document.querySelector("input");
//para el boton input llamame al nodo que tiene el class btn-add
const addBtn = document.querySelector(".btn-add");
//la ul es donde voy a volcar los resultados
const ul = document.querySelector("ul");
//el empty tambin lo llamo por la clase class empty
const empty = document.querySelector(".empty");

//veo el evento de apretar el boton. El evento es "click".
addBtn.addEventListener("click", (e)=>{

    //corto el evento ahi
    e.preventDefault();
    //guardo el valor que esta en input y lo paso a text
    const text = input.value;
    if(text !== "") {
        //como no esta vacio text lo guardo en un li
        const li = document.createElement("li");
        //armo un p (parrafo)
        const p = document.createElement("p");
        //vuelco a p el valor de text para que me quede el texto
        p.textContent = text;
        //le adiciono una clase a la lista que voy armando
        p.className= "toDo";
        // le paso a ul los valores haciendo append
 //       const deleteBtn = document.createElement("button");
 //       deleteBtn.textContent ="X";
 //       deleteBtn.className= "btn-delete";
 //       p.appendChild(deleteBtn);
        li.appendChild(p);
        //como tengo que agregar al final un boton para poder borrar - uso una funcion (addDeleteBtn) para agregar ese boton
        li.appendChild(addDeleteBtn());
        //al ul ahora si le devuelvo el li
        ul.appendChild(li);
        //ahora debo sacar el coloco el input en null (variable)
        input.value="";
        //oculto el parrafo  <p> que dice que "No tiene tareas pendientes..."
        empty.style.display = "none";
    }

});

function addDeleteBtn() {

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (e) => {

        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = 'block';
            

        }      
    });

    return deleteBtn;

}
