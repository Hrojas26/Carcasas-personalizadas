
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

    Samsung: [
      'Referencia',
      "Galaxy Note 20 Ultra",
      "Galaxy Note 20",
      "Galaxy Note 10 Plus",
      "Galaxy Note 10 Lite",
      "Galaxy Note 10",
      "Galaxy Z Flip4",
      "Galaxy Z Flip3",
      "Galaxy S23 Plus",
      "Galaxy S23",
      "Galaxy S22 Ultra",
      "Galaxy S22 Plus",
      "Galaxy S22",
      "Galaxy S21 Ultra",
      "Galaxy S21 Plus",
      "Galaxy S21",
      "Galaxy S21 FE",
      "Galaxy S20 Ultra",
      "Galaxy S20 Plus",
      "Galaxy S20 FE",
      "Galaxy S20",
      "Galaxy S10 Plus",
      "Galaxy S10",
      "Galaxy S10 Lite",
      "Galaxy S10e",
      "Galaxy S9",
      "Galaxy S8 Plus",
      "Galaxy S8",
      "Galaxy S6",
      "Galaxy A53 5G",
      "Galaxy A33 5G",
      "Galaxy A23 5G",
      "Galaxy A72",
      "Galaxy A52s",
      "Galaxy A52",
      "Galaxy A32 5G",
      "Galaxy A32 4G",
      "Galaxy A22 5G",
      "Galaxy A22 4G",
      "Galaxy A12",
      "Galaxy A71",
      "Galaxy A51",
      "Galaxy A31",
      "Galaxy A21s",
      "Galaxy A11",
      "Galaxy A70",
      "Galaxy A50",
      "Galaxy A30s",
      "Galaxy A30",
      "Galaxy A20s",
      "Galaxy A20",
      "Galaxy A10s",
      "Galaxy M31"],

    Xiaomi: [
      'Referencia',
      "Xiaomi 12 Pro",
      "Xiaomi 11T Pro",
      "Xiaomi 11T",
      "Xiaomi Redmi Note 11 Pro",
      "Xiaomi Redmi Note 11s",
      "Xiaomi Redmi Note 11",
      "Xiaomi Redmi Note 10 Pro",
      "Xiaomi Redmi Note 10S",
      "Xiaomi Redmi Note 10",
      "Xiaomi Redmi Note 9 Pro",
      "Xiaomi Redmi Note 9S",
      "Xiaomi Redmi Note 9",
      "Xiaomi Redmi Note 8 Pro",
      "Xiaomi Redmi Note 8T",
      "Xiaomi Redmi Note 8",
      "Xiaomi Redmi Note 7",
      "Xiaomi Redmi 10",
      "Xiaomi Redmi 9T",
      "Xiaomi Redmi 9C",
      "Xiaomi Redmi 9",
      "Xiaomi Redmi 8",
      "Xiaomi Mi 11 Lite",
      "Xiaomi Mi 11",
      "Xiaomi Mi 10T Pro",
      "Xiaomi Mi 10T",
      "Xiaomi Mi 9t Pro",
      "Xiaomi Mi 9t",
      "Xiaomi Mi 10 Pro",
      "Xiaomi Mi 10 Lite",
      "Xiaomi Mi 10",
      "Xiaomi Mi 9 Lite",
      "Xiaomi Mi 9 SE",
      "Xiaomi Mi 9",
      "Xiaomi Mi Note 10 Pro",
      "Xiaomi Mi Note 10",
      "Xiaomi Poco X3",
      "Xiaomi Poco M4 Pro 5G",
      "Xiaomi Poco M3",
      "Xiaomi Poco F3",
      "Xiaomi Poco F2 Pro",
      "Xiaomi Pocophone F1"
      ],

    Huawei: [
      'Referencia',
      "Huawei P50",
      "Huawei P50 Pro",
      "Huawei Mate 20 Lite",
      "Huawei Mate 10 Lite",
      "Huawei Mate 10",
      "Huawei Nova 5T",
      "Huawei P Smart 2020",
      "Huawei P Smart 2019",
      "Huawei P Smart",
      "Huawei P40 Lite",
      "Huawei P40",
      "Huawei P30 Pro",
      "Huawei P30 Lite",
      "Huawei P30",
      "Huawei P20 Pro",
      "Huawei P20 Lite",
      "Huawei P20",
      "Huawei Y9 Prime 2019",
      "Huawei Y9 2019",
      "Huawei Y9 2018",
      "Huawei Y9s",
      "Huawei Y9a",
      "Huawei Y8p"
    ],

    Motorola: [
      "Moto G60",
      "Moto G30",
      "Moto G20",
      "Moto G9 Plus",
      "Moto G9 Power",
      "Moto G9 Play",
      "Moto G8 Plus",
      "Moto G8 Power",
      "Moto G7 Power",
      "Moto G7 Play",
      "Moto G7 Plus",
      "Moto G7",
      "Moto E7 Plus",
      "Moto E6 Plus",
      "Moto E6s",
      "Motorola One Vision",
      "Motorola One Action",
      "Motorola One Zoom",
      "Motorola One"
    ],
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

      // Agrega la clase 'modificable' solo a la imagen que se crea en .nuevaImagen
      imagenElement.classList.add('modificable');

      // Crea un nuevo div para la imagen cargada en .nuevaImagen
      const nuevaImagenDiv = document.createElement('div');
      nuevaImagenDiv.classList.add('nuevaImagen');
      nuevaImagenDiv.appendChild(imagenElement);

      // Agrega la imagen al div mockup
      mockupDiv.appendChild(nuevaImagenDiv);

      // Oculta la clase "btns"
      const btns = document.querySelector('.btns');
      btns.style.display = 'none';
      const botones = document.querySelector('.botones')
      botones.style.height = '10%';
      const ajustesresponsive = document.querySelector('.mockup')
      ajustesresponsive.style.height = '100%';
      ajustesresponsive.style.zIndex = '4';
      
      const modelocargado = document.querySelector('.modeloCargado')
      modelocargado.style.width = '216%';
      modelocargado.style.left = '-54%';

      const imagencargada = document.querySelector('.nuevaImagen')
      imagencargada.style.width = '100%';

      // Habilita la funcionalidad de gesto para hacer zoom en la imagen
      interact('.modificable').gesturable({
        onmove: function (event) {
          var target = event.target;
          var scale = parseFloat(target.dataset.scale) || 1;
          scale *= 1 + event.ds; // ds (deltaScale) representa el cambio en la escala

          target.style.webkitTransform =
          target.style.transform =
            'scale(' + scale + ')';

          target.dataset.scale = scale;
        }
      });
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

// Modifica el código para utilizar eventos táctiles específicos

// Modifica el código para utilizar eventos táctiles específicos
interact('.modificable')
  .draggable({
    listeners: {
      move: function (event) {
        var target = event.target;
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      }
    }
  })
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move: function (event) {
        var target = event.target;
        var x = (parseFloat(target.getAttribute('data-x')) || 0);
        var y = (parseFloat(target.getAttribute('data-y')) || 0);

        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px,' + y + 'px)';
      }
    }
  });

  // SLIDER PROMO

var textos = ["Envíos gratis por compras superiores a $100.000", "Personaliza tu celular"]; // Agrega tus textos aquí
var currentIndex = 0;
var cinta = document.getElementById("cinta");
var textoElement = document.getElementById("texto");

function cambiarTexto(direccion) {
  if (direccion === 'anterior') {
    currentIndex = (currentIndex - 1 + textos.length) % textos.length;
  } else {
    currentIndex = (currentIndex + 1) % textos.length;
  }

  mostrarTexto();
}

function mostrarTexto() {
  textoElement.textContent = textos[currentIndex];
}

function cambiarAutomaticamente() {
  setInterval(function() {
    cambiarTexto('siguiente');
  }, 4000);
}

mostrarTexto(); // Muestra el primer texto
cambiarAutomaticamente(); // Inicia el cambio automático

// SLIDERIMG
let currentIndex2 = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentIndex2 = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex2 = 0;
  } else {
    currentIndex2 = index;
  }

  const offset = -currentIndex2 * 100 + '%';
  document.querySelector('.slider').style.transform = 'translateX(' + offset + ')';
}

function nextSlide() {
  showSlide(currentIndex2 + 1);
}

function prevSlide() {
  showSlide(currentIndex2 - 1);
}

// Automatic slide change every 3 seconds
setInterval(nextSlide, 3000);


// Agrega un evento de cambio al select de modelos
modeloSelect.addEventListener('change', function () {
  // Obtén el modelo seleccionado
  const modeloSeleccionado = modeloSelect.value;

  // Habilita el botón de subir imagen cuando se selecciona un modelo
  if (modeloSeleccionado) {
    subirImagenBtn.classList.add('btnactive');
  } else {
    subirImagenBtn.classList.remove('btnactive');
  }
});



