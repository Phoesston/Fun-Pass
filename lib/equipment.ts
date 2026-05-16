export type Category = 'party' | 'foam' | 'concessions' | 'chairs-tables';

export interface EquipmentItem {
  name: string;
  description: string;
  imageSrc?: string;
  images?: string[];
  category: Category;
  featured?: boolean;
  price?: number;
}

export const partyEquipment: EquipmentItem[] = [
  {
    name: 'Giant Connect Four',
    description:
      'Drop it in to win it — this towering 4-in-a-row showdown is the first game guests run to and the last one they leave. Competitive, fast, and perfect for every age.',
    category: 'party',
    featured: true,
    price: 20,
    images: ['/party-rentals/connectFour.png', '/party-rentals/connectFour2.jpg'],
  },
  {
    name: 'Giant Jenga',
    description:
      'One wrong pull and the whole thing comes crashing down. Giant Jenga turns a backyard classic into a full-on crowd moment — the suspense is half the fun.',
    category: 'party',
    price: 20,
    imageSrc: '/party-rentals/giantJenga.jpeg',
  },
  {
    name: 'Giant Guess Who',
    description:
      'Is it someone with glasses? A hat? Blown up to lawn size, this nostalgic guessing game sparks laughs and friendly trash-talk for kids and adults alike.',
    category: 'party',
    price: 20,
    imageSrc: '/party-rentals/giantGuessWho.jpeg',
  },
  {
    name: 'Kerplunk Game',
    description:
      'Pull a stick — hold your breath — pray the marbles stay put. Kerplunk is deceptively simple and wildly addictive, keeping guests glued and coming back for more.',
    category: 'party',
    featured: true,
    price: 20,
    imageSrc: '/party-rentals/kerPlunk.jpeg',
  },
  {
    name: 'Cornhole Set',
    description:
      'The ultimate backyard staple. Our custom boards are built to last and easy to set up anywhere — grass, concrete, or poolside. Teams, tournaments, or casual tossing, it never gets old.',
    category: 'party',
    price: 20,
    imageSrc: '/party-rentals/cornHole.jpg',
  },
  {
    name: 'Ladder Game',
    description:
      'Toss your bolas, wrap the rungs, and rack up the points. Ladder Ball is easy to learn but tough to master — ideal for all ages and a natural conversation starter at any gathering.',
    category: 'party',
    price: 15,
    imageSrc: '/party-rentals/ladderGame.jpeg',
  },
  {
    name: 'Tetris Tumbler',
    description:
      'Stack the iconic Tetris shapes as high as you dare without sending the whole tower sideways. A fresh twist on giant block stacking that brings out everyone\'s inner architect.',
    category: 'party',
    price: 20,
    imageSrc: '/party-rentals/tetrisTumble.jpg',
  },
  {
    name: 'Yard Dice',
    description:
      'Roll big, play bigger. These oversized dice open the door to Farkle, Yahtzee, and a dozen other games your guests can make up on the spot — no table required.',
    category: 'party',
    price: 10,
    imageSrc: '/party-rentals/yardDice.jpeg',
  },
  {
    name: 'Nerf Battle Set',
    description:
      'Lock and load. Our Nerf Battle Set comes packed with blasters, darts, and safety goggles so guests can go all-out without anyone getting hurt. Kids love it — so do adults.',
    category: 'party',
    price: 50,
    images: ['/party-rentals/nerf.png', '/party-rentals/nerfAd.png'],
  },
  {
    name: 'Skee-Ball Game',
    description:
      'Roll it up the ramp, aim for the center ring, and chase that high score. Skee-Ball is pure arcade nostalgia — a hit at birthday parties, block parties, and everything in between.',
    category: 'party',
    price: 40,
    images: ['/party-rentals/skeeBall.jpg'],
  },
  {
    name: 'Splash Tower Dunk Game',
    description:
      'Launch the ball, soak your target. This outdoor dunk game brings the thrill of the carnival dunk tank to your backyard — perfect for beating the Florida heat at summer events.',
    category: 'party',
    price: 60,
    images: ['/party-rentals/splashTower.jpg', '/party-rentals/splashTower2.jpg', '/party-rentals/splashTower3.jpg'],
  },
  {
    name: 'Golf Pong',
    description:
      'Putt the ball into the cup — sounds easy until it isn\'t. Golf Pong mashes mini golf with party games for a hilarious, competitive experience that works for all skill levels.',
    category: 'party',
    price: 20,
    images: ['/party-rentals/golfPong.jpg'],
  },
];

export const foamEquipment: EquipmentItem[] = [
  {
    name: 'Foam Cannon Rental',
    description:
      'Watch the yard disappear under a mountain of foam. Our high-powered cannon cranks out clouds of eco-safe suds that kids absolutely lose their minds over — and honestly, so do the adults.',
    category: 'foam',
    images: ['/foam-rentals/foamCannonAd.png', '/foam-rentals/foamCannon.jpg', '/foam-rentals/foamCannon2.jpg'],
  },
];

export const concessionEquipment: EquipmentItem[] = [
  {
    name: 'Cotton Candy Machine',
    description:
      'Spun fresh right at your event — fluffy clouds of cotton candy that disappear the second you put them out. A guaranteed favorite for guests of every age.',
    category: 'concessions',
    images: ['/concessions/cottonCandyMachineAd.png', '/concessions/cottonCandyMachine.jpg'],
  },
  {
    name: 'Snow Cone Machine',
    description:
      'Shaved ice, bright syrup, instant happiness. Our snow cone machine is the coolest thing you can add to a Florida summer event — literally.',
    category: 'concessions',
    images: ['/concessions/snowConeMachineAd.png', '/concessions/snowConeMachine.jpg', '/concessions/snowConeMachine1.jpg'],
  },
  {
    name: 'Popcorn Machine',
    description:
      'Hot, buttery, fresh-popped popcorn that fills the air with that irresistible smell the moment it starts. Sets the mood and keeps guests snacking all evening long.',
    category: 'concessions',
    images: ['/concessions/popCornMachineAd.png', '/concessions/popCornMachine.jpg', '/concessions/popCornMachine1.jpg'],
  },
  {
    name: 'Hot Dog Machine',
    description:
      'Perfectly warmed hot dogs ready to grab and go — no grill, no fuss. A crowd-pleasing classic that keeps hungry guests happy without pulling you away from the party.',
    category: 'concessions',
    images: ['/concessions/hotdogMachineAd.png', '/concessions/hotdogMachine.jpg'],
  },
  {
    name: 'Snack Machine Bundle',
    description:
      'Why choose one when you can have them all? The Snack Bundle brings popcorn, snow cones, and hot dogs together in one complete setup — everything you need to feed a crowd and wow your guests.',
    category: 'concessions',
    images: ['/concessions/foodMachineBundleAd.png'],
  },
];

export const chairsTablesEquipment: EquipmentItem[] = [
  {
    name: 'Folding Chairs',
    description:
      'Comfortable, sturdy, and available in bulk — our folding chairs set up fast and hold up all night. Whether you need 10 or 100, we\'ve got you covered.',
    category: 'chairs-tables',
    images: ['/chairs-tables/foldingChairs.jpg', '/chairs-tables/foldingChairs2.jpg'],
  },
  {
    name: 'Folding Tables',
    description:
      'Solid, versatile, and easy to arrange however you need them. Our folding tables work for buffets, gift tables, activity stations, and everything in between.',
    category: 'chairs-tables',
    images: ['/chairs-tables/foldingTable.jpg'],
  },
];

export const featuredItems = [...partyEquipment, ...foamEquipment].filter((i) => i.featured);
