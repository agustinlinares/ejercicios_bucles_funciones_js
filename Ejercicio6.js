const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

//Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas. 
const decadaPeli= [{decada:'' , peliculas: []}]; //tipo de array a usar
let cont=0; 

for(let i=1970 ; i<2030 ;i+=10){ //for para las decadas 
for(movie of starWarsMovies){
    if(movie.releaseYear>=i && movie.releaseYear<i+10){
        // console.log(movie.title,"esta pelicula es de la decada de :",i); probador de decadas
        decadaPeli[cont]={ decada: i , peliculas: movie};
        cont++;
    }
}
}


console.log(decadaPeli);