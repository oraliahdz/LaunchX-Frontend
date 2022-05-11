<template>
    <div class="tablaPedidos">
        <div class="tablas">
            <!-- Tabla de Pedidos -->
            <h2>Tabla de Pedidos</h2>
            <table>
                <!-- Encabezados -->
                <thead>
                    <tr> 
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Características</th>
                        <th>Sabores</th>
                    </tr>
                </thead>
                <!-- Filas -->
                <tbody>
                <tr>
                    <th data-label="Nombre">Pedro Perez</th>
                    <th data-label="Teléfono">811 123 1250 </th>
                    <th data-label="Email">pedro@gmail.com</th>
                    <th data-label="Características">"Feliz Cumpleaños"</th>
                    <th data-label="Sabores">Chocolate, 1</th>
                </tr>
                <tr>
                    <th data-label="Nombre">Maria Fernandez</th>
                    <th data-label="Teléfono">811 587 9876 </th>
                    <th data-label="Email">maria.fero@gmail.com</th>
                    <th data-label="Características">"Recuperate Pronto"</th>
                    <th data-label="Sabores">Mango, 1</th>
                </tr>
                
                <!-- For each item in PedidosHistorial, show attibute on table -->
                <tr v-for="item in $store.getters.getPedidos"  :key="item">  
                    <th data-label="Nombre">{{item.nombre}}</th> 
                    <th data-label="Teléfono">{{item.telCliente}}</th>   
                    <th data-label="Email">{{item.correoCliente}}</th>  
                    <th data-label="Características">{{item.comentarios}}</th>  
                    <th data-label="Sabores">{{item.pasteles}}</th>  
                </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>

<script>
export default { name: 'TablaPedidos',}
</script>