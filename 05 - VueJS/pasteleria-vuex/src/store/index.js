import { createStore } from 'vuex'

export default createStore({
  state: {

    orden:{
      nombre: "",
      telCliente: "",
      correoCliente: "",
      comentarios: "",
      pasteles: [],
      total: 0
    },

    precioPastel:{
      vainilla:150,
      fresa:150,
      chocolate:150,
      mango:170,
      redVelvet:180
    },

    inventarioPastel:{
      vainilla:0,
      fresa:0,
      chocolate:0,
      mango:0,
      redVelvet:0
    },

    pedidoPastel:{
      vainilla:0,
      fresa:0,
      chocolate:0,
      mango:0,
      redVelvet:0
    },

    existenciasPastel:{
      vainilla:15,
      fresa:11,
      chocolate:12,
      mango:14,
      redVelvet:18
    },

    historialOrdenes:[]
  },
  getters: {
    sumaTotal(state){
      return state.orden.total;
    },

    getVainilla(state){return state.existenciasPastel.vainilla},
    getFresa(state){return state.existenciasPastel.fresa},
    getChocolate(state){return state.existenciasPastel.chocolate},
    getMango(state){return state.existenciasPastel.mango},
    getRedVelvet(state){return state.existenciasPastel.redVelvet},

    getCart(state){
      let texto=""; 
      for (let item of Object.entries(state.pedidoPastel)){
        if(item[1]>0){
           texto += "Pastel de "+ item[0] + ": "+ item[1] +" unidades." 
        }
      }
      return texto
    },

    getPedidos(state){return state.historialOrdenes},

  },
  mutations: {
    addtoPedido(state, item){
      //Add Cantidad to pedidoPastel object (specific)
      state.pedidoPastel[item] = state.inventarioPastel[item];
    },

    sumaTotal(state){
      state.orden.total=0
      for (let itemQ of Object.entries(state.pedidoPastel)){
        for(let itemP of Object.entries(state.precioPastel)){
          if(itemQ[0]==itemP[0] && itemQ[1]>0){
            //Total += Price * Quantity (foreach)
            state.orden.total +=itemP[1]*itemQ[1]
          }
        }       
      }
    },

    finalizarPedido(state){
      state.orden.pasteles=[]  //Empty to avoid overlap of orders

      //For each in pedidoPastel, if Quantity >0, do:
      for (let itemQ of Object.entries(state.pedidoPastel)){
        if(itemQ[1]>0){
          // Add pasteles to Orden (foreach)
          state.orden.pasteles.push(itemQ);
        }
      }     
      //Add orden to HistorialOrdenes (currentOne)
      state.historialOrdenes.push({
        nombre: state.orden.nombre,
        telCliente: state.orden.telCliente,
        correoCliente: state.orden.correoCliente,
        comentarios: state.orden.comentarios,
        pasteles: state.orden.pasteles,
        total: state.orden.total
      })
      //mensaje de pedido terminado
      alert("pedido terminado")
    },

    updateExistencias(state){
      for (let itemQ of Object.entries(state.pedidoPastel)){
        for(let itemE of Object.entries(state.existenciasPastel)){
          if(itemQ[0]==itemE[0] && itemQ[1]>0){
            // Existencias - Cantidad 
            state.existenciasPastel[itemE[0]] -= itemQ[1]
          }
        }       
      }
    },

  },
  actions: {

  },
  modules: {
  }
})
