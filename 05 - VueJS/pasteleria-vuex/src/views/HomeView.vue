<template>
  <div class="ClienteView">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Header/>
   
    <MenuPasteles/>

    <FormularioPedido/>

    <Footer/>

  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import FormularioPedido from "../components/FormularioPedido.vue"
import MenuPasteles from "../components/MenuPasteles.vue"

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    FormularioPedido,
    MenuPasteles,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700');

  *{
    font-family: Poppins;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  header{
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color: #f781be;
    color: white;
    font-weight: 500;
  }

  header .Logo-Marca{
     display: flex;
     align-items: center;
     margin-left: 10px;
  }

  nav {
  padding: 30px;
}

  nav a {
    font-weight: bold;
    color:  white;
  }

  nav a.router-link-exact-active {
    color: #2c3e50;
  }

  footer{
    display: flex;
    justify-content:space-around;
    background-color:black;
    color: white;
    padding: 10px 10px 10px 10px;
  }

  footer p{
    font-size: .8rem;
  }

  footer ul{
    list-style-type: none;
  }

  footer a{
    text-decoration: none; 
    color: white;
    font-size: .8rem;
  }

  .ClienteView{
    display: flex;
    flex-direction: column;
  }

  .menuPasteles{
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 50rem;
  }

  h2{
    padding-top: 15px;
  }

  .menuPasteles .pasteles{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .menuPasteles .pasteles .pastel{
    border-color: #ffe9f4;
    border-style: solid;
    width: 15rem;
    height: 11rem;
    border-radius: .4rem;
    margin: 10px 15px 10px 0;
    padding-top: 15px;
  }

  .menuPasteles .pasteles .pastel input{
    width: 50px;
    text-align: center;
  }

  .menuPasteles .pasteles .pastel:hover{
    border-color: #f781be;
    border-style: solid;
  }

  .menuPasteles .pasteles .botonAdd button{
    background-color: #da68a3;
    color: white;
    cursor: pointer;
    width: 55px;
    border-radius: .3rem;
    border-color: #da68a3;
    margin-top: 07px;
  }

  .menuPasteles .adornos{
    padding-bottom: 15px;
  }

  .formularioPedido{
    padding-bottom: 10px;    
  }

  .formularioPedido .datosCliente{
      display: flex;
      flex-direction: column;
      width: 350px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
  }

  .formularioPedido .datosCliente input{
    border-radius: .1rem;
  }

  .formularioPedido .datosCliente input:last-child{
    height: 3rem;
  }

  .sumatoriaFinal p{
    font-weight: 700;
    color: #2c3e50;
    text-decoration-line: underline;
    padding-top: 15px;
    padding-bottom: 15px;
  }


  .formularioPedido .botones{
    display: flex;
    justify-content:center;
    margin-top: 10px;
    margin-bottom: 10px;
    gap: 15px;
  }

  .formularioPedido .botones button{
    text-align: center;
    line-height: 120%;
    background-color: #da68a3;
    color: white;
    cursor: pointer;
    height: 40px;
    width: 95px;
    border-radius: .3rem;
    border-color: #da68a3;
  }
  
  

/* Responsive Design */
@media screen and (max-width:700px){
  .menuPasteles{
    width: 20rem;
  }
}


</style>