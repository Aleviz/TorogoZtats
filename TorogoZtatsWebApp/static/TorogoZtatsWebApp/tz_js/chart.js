window.addEventListener("load", async () => {

    //JSON ID PRODUCTO
    var dataIDP1;
    var listIDP =[];

    /*==========================
        JSON - CANASTA BASICA
      ==========================*/
 
    const responseIDP = await fetch("./canasta");
    dataIDP = await responseIDP.json();
    if(dataIDP.message == "Success"){
      dataIDP1 = dataIDP;
      dataIDP1.canasta.forEach(canasta => {
        console.log(canasta);
        listIDP.push(canasta);
      });
      console.log(listIDP);
    }

     /*==========================
           JSON - PRODUCTOS
      ==========================*/ 
    
    var dataNP1;
    var listNP =[];
    const responseNP = await fetch("./productos");
    dataNP = await responseNP.json();
    if(dataNP.message == "Success"){
        dataNP1 = dataNP;
        dataNP1.productos.forEach(producto =>{
          console.log(producto);
          listNP.push(producto);
        })
        console.log(listNP[1].nombre_producto);
       }


/*Posible funcionamiento a futuro

listPrecio = [];
listProducto = [];
for(var i=0; i<listIDP.length;i++){
  for(var j=0; j<listNP.length;j++){
    if(listIDP[i].producto_id == listNP[j].id){
    listPrecio.push(listIDP[i].precio);
    listProducto.push(listNP[j].nombre_producto);
    console.log("id producto en cb = "+listIDP[i].producto_id + " -  id producto en p = "+listNP[j].id);
    console.log("i = "+i);
    console.log("j== "+j);
    }else{
 
    }
  }
}

console.log(listProducto);
*/


listPrecio =[];
listYear =[];
var nameProducto;
for(var i=0; i<listIDP.length;i++){
  listPrecio.push(listIDP[i].precio);
  listYear.push(listIDP[i].agno);
  for(var j=0; j<listNP.length;j++){
      if(listIDP[i].producto_id == listNP[j].id){
        nameProducto = listNP[j].nombre_producto;
      }
  }
    
}



  /*============================================================================
     GRAFICA DE BARRA, DE LOS PRECIOS QUE HA TENIDO [x] PRODUCTO EN LOS 5 AÑOS
    ============================================================================*/
    var ctx = document.getElementById("myChartBar").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels:  listYear,
        datasets: [
          {
            label: nameProducto,
            data: listPrecio,
            backgroundColor: [
              "rgb(66, 134, 244,0.5)",
              "rgb(74, 135, 72,0.5)",
              "rgb(229, 89, 50,0.5)",
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });


  /*============================================================================
     GRAFICA DE LINEA, DE LOS PRECIOS QUE HA TENIDO [x] PRODUCTO EN LOS 5 AÑOS
    ============================================================================*/
    var ctx = document.getElementById("myChartLine").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels:  listYear,
        datasets: [
          {
            label: nameProducto,
            data: listPrecio,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1

          },
        ],
      },      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },

      
    });
  });