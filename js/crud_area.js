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
        alert("El ID ya existe, no se puede duplicar.");
        return;
    }

    const newItem = { id, nombre };
    datos_areas.push(newItem);
    console.log("Área creada:", newItem);
    saveToLocalStorage();
    alert(`Área nueva creada.`);
}

// Leer todas las áreas
function readItems() {
    console.clear();
    datos_areas.forEach((item) => {
        console.log(`ID: ${item.id}, Área:`, item);
    });
}

// Actualizar un área por ID
function updateItemById(id, newNombre) {
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

// Eliminar un área por ID
function deleteItem(id) {
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
    console.log(`Buscando áreas por nombre: ${nombre}`);
    const resultados = datos_areas.filter(area => area.nombre.toLowerCase().includes(nombre.toLowerCase()));
    console.log("Resultados de la búsqueda por nombre:", resultados);
    return resultados;
}

// Buscar área por ID
function buscarAreaPorId(id) {
    console.log(`Buscando área por ID: ${id}`);
    const resultado = datos_areas.find(area => area.id === id);
    console.log("Resultado de la búsqueda por ID:", resultado);
    return resultado;
}


// Cargar datos al iniciar la página
loadFromLocalStorage();

