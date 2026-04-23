const cartoons = [
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Bugs Bunny', debut: 1938 }, 
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }/* ,
  { name: "Aaron is in the house", debut: 1815 } */
];

// Añade tu código de bucle aquí
const fecha =new Date();
let older=fecha.getFullYear();
let nameDb='';

for(old of cartoons){
  if(old.debut<older){
    nameDb= old.name;
    older=old.debut;
  }
}

console.log("La serie de dibujos mas antigua es :", nameDb, "que hizo debut en el año :", older);