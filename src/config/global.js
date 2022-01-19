export default {
  global: {
    componenteFormativo: 'Define tu estrategia digital',
    descripcionCurso:
      'Apreciado aprendiz, ha llegado el momento de aterrizar una idea y poder integrar con tecnología, por ello en esta unida de realizar un modelo canvas básico con integración de tecnología y presentarlo con técnicas para un pitch efectivo de tu idea de negocio.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Canvas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Componentes del canvas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modernización del canvas de mi negocio',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Presentación de una propuesta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aspectos clave de la oratoria',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Oratoria digital',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnica de elevator pitch',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Décaro Santiago, L. A. (2017). LOS MODELOS DE NEGOCIOS Y LAS TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIÓN. TLATEMOANI, 26.',
      link: 'https://www.eumed.net/rev/tlatemoani/26/index.htm',
    },
    {
      referencia:
        'García Zamudio, J. I. (2017). PLAN DE NEGOCIO PARA LA CREACIÓN DE UN RESTAURANTE DE HAMBURGUESAS SALUDABLES EN LA CIUDAD DE BOGOTÁ D.C. Core.',
      link:
        ' https://d1wqtxts1xzle7.cloudfront.net/45818805/LECTURA_REFORZAMIENTO_MODULO_2-with-cover-page-v2.pdf?Expires=1630422366&Signature=cedyZuqCXooS0OpPH~-nMProHsww~agoR4BVoNjzUVO1Djpz~dhQRU8QYYPYCwMLdsOHCCvhGlFyc0YZk6Ip4IWsUiSDT2f2vy6LBEfvPxpToPNl7OSz7NM671ttXx9LmHHAcbJXImHbYdOu31SlRs8DzaiFiamRxmbLcd3UmuFhhXBsIU6eEwRZ8AqMRNF90lnxNZpm2ukcH-GdxLTiKXA9lvg9XNWRXqHnNjCyJiHcGmbykDlKn7lApD385K3qraqUDooaW0WP6tuyWpno-FAz6ZHw~fJtdS9rEZsFTCr5ExDdCGtboNWoLIPgjokc28TkU0jHA-PHayzbN01T-g__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA',
    },
    {
      referencia:
        'Itaú. (s. f.). Programa de asesoría de negocios. Modulo III: Plan de negocios. Banco Itaú. Recuperado 30 de agosto de 2021',
      link:
        'https://s2.q4cdn.com/476556808/files/doc_downloads/Folleto-3-(2).pdf',
    },
    {
      referencia:
        'Meza, A. (s. f.). LECTURA REFORZAMIENTO MODULO 2. Inadem. Recuperado 30 de agosto de 2021',
      link:
        'https://d1wqtxts1xzle7.cloudfront.net/45818805/LECTURA_REFORZAMIENTO_MODULO_2-with-cover-page-v2.pdf?Expires=1630380259&Signature=NuzqXC4txzlDpU3SKGLjmGvQpeV1X0H05xTVoI-LPR0BpLIdzYMOYZNc7-wBF0WQIJbKzXCENSSUs4bwZjBIJZqlDLI-pxg7iofg-6mgESUE8IVdtqrCp9w~pyuKMZA2d~pkuLvf5rrwFT3NsDkE49b0ar4SaWRurkwy7yBToEYbNNjTYWuXzjt6pUMm2ksscxdIsk5QrvEFeDbhoMt9jU3amIfcbKCFHxeyaLhQccDYCmR7nT7DjFqGAfNXqdUsh-BOkrvVW2oBlCVHC4obJE01IzpvJOtXjW~b4yinYQfPUeBVbCYiqtzWICzZJ3g8NOTsx-L8EWFEpmBXDHbO~w__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA',
    },
    {
      referencia:
        'TEDx Talk. (2018, 15 marzo). Persuade con tu voz. Estrategias para sonar creíble. | Emma Rodero | TEDxMalagueta [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=YlI-e4QJWG0&t=612s',
    },
    {
      referencia:
        'TENA FERNÁNDEZ, R. A. M. Ó. N. (2016). ELEVATOR PITCH: ¡COMUNICA Y DEFIENDE TU PROYECTO EN 60 SEGUNDOS! Didáctica, Innovación y Multimedia, 34.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5693465',
    },
    {
      referencia:
        'Villafuerte Coello, I. C. (2012). Oratoria (1.a ed.). RED TERCER MILENIO S.C.',
      link:
        'http://www.aliat.org.mx/BibliotecasDigitales/comunicacion/Oratoria.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Gamificación',
      significado:
        'Uso de elementos, mecánicas y dinámicas de los juegos en entornos no lúdicos',
    },
    {
      termino: 'Modelo canvas',
      significado:
        'Representación gráfica en un lienzo sobre los aspectos básicos de un emprendimiento',
    },
    {
      termino: 'Elevator pitch',
      significado: 'Técnica para presentar un discurso corto y efectivo',
    },
    {
      termino: 'Capcut',
      significado: 'Aplicación móvil para editar videos son multipista',
    },
  ],
  complementario: [
    {
      texto: '',
      tipo: '',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo SENA',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico SENA',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mónica Bibiana Gallego Madrid',
        cargo: 'Diseñador Instruccional Fundación CA',
        centro: 'Fundación CA',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo SENA',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhoana Hincapie Herrera',
        cargo: 'Diseño y desarrollo Fundación CA',
        centro: 'Fundación CA',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
