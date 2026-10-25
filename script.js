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
        q: "¿Qué es la reflexión interna total?", 
        a: "Es el fenómeno óptico en el cual la luz choca contra el revestimiento en un ángulo mayor al crítico y se refleja totalmente hacia el núcleo sin escaparse." 
    },
    { 
        q: "¿Cuáles son las capas principales de la fibra óptica?", 
        a: "Núcleo (Core), Revestimiento (Cladding) y Recubrimiento protector (Buffer/Coating)." 
    },
    { 
        q: "¿Cuál es el tamaño de núcleo de fibra Monomodo vs Multimodo?", 
        a: "Monomodo (SM): 8 a 10 micras (µm).\nMultimodo (MM): 50 o 62.5 micras (µm)." 
    },
    { 
        q: "¿Qué diferencia hay entre Planta Interna y Planta Externa?", 
        a: "Planta Interna está dentro de edificaciones o centrales (OLT, bastidores).\nPlanta Externa está desplegada en la calle (postes, tanquetas, mangas, cables aéreos)." 
    },
    { 
        q: "¿Qué es GPON?", 
        a: "Gigabit Passive Optical Network. Red óptica pasiva punto a multipunto que usa splitters para dar servicio a múltiples usuarios con una sola fibra." 
    },
    { 
        q: "¿Qué es CONATEL?", 
        a: "Comisión Nacional de Telecomunicaciones de Venezuela, ente regulador del sector." 
    },
    { 
        q: "¿Cuándo se fundó Cantv y cuál es su tiempo de existencia?", 
        a: "Fundada el 20 de junio de 1930 (cuenta con 96 años de historia)." 
    },
    { 
        q: "¿Qué equipos de protección (EPP) se usan en trabajo de altura?", 
        a: "Casco con barboquejo, arnés de cuerpo entero, línea de vida con absorbedor de impacto, botas de seguridad y guantes." 
    },
    { 
        q: "¿Cuáles son los primeros 6 colores del código TIA/EIA-598?", 
        a: "1. Azul, 2. Naranja, 3. Verde, 4. Marrón, 5. Gris, 6. Blanco." 
    },
    { 
        q: "¿Cuáles son las fases de un diseño de proyecto de fibra?", 
        a: "1. Planificación/Estudio de demanda\n2. Diseño e Ingeniería\n3. Construcción y Tendido\n4. Pruebas y Certificación." 
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
// 3. Lógica del Simulacro de Examen
// ==========================================
const quizQuestions = [
    {
        q: "¿Qué función cumple el revestimiento (cladding) en la fibra óptica?",
        options: [
            "Conducir electricidad a los equipos receptores",
            "Mantener la luz dentro del núcleo por reflexión interna",
            "Servir como manguito contra la humedad exterior",
            "Aumentar la velocidad de transferencia de la señal"
        ],
        correct: 1,
        rationale: "El revestimiento tiene un índice de refracción menor que el núcleo para provocar la reflexión interna total."
    },
    {
        q: "¿Qué tipo de fibra óptica se utiliza principalmente para enlaces de larga distancia?",
        options: [
            "Fibra Multimodo (MM)",
            "Fibra Monomodo (SM)",
            "Fibra Plástica Sintética",
            "Cable Coaxial de Cobre"
        ],
        correct: 1,
        rationale: "La fibra monomodo permite menor dispersión y mayor alcance gracias a su núcleo reducido de 8-10 micras."
    },
    {
        q: "Según la norma TIA/EIA-598, ¿cuál es el color correspondiente al hilo N° 1 de la fibra?",
        options: [
            "Verde",
            "Naranja",
            "Azul",
            "Blanco"
        ],
        correct: 2,
        rationale: "El código estándar de colores inicia con Azul en la primera posición."
    },
    {
        q: "¿Qué es el splitter en una red GPON?",
        options: [
            "Un divisor pasivo que multiplica las señales ópticas hacia varios usuarios",
            "Un servidor que asigna direcciones IP a los módems",
            "Un fusible eléctrico protector de la central",
            "Un empalme mecánico provisional"
        ],
        correct: 0,
        rationale: "Los splitters dividen la luz en redes pasivas sin requerir alimentación eléctrica."
    },
    {
        q: "¿Cuál es el organismo encargado de fiscalizar la seguridad laboral y el cumplimiento de la LOPCYMAT en Venezuela?",
        options: [
            "CONATEL",
            "INPSASEL",
            "COVENIN",
            "CANTV"
        ],
        correct: 1,
        rationale: "INPSASEL es el Instituto Nacional de Prevención, Salud y Seguridad Laborales."
    }
];

let currentQuizIndex = 0;
let score = 0;
let answered = false;

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
        btn.className = "w-full text-left p-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition text-slate-200 border border-slate-600";
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
    currentQuizIndex = 0;
    score = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    loadQuizQuestion();
}

// Inicialización automática al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCard();
    loadQuizQuestion();
});