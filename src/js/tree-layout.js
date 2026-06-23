// Sephirot coordinates, path definitions and lookup utilities

export const sephirot = [
  { id: 1, name: 'Kether',    x: 0.5,  y: 0.95, planet: 'Pluto' },
  { id: 2, name: 'Chokmah',   x: 0.75, y: 0.78, planet: 'Uranus' },
  { id: 3, name: 'Binah',     x: 0.25, y: 0.78, planet: 'Saturn' },
  { id: 4, name: 'Chesed',    x: 0.75, y: 0.61, planet: 'Jupiter' },
  { id: 5, name: 'Gevurah',   x: 0.25, y: 0.61, planet: 'Mars' },
  { id: 6, name: 'Tiphareth', x: 0.5,  y: 0.45, planet: 'Sun' },
  { id: 7, name: 'Netzach',   x: 0.75, y: 0.28, planet: 'Venus' },
  { id: 8, name: 'Hod',       x: 0.25, y: 0.28, planet: 'Mercury' },
  { id: 9, name: 'Yesod',     x: 0.5,  y: 0.16, planet: 'Moon' },
  { id: 10,name: 'Malkuth',   x: 0.5,  y: 0.05, planet: 'Earth' }
];

export const paths = [
  { id: 11, from: 1, to: 2, hebrew: 'Aleph',  tarot: 'The Fool' },
  { id: 12, from: 1, to: 3, hebrew: 'Beth',   tarot: 'The Magician' },
  { id: 13, from: 2, to: 3, hebrew: 'Gimel',  tarot: 'The High Priestess' },
  { id: 14, from: 2, to: 4, hebrew: 'Daleth', tarot: 'The Empress' },
  { id: 15, from: 3, to: 5, hebrew: 'He',     tarot: 'The Emperor' },
  { id: 16, from: 4, to: 5, hebrew: 'Vau',    tarot: 'The Hierophant' },
  { id: 17, from: 4, to: 6, hebrew: 'Zain',   tarot: 'The Lovers' },
  { id: 18, from: 5, to: 6, hebrew: 'Cheth',  tarot: 'The Chariot' },
  { id: 19, from: 4, to: 7, hebrew: 'Teth',   tarot: 'Strength' },
  { id: 20, from: 5, to: 8, hebrew: 'Yod',    tarot: 'The Hermit' },
  { id: 21, from: 6, to: 7, hebrew: 'Kaph',   tarot: 'Wheel of Fortune' },
  { id: 22, from: 6, to: 8, hebrew: 'Lamed',  tarot: 'Justice' },
  { id: 23, from: 7, to: 8, hebrew: 'Mem',    tarot: 'The Hanged Man' },
  { id: 24, from: 7, to: 9, hebrew: 'Nun',    tarot: 'Death' },
  { id: 25, from: 8, to: 9, hebrew: 'Samekh', tarot: 'Temperance' },
  { id: 26, from: 7, to: 10,hebrew: 'Ayin',   tarot: 'The Devil' },
  { id: 27, from: 8, to: 10,hebrew: 'Pe',     tarot: 'The Tower' },
  { id: 28, from: 9, to: 10,hebrew: 'Tzaddi', tarot: 'The Star' },
  { id: 29, from: 1, to: 6, hebrew: 'Qoph',   tarot: 'The Moon' },
  { id: 30, from: 2, to: 6, hebrew: 'Resh',   tarot: 'The Sun' },
  { id: 31, from: 3, to: 6, hebrew: 'Shin',   tarot: 'Judgement' },
  { id: 32, from: 6, to: 10,hebrew: 'Tau',    tarot: 'The World' }
];

export function getSephiraById(id) {
  return sephirot.find(s => s.id === id);
}
