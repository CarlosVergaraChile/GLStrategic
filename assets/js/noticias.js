// noticias.js - Sistema de carrusel y filtrado de noticias

// Datos de respaldo en caso de falla de carga desde assets/data/noticias.json
const NOTICIAS_BACKUP = {
    "noticias": [
        {
            "id": 1,
            "titulo": "Desarrollamos el Plan Maestro de Zofri al 2060 y Ecoparques",
            "extracto": "Desarrollamos el Plan Maestro de Zofri al 2060, incorporando el diseño de Ecoparques Industriales (EPI) mediante el uso de herramientas de prospectiva y mapas estratégicos.",
            "contenido_completo": "<p>Desarrollamos el Plan Maestro de Zofri al 2060, incorporando el diseño de Ecoparques Industriales (EPI) mediante el uso de herramientas de prospectiva y mapas estratégicos. Esta planificación permitió identificar oportunidades país en la creciente industria global de ecoparques industriales y en el corredor bioceánico por el paso de Jama, un hito histórico que se encuentra ad portas de concretarse. Los EPI son espacios previamente habilitados, con permisos esenciales ya obtenidos (como agua y energía), que permiten a los inversionistas instalar proyectos en plazos mucho más breves, evitando esperar hasta una década en procesos de tramitación individual de permisos.</p>",
            "categoria": "estrategia",
            "fecha": "2025-11-20",
            "autor": "Equipo GL Strategic",
            "rol": "Consultoría Estratégica",
            "imagen_autor": "default-avatar.jpg",
            "imagen": "zofri-ecoparques.png",
            "tipo": "comunicado",
            "url": "#"
        },
        {
            "id": 2,
            "titulo": "CAF, nueva institucionalidad para el desarrollo regional",
            "extracto": "Desarrollamos el Centro de Anticipación y Creación de Futuro (CAF), que permitió identificar cerca de 100 proyectos de desarrollo y dimensionar el gran impacto del Power Shoring.",
            "contenido_completo": "<p>Desarrollamos el Centro de Anticipación y Creación de Futuro (CAF), que permitió identificar cerca de 100 proyectos de desarrollo y dimensionar el gran impacto del Power Shoring.</p><p>Power Shoring consiste en atraer industrias intensivas en energía (producción de combustibles verdes o carbono neutrales, data centers, economía digital, blockchain mining, minería no metálica, recuperación de metales, producción de nitrato de amonio, desalación de agua, nuevas agroindustrias, acuicultura, industrias alimenticia y metalmecánica, entre muchas otras). A esto se suma la exportación de H2V (hidrógeno verde, producido sin contaminar) y sus derivados.</p><p>La estrategia es atraer inversión en estas industrias para que operen donde se genera la energía verde más barata del mundo, evitando así el alto costo de almacenarla y/o trasladarla a grandes distancias.</p><p>Chile sería así un País Plataforma para inversionistas de todos los continentes, generando inversión, empleo y encadenamientos productivos muy superiores a los que se lograrían solo exportando la energía.</p><p>El CAF apoya a los Gobiernos Regionales (GORE), municipalidades y otros actores clave, y contribuye a superar sus debilidades para definir y articular planes y proyectos de desarrollo local, mediante el aporte de redes de expertos en estos nuevos rubros y la atracción de inversionistas que hoy no existen a nivel local.</p>",
            "categoria": "transformacion",
            "fecha": "2025-10-15",
            "autor": "Equipo GL Strategic",
            "rol": "Consultoría Estratégica",
            "imagen_autor": "default-avatar.jpg",
            "imagen": "caf-desarrollo-regional.png",
            "tipo": "comunicado",
            "url": "#"
        },
        {
            "id": 3,
            "titulo": "Publicación de libro Estrategias de transformación digital",
            "extracto": "L'Huillier, Muñoz y Vega (Penguin Random House) se anticipan a la necesidad de integrar la estrategia con la transformación digital, entregando una metodología innovadora para este propósito.",
            "contenido_completo": "<p>L'Huillier, Muñoz y Vega (Penguin Random House) se anticipan a la necesidad de integrar la estrategia con la transformación digital, entregando una metodología innovadora para este propósito, considerando los cambios en la propuesta de valor y el modelo de negocios que genera la TD.</p><p>Este aporte ha sido de gran importancia, porque la estrategia es la primera prioridad y la Inteligencia Artificial y Transformación Digital la segunda en las agendas de los directorios, y deben diseñarse de manera conjunta (MIT, Harvard) (La Tercera, 13/12/25, encuesta LVM).</p>",
            "categoria": "liderazgo",
            "fecha": "2025-12-13",
            "autor": "Equipo GL Strategic",
            "rol": "Consultoría Estratégica",
            "imagen_autor": "default-avatar.jpg",
            "imagen": "libro-transformacion-digital.png",
            "tipo": "comunicado",
            "url": "#"
        },
        {
            "id": 4,
            "titulo": "Planes de desarrollo de comunidades para la minería",
            "extracto": "Nuestros socios G. L'Huillier, G. Muñoz y R. Sotil diseñan planes de desarrollo comunidades vinculadas a la industria minera en Andacollo, Tarapacá y Región Metropolitana.",
            "contenido_completo": "<p>Nuestros socios G. L'Huillier, G. Muñoz y R. Sotil diseñan planes de desarrollo comunidades vinculadas a la industria minera en Andacollo, Tarapacá y Región Metropolitana.</p>",
            "categoria": "estrategia",
            "fecha": "2025-09-10",
            "autor": "Equipo GL Strategic",
            "rol": "Consultoría Estratégica",
            "imagen_autor": "default-avatar.jpg",
            "imagen": "mina.png",
            "tipo": "comunicado",
            "url": "#"
        },
        {
            "id": 5,
            "titulo": "Desarrollo de solución para enfrentar en forma integrada la enorme cantidad de exigencias a las empresas",
            "extracto": "La Metodología de Diagnóstico y Transformación Anticipativa Manual CAM+/Pré-Futur es la primera solución que integra 14 capas organizacionales y 10 ámbitos normativos y de buenas prácticas.",
            "contenido_completo": "<p>La Metodología de Diagnóstico y Transformación Anticipativa Manual CAM+/Pré-Futur es la primera solución que integra 14 capas organizacionales y 10 ámbitos normativos y de buenas prácticas, con el fin de definir brechas y un plan de transformación anticipativa, a la medida y sistémico.</p>",
            "categoria": "transformacion",
            "fecha": "2025-08-05",
            "autor": "Equipo GL Strategic",
            "rol": "Consultoría Estratégica",
            "imagen_autor": "default-avatar.jpg",
            "imagen": "metodologia-cam.png",
            "tipo": "comunicado",
            "url": "#"
        },
        {
            "id": 6,
            "titulo": "Plan estratégico para tener ingeniería de clase mundial el año 2030",
            "extracto": "Nuestra firma asesoró a la Universidad de Concepción en el programa de Corfo \"Nueva Ingeniería para el 2030\".",
            "contenido_completo": "<p>Nuestra firma asesoró a la Universidad de Concepción en el programa de Corfo \"Nueva Ingeniería para el 2030\".</p><p>Este proyecto tiene como objetivo apoyar a las universidades chilenas que imparten carreras de Ingeniería Civil en el proceso de generación de planes estratégicos u hojas de ruta, destinados a transformar sus Escuelas de Ingeniería para llegar a ser de clase mundial, con especial foco en la tercera misión (vinculación con la sociedad) y en los ámbitos de investigación aplicada, desarrollo y transferencia de tecnología, innovación y emprendimiento con base en I+D+i.</p>",
            "categoria": "estrategia",
            "fecha": "2025-07-10",
            "autor": "Equipo GL Strategic",
            "rol": "Consultoría Estratégica",
            "imagen_autor": "default-avatar.jpg",
            "imagen": "udec-ingenieria.png",
            "tipo": "comunicado",
            "url": "#"
        },
        {
            "id": 7,
            "titulo": "Proyectos de nuestra firma premiados a nivel mundial",
            "extracto": "Chilectra, una de las cuatro empresas chilenas premiadas con el Palladium Balanced Scorecard Hall of Fame for Executing Strategy.",
            "contenido_completo": "<p>Chilectra, una de las cuatro empresas chilenas premiadas con el Palladium Balanced Scorecard Hall of Fame for Executing Strategy. Members of the Palladium Balanced Scorecard Hall of Fame for Executing Strategy exemplify best-practice Balanced Scorecard (BSC).</p>",
            "categoria": "liderazgo",
            "fecha": "2025-06-20",
            "autor": "Equipo GL Strategic",
            "rol": "Consultoría Estratégica",
            "imagen_autor": "default-avatar.jpg",
            "imagen": "chilectra-premio.png",
            "tipo": "comunicado",
            "url": "#"
        },
        {
            "id": 8,
            "titulo": "Exitoso MII de UAI dirigido por nuestro Socio Principal",
            "extracto": "Gastón L'Huillier, nuestro Socio Principal y Director Académico de Magister en Ingeniería Industrial de la Universidad Adolfo Ibañez, dirige programa para formar los ejecutivos que necesita Chile en esta nueva etapa.",
            "contenido_completo": "<p>Gastón L'Huillier, nuestro Socio Principal y Director Académico de Magister en Ingeniería Industrial de la Universidad Adolfo Ibañez, dirige programa para formar los ejecutivos que necesita Chile en esta nueva etapa, basándose en conclusiones del Proyecto País del Colegio de Ingenieros.</p><p>El programa, diseñado con participación de miembros de nuestro equipo profesional incluyendo a Rafael Sotíl, Mario Boada, Guillermo Muñoz y Juan Carlos Bacovich, tiene record de matrículas de estudiantes de gran nivel profesional y experiencia.</p><p>Ver más información en <a href=\"http://www.canal-i.cl/red2030/category/ingenieria_2030\" target=\"_blank\">www.canal-i.cl/red2030/category/ingenieria_2030</a> y en <a href=\"https://www.uai.cl/postgrados/magisteres/magister-en-ingenieria-industrial\" target=\"_blank\">www.uai.cl</a></p>",
            "categoria": "liderazgo",
            "fecha": "2025-06-01",
            "autor": "Equipo GL Strategic",
            "rol": "Consultoría Estratégica",
            "imagen_autor": "default-avatar.jpg",
            "imagen": "mii-uai.png",
            "tipo": "comunicado",
            "url": "http://www.groupeloyal.cl/2014/03/exitoso-mii-de-uai-dirigido-por-nuestro.html"
        }
    ]
};

let todasLasNoticias = [];
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
        console.log('✅ Noticias cargadas desde JSON:', noticias.length);
    } catch (error) {
        console.warn('⚠️ Fallo carga desde JSON, usando respaldo local:', error.message);
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
    if (!contenedor) return;
    
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
    
    console.log('✅ HTML actualizado con', visibles.length, 'noticias visibles');
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
