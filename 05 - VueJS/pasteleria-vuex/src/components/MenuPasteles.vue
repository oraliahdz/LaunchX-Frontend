<template>
    <div class="menuPasteles">

      <h1>Menu de Pasteles</h1>
      <hr>

      <!-- Sabores -->

      <h2>Sabores disponibles</h2>

      <div class="pasteles">
        <div class="pastel">
          <img alt="Pastel-Imagen"  src="../assets/bx-cake.svg">
          <p class="nombre">Vanilla</p>
          <p class="precio">$150</p>
          <label>Cantidad: </label>
          <input type="number" v-model="$store.state.inventarioPastel.vainilla">

          <div class="botonAdd">
              <button @click="$store.commit('addtoPedido','vainilla')">Añadir</button>
          </div>

        </div>

        <div class="pastel">
          <img alt="Pastel-Imagen" src="../assets/bx-cake.svg">
          <p class="nombre">Fresa</p>
          <p class="precio">$150</p>
          <label>Cantidad: </label>
          <input type="number" v-model="$store.state.inventarioPastel.fresa">

          <div class="botonAdd">
              <button @click="$store.commit('addtoPedido','fresa')">Añadir</button>
          </div>
        </div>

        <div class="pastel">
          <img alt="Pastel-Imagen" src="../assets/bx-cake.svg">
          <p class="nombre">Cholocale</p>
          <p class="precio">$150</p>
          <label>Cantidad: </label>
          <input type="number" v-model="$store.state.inventarioPastel.chocolate">

          <div class="botonAdd">
              <button @click="$store.commit('addtoPedido','chocolate')">Añadir</button>
          </div>
        </div>

        <div class="pastel">
          <img alt="Pastel-Imagen" src="../assets/bx-cake.svg">
          <p class="nombre">Mango</p>
          <p class="precio">$170</p>
          <label>Cantidad: </label>
          <input type="number" v-model="$store.state.inventarioPastel.mango">

          <div class="botonAdd">
              <button @click="$store.commit('addtoPedido','mango')">Añadir</button>
          </div>
        </div>

        <div class="pastel">
          <img alt="Pastel-Imagen" src="../assets/bx-cake.svg">
          <p class="nombre">Red Velvet</p>
          <p class="precio">$180</p>
          <label>Cantidad: </label>
          <input type="number" v-model="$store.state.inventarioPastel.redVelvet">

          <div class="botonAdd">
                                            <!-- method   , parámetro del método -->
              <button @click="$store.commit('addtoPedido','redVelvet')">Añadir</button>
          </div>
        </div>

      </div>

      <hr>
      
    </div>
</template>

<script>
export default { name: 'MenuPasteles',}
</script>