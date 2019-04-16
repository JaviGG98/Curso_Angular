let datos = [
    { nombre: "Diego", telefono: "966112233", edad: 40 },
    { nombre: "Carmen", telefono: "911223344", edad: 35 },
    { nombre: "Victor", telefono: "611998877", edad: 15 },
    { nombre: "Carolina", telefono: "633663366", edad: 17 }
];
let newPerson = newDato => {
    return new Promise ((resolve, reject) => {
        let tel = datos.filter(persona => persona.telefono != newDato.telefono)
        if(tel.length > 0)
        {
            datos.push(newDato);
            return resolve(newDato);
        }
        else
        {
            reject("Error no se ha encontrado el dato");
        }
    });
}

newPerson({nombre:"Javier",telefono:"965725275",edad:50}).then(insert => {
    console.log("Datos insertados");
    console.log(datos);
}).catch(error => {
    console.log(error);
});


