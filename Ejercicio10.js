const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

 function getCapital(country) {
    let objeto={};
    let ciudad;
    if(capitals[country]){
      ciudad=capitals[country];
      objeto={country,ciudad};
      return objeto;
    }else{
      return (`La capital de ${country} no esta incluida en nuestro listado de capitales`);  
    }
    
} 


console.log(getCapital("Poland"));
console.log(getCapital("España"));
console.log(getCapital("Spain"));