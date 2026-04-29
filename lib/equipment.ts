export type Category = 'party' | 'foam';

export interface EquipmentItem {
  name: string;
  description: string;
  imageSrc?: string;
  category: Category;
  featured?: boolean;
}

export const partyEquipment: EquipmentItem[] = [
  {
    name: 'Giant Connect Four',
    description:
      'The classic 4-in-a-row game blown up to party size. A crowd-pleaser for all ages at any event.',
    category: 'party',
    featured: true,
    imageSrc: '/party-rentals/giantConnect4.jpeg',
  },
  {
    name: 'Giant Jenga',
    description:
      "Stack those oversized blocks and hope it doesn't tumble! Hours of laughs guaranteed.",
    category: 'party',
    imageSrc: '/party-rentals/giantJenga.jpeg',
  },
  {
    name: 'Giant Guess Who',
    description:
      'Oversized version of the classic guessing game — perfect for lawn parties, corporate events, and family reunions.',
    category: 'party',
    imageSrc: '/party-rentals/giantGuessWho.jpeg',
  },
  {
    name: 'Kerplunk Game',
    description:
      'Colorful and fun, this giant Kerplunk game is a hit at birthday parties and school events. Watch the marbles fly!',
    category: 'party',
    featured: true,
    imageSrc: '/party-rentals/kerPlunk.jpeg',
  },
  {
    name: 'Cornhole Set',
    description: 'Custom bean bag toss boards — the ultimate classic outdoor party game.',
    category: 'party',
    imageSrc: '/party-rentals/cornHole.jpeg',
  },
  {
    name: 'Ladder Game',
    description:
      'A fun and competitive game where players toss rings onto a ladder structure. Great for all ages and skill levels.',
    category: 'party',
    imageSrc: '/party-rentals/ladderGame.jpeg',
  },
  {
    name: 'Tetris Tumbler',
    description: 'Stack and balance these giant Tetris blocks — a fun challenge for kids and adults alike. Perfect for parties and team-building events.',
    category: 'party',
    imageSrc: '/party-rentals/tetrisTumble.jpg',
  },
  {
    name: 'Yard Dice',
    description: 'Large-scale dice for outdoor games and activities. Perfect for family gatherings and community events.',
    category: 'party',
    imageSrc: '/party-rentals/yardDice.jpeg',
  },
  
];

export const foamEquipment: EquipmentItem[] = [
  {
    name: 'Foam Cannon Deluxe',
    description:
      'Our most popular rental — a high-powered cannon that floods any space with thick, safe foam.',
    category: 'foam',
    featured: true,
  },
  {
    name: 'Foam Party Package',
    description:
      'Everything you need in one bundle: cannon, foam solution, and full setup included.',
    category: 'foam',
  },
  {
    name: 'Foam Pit Setup',
    description:
      'Create a foam pit experience perfect for kids and adults at outdoor events and festivals.',
    category: 'foam',
  },
  {
    name: 'Dual Cannon Package',
    description:
      'Two cannons running simultaneously for large events, school field days, and big crowds.',
    category: 'foam',
  },
  {
    name: 'Foam & Snow Cone Combo',
    description: 'Pair your foam party with icy snow cones — the ultimate summer event combo.',
    category: 'foam',
  },
  {
    name: 'Backyard Foam Starter',
    description:
      'A scaled-down setup perfect for birthday parties in the backyard. Easy and safe for all ages.',
    category: 'foam',
  },
];

export const featuredItems = [...partyEquipment, ...foamEquipment].filter((i) => i.featured);
