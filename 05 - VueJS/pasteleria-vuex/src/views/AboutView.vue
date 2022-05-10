<template>
  <div class="PasteleroView">

    <Header/>
    <div class="contenido">
    <TablaPedidos/> 
    <Inventarios/> 
    </div> 
    
    <Footer/> 

  </div>
</template>


<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Inventarios from "../components/Inventarios.vue"
import TablaPedidos from "../components/TablaPedidos.vue"

export default {
  name: 'AboutView',
  components: {
    Header,
    Footer,
    Inventarios,
    TablaPedidos
  }
}
</script>

<style>

  .PasteleroView .contenido{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: space-between;
      padding-bottom: 10px;
  }

  .tablaPedidos{
    padding-bottom: 20px;
  }

  .tablaPedidos table{
    border-collapse: collapse;    
  }

  .tablaPedidos th{
    border: 3px solid purple; 
  }

  

</style>
