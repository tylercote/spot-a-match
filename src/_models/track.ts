import {Artist} from "./artist";
import {Album} from "./album";

/**
 * A track consists of the artists that collaborated, the album the song appeared on, its name, and
 * popularity rating from 1-100.
 */
export class Track {
  artists: Artist[];
  album: Album;
  name: string;
  popularity: number;
}
