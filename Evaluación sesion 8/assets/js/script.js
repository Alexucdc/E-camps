function Cliente(nombre, identificador, clave, saldo) {
    this.nombre = nombre;
    this.identificador = identificador;
    this.clave = clave;
    this.saldo = saldo;
}

var cliente1 = new Cliente("Benjamin", "20777849-4", 1233, 2000);
var cliente2 = new Cliente("Alex", "12345678-9", 1234, 3000);
var cliente3 = new Cliente("Valeria", "12345678-1", 1235, 4000);

var clientes = [cliente1, cliente2, cliente3];

try {
    var ingreso = prompt("Bienvenido a Banca en Línea \n Ingresa tu identificador");
    var password = parseInt(prompt("Bienvenido a Banca en Línea \n Ingresa tu clave"));

    if (isNaN(password)) {
        throw new Error("La clave debe ser un número.");
    }

    var clienteEncontrado = clientes.find(function(cliente) {
        return cliente.identificador === ingreso && cliente.clave === password;
    });

    if (clienteEncontrado) {
        alert("Bienvenido " + clienteEncontrado.nombre);

        let opcion;
        do {
            opcion = prompt("Menú de opciones:\n" +"1. Ver saldo\n" +"2. Realizar giro\n" +"3. Realizar depósito\n" +"4. Salir\n" +"Selecciona una opción:"
            );

            switch (opcion) {
                case '1':
                    alert("Tu saldo actual es: $" + clienteEncontrado.saldo);
                    break;
                case '2':
                    var montoGiro = parseFloat(prompt("Ingresa el monto a girar:"));
                    if (isNaN(montoGiro) || montoGiro <= 0) {
                        alert("Monto no válido.");
                    } else if (montoGiro > clienteEncontrado.saldo) {
                        alert("Fondos insuficientes.");
                    } else {
                        clienteEncontrado.saldo -= montoGiro;
                        alert("Giro realizado con éxito. Tu nuevo saldo es: $" + clienteEncontrado.saldo);
                    }
                    break;
                case '3':
                    var montoDeposito = parseFloat(prompt("Ingresa el monto a depositar:"));
                    if (isNaN(montoDeposito) || montoDeposito <= 0) {
                        alert("Monto no válido.");
                    } else {
                        clienteEncontrado.saldo += montoDeposito;
                        alert("Depósito realizado con éxito. Tu nuevo saldo es: $" + clienteEncontrado.saldo);
                    }
                    break;
                case '4':
                    alert("Saliendo del menú...");
                    break;
                default:
                    alert("Opción no válida, por favor selecciona una opción entre 1 y 4.");
            }
        } while (opcion !== '4');

    } else {
        alert("Identificador o clave incorrectos.");
    }
} catch (error) {
    alert("Ocurrió un error: " + error.message);
}
