// ==========================================
// 1. Control de Pestañas
// ==========================================
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('bg-blue-600', 'text-white', 'shadow');
        el.classList.add('text-slate-300', 'hover:bg-slate-700');
    });

    document.getElementById(tabId).classList.add('active');
    const activeBtn = document.getElementById('btn-' + tabId);
    activeBtn.classList.remove('text-slate-300', 'hover:bg-slate-700');
    activeBtn.classList.add('bg-blue-600', 'text-white', 'shadow');
}

// ==========================================
// 2. Lógica de Tarjetas Flash
// ==========================================
const flashcards = [
    { 
        q: "¿Qué es la fibra óptica?", 
        a: "Es un medio de transmisión flexible y transparente de vidrio o plástico que envía información a alta velocidad mediante impulsos de luz." 
    },
    { 
        q: "¿De qué elementos está formada la fibra óptica?", 
        a: "Está formada principalmente por núcleo (core), revestimiento (cladding) y recubrimiento primario (coating/buffer)." 
    },
    { 
        q: "¿De qué tamaño son los núcleos según el tipo de fibra?", 
        a: "Monomodo (SM): Entre 8 y 10 micras. Multimodo (MM): Generalmente de 50 o 62.5 micras." 
    },
    { 
        q: "¿Cuál es la diferencia entre Planta Interna y Planta Externa?", 
        a: "Planta Interna está dentro de edificios/centrales (OLT, bastidores). Planta Externa está en la vía pública (postes, tanquetas, cables aéreos)." 
    },
    { 
        q: "¿Qué es GPON?", 
        a: "Gigabit Passive Optical Network. Tecnología de acceso punto a multipunto que utiliza divisores pasivos (splitters)." 
    },
    { 
        q: "¿Qué es CONATEL?", 
        a: "Comisión Nacional de Telecomunicaciones de Venezuela, ente regulador del sector." 
    },
    { 
        q: "¿Cuándo se fundó Cantv y cuántos años tiene?", 
        a: "Fue fundada el 20 de junio de 1930. Actualmente tiene 96 años." 
    },
    { 
        q: "¿Qué equipos de protección (EPP) se usan en trabajos de campo/altura?", 
        a: "Casco con barboquejo, lentes, guantes dieléctricos, botas, chaleco reflectivo y arnés con cabo de vida." 
    },
    { 
        q: "¿Cuál es el orden de los primeros colores del código TIA/EIA-598?", 
        a: "1. Azul, 2. Naranja, 3. Verde, 4. Marrón, 5. Gris, 6. Blanco." 
    },
    { 
        q: "¿Cuáles son las fases de un proyecto de fibra óptica?", 
        a: "1. Planificación/Demanda, 2. Diseño e Ingeniería, 3. Construcción y Tendido, 4. Pruebas y Certificación." 
    }
];

let currentCard = 0;
let showingAnswer = false;

function updateCard() {
    showingAnswer = false;
    document.getElementById('fc-tag').innerText = `Tarjeta ${currentCard + 1} de ${flashcards.length}`;
    document.getElementById('fc-text').innerText = flashcards[currentCard].q;
}

function flipCard() {
    showingAnswer = !showingAnswer;
    document.getElementById('fc-text').innerText = showingAnswer ? flashcards[currentCard].a : flashcards[currentCard].q;
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    updateCard();
}

function prevCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    updateCard();
}

// ==========================================
// 3. Banco Completo de 50 Preguntas (Simulacro Dinámico)
// ==========================================
const bancoPreguntas = [
    {
        q: "¿Qué es la fibra óptica?",
        options: [
            "Un cable de cobre trenzado de alta velocidad",
            "Un medio de transmisión flexible de vidrio o plástico que envía información mediante impulsos de luz",
            "Un dispositivo activo que amplifica señales de radio",
            "Una canalización subterránea para servicios eléctricos"
        ],
        correct: 1,
        rationale: "Es un medio físico transparente que transmite datos mediante pulsos luminosos."
    },
    {
        q: "¿De qué elementos está formada principalmente la fibra óptica?",
        options: [
            "Cobre, plomo y aislante plástico",
            "Núcleo, revestimiento y recubrimiento primario",
            "Guaya de acero, gel y chaqueta externa",
            "Conector SC, adaptador y patch cord"
        ],
        correct: 1,
        rationale: "Sus capas principales son el núcleo (core), revestimiento (cladding) y recubrimiento (buffer)."
    },
    {
        q: "¿Cuál es el tamaño del núcleo en una fibra Monomodo (SM)?",
        options: ["50 o 62.5 micras", "Entre 8 y 10 micras", "125 micras exactas", "Más de 200 micras"],
        correct: 1,
        rationale: "La fibra monomodo posee un núcleo muy estrecho de 8 a 10 micras para larga distancia."
    },
    {
        q: "¿Cuál es el tamaño típico del núcleo en una fibra Multimodo (MM)?",
        options: ["Entre 8 y 10 micras", "50 o 62.5 micras", "1000 micras", "4 micras"],
        correct: 1,
        rationale: "La fibra multimodo maneja núcleos de 50 o 62.5 micras para distancias cortas."
    },
    {
        q: "¿En qué década comenzó el comercio operativo e industrial de la fibra óptica?",
        options: ["Década de 1950", "Década de 1970", "Década de 1990", "Año 2005"],
        correct: 1,
        rationale: "Comenzó en los 70 tras el desarrollo de fibras de baja atenuación por Corning Glass."
    },
    {
        q: "¿Qué es la reflexión interna total?",
        options: [
            "La pérdida de luz al doblar demasiado el cable",
            "El fenómeno donde la luz choca contra el revestimiento en ángulo mayor al crítico y se refleja hacia el núcleo",
            "El proceso de soldadura por fusión de dos hilos",
            "La conversión de luz a señales eléctricas en la ONT"
        ],
        correct: 1,
        rationale: "Es el principio óptico que permite que la luz viaje a lo largo del cable sin escapar."
    },
    {
        q: "¿Qué describe la Ley de Snell?",
        options: [
            "La resistencia eléctrica de los metales",
            "La relación entre los ángulos de incidencia y refracción al atravesar medios con distintos índices",
            "La tensión máxima que soporta una guaya de acero",
            "La velocidad de transmisión en redes GPON"
        ],
        correct: 1,
        rationale: "Explica cómo cambia la dirección y velocidad de la luz entre medios con diferentes índices de refracción."
    },
    {
        q: "¿Qué es el buffer en la construcción de un cable de fibra?",
        options: [
            "Un conector rápido para acometidas",
            "Una cubierta protectora de material plástico que resguarda la fibra de impactos y humedad",
            "Un divisor de señal pasivo",
            "El equipo central de transmisión"
        ],
        correct: 1,
        rationale: "El buffer protege mecánicamente a la fibra (puede ser estructura holgada o apretada)."
    },
    {
        q: "¿Qué es la planta externa de telecomunicaciones?",
        options: [
            "Los servidores ubicados dentro de la sala de datos",
            "La infraestructura desplegada en la vía pública o intemperie (postes, canalizaciones, cables)",
            "El cableado interno de una oficina residencial",
            "Los equipos terminales dentro del hogar del cliente"
        ],
        correct: 1,
        rationale: "La planta externa conecta la central con los usuarios a través de la calle."
    },
    {
        q: "Según la norma TIA/EIA-598, ¿cuál es el color correspondiente al hilo N° 1?",
        options: ["Rojo", "Verde", "Azul", "Blanco"],
        correct: 2,
        rationale: "El código estándar de colores inicia con el color Azul en la primera posición."
    },
    {
        q: "Según la norma TIA/EIA-598, ¿qué color ocupa la segunda posición en el código de identificación?",
        options: ["Naranja", "Amarillo", "Marrón", "Negro"],
        correct: 0,
        rationale: "La secuencia estándar comienza con Azul y continúa con Naranja."
    },
    {
        q: "¿Qué es una red GPON?",
        options: [
            "Una red de telefonía fija analógica",
            "Una Red Óptica Pasiva con Capacidad de Gigabit punto a multipunto con splitters",
            "Un protocolo de correo electrónico corporativo",
            "Un sistema de enlaces vía microondas"
        ],
        correct: 1,
        rationale: "GPON utiliza divisores pasivos para repartir internet de alta velocidad usando una sola fibra."
    },
    {
        q: "¿Qué tramo de la red representa la 'Última Milla'?",
        options: [
            "El enlace troncal entre ciudades",
            "El tramo final de acceso que conecta al proveedor directamente con el domicilio o empresa del usuario",
            "El cableado interno de los racks en la central",
            "La conexión entre los servidores principales de Google y Cantv"
        ],
        correct: 1,
        rationale: "Es la conexión final que llega directo al cliente."
    },
    {
        q: "¿Cuál es el organismo regulador de las telecomunicaciones en Venezuela (CONATEL)?",
        options: [
            "Una empresa privada de televisión por cable",
            "El órgano del Estado encargado de dirigir, supervisar y promover el sector de telecomunicaciones",
            "Un sindicato de trabajadores de la construcción",
            "Una institución internacional de normas ISO"
        ],
        correct: 1,
        rationale: "CONATEL regula y supervisa las telecomunicaciones en el país."
    },
    {
        q: "¿Cuándo fue fundada Cantv y cuántos años cumple actualmente?",
        options: [
            "Fundada en 1950 (76 años)",
            "Fundada el 20 de junio de 1930 (96 años)",
            "Fundada en 1998 (28 años)",
            "Fundada en 1920 (106 años)"
        ],
        correct: 1,
        rationale: "Cantv fue fundada el 20 de junio de 1930 y actualmente cumple 96 años."
    },
    {
        q: "¿Qué significan las siglas LOPCYMAT?",
        options: [
            "Ley Orgánica de Prevención, Condiciones y Medio Ambiente de Trabajo",
            "Liga Operativa de Control y Protección de Materiales y Torres",
            "Norma Internacional de Calidad para Redes de Fibra",
            "Licencia Obligatoria para Operadores de Planta Externa"
        ],
        correct: 0,
        rationale: "Garantiza a los trabajadores condiciones seguras y saludables en su entorno laboral."
    },
    {
        q: "¿Qué función cumple el INPSASEL?",
        options: [
            "Vender equipos de protección personal",
            "Fiscalizar, sancionar y velar por el cumplimiento de la LOPCYMAT",
            "Diseñar los planos de ingeniería para fibra óptica",
            "Emitir licencias de conducción de vehículos pesados"
        ],
        correct: 1,
        rationale: "Es el organismo público encargado de hacer cumplir la seguridad laboral."
    },
    {
        q: "¿Qué elementos de protección personal (EPP) son obligatorios para trabajos en altura?",
        options: [
            "Solo zapatos de goma y guantes de tela",
            "Casco con barboquejo, arnés de cuerpo entero, línea de vida y botas de seguridad",
            "Camisa manga corta y gorra deportiva",
            "Lentes de sol y protector solar"
        ],
        correct: 1,
        rationale: "Para alturas se requiere arnés anticaídas completo, línea de vida y casco con retención."
    },
    {
        q: "Si ocurre un accidente grave en el campo laboral, ¿cuál es el protocolo inicial?",
        options: [
            "Ocultar el incidente para evitar reportes",
            "Comunicarse con emergencias (911), el supervisor SIAHO y el comité de seguridad",
            "Continuar trabajando hasta terminar la jornada",
            "Llamar únicamente a los familiares del afectado"
        ],
        correct: 1,
        rationale: "Se deben activar los servicios de emergencia y reportar al departamento de seguridad (SIAHO)."
    },
    {
        q: "¿Cuáles son las fases principales en la construcción de un proyecto de fibra óptica?",
        options: [
            "1. Pintura, 2. Cableado eléctrico, 3. Conexión de bombillos",
            "1. Planificación/Demanda, 2. Diseño e Ingeniería, 3. Construcción y Tendido, 4. Pruebas y Certificación",
            "1. Compra de equipos usados, 2. Desecho de cables, 3. Facturación",
            "1. Inspección visual externa, 2. Desconexión total"
        ],
        correct: 1,
        rationale: "Las fases van desde el estudio de demanda inicial hasta las pruebas y certificación final."
    }
];

let quizQuestions = [];
let currentQuizIndex = 0;
let score = 0;
let answered = false;

// Función para barajar un arreglo al azar (Fisher-Yates)
function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Iniciar un nuevo simulacro tomando 5 preguntas al azar del banco
function iniciarSimulacro() {
    // Mezcla todo el banco y toma 5 preguntas (puedes cambiar el 5 por las que quieras, ej: 10)
    let preguntasMezcladas = shuffleArray(bancoPreguntas);
    quizQuestions = preguntasMezcladas.slice(0, 5);
    
    currentQuizIndex = 0;
    score = 0;
    answered = false;
    
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    answered = false;
    const q = quizQuestions[currentQuizIndex];
    document.getElementById('quiz-progress').innerText = `Pregunta ${currentQuizIndex + 1} de ${quizQuestions.length}`;
    document.getElementById('quiz-score').innerText = `Puntuación: ${score}`;
    document.getElementById('q-title').innerText = q.q;
    
    const optionsContainer = document.getElementById('q-options');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition text-slate-200 border border-slate-600 cursor-pointer";
        btn.innerText = opt;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('q-feedback').classList.add('hidden');
    document.getElementById('next-q-btn').classList.add('hidden');
}

function selectOption(selectedIndex) {
    if (answered) return;
    answered = true;
    const q = quizQuestions[currentQuizIndex];
    const buttons = document.getElementById('q-options').children;
    const feedback = document.getElementById('q-feedback');

    if (selectedIndex === q.correct) {
        score++;
        buttons[selectedIndex].classList.remove('bg-slate-700', 'border-slate-600');
        buttons[selectedIndex].classList.add('bg-emerald-600', 'border-emerald-500');
        feedback.innerText = "¡Correcto! " + q.rationale;
        feedback.className = "mt-4 p-3 rounded-lg bg-emerald-900/50 border border-emerald-600 text-emerald-200 text-sm";
    } else {
        buttons[selectedIndex].classList.remove('bg-slate-700', 'border-slate-600');
        buttons[selectedIndex].classList.add('bg-rose-600', 'border-rose-500');
        buttons[q.correct].classList.remove('bg-slate-700', 'border-slate-600');
        buttons[q.correct].classList.add('bg-emerald-600', 'border-emerald-500');
        feedback.innerText = "Incorrecto. " + q.rationale;
        feedback.className = "mt-4 p-3 rounded-lg bg-rose-900/50 border border-rose-600 text-rose-200 text-sm";
    }

    feedback.classList.remove('hidden');
    document.getElementById('quiz-score').innerText = `Puntuación: ${score}`;
    
    if (currentQuizIndex < quizQuestions.length - 1) {
        document.getElementById('next-q-btn').innerText = "Siguiente Pregunta";
    } else {
        document.getElementById('next-q-btn').innerText = "Ver Resultados";
    }
    document.getElementById('next-q-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
        loadQuizQuestion();
    } else {
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('quiz-results').classList.remove('hidden');
        document.getElementById('final-score-text').innerText = `Tu puntuación final es: ${score} de ${quizQuestions.length}`;
    }
}

function restartQuiz() {
    iniciarSimulacro();
}

// Inicialización automática al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCard();
    iniciarSimulacro(); // Carga las preguntas aleatorias al entrar
});
