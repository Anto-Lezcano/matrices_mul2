const peoples = [];

function agregarPersona() {
    const name = prompt("Ingrese el nombre:").trim();
    const lastname = prompt("Ingrese el apellido:").trim();
    const dni = prompt("Ingrese el DNI:").trim();

    const phones = prompt("Ingrese los teléfonos separados por comas:").trim();
    const phoneList = phones ? phones.split(",").map(phone => phone.trim()) : [];

    const sons = prompt("Ingrese los nombres de los hijos separados por comas (si no tiene, deje en blanco):").trim();
    const sonList = sons ? sons.split(",").map(son => son.trim()) : [];

    peoples.push([name, lastname, dni, phoneList, sonList]);
    console.log("\nPersona agregada con éxito.\n");
}

function mostrarPersonas() {
    if (peoples.length === 0) {
        console.log("\nNo hay personas registradas.\n");
        return;
    }

    console.log("\nPersonas registradas:");
    console.log(JSON.stringify(peoples, null, 2));

    console.log("\nListado detallado:");
    peoples.forEach((people, index) => {
        console.log(`\n${index + 1}. ${people[0]} ${people[1]}, DNI: ${people[2]}`);
        console.log(`Teléfonos: ${people[3].length} número(s) - ${people[3].join(", ") || "Ninguno"}`);
        console.log(`Hijos: ${people[4].length} hijo(s) - ${people[4].join(", ") || "Ninguno"}`);
    });
}

function filtrarPorDNI() {
    const dniBuscar = prompt("Ingrese el DNI para filtrar:").trim();
    const found = peoples.find(people => people[2] === dniBuscar);

    if (found) {
        console.log(`\nDatos de ${found[0]} ${found[1]}:`);
        console.log(`DNI: ${found[2]}`);
        console.log(`Teléfonos: ${found[3].length} número(s) - ${found[3].join(", ") || "Ninguno"}`);
        console.log(`Hijos: ${found[4].length} hijo(s) - ${found[4].join(", ") || "Ninguno"}`);
    } else {
        console.log("\nNo se encontró una persona con ese DNI.");
    }
}

function menu() {
    while (true) {
        console.log("\n--- Menú ---");
        console.log("1. Ingresar nueva persona");
        console.log("2. Mostrar todos los datos");
        console.log("3. Filtrar por DNI");
        console.log("4. Salir");

        const opcion = prompt("\nElige una opción:");

        if (opcion === "1") {
            agregarPersona();
        } else if (opcion === "2") {
            mostrarPersonas();
        } else if (opcion === "3") {
            filtrarPorDNI();
        } else if (opcion === "4") {
            console.log("\nSaliendo del programa...");
            break;
        } else {
            console.log("\nOpción no válida, intenta de nuevo.");
        }
    }
}

menu();
