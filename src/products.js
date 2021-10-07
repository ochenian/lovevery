import { importAll } from './utils/helpers';

const sensorObj = importAll(
  require.context('./assets/senser', false, /.(jpeg|jpg)/)
);
const senserImages = Object.keys(sensorObj).map((key) => sensorObj[key]);

const lookerObj = importAll(
  require.context('./assets/looker', false, /.(jpeg|jpg)/)
);
const lookerImages = Object.keys(lookerObj).map((key) => lookerObj[key]);

const charmerObj = importAll(
  require.context('./assets/charmer', false, /.(jpeg|jpg)/)
);
const charmerImages = Object.keys(charmerObj).map((key) => charmerObj[key]);

const inspectorObj = importAll(
  require.context('./assets/inspector', false, /.(jpeg|jpg)/)
);
const inspectorImages = Object.keys(inspectorObj).map(
  (key) => inspectorObj[key]
);

const explorerObj = importAll(
  require.context('./assets/explorer', false, /.(jpeg|jpg)/)
);
const explorerImages = Object.keys(explorerObj).map((key) => explorerObj[key]);

const thinkerObj = importAll(
  require.context('./assets/thinker', false, /.(jpeg|jpg)/)
);
const thinkerImages = Object.keys(thinkerObj).map((key) => thinkerObj[key]);

const defaultObj = importAll(
  require.context('./assets/default', false, /.(jpeg|jpg)/)
);
const defaultImage = Object.keys(defaultObj).map((key) => defaultObj[key]);

export const products = [
  {
    title: 'Kit Selection',
    detail:
      'Welcome your child to the world with playthings that help them build brand new neural connections—while connecting with you.',
    images: defaultImage,
  },
  {
    title: 'The Looker Play Kit',
    detail:
      'Sensitive to light and sound, your newborn is already becoming aware of their new world. This Play Kit helps them build new brain connections with high-contrast images and black and white sensory mittens.',
    age: '0-12 weeks',
    images: lookerImages,
  },
  {
    title: 'The Charmer Play Kit',
    detail:
      'Your baby may start to recognize your face—cooing at you, smiling, and delighting everyone they meet. This Play Kit is designed to let your baby explore with their mouth, eyes, and hands as their personality emerges and their social awareness grows.',
    age: '3-4 months',
    images: charmerImages,
  },
  {
    title: 'The Senser Play Kit',
    detail:
      'Your baby may be tasting, mouthing, and feeling everything they can get their hands on right now. This Play Kit helps your baby investigate their world around them, while working on getting themself closer to what looks and sounds exciting to them.',
    age: '5-6 months',
    images: senserImages,
  },
  {
    title: 'The Inspector Play Kit',
    detail:
      "Your baby is more aware of everything around them and fascinated with details. This Play Kit makes the most of your baby's natural curiosity about how things work with opportunities to explore texture, practice nesting and stacking, and learn about object permanence.",
    age: '7-8 months',
    images: inspectorImages,
  },
  {
    title: 'The Explorer Play Kit',
    detail:
      'Your baby loves to see the effect they can have on their environment. This Play Kit is designed to experiment with gravity, practice balance, and begin coordinating both sides of their body.',
    age: '9-10 months',
    images: explorerImages,
  },
  {
    title: 'The Thinker Play Kit',
    detail:
      'Your baby is starting to put it all together and understand concepts at a deeper level. This Play Kit encourages your baby to define and organize information while engaging their budding imagination.',
    age: '11-12 months',
    images: thinkerImages,
  },
];
