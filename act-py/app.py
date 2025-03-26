def agregar_persona(peoples):
    name = input('Ingrese el nombre: ').strip()
    lastname = input('Ingrese el apellido: ').strip()
    dni = input('Ingrese su DNI: ').strip()

    phones = input("Ingrese los teléfonos separados por comas: ").strip()
    phone_list = [phone.strip() for phone in phones.split(",")] if phones else []

    sons = input('Ingrese los nombres de los hijos separados por comas (si no tiene, presione Enter): ').strip()
    son_list = [son.strip() for son in sons.split(",")] if sons else []

    peoples.append([name, lastname, dni, phone_list, son_list])
    print("\nPersona agregada con éxito.\n")


def mostrar_personas(peoples):
    if not peoples:
        print("\nNo hay personas registradas.\n")
        return

    print("\nPersonas registradas:")
    print(peoples)
    print("\nListado detallado:")
    
    for idx, people in enumerate(peoples, 1):
        print(f"\n{idx}. {people[0]} {people[1]}, DNI: {people[2]}")
        print(f"Teléfonos: {len(people[3])} número(s) - {', '.join(people[3]) if people[3] else 'Ninguno'}")
        print(f"Hijos: {len(people[4])} hijo(s) - {', '.join(people[4]) if people[4] else 'Ninguno'}")


def filtrar_por_dni(peoples):
    dni_buscar = input("\nIngrese el DNI para filtrar: ").strip()
    for people in peoples:
        if people[2] == dni_buscar:
            print(f"\nDatos de {people[0]} {people[1]}:")
            print(f"DNI: {people[2]}")
            print(f"Teléfonos: {len(people[3])} número(s) - {', '.join(people[3]) if people[3] else 'Ninguno'}")
            print(f"Hijos: {len(people[4])} hijo(s) - {', '.join(people[4]) if people[4] else 'Ninguno'}")
            return
    print("\nNo se encontró una persona con ese DNI.")


def menu():
    peoples = []
    
    while True:
        print("\n--- Menú ---")
        print("1. Ingresar nueva persona")
        print("2. Mostrar todos los datos")
        print("3. Filtrar por DNI")
        print("4. Salir")
        
        opcion = input("\nElige una opción: ").strip()
        
        if opcion == '1':
            agregar_persona(peoples)
        elif opcion == '2':
            mostrar_personas(peoples)
        elif opcion == '3':
            filtrar_por_dni(peoples)
        elif opcion == '4':
            print("\nSaliendo del programa...")
            break
        else:
            print("\nOpción no válida, intenta de nuevo.")


menu()
