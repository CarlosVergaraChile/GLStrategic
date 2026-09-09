// Datos de respaldo en caso de falla de carga desde assets/data/noticias.json
const NOTICIAS_BACKUP = {
    "noticias": [
        {
            "id": 1,
            "titulo": "Anticipación estratégica: Chile hacia el 2030",
            "extracto": "El desafío no es adaptarse al cambio, sino anticiparlo. En GL Strategic trabajamos con una red de 2.000+ expertos del Proyecto País para detectar señales débiles que moldearán el futuro de nuestros clientes.",
            "autor": "Gastón L'Huillier",
            "rol": "Socio Principal",
            "imagen_autor": "gaston_lhuillier_troncoso.png",
            "tipo": "linkedin",
            "url": "https://www.linkedin.com/feed/",
            "fecha": "2025-01-20",
            "categoria": "estrategia"
        },
        {
            "id": 2,
            "titulo": "Proyecto País se anticipa 10 años a los cambios de tendencia en Chile",
            "extracto": "El PP del Colegio de Ingenieros, creado y dirigido por nuestro socio Gastón L'Huillier, ha entregado durante 12 años la mejor información sobre los cambios que vienen en el país.",
            "autor": "Gastón L'Huillier",
            "rol": "Socio Principal",
            "imagen_autor": "gaston_lhuillier_troncoso.png",
            "tipo": "linkedin",
            "url": "http://groupeloyal.blogspot.com/2014/03/proyecto-pais-se-anticipa-10-anos-los.html",
            "fecha": "2014-03-20",
            "categoria": "estrategia"
        },
        {
            "id": 3,
            "titulo": "Transformación digital sin estrategia es sólo gasto",
            "extracto": "La verdadera transformación digital no se trata de tecnología, sino de estrategia. Integramos herramientas de clase mundial con gestión del cambio para resultados medibles.",
            "autor": "Guillermo Muñoz",
            "rol": "Socio - Estrategia Digital",
            "imagen_autor": "guillermo_munoz.png",
            "tipo": "linkedin",
            "url": "https://www.linkedin.com/feed/",
            "fecha": "2025-01-18",
            "categoria": "transformacion"
        },
        {
            "id": 4,
            "titulo": "Liderazgo adaptativo: La minga como modelo de gestión",
            "extracto": "El legado cultural de la minga inspira modelos de liderazgo horizontal y adaptativo que las organizaciones modernas necesitan redescubrir.",
            "autor": "Rafael Sotil",
            "rol": "Socio - Liderazgo y Cultura",
            "imagen_autor": "rafael_sotil.png",
            "tipo": "linkedin",
            "url": "https://www.linkedin.com/feed/",
            "fecha": "2025-01-15",
            "categoria": "liderazgo"
        }
    ]
};

let carouselIndex = 0;
let noticiasActuales = [];

// Cargar y renderizar noticias desde JSON externo con respaldo local
async function cargarNoticias() {
    const container = document.getElementById('noticias-container');
    let noticias = [];

    try {
        const respuesta = await fetch('assets/data/noticias.json', { cache: 'no-store' });
        if (!respuesta.ok) {
            throw new Error(`HTTP ${respuesta.status}`);
        }

        const data = await respuesta.json();
        if (!data || !Array.isArray(data.noticias) || data.noticias.length === 0) {
            throw new Error('El archivo de noticias está vacío');
        }

        noticias = data.noticias;
    } catch (error) {
        console.warn('Fallo carga desde JSON, usando respaldo local:', error.message);
        noticias = NOTICIAS_BACKUP.noticias;
    }

    todasLasNoticias = noticias;
    noticiasActuales = noticias;
    carouselIndex = 0;
    renderizarFiltros(noticias);
    renderizarNoticias(noticias);
}

function renderizarFiltros(noticias) {
    const contenedor = document.getElementById('filtros-noticias');
    const categorias = ['todas', ...new Set(noticias.map(n => n.categoria))];

    contenedor.innerHTML = categorias.map(cat => {
        const activa = cat === 'todas';
        const icono = iconoCategoria(cat);
        return `
            <button onclick="filtrarNoticias('${cat}')" data-categoria="${cat}"
                    class="filter-btn px-5 py-2 rounded-full font-bold text-xs transition-all duration-300 ${activa ? 'bg-cct_cyan text-white' : 'bg-white text-navy border-2 border-gray-200 hover:border-cct_cyan'}">
                <i class="${icono} mr-2"></i>${formatearCategoria(cat)}
            </button>
        `;
    }).join('');
}

function calcularItemsPorVista() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function renderizarNoticias(noticias) {
    const container = document.getElementById('noticias-container');
    if (!container) return;

    const lista = noticias && noticias.length ? noticias : noticiasActuales;
    if (!lista || lista.length === 0) {
        container.innerHTML = '<div class="w-full text-center py-10"><p class="text-gray-500 text-sm">No hay noticias en esta categoría</p></div>';
        return;
    }

    const itemsPorVista = Math.min(calcularItemsPorVista(), lista.length);
    if (carouselIndex < 0) carouselIndex = 0;
    if (carouselIndex >= lista.length) carouselIndex = 0;

    const visibles = [];
    for (let i = 0; i < itemsPorVista; i++) {
        const idx = (carouselIndex + i) % lista.length;
        visibles.push(lista[idx]);
    }

    container.innerHTML = visibles.map(noticia => `
        <article class="news-card bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden w-[260px] md:w-[300px] flex-shrink-0">
            <div class="flex items-start p-4 gap-3">
                <img src="assets/images/${noticia.imagen_autor}" 
                     alt="${noticia.autor}"
                     class="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-cct_cyan"
                     onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(noticia.autor)}&background=00A3E0&color=fff&size=60'">
                <div class="flex-1 min-w-0">
                    <h5 class="font-bold text-xs text-navy line-clamp-2">${noticia.autor}</h5>
                    <p class="text-[11px] text-gray-500 line-clamp-1">${noticia.rol}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <span class="inline-block px-2 py-0.5 bg-cct_cyan/10 text-cct_cyan text-[11px] rounded-full font-bold whitespace-nowrap">
                            ${noticia.tipo === 'linkedin' ? '<i class="fab fa-linkedin mr-1"></i>LinkedIn' : '<i class="fas fa-bullhorn mr-1"></i>Comunicado'}
                        </span>
                        <span class="text-[11px] text-gray-400 whitespace-nowrap">${formatearFecha(noticia.fecha)}</span>
                    </div>
                </div>
            </div>
            <div class="px-4 pb-4 border-t border-gray-100 mt-2">
                <h4 class="font-bold text-sm text-navy mb-2 line-clamp-2 leading-tight">${noticia.titulo}</h4>
                <p class="text-xs text-gray-600 mb-3 line-clamp-3 leading-relaxed">${noticia.extracto}</p>
                <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wide">${noticia.categoria}</span>
                    <a href="noticias.html?id=${noticia.id}" target="_blank" rel="noopener noreferrer"
                       class="text-[11px] font-bold text-cct_cyan hover:text-navy transition-colors flex items-center gap-1">
                        Leer más
                        <i class="fas fa-arrow-right text-[9px]"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

function formatearCategoria(cat) {
    if (cat === 'todas') return 'Todas';
    return cat.charAt(0).toUpperCase() + cat.slice(1);
}

function iconoCategoria(cat) {
    if (cat === 'estrategia') return 'fas fa-chess';
    if (cat === 'liderazgo') return 'fas fa-chart-line';
    if (cat === 'transformacion') return 'fas fa-sync-alt';
    return 'fas fa-newspaper';
}

function formatearFecha(fechaStr) {
    try {
        const opciones = { year: 'numeric', month: 'short', day: 'numeric' };
        const fecha = new Date(fechaStr);
        return fecha.toLocaleDateString('es-CL', opciones);
    } catch (error) {
        return fechaStr;
    }
}

function filtrarNoticias(categoria) {
    if (!todasLasNoticias || todasLasNoticias.length === 0) return;

    const botones = document.querySelectorAll('.filter-btn');
    botones.forEach(btn => {
        if (btn.dataset.categoria === categoria) {
            btn.className = 'filter-btn px-5 py-2 rounded-full font-bold text-xs transition-all duration-300 bg-cct_cyan text-white';
        } else {
            btn.className = 'filter-btn px-5 py-2 rounded-full font-bold text-xs transition-all duration-300 bg-white text-navy border-2 border-gray-200 hover:border-cct_cyan';
        }
    });

    const filtradas = categoria === 'todas' 
        ? todasLasNoticias 
        : todasLasNoticias.filter(n => n.categoria === categoria);

    noticiasActuales = filtradas;
    carouselIndex = 0;
    renderizarNoticias(filtradas);
}

function moverCarrusel(delta) {
    if (!noticiasActuales || noticiasActuales.length === 0) return;
    carouselIndex = (carouselIndex + delta + noticiasActuales.length) % noticiasActuales.length;
    renderizarNoticias(noticiasActuales);
}

function handleResize() {
    renderizarNoticias(noticiasActuales);
}

document.addEventListener('DOMContentLoaded', () => {
    cargarNoticias();
    const prev = document.getElementById('btn-prev-noticias');
    const next = document.getElementById('btn-next-noticias');
    prev?.addEventListener('click', () => moverCarrusel(-1));
    next?.addEventListener('click', () => moverCarrusel(1));
    window.addEventListener('resize', handleResize);
});
    </script>

