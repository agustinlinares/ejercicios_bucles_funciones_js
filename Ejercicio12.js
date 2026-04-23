const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'Deadpool', power: 'regeneration' }
];

function findMutantByPower(mutants, power) {
  let hero=[];
  let b=true;
  for(x of mutants){
    if (x.power==power){
      hero.push(x);
      b=true;
    }else{
      b=false;
    }
  }
  if(b){
  return hero;
  }else{
    return (`El poder ${power} no incluido en listado de Mutantes`);
  }

}


console.log(findMutantByPower(mutants,"regeneration"));
console.log(findMutantByPower(mutants,"velocity"));