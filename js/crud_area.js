let datos_areas = [];

// Cargar datos desde localStorage al iniciar
function loadFromLocalStorage() {
    const storedDatosAreas = localStorage.getItem("crudDatosAreas");
    if (storedDatosAreas) {
        datos_areas = JSON.parse(storedDatosAreas);
        console.log("Datos cargados desde localStorage:", datos_areas);
    } else {
        console.warn("No se encontraron datos en localStorage.");
    }
}

// Guardar datos en localStorage
function saveToLocalStorage() {
    localStorage.setItem("crudDatosAreas", JSON.stringify(datos_areas));
}

// Crear un área
function createItemConIdYNombre(id, nombre) {
    if (datos_areas.some(area => area.id === id)) {
        console.error(`El ID ${id} ya existe. No se puede duplicar.`);
        return;
    }

    const newItem = { id, nombre };
    datos_areas.push(newItem);
    console.log("Área creada:", newItem);
    saveToLocalStorage();
}

// Leer todas las áreas
function readItems() {
    console.clear();
    datos_areas.forEach((item, index) => {
        console.log(`ID: ${index}, Área:`, item);
    });
}

// Actualizar un área
function updateItemById(id, newNombre) {
    id = Number(id); // Aseguramos que el ID sea un número
    const item = datos_areas.find(area => area.id === id);
    if (item) {
        item.nombre = newNombre;
        console.log(`Área actualizada:`, item);
        saveToLocalStorage();
        alert(`Área con ID ${id} ha sido actualizada a "${newNombre}".`);
    } else {
        console.error("ID no encontrado.");
        alert(`No se encontró un área con ID ${id}.`);
    }
}

// Eliminar área
function deleteItem(id) {
    id = Number(id); // Aseguramos que el ID sea un número
    const itemIndex = datos_areas.findIndex(area => area.id === id);
    if (itemIndex !== -1) {
        const deletedItem = datos_areas.splice(itemIndex, 1);
        console.log("Área eliminada:", deletedItem);
        saveToLocalStorage();
        alert(`Área con ID ${id} ha sido eliminada.`);
    } else {
        console.error("ID no válido.");
        alert(`No se encontró un área con ID ${id} para eliminar.`);
    }
}

// Buscar área por nombre
function buscarAreaPorNombre(nombre) {
    return datos_areas.filter(area => area.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

// Buscar área por ID
function buscarAreaPorId(id) {
    return datos_areas.find(area => area.id === id);
}

// Cargar datos al iniciar la página
loadFromLocalStorage();
