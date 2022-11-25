import media1 from "./media-1.jpg";
import media2 from "./media-2.jpg";
import media3 from "./media-3.jpg";

export const media = [media1, media2, media3];
export const mediaByIndex = index => media[index % media.length];