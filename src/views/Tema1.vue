<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 CANVAS
    .row.mt-5
      .col-4.d-none.d-lg-flex
        figure
          img(src='@/assets/template/tema-1-10.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8.align-self-center
        p #[strong.text-primario El Modelo Canvas es un valioso aporte que hizo Alexander Osterwalde para poder analizar la empresa de una manera global y sencilla, teniendo 9 segmentos claves dentro de la organización.] El modelo permite ver la empresa de manera resumida, en sus planos por medio de un recurso gráfico. (Décaro Santiago, 2017)
        .cajon.color-acento-botones.p-4.mt-4
          p Alexander Osterwalde creó su modelo para poder observar las debilidades y fortalezas de una empresa, teniendo una perspectiva global y sencilla. Los 9 segmentos del modelo son: Segmento de clientes, propuesta de valor, canales de distribución, relación con el cliente, fuentes de ingreso, recursos clave, actividades clave, socios clave y estructura de costos. (Itaú, s. f.)
    .titulo-segundo.mt-5.color-primario#inicio
      #t_1_1.h2 1.1 Componentes del Modelo Canvas
    figure
      img(src='@/assets/template/tema-1-11.png', alt='Texto que describa la imagen').px-4
    .row.px-5
      .col-12.px-5.bg-gris-deg.px-5.py-3.rounded-15.mt-n4
        .h4 Como se definió previamente el modelo canvas tiene 9 componentes que a continuación se van a definir.  (Meza, s. f.)
    .row.mt-5
      .col-12
        .row.text-center
          a.col-2.py-5.offset-1.d-flex.h-inherit.flex-column.justify-content-center.border-azul.bg-azul-claro(href="#socios")
            p Socios clave
            figure.mt-3.image-azul
              img(src='@/assets/template/tema-1-1.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
            figure.mt-3.image-blanca
              img(src='@/assets/template/tema-1-1-b.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
          .col-2.d-inline-grid
            a.row.py-5.border-azul-top.bg-azul-claro(href="#actividades")
              p Actividades clave
              figure.mt-3.image-azul
                img(src='@/assets/template/tema-1-2.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
              figure.mt-3.image-blanca
                img(src='@/assets/template/tema-1-2-b.svg', alt='Texto que describa la imagen').w-25.margin-0-auto

            a.row.py-5.border-azul-y.bg-azul-claro(href="#recurso")
              p Recurso clave
              figure.mt-3.image-azul
                img(src='@/assets/template/tema-1-3.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
              figure.mt-3.image-blanca
                img(src='@/assets/template/tema-1-3-b.svg', alt='Texto que describa la imagen').w-25.margin-0-auto

          a.col-2.d-flex.h-inherit.flex-column.justify-content-center.border-azul.bg-azul-claro(href="#propuesta")
            p Propuesta de valor
            figure.mt-3.image-azul
              img(src='@/assets/template/tema-1-4.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
            figure.mt-3.image-blanca
                img(src='@/assets/template/tema-1-4-b.svg', alt='Texto que describa la imagen').w-25.margin-0-auto

          .col-2.d-inline-grid
            a.row.py-5.border-azul-top.bg-azul-claro(href="#relacion")
              p Relación con los clientes
              figure.mt-3.image-azul
                img(src='@/assets/template/tema-1-5.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
              figure.mt-3.image-blanca
                img(src='@/assets/template/tema-1-5-b.svg', alt='Texto que describa la imagen').w-25.margin-0-auto

            a.row.py-5.border-azul-y.bg-azul-claro(href="#canales")
              p Canales
              figure.mt-3.image-azul
                img(src='@/assets/template/tema-1-6.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
              figure.mt-3.image-blanca
                img(src='@/assets/template/tema-1-6-b.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
          a.col-2.d-flex.h-inherit.flex-column.justify-content-center.border-azul.bg-azul-claro(href="#segmentos")
            p Segmento clientes
            figure.mt-3
              img(src='@/assets/template/tema-1-7.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
            figure.mt-3.image-blanca
                img(src='@/assets/template/tema-1-7-b.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
          .col-10.d-flex.h-inherit.flex-column.justify-content-center.border-azul.offset-1.border-no-top
            .row
              a.col-6.py-5.border-azul-right.bg-azul-claro(href="#estructura")
                .row
                  .col-6.offset-3
                    p Estructura de costos
                    figure.mt-3.image-azul
                      img(src='@/assets/template/tema-1-8.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
                    figure.mt-3.image-blanca
                      img(src='@/assets/template/tema-1-8-b.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
              a.col-6.py-5.bg-azul-claro(href="#fuentes")
                .row
                  .col-6.offset-3
                    p Fuente de ingresos
                    figure.mt-3.image-azul
                      img(src='@/assets/template/tema-1-9.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
                    figure.mt-3.image-blanca
                      img(src='@/assets/template/tema-1-9-b.svg', alt='Texto que describa la imagen').w-25.margin-0-auto
    .row.mt-5#segmentos.mx-0.border-top-gris
      .col-5.col-lg-4.col-xl-3.bg-azul-oscuro.py-2.mt-2.align-self-center
        .h4.text-white Segmentos de clientes
      a.col-2.mt-4.offset-5.offset-lg-6.offset-xl-7(href="#inicio").px-3.px-lg-2.px-xl-3
        figure.px-lg-2.px-xl-1
          img(src='@/assets/template/arrow.svg').px-lg-4.px-xl-5
    .row.mt-3
      .col-12.col-lg-8.align-self-center
        p #[strong El primer componente es el segmento de clientes, que es uno de los más importantes porque permite definir hacia quién va nuestro bien o servicio.] Sin embargo, para entender mejor el concepto te invito a plantearte la siguiente situación: se te acaba de ocurrir una idea magnífica, creemos que es una idea que otorga valor, pero cuando la lanzamos al mercado nos damos cuenta de que a las personas no les interesa nuestro bien o servicio. Quizá son diferentes a nosotros, no lo ven interesante o no le encuentran sentido, o no es afín a sus necesidades. Por ello, #[strong.text-primario al plantear nuestra idea de negocio es importante segmentar nuestros clientes, identificar quién es nuestro público objetivo y porque podría ser interesante adquirir nuestro producto o servicio.]
        .row.mt-3
          .col-12.px-4.py-3.bg-azul-claro
            p.mb-0.px-4.fw-bold.border-green-left Así que si hablamos de segmentar, debemos empezar a dividir, para ello debemos estimar edad, género, utilidad, necesidad e interés, lo que además debe focalizar nuestro concepto de publicidad y los medios de difusión deben tener en cuenta ese público objetivo. (Meza, s. f.)
        .tarjeta.bg-azul-oscuro.p-3.mt-4.fondo-img-1
          .row.justify-content-around.align-items-center.px-4
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 #[em Switch] de ideas, ¿Qué es un segmento de clientes?
                  p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                .col-sm-auto
                  a.boton.bg-naranja(href="https://youtu.be/O74hVuoFn70" target="_blank")
                    span.text-sistema Ver video

      .col-4.d-none.d-lg-flex
        figure
          img(src='@/assets/template/tema-1-12.png', alt='Texto que describa la imagen')
    .row.mt-5#propuesta.mx-0.border-top-gris
      .col-4.col-lg-3.col-xl-2.bg-azul-oscuro.py-2.mt-2.align-self-center
        .h4.text-white Propuesta de valor
      a.col-2.mt-4.offset-6.offset-lg-7.offset-xl-8(href="#inicio").px-3.px-lg-2.px-xl-3
        figure.px-lg-2.px-xl-1
          img(src='@/assets/template/arrow.svg').px-lg-4.px-xl-5
    .row.mt-3
      .col-12.col-lg-10.offset-0.offset-lg-2.bg-azul-claro-no.px-4
        .row
          .col-12.col-lg-9.offset-lg-3.py-5.position-relative
            figure.d-none.d-lg-flex.position-absolute(style="top:20%;left:-55%;")
              img(src='@/assets/template/tema-1-13.png', alt='Texto que describa la imagen').w-50
            p Al hablar de propuesta de valor, #[strong debemos focalizarnos en que ofrecemos y que los clientes estarían dispuestos a pagar, pero además que hace nuestro producto o servicio diferente a los demás y que le da un valor agregado,] que en sí es que lo hace atractivo para los clientes, lo que no implica necesariamente que nadie lo haya pensado, sino el valor que aporta como diferenciador. Por ello, podrías reflexionar en ¿Qué hace novedosa tu idea?
            .tarjeta.bg-azul-oscuro.p-3.mt-4.fondo-img-1
              .row.justify-content-around.align-items-center.px-4
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      h3.mb-1 #[em Switch] de ideas, ¿Qué es una propuesta de valor?
                      p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                    .col-sm-auto
                      a.boton.bg-naranja(href="https://youtu.be/NItf1By4_Wo" target="_blank")
                        span.text-sistema Ver video
    .row.mt-5#canales.mx-0.border-top-gris
      .col-3.col-lg-2.col-xl-1.bg-azul-oscuro.py-2.mt-2.align-self-center
        .h4.text-white Canales
      a.col-2.mt-4.offset-7.offset-lg-8.offset-xl-9(href="#inicio").px-3.px-lg-2.px-xl-3
        figure.px-lg-2.px-xl-1
          img(src='@/assets/template/arrow.svg').px-lg-4.px-xl-5
    .row.mt-2
      .col-12.col-lg-8.align-self-center
        p Es momento de hablar de los canales de distribución. Seguramente lo primero que viene a nuestra mente al leer la palabra canales de distribución, sea la forma como les va a llegar a los clientes nuestro producto, y bueno, tienen razón, pero no sólo se refiere a ese tipo de distribución, sino también a la forma #[strong.text-primario como se enteran los clientes sobre la propuesta de valor tanto en el momento de vender como el proceso posterior a la venta, es decir, que en canales de distribución tenemos la forma de vender y entregar, la publicidad, el contacto con el cliente entre otras.]
        .row.mt-3
          .col-12.px-4.py-3.bg-azul-claro
            p.mb-0.px-4.fw-bold.border-green-left Los canales pueden ser directos, es decir, del emprendedor, directamente al cliente, o indirectos en los que hay intermediarios y a su vez pueden ser propios cuando el emprendedor tiene su tienda física o demás y de socios cuando se utilizan otros emprendimientos.
        .tarjeta.bg-azul-oscuro.p-3.mt-4.fondo-img-1
          .row.justify-content-around.align-items-center.px-4
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 #[em Switch] de ideas, ¿Qué son los canales?
                  p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                .col-sm-auto
                  a.boton.bg-naranja(href="https://youtu.be/OacpcZ9VU30" target="_blank")
                    span.text-sistema Ver video

      .col-4.d-none.d-lg-flex
        figure
          img(src='@/assets/template/tema-1-14.png', alt='Texto que describa la imagen')
    .row.mt-5#relacion.mx-0.border-top-gris
      .col-5.col-lg-4.col-xl-3.bg-azul-oscuro.py-2.mt-2.align-self-center
        .h4.text-white Relación con los clientes
      a.col-2.mt-4.offset-5.offset-lg-6.offset-xl-7(href="#inicio").px-3.px-lg-2.px-xl-3
        figure.px-lg-2.px-xl-1
          img(src='@/assets/template/arrow.svg').px-lg-4.px-xl-5
    .row.mt-3
      .col-12.col-lg-10.offset-0.offset-lg-2.bg-azul-claro-no.px-4
        .row
          .col-12.col-lg-9.offset-lg-3.py-5.position-relative
            figure.d-none.d-lg-flex.position-absolute(style="top:20%;left:-55%;")
              img(src='@/assets/template/tema-1-15.png', alt='Texto que describa la imagen').w-50
            p Al determinar la segmentación de nuestro público, #[strong es importante determinar la manera de atenderlos, es decir, si la atención va a ser cara a cara y por eso necesitamos tener una sucursal física, o si pueden ser atendidos por un chatbot] o se les puede enviar información periódica, otros prefieren ver la información en redes sociales y comentar en los post, lo importante es empatizar con ellos y siempre transmitir la visión de la propuesta de valor.
            .tarjeta.bg-azul-oscuro.p-3.mt-4.fondo-img-1
              .row.justify-content-around.align-items-center.px-4
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      h3.mb-1 #[em Switch] de ideas, ¿Qué es la relación con los clientes?
                      p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                    .col-sm-auto
                      a.boton.bg-naranja(href="https://youtu.be/2V7K5_F6z5k" target="_blank")
                        span.text-sistema Ver video
    .row.mt-5#fuentes.mx-0.border-top-gris
      .col-4.col-lg-3.col-xl-2.bg-azul-oscuro.py-2.mt-2.align-self-center
        .h4.text-white Fuentes de ingreso
      a.col-2.mt-4.offset-8.offset-lg-7.offset-xl-8(href="#inicio").px-3.px-lg-2.px-xl-3
        figure.px-lg-2.px-xl-1
          img(src='@/assets/template/arrow.svg').px-lg-4.px-xl-5
    .row.mt-2
      .col-12.col-lg-8.align-self-center
        p #[strong.text-primario Todo emprendimiento y negocio requiere tener claro cómo va a ganar, cuáles son sus fuentes de ingreso, algo vital para que el emprendimiento siga adelante.] Estas fuentes de ingreso vienen a ser los resultados de todos los otros componentes, especialmente de la propuesta de valor, porque es lo que se le ofrece a los clientes. También es importante resaltar que los ingresos pueden venir de convocatorias públicas o privadas, programas que lanzan diversas entidades y pueden beneficiar al emprendedor.
        .tarjeta.bg-azul-oscuro.p-3.mt-4.fondo-img-1
          .row.justify-content-around.align-items-center.px-4
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 #[em Switch] de ideas, ¿Qué es una fuente de ingresos?
                  p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                .col-sm-auto
                  a.boton.bg-naranja(href="https://youtu.be/qyZSdQYulVQ" target="_blank")
                    span.text-sistema Ver video
      .col-4.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-16.png', alt='Texto que describa la imagen')
    .row.mt-5#recurso.mx-0.border-top-gris
      .col-4.col-lg-3.col-xl-2.bg-azul-oscuro.py-2.mt-2.align-self-center
        .h4.text-white Recurso clave
      a.col-2.mt-4.offset-6.offset-lg-7.offset-xl-8(href="#inicio").px-3.px-lg-2.px-xl-3
        figure.px-lg-2.px-xl-1
          img(src='@/assets/template/arrow.svg').px-lg-4.px-xl-5
    .row.mt-3
      .col-12.col-lg-10.offset-0.offset-lg-2.bg-azul-claro-no.px-4
        .row
          .col-12.col-lg-9.offset-lg-3.py-5.position-relative
            figure.d-none.d-lg-flex.position-absolute(style="top:20%;left:-55%;")
              img(src='@/assets/template/tema-1-17.png', alt='Texto que describa la imagen').w-50
            p Llega el momento de tener en cuenta los recursos clave y para entenderlo mejor pensemos por un momento en nuestra propuesta de valor, ¿la tenemos en mente?, ahora pensemos en que necesitamos para que esto se haga realidad, que sería lo más importante para lograrlo, que sería lo “clave” allí, desde luego nos referimos a diversos aspectos como intelectuales, físicos, humanos entre otros, por ejemplo la maquinaria, el local, tal vez un punto de venta, una red social etc. También #[strong se debe tener en cuenta que no necesariamente deben ser recursos propios, pueden ser arrendados o pueden ser de los socios clave.]
            .tarjeta.bg-azul-oscuro.p-3.mt-4.fondo-img-1
              .row.justify-content-around.align-items-center.px-4
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      h3.mb-1 #[em Switch] de ideas, ¿Qué son los recursos clave?
                      p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                    .col-sm-auto
                      a.boton.bg-naranja(href="https://youtu.be/xsMqui2-kBg" target="_blank")
                        span.text-sistema Ver video
    .row.mt-5#actividades.mx-0.border-top-gris
      .col-4.col-lg-3.col-xl-2.bg-azul-oscuro.py-2.mt-2.align-self-center
        .h4.text-white Actividades clave
      a.col-2.mt-4.offset-8.offset-lg-7.offset-xl-8(href="#inicio").px-3.px-lg-2.px-xl-3
        figure.px-lg-2.px-xl-1
          img(src='@/assets/template/arrow.svg').px-lg-4.px-xl-5
    .row.mt-2
      .col-12.col-lg-8.align-self-center
        p Ahora vienen las actividades clave, estas actividades #[strong.text-primario son las que permiten que la propuesta de valor llegue al mercado, también crear la relación con los clientes y conseguir ingresos.] Ciertamente estas actividades integran los componentes del modelo canvas porque usan los recursos clave para crear la propuesta de valor y las relaciones con los socios clave y los clientes. Es vital que tengamos claras cuales son estas actividades para que la imagen que se transmita al cliente sea la indicada.
        .tarjeta.bg-azul-oscuro.p-3.mt-4.fondo-img-1
          .row.justify-content-around.align-items-center.px-4
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 #[em Switch] de ideas, ¿Qué son las actividades clave?
                  p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                .col-sm-auto
                  a.boton.bg-naranja(href="https://youtu.be/8-3wvJluCGg" target="_blank")
                    span.text-sistema Ver video
      .col-4.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-18.png', alt='Texto que describa la imagen')
    .row.mt-5#socios.mx-0.border-top-gris
      .col-4.col-lg-3.col-xl-2.bg-azul-oscuro.py-2.mt-2.align-self-center
        .h4.text-white Socios clave
      a.col-2.mt-4.offset-6.offset-lg-7.offset-xl-8(href="#inicio").px-3.px-lg-2.px-xl-3
        figure.px-lg-2.px-xl-1
          img(src='@/assets/template/arrow.svg').px-lg-4.px-xl-5
    .row.mt-3
      .col-12.col-lg-10.offset-0.offset-lg-2.bg-azul-claro-no.px-4
        .row
          .col-12.col-lg-9.offset-lg-3.py-5.position-relative
            figure.d-none.d-lg-flex.position-absolute(style="top:20%;left:-55%;")
              img(src='@/assets/template/tema-1-19.png', alt='Texto que describa la imagen').w-50
            p #[strong Crear comunidad ayuda a crecer, a aprender, a cohesionarse, por eso este componente del Modelo Canvas es importante y nos referimos a los socios clave.] #[strong.text-primario ¿Quiénes intervienen en un emprendimiento?], están por ejemplo los proveedores quienes son los que suministran materia prima, insumos o elementos que necesitamos para funcionar, también los inversores o también los aliados comerciales. Tampoco podemos olvidarnos de las entidades del gobierno que regulan ciertos aspectos del país, importaciones, licencias ambientales y demás. Hoy en día los emprendedores jóvenes saben que es importante crear comunidad y relacionarse con organizaciones, para realizar colaboraciones, eventos y demás actividades donde puedan beneficiarse mutuamente.
            .tarjeta.bg-azul-oscuro.p-3.mt-4.fondo-img-1
              .row.justify-content-around.align-items-center.px-4
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      h3.mb-1 #[em Switch] de ideas, ¿Qué es un socio clave?
                      p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                    .col-sm-auto
                      a.boton.bg-naranja(href="https://youtu.be/WR6cYoFy2ho" target="_blank")
                        span.text-sistema Ver video
    .row.mt-5#estructura.mx-0.border-top-gris
      .col-4.col-lg-3.col-xl-2.bg-azul-oscuro.py-2.mt-2.align-self-center
        .h4.text-white Estructura de costos
      a.col-2.mt-4.offset-8.offset-lg-7.offset-xl-8(href="#inicio").px-3.px-lg-2.px-xl-3
        figure.px-lg-2.px-xl-1
          img(src='@/assets/template/arrow.svg').px-lg-4.px-xl-5
    .row.mt-2
      .col-12.col-lg-8.align-self-center
        p #[strong.text-primario Para determinar la estructura de costos, puedes pensar en una lista con los costos más significativos que tiene nuestro modelo de negocio.] Posterior a esto podemos determinar el precio que deben pagar nuestros clientes para que la empresa pueda seguir adelante y generando ganancias, que desde luego cuando se empieza no son muchas, pero con el paso del tiempo se espera que genere un ingreso que se considere como ganancia.
        .tarjeta.bg-azul-oscuro.p-3.mt-4.fondo-img-1
          .row.justify-content-around.align-items-center.px-4
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 #[em Switch] de ideas, ¿Qué son las estructuras de costos?
                  p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                .col-sm-auto
                  a.boton.bg-naranja(href="https://youtu.be/z1WfjXnOvHY" target="_blank")
                    span.text-sistema Ver video
      .col-4.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-20.png', alt='Texto que describa la imagen')
    separador.mt-3

    .titulo-segundo.mt-5.color-primario#inicio
      #t_1_2.h2.mb-5 1.2 Modernización del canvas de mi negocio
    .row.mt-5
      .col-6.col-lg-5.col-xl-4.offset-0.offset-lg-2.bg-azul-oscuro.py-2.mt-2.align-self-center.text-lg-end
        .h4.text-white Integración tecnológica modelo canvas
    .row.p-3.bg-gris-deg.rounded-15.mb-5
      .col-lg-4.d-none.d-xl-flex.position-relative
        figure.position-absolute(style="bottom:-60%;left:-13%")
          img(src='@/assets/template/tema-1-21.png', alt='Texto que describa la imagen').w-75
      .col-12.col-xl-8
        p La tecnología se integra a todas las áreas siendo el emprendimiento una de ellas, simplemente lo que corresponde hacer es analizar qué procesos pueden funcionar con herramientas tecnológicas.
        p.mt-3 Así que ¿Podemos pensar en la tecnología en sí como un modelo de negocios?
    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-botones--borde.p-4.row(titulo="Idea de negocios")
        .col-12.col-lg-8
          .h3 Idea de negocios
          p.mt-3 Piensa en un negocio de pizzas, Debes ofrecer una buena pizza, seguramente los clientes pueden vivir en la ciudad o en la zona, como propuesta de valor podrías ofrecer pizzas con un gran aporte al valor nutricional y saludables, que represente una diferenciación en el mercado en tanto a calidad, rapidez en la atención, calidad de los ingredientes, aporte nutricional, excelente sabor, además de sumergir a los comensales en una experiencia gastronómica favorable, lo que hace esta pizzería un negocio diferenciador en el mercado local.
        .col-4.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-1-22.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Análisis canales").row
        .col-12.col-lg-8
          .h3 Análisis canales
          p.mt-3 Ahora debes analizar los canales de distribución, podrías encontrar un gran aporte en la tecnología, es probable que la venta sea directa desde el restaurante, pero que también cuente con una aplicación móvil para hacer el pedido. Si piensas en la publicidad podrías hacer una búsqueda en redes sociales donde haya etiquetas o grupos de la zona y la ciudad, pero además las redes sociales propias de tu emprendimiento donde podrías subir fotografías del lugar, de la comida, #[em reels] a Instagram, #[em shorts] en YouTube, publicaciones en Facebook, videos dinámicos de la comida en TikTok y demás redes sociales. (García Zamudio, 2017)
        .col-4.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-1-23.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Relación con los clientes").row
        .col-12.col-lg-8
          .h3 Relación con los clientes
          p.mt-3 Al hablar de la relación con los clientes podrías establecer una estrategia de fidelización usando gamificación y creando niveles de clientes dependiendo del consumo periódico con acumulación de puntos por medio de alguna plataforma digital o de una aplicación móvil, otorgándoles algunos beneficios como reservas especiales, canje por algún producto o detalles en fechas especiales.
        .col-4.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-1-24.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Imagen del modelo canvas").row
        .col-12.col-lg-8
          .h3 Imagen del modelo canvas
          p.mt-3 De allí en adelante los otros componentes del modelo canvas van respondiendo a esta necesidad y van incluyendo por ejemplo una analítica de datos del comportamiento del cliente para determinar los productos más pedidos, las edades y segmentar mejor el mercado.
        .col-4.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-1-25.png', alt='Texto que describa la imagen')




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tarjeta.color-acento-botones--borde
  border-color: #E8E8E8
.tabs-a__tab
  background-color: #E8E8E8
.bg-azul-claro-no
  background-color: #E8EEF3 !important
.bg-azul-claro:hover
  background-color: #12263F !important
  p
    color: $white !important
  .image-blanca
    display: block
  .image-azul
    display: none
.image-blanca
  display: none
.fondo-img-1
  background-image: url(../assets/template/tema-bg-1.png)
  background-repeat: no-repeat
  background-size: cover
</style>
