<template>
    <div class="inventarios">

        <h2>Inventario disponible</h2>
        
        <div class="disponible">
            <!-- Sabores -->
            <dt>Sabores disponibles:</dt>
            <dd>Vainilla = {{$store.getters.getVainilla}} unidades</dd>
            <dd>Fresa = {{$store.getters.getFresa}} unidades</dd>
            <dd>Chocolate = {{$store.getters.getChocolate}} unidades</dd>
            <dd>Mango = {{$store.getters.getMango}} unidades</dd>
            <dd>Red velvet = {{$store.getters.getRedVelvet}} unidades</dd>

        </div>
           
    </div>
</template>

<script>
export default { name: 'Inventarios',}
</script>