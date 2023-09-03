AFRAME.registerComponent("markerhandler",{
  init:async function(){
      this.el.addEventListener("markerFound",()=>{
          console.log("se esncontro el marcador")
          this.handleMarkerFound();
      })
      this.el.addEventListener("markerLost",()=>{
          console.log("se perdio el marcador")
          this.handleMarkerLost();
      })
  },
  handleMarkerFound:function(){
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";

      var ratingButton = document.getElementById("rating-button");
      var orderButton = document.getElementById("order-button");
      ratingButton.addEventListener("click",function(){
          swal({
              icon:"warning",
              title:"calificar platillo",
              text:"procesando calificacion"
          })
      });

      orderButton.addEventListener("click",()=>{
          swal({
              icon:"https://i.imgur.com/4NZ6uLY.jpg",
              title:"gracias por tu orden",
              text:"resiviras tu orden pronto",
              
          })
       })
  },

  handleMarkerLost:function(){
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display="none";
  },
})