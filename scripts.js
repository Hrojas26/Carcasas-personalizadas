// Obtén referencias a los elementos select y al div mockup
const marcaSelect = document.getElementById('marcas');
const modeloSelect = document.getElementById('modelos');
const mockupDiv = document.querySelector('.mockup');
const imagenInput = document.getElementById('imagenInput'); // Nuevo input de tipo file
const subirImagenBtn = document.getElementById('subirImagenBtn'); // Nuevo botón para subir la imagen

// Define un objeto que mapea las marcas a los modelos correspondientes
const modelosPorMarca = {
    Apple: [
        'Referencia',
        'iPhone 14 Pro Max',
        'iPhone 14 Pro',
        'iPhone 14 Plus',
        'iPhone 14',
        'iPhone SE 3',
        'iPhone 13 Pro Max',
        'iPhone 13 Pro',
        'iPhone 13 Mini',
        'iPhone 13',
        'iPhone 12 Pro Max',
        'iPhone 12 Pro',
        'iPhone 12 Mini',
        'iPhone 12',
        'iPhone SE 2',
        'iPhone 11 Pro Max',
        'iPhone 11 Pro',
        'iPhone 11',
        'iPhone XR',
        'iPhone XS Max',
        'iPhone XS',
        'iPhone X',
        'iPhone 8 Plus',
        'iPhone 8',
        'iPhone 7 Plus',
        'iPhone 7',
    ],
    Samsung: ['Modelo1 Chevrolet', 'Modelo2 Chevrolet', 'Modelo3 Chevrolet'],
    Xiaomi: ['Modelo1 Audi', 'Modelo2 Audi', 'Modelo3 Audi'],
    Huawei: ['Modelo1 Audi', 'Modelo2 Audi', 'Modelo3 Audi'],
    Motorola: ['Modelo1 Audi2', 'Modelo2 Audi', 'Modelo3 Audi'],
};

// Agrega un evento de cambio al input de tipo file
imagenInput.addEventListener('change', function () {
    const file = imagenInput.files[0];
    if (file) {
        // Crea un objeto URL para la imagen seleccionada
        const imageUrl = URL.createObjectURL(file);

        // Crea un elemento img y establece la URL como su fuente
        const imagenElement = document.createElement('img');
        imagenElement.src = imageUrl;

        
        // Agrega una clase a la imagen recién creada
        imagenElement.classList.add('modificable'); // Reemplaza 'miClase'

        // Crea un nuevo div para la imagen cargada
        const nuevaImagenDiv = document.createElement('div');
        nuevaImagenDiv.classList.add('nuevaImagen');

        // Agrega la imagen al nuevo div
        nuevaImagenDiv.appendChild(imagenElement);

        // Agrega el nuevo div al div mockup
        mockupDiv.appendChild(nuevaImagenDiv);
    }
});


// Resto del código para el cambio de marca y modelo (tal como lo tienes actualmente)
marcaSelect.addEventListener('change', function () {
    // Obtén la marca seleccionada
    const marcaSeleccionada = marcaSelect.value;

    // Limpia las opciones actuales en el select de modelos
    modeloSelect.innerHTML = '';

    // Elimina los elementos hijos del div mockup (limpia cualquier imagen anterior)
    while (mockupDiv.firstChild) {
        mockupDiv.removeChild(mockupDiv.firstChild);
    }

    // Si se selecciona una marca, habilita el select de modelos y agrega las opciones correspondientes
    if (marcaSeleccionada) {
        modeloSelect.disabled = false;
        const modelos = modelosPorMarca[marcaSeleccionada];

        // Agrega una opción por cada modelo de la marca seleccionada
        modelos.forEach(modelo => {
            const option = document.createElement('option');
            option.value = modelo;
            option.textContent = modelo;
            modeloSelect.appendChild(option);
        });

        // Crea un nuevo div para la imagen de la marca seleccionada
        const marcaImagenDiv = document.createElement('div');
        marcaImagenDiv.classList.add('marcaImagen');

        // Carga la imagen correspondiente a la marca como un elemento img dentro del nuevo div
        const imagenPath = 'marcas/' + marcaSeleccionada.toLowerCase() + '.png'; // Asumiendo que las imágenes tienen nombres en minúsculas
        const imagenElement = document.createElement('img');
        imagenElement.classList.add('marcaCargada'); // Agrega una clase al elemento img
        imagenElement.src = imagenPath;
        imagenElement.alt = marcaSeleccionada;

        // Agrega la imagen al nuevo div
        marcaImagenDiv.appendChild(imagenElement);

        // Agrega el nuevo div al div mockup
        mockupDiv.appendChild(marcaImagenDiv);
    } else {
        // Si no se selecciona ninguna marca, deshabilita el select de modelos
        modeloSelect.disabled = true;
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Primero selecciona una marca';
        modeloSelect.appendChild(option);
    }
});

// Agrega un evento de cambio al select de modelos
modeloSelect.addEventListener('change', function () {
    // Obtén el modelo seleccionado
    const modeloSeleccionado = modeloSelect.value;

    // Elimina los elementos hijos del div mockup (limpia cualquier imagen anterior)
    while (mockupDiv.firstChild) {
        mockupDiv.removeChild(mockupDiv.firstChild);
    }

    // Carga la imagen correspondiente al modelo como un elemento img dentro del div mockup
    if (modeloSeleccionado) {
        const imagenPath = 'modelos/' + modeloSeleccionado.replace(/\s+/g, '') + '.png';
        const imagenElement = document.createElement('img');

        // Agrega una clase al elemento img
        imagenElement.classList.add('modeloCargado'); // Clase creada al modelo seleccionado

        imagenElement.src = imagenPath;
        imagenElement.alt = modeloSeleccionado;

        // Agrega la imagen al div mockup
        mockupDiv.appendChild(imagenElement);

        // Habilita el input de tipo file cuando se selecciona un modelo
        imagenInput.disabled = false;
    } else {
        // Deshabilita el input de tipo file cuando no se selecciona ningún modelo
        imagenInput.disabled = true;
    }


    

});

interact('.modificable')
  .draggable({
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent'
      })
    ]
  })
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true }
  })
  .on('resizemove', function (event) {  // Corregir aquí: 'resizemove' en lugar de 'resmove'
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.width = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    target.style.webkitTransform = target.style.transform =
      'translate(' + x + 'px,' + y + 'px)';
  })
  .on('dragmove', function (event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.webkitTransform = target.style.transform =
      'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  });