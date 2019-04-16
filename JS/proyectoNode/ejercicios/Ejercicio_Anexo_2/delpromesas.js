let datos = [
    { nombre: "Diego", telefono: "966112233", edad: 40 },
    { nombre: "Carmen", telefono: "911223344", edad: 35 },
    { nombre: "Victor", telefono: "611998877", edad: 15 },
    { nombre: "Carolina", telefono: "633663366", edad: 17 }
];

let borrarTelefono = delTelefono =>{
    return new Promise ((resolve,reject) =>  {
        let telef = datos.filter(persona => persona.telefono != delTelefono)
        if (telef.length != datos.length)
        {
            datos = telef;
            resolve(datos);
        }
        else
        {
            reject("Dato inexistente");
        }
    });
};

borrarTelefono("633663366").then(deleted => {
    console.log(deleted);
}).catch(error => {
    console.log(error);
});