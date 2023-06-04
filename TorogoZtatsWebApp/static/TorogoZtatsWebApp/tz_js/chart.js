window.addEventListener("load", async () => {


/*===========================
     OBTENER PRODUCTO
    ========================*/
  
    var producto = "";

    // Obtener la URL actual
    var url = window.location.href;
    
    // Buscar el índice del parámetro "pro" en la URL
    var startIndex = url.indexOf("?pro=");
    
    if (startIndex !== -1) {
      // Encontrar el índice del símbolo '&' después del valor del parámetro "pro"
      var endIndex = url.indexOf("&", startIndex);
    
      // Si no se encuentra el símbolo '&', utilizar la longitud total de la URL
      if (endIndex === -1) {
        endIndex = url.length;
      }
    
      // Extraer la palabra después del igual '=' hasta el símbolo '&'
      producto = url.substring(startIndex + 5, endIndex);
    
      console.log("La palabra capturada es: " + producto);
    } else {
      console.log("No se encontró el parámetro 'pro' en la URL.");
    }
    
    /*===========================
         OBTENER CATEGORIA
        ========================*/
      
        var catValue = "";
    
        // Obtener la URL actual
        var url = window.location.href;
        
        var urlObj = new URL(url);
    
        // Obtener el valor del parámetro "cat"
        catValue = urlObj.searchParams.get("cat");
        
        if (catValue) {
          console.log("El valor del parámetro 'cat' es: " + catValue);
        } else {
          console.log("No se encontró el parámetro 'cat' en la URL.");
        }
        
    
    
        /*===========================
         OBTENER Year
        ========================*/
      
        var yearValue = "";
    
        // Obtener la URL actual
        var url = window.location.href;
        
        var urlObj = new URL(url);
    
        // Obtener el valor del parámetro "cat"
        yearValue = urlObj.searchParams.get("year");
        
        if (yearValue) {
          console.log("El valor del parámetro 'year' es: " + yearValue);
        } else {
          console.log("No se encontró el parámetro 'year' en la URL.");
        }
    


        if(catValue ==null || producto == null || yearValue==null){

  console.log("hola dentro de chart.js")
  // Obtener la URL base
var baseUrl = window.location.origin;


    //JSON ID PRODUCTO
    var dataIDP1;
    var listIDP =[];

    /*==========================
        JSON - CANASTA BASICA
      ==========================*/
 
    const responseIDP = await fetch("http://localhost:8000/canasta/");
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
    const responseNP = await fetch("http://localhost:8000/productos");
    dataNP = await responseNP.json();
    if(dataNP.message == "Success"){
        dataNP1 = dataNP;
        dataNP1.productos.forEach(producto =>{
          console.log(producto);
          listNP.push(producto);
        })
        console.log(listNP[1].nombre_producto);
       }



       
listPrecio =[];
listYear =[2018,2019,2020,2021,2022];

var nameProducto;
for(var i=0; i<listIDP.length;i++){
  listPrecio.push(listIDP[i].precio);
  
  for(var j=0; j<listNP.length;j++){
      if(listIDP[i].producto_id == listNP[j].id){
        nameProducto = listNP[j].nombre_producto;
      }
  }
    
}








var busqueda;
function capturarValor(){
 busqueda = document.getElementById("pros").value;
console.log("busq: "+busqueda);
}

console.log("hola");
console.log("y= "+listYear.length);
rgbRandom=[];
for(var i=0; i < nameProducto.length; i++){
  min = Math.ceil(0);
  max = Math.floor(255);
  color = "rgb("+ (Math.floor(Math.random() *(max - min + 1))+min)+","+(Math.floor(Math.random() *(max - min + 1))+min)+","+(Math.floor(Math.random() *(max - min + 1))+min)+",0.5)";
  rgbRandom.push(color);
}

console.log("color = "+color);




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
            label: ['Frijol'],
            data: [listIDP[0].precio, listIDP[1].precio, listIDP[3].precio, listIDP[4].precio, listIDP[5].precio ],
            backgroundColor: rgbRandom,
          },{
            label: ['Leche'],
            data: [listIDP[2].precio,listIDP[6].precio,listIDP[7].precio,listIDP[8].precio,listIDP[9].precio],
            backgroundColor: rgbRandom,
          }],
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

var x="";
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
            label: listNP[0].nombre_producto,
            data: [listIDP[2].precio,listIDP[6].precio,listIDP[7].precio,listIDP[8].precio,listIDP[9].precio],
            fill: false,
            borderColor: rgbRandom[0],
            borderWidth: 5,
            tension: 0.1

          },{
            label: listNP[1].nombre_producto,
            data: [listIDP[0].precio, listIDP[1].precio, listIDP[3].precio, listIDP[4].precio, listIDP[5].precio ],
            fill: false,
            borderColor: rgbRandom[1],
            borderWidth: 5,
            tension: 0.1

          }
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
  }
  else{
    console.log("entro aca")
  }
  });