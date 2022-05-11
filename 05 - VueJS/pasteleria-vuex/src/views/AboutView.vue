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
    margin: 0 auto;  
    table-layout: fixed; 
  }

  thead{
    background-color: #eabaf6;
  }

  .tablaPedidos th{
    border: 2px solid purple; 
    
  }


  /* Responsive Design */
  @media screen and (max-width:800px){
    table, thead, tbody, th, td, tr { 
		display: block; 
	  }

    /* Esconder encabezados  thead*/
    thead{
      position: absolute;
		  top: -9999px;
		  left: -9999px;
    }

    

    th {
      position: relative;
      width: 350px;
      padding-left: 50%;
      text-align: left; 
      font-weight: 400;
      
    }

    /* Datalbels como encabezados */
    th:before{
      content: attr(data-label);
      display: inline-block;
      width: 80%;
      text-align: left;
      margin-left: -102%;
      white-space: nowrap;
      line-height: 1.5;
      background-color: #eabaf6;
      padding-left: 05px;
      margin-right: 05px;
    }

    /* gap entre pedidos */
    tr + tr{
        margin-top: 1.5em;
    }


  }

  

</style>
