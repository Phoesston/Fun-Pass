export type Category = 'party' | 'foam' | 'concessions' | 'chairs-tables';

export interface EquipmentItem {
  name: string;
  description: string;
  imageSrc?: string;
  images?: string[];
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
    images: ['/party-rentals/connectFour.png', '/party-rentals/connectFour2.jpg'],
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
    imageSrc: '/party-rentals/cornHole.jpg',
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
  {
    name: 'Nerf Battle Set',
    description:
      'Gear up for an epic Nerf battle with our Nerf Battle Set. Includes blasters, darts, and safety goggles for hours of action-packed fun.',
    category: 'party',
    images: ['/party-rentals/nerf.png', '/party-rentals/nerfAd.png'],
  },
  {
    name: 'skeeball Game',
    description:
      'Bring the arcade home with our skeeball game rental. Perfect for birthday parties, school events, and family fun days.',
    category: 'party',
    images: ['/party-rentals/skeeBall.jpg',]
  },
  {
    name: 'Splash Tower Dunk Game',
    description:
      'A fun and interactive game where players try to dunk basketballs into a towering basket. Great for outdoor events and family gatherings. Chairs not included.',
    category: 'party',
    images: ['/party-rentals/splashTower.jpg', '/party-rentals/splashTower2.jpg', '/party-rentals/splashTower3.jpg'],
  },
  {
    name: 'Golf Pong',
    description:
      'A fun twist on the classic beer pong game, Golf Pong is perfect for backyard parties and tailgates. Players use golf clubs to putt balls into cups for a competitive and entertaining experience.',
    category: 'party',
    images: ['/party-rentals/golfPong.jpg'],
  }
  
];

export const foamEquipment: EquipmentItem[] = [
  {
    name: 'Foam Cannon Rental',
    description:
      'Our foam cannon rental is the ultimate party starter! Perfect for birthdays, school events, and summer fun. Easy to set up and safe for all ages.',
    category: 'foam',
    images: ['/foam-rentals/foamCannonAd.png', '/foam-rentals/foamCannon.jpg', '/foam-rentals/foamCannon2.jpg'],

  },
  
];

export const concessionEquipment: EquipmentItem[] = [
  {
    name: 'Cotton Candy Machine',
    description:
      'Freshly spun cotton candy that kids and adults love. A sweet addition to any birthday party, school event, or festival.',
    category: 'concessions',
    images: [ '/concessions/cottonCandyMachineAd.png','/concessions/cottonCandyMachine.jpg'],
  },
  {
    name: 'Snow Cone Machine',
    description:
      'Beat the heat with our snow cone machine rental. Perfect for summer parties, school events, and outdoor festivals.',
    category: 'concessions',
    images: ['/concessions/snowConeMachineAd.png', '/concessions/snowConeMachine.jpg', '/concessions/snowConeMachine1.jpg'],
  },
  {
    name: 'Popcorn Machine',
    description:
      'Serve up fresh popcorn at your next event with our popcorn machine rental. Great for movie nights, birthday parties, and school events.',
    category: 'concessions',
    images: ['/concessions/popCornMachineAd.png', '/concessions/popCornMachine.jpg', '/concessions/popCornMachine1.jpg'],
  },
  {
    name: 'Hot Dog Machine',
    description:
      'Serve up delicious hot dogs at your next event with our hot dog machine rental. Great for picnics, birthday parties, and school events.',
    category: 'concessions',
    images: ['/concessions/hotdogMachineAd.png', '/concessions/hotdogMachine.jpg'],
  },
  {
    name: 'Snack Machine Bundle',
    description:
      'A complete snack machine setup including popcorn, snow cones, and hot dogs for the ultimate event experience.',
    category: 'concessions',
    images: ['/concessions/foodMachineBundleAd.png'],
  }
];

export const chairsTablesEquipment: EquipmentItem[] = [
  {
    name: 'Folding Chairs',
    description:
      'Sturdy, comfortable folding chairs available in bulk. Perfect for outdoor events, parties, and gatherings of any size.',
    category: 'chairs-tables',
    images: ['/chairs-tables/foldingChairs.jpg', '/chairs-tables/foldingChairs2.jpg'],
  },
  {
    name: 'Folding Tables',
    description:
      'Durable folding tables perfect for outdoor events and corporate meetings.',
    category: 'chairs-tables',
    images: ['/chairs-tables/foldingTable.jpg'],
  },
];

export const featuredItems = [...partyEquipment, ...foamEquipment].filter((i) => i.featured);
