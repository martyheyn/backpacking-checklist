// Import Images
import backpacking_pillow from '../img/cards/backpacking_pillow.jpg';
import camping_tarp from '../img/cards/camping_tarp.jpg';
import hammock from '../img/cards/hammock.jpg';
import hiking_boots from '../img/cards/hiking_boots.jpg';
import jet_boil from '../img/cards/jet_boil.jpg';
import shirt from '../img/cards/shirt.jpg';
import sleeping_bag from '../img/cards/sleeping_bag.jpg';
import sleeping_pad from '../img/cards/sleeping_pad.jpg';
import sunscreen from '../img/cards/sunscreen.jpg';
import teton_sack from '../img/cards/teton_sack.jpg';
import water_bladder from '../img/cards/water_bladder.jpg';
import water_filter from '../img/cards/water_filter.jpg';
// Import URLs
import {
  backpacking_pillow_url,
  camping_tarp_url,
  hammock_url,
  hiking_boots_url,
  jet_boil_url,
  sack_url,
  sleeping_bag_url,
  sleeping_pad_url,
  sunscreen_url,
  water_bladder_url,
  water_filter_url,
} from './links.js';

// Make list of stuff and factor in potentail input
export const inSack = (days) => {
  // Backpack/ sack, cammelback/ waterbottle, clothes, hiking boots, tarp, food, sunscreen
  const essentails = [
    {
      name: 'Clothes',
      img: shirt,
      link: '',
      description: 'Obviously need these. Pack one extra just in case or not',
    },
    {
      name: 'Backpack',
      img: teton_sack,
      link: sack_url,
      description: 'Need this to stuff everything into',
    },
    {
      name: 'Sleeping Bag',
      img: sleeping_bag,
      link: sleeping_bag_url,
      description:
        'I used my old one from camp, but a legit one is nice and lightweight',
    },
    {
      name: 'Sleeping Pad',
      img: sleeping_pad,
      link: sleeping_pad_url,
      description:
        'This is essentail unless you want to sleep on the rocky ground',
    },
    {
      name: 'Water Blatter',
      img: water_bladder,
      link: water_bladder_url,
      description:
        'You can either bring a bottle or easly store a water bladder in sack',
    },
    {
      name: 'Hiking Boots',
      img: hiking_boots,
      link: hiking_boots_url,
      description:
        'If you plan on putting in miles in rough terrian, boots are a must',
    },
    {
      name: 'Tarp',
      img: camping_tarp,
      link: camping_tarp_url,
      description: 'Used to lay on the ground before setting up camp',
    },
    {
      name: 'Suncreen',
      img: sunscreen,
      link: sunscreen_url,
      description: 'Never forget to lather up!',
    },
  ];

  // Jet Boil, Water pump/ iodine tablets, hammock, pillow
  const jet_boil_stove = {
    name: 'JetBoil/ Stove',
    img: jet_boil,
    link: jet_boil_url,
    description:
      'Jetboils make for the most efficent, lightweight, and easy warm meals',
  };

  const water_pump = {
    name: 'Water Pump',
    img: water_filter,
    link: water_filter_url,
    description:
      "If you are gone more than 1 night, chances are you'll need to refill your water",
  };

  const sack_hammock = {
    name: 'Hammock',
    img: hammock,
    link: hammock_url,
    description: 'If you are really trying to chill',
  };

  const pillow = {
    name: 'Pillow',
    img: backpacking_pillow,
    link: backpacking_pillow_url,
    description: "If you are boujie and your sack just won't do as a pillow",
  };

  return [essentails, jet_boil_stove, water_pump, sack_hammock, pillow];
};

// Get weather from location and date

// Store this in hooks
