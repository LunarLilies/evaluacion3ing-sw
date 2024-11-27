let datos_areas = [];

// Cargar datos desde localStorage al iniciar
function loadFromLocalStorage() {
    const storedDatosAreas = localStorage.getItem("crudDatosAreas");
    if (storedDatosAreas) {
        datos_areas = JSON.parse(storedDatosAreas);
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
function updateItem(index, newItem) {
    if (datos_areas[index]) {
        datos_areas[index] = newItem;
        console.log(`Item actualizado en índice ${index}:`, newItem);
        saveToLocalStorage();
    } else {
        console.error("Índice no válido.");
    }
}

// Eliminar área
function deleteItem(index) {
    if (index >= 0 && index < datos_areas.length) {
        const deletedItem = datos_areas.splice(index, 1);
        console.log("Área eliminada:", deletedItem);
        saveToLocalStorage();
    } else {
        console.error("Índice no válido.");
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
