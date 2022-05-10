<template>
    <div class="tablaPedidos">
        <div class="tablas">
            <!-- Tabla de Pedidos -->
            <table><br>
                <tr> <!-- Encabezados -->
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                    <th>Características</th>
                    <th>Sabores</th>
                </tr>
                <tr>
                    <th>Pedro Perez</th>
                    <th>811 123 1250 </th>
                    <th>pedro@gmail.com</th>
                    <th>"Feliz Cumpleaños"</th>
                    <th>Chocolate, 1</th>
                </tr>
                <tr>
                    <th>Maria Fernandez</th>
                    <th>811 587 9876 </th>
                    <th>maria.fero@gmail.com</th>
                    <th>"Recuperate Pronto"</th>
                    <th>Mango, 1</th>
                </tr>
                <!-- For each item in PedidosHistorial, show attibute on table -->
                <tr v-for="item in $store.getters.getPedidos"  :key="item">  
                    <th>{{item.nombre}}</th> 
                    <th>{{item.telCliente}}</th>   
                    <th>{{item.correoCliente}}</th>  
                    <th>{{item.comentarios}}</th>  
                    <th>{{item.pasteles}}</th>  
                </tr>
            </table>

        </div>
    </div>
</template>

<script>
export default { name: 'TablaPedidos',}
</script>