/**
 * Audio features consist of a 0.0 - 1.0 rating of how much a track satisfies each of these
 * categories. Speechiness is how much "spoken word" is present (low rating = instrumental).
 * Instrumentalness is the opposite. Valence (or happiness) rating is how happy the song is.
 */
export class AudioFeatures {
  danceability: number;
  energy: number;
  speechines: number;
  instrumentalness: number;
  happiness: number;
  tempo: number;
}
