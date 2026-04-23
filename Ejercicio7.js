const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

// Añade tu código de bucle aquí
const songGenre= [{genre:'' , songs: []}]; //tipo de array a usar
let cont=0;
for(track of tracks){
  if(songGenre.includes(track.genre)){
    songGenre[cont]={songs: track};
  }else{
    songGenre[cont]={ genre:track.genre, songs: track};
  }
  cont++;
}

console.log(songGenre);

/*  COMPROBACION
for(song of songGenre){
  if(song.genre == "Rock"){
    console.log(song);
  }
}
 */