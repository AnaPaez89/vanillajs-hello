window.onload = () => {
    document.querySelector('#excusa').innerHTML = generarExcusa();
    console.log('Hello');
};

let generarExcusa = () => {
    let pronombre = ['Nuestro','Mi'];
    let persona = ['padre','perro','ciclista','hermano','jardinero'];
    let accion = ['tomo','boto','comio','robo','destruyo'];
    let objeto = ['mi tarea','mis planos','el carro','mis tenis'];
    let donde =['en la casa','en el porche','en la calle'];

    let pronIndex = Math.floor(Math.random() * pronombre.length);
    let perIndex = Math.floor(Math.random() * persona.length);
    let accIndex = Math.floor(Math.random() * accion.length);
    let objIndex = Math.floor(Math.random() * objeto.length);
    let donIndex = Math.floor(Math.random() * donde.length);

    return pronombre[pronIndex] + ' ' + persona[perIndex] + ' ' + accion[accIndex] + ' ' + objeto[objIndex] + ' ' + donde[donIndex];
};