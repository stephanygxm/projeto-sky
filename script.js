//função menu hamburguer
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//função para adicionar images a partir da api
let urlImagesCaroussel = new Array();
$.ajax({
    url: "https://sky-frontend.herokuapp.com/movies",
    success: function(response){ 
        let filmesGeral = Object.entries(response);
        let content = "";
        filmesGeral[0][1].items.forEach(elemento => {
            urlImagesCaroussel.push(elemento.images[0].url)
        });
        filmesGeral[2][1].movies.forEach(element => {
            $('#images-body-container').append(`<img class='images-body' src=${element.images[0].url}>`);
        });  
      

        let flag = true;
        let counter = 0;
        urlImagesCaroussel.forEach(element => {
            let elementToAdd = `<div class="carousel-item">
            <img class="d-block w-100" src="${element}" alt="Second slide">
          </div>`;
          let indicatorElement = `<li data-target="#carouselWithIndicators" data-slide-to="${counter}"></li>`
            if (flag){
                elementToAdd = `<div class="carousel-item active">
                <img class="d-block w-100" src="${element}" alt="Second slide">
              </div>`;
              indicatorElement = `<li data-target="#carouselWithIndicators" data-slide-to="${counter}" class="active"></li>`
                flag=false;
            }
            
          $('#container-caroussel').append(elementToAdd);
          $('#carouselIndicators').append(indicatorElement);
          counter++;
        });
    },
    error: function(){
        alert("There was an error.");
    }
});

//função da seta dropdown

let flagSeta1 = true
function alternarSeta1(){
    if(flagSeta1){
        document.getElementById("arrow-down").style.transform = "rotate(180deg)"
        flagSeta1=false
    }else{
        document.getElementById("arrow-down").style.transform = "rotate(0deg)"
        flagSeta1 = true
    }
}

let flagSeta2 = true
function alternarSeta2(){
    if(flagSeta2){
        document.getElementById("arrow-down2").style.transform = "rotate(180deg)"
        flagSeta2=false
    }else{
        document.getElementById("arrow-down2").style.transform = "rotate(0deg)"
        flagSeta2 = true
    }
}

let flagSeta3 = true
function alternarSeta3(){
    if(flagSeta3){
        document.getElementById("arrow-down3").style.transform = "rotate(180deg)"
        flagSeta3=false
    }else{
        document.getElementById("arrow-down3").style.transform = "rotate(0deg)"
        flagSeta3 = true
    }
}