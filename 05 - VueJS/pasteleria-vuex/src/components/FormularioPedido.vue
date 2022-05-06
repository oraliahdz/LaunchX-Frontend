<template>

    <form class="formularioPedido" @submit.prevent="">

        <h2>Formulario de Pedido</h2>

        <div class="datosCliente">
            <label for="nombreCliente">Nombre:</label>
            <input type="text" name="nombreCliente" id="nombreCliente" v-model="$store.state.orden.nombre">
            
            <label for="telefonoCliente">Teléfono:</label>
            <input type="tel" name="telefonoCliente" id="telefonoCliente" maxlength="10" v-model="$store.state.orden.telCliente">
            
            <label for="emailCliente">Correo electrónico:</label>
            <input type="email" name="emailCliente" id="emailCliente" v-model="$store.state.orden.correoCliente">
            
            <label for="DescripcionPastel">Característias adicionales:</label>
            <input type="text" name="DescripcionPastel" id="DescripcionPastel" v-model="$store.state.orden.comentarios">
        </div>

        <div class="cart">
           <!-- {{$store.getters.getCart}}-->
        </div>

        <div class="sumatoriaFinal">
            <p>Total ${{$store.getters.sumaTotal}}</p> 
        </div>
        
        <!-- Botones Formulario -->
        <div class="botones">
            <button @click="$store.commit('sumaTotal');">Ver Total</button>
            <button type="submit" @click="$store.commit('sumaTotal');$store.commit('finalizarPedido');$store.commit('updateExistencias')">Finalizar Pedido</button>
        </div>
        
    </form>
</template>

<script>
export default { name: 'FormularioPedido',}
</script>