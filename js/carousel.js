

//carousel

//Array storage class
let carouselArr = [];
//class Carousel
class Carousel {

    constructor(imagem, titulo, link) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.link = link;
        
    }


    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        document.getElementById("carousel").innerHTML = "<a href='" + carouselArr[Carousel._sequence].link + "'><img src='" + carouselArr[Carousel._sequence].imagem + "'></a>"
        document.getElementById("carousel-title").innerText = carouselArr[Carousel._sequence].titulo;
        Carousel._sequence++
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0
        }
    }

    static Prev(){
        document.getElementById("carousel").innerHTML = "<a href='" + carouselArr[Carousel._sequence].link + "'><img src='" + carouselArr[Carousel._sequence].imagem + "'></a>"
        document.getElementById("carousel-title").innerText = carouselArr[Carousel._sequence].titulo;
        Carousel._sequence--
        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel._size - 1
        }
    }

    

}
