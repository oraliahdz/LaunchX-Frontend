<template>
    <header>      
       
        <div class="Logo-Marca">
            <a href="/" class="logo">
            <img src="../assets/Logo.svg" alt="Logo Luna Pasteles" width="100" height="100">
            </a>

            <div class="texto">
                <div>Luna Pasteles</div>
                <div>Pastelillos fuera de este mundo</div>
            </div>
           
        </div>
        

        <nav>
        <router-link to="/">Cliente</router-link> |
        <router-link to="/pastelero">Pastelero</router-link>
        </nav>
        <router-view/>

    </header>
</template>

<script>
export default { name: 'Header',}
</script>