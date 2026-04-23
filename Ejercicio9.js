const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }/* ,
  { name: 'yo', year: 1944 } */
];

function findOldestXMen(xMen) {
  const older=[];
  let num=Number.MAX_VALUE; //maximo numero en js 
  for(let i=0; i<xMen.length; i++){
    if(num>xMen[i].year){
      num=xMen[i].year;
      older[0]=xMen[i];
    }
  }
 return older;  //retorna el mas antiguo pero si se repite el año, solo guarda el primero que encuentra
}

console.log(findOldestXMen(xMen));