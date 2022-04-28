<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mt-5.p-3.bg-gris-deg.rounded-15
      .col-lg-4.d-none.d-xl-flex.position-relative
        figure.position-absolute(style="bottom:-15%")
          img(src='@/assets/template/tema-0-1.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p #[strong.text-primario Hemos llegado a un momento muy importante,] después de haber apropiado la importancia del emprendimiento juvenil y el emprendedor joven, además, de explorar las características del emprendedor, y luego de haber identificado la importancia de las herramientas digitales para fortalecer una posible idea, es momento ahora de definir la base de nuestra idea de negocio. Sin duda alguna muchas personas tienen cualidades emprendedoras e ideas maravillosas, pero muchos se quedan en una idea porque no aterrizan eso tan valioso que tienen, por ese motivo te invitamos a vivenciar estas actividades para que desarrolles esa capacidad de definir en un modelo canvas, además de los aspectos más relevantes para que presentes tu propuesta con #[strong la técnica del #[em Elevator Pitch] en el que pueda exponer con propiedad tu idea de negocio.]


    
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
