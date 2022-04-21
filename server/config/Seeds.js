const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Armors' }, //0
    { name: 'Creatures' }, //1
    { name: 'Weapons' }, //2
    { name: 'Talismans' }, //3
    { name: 'Sorceries' } //4
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
        //armors start
        name: "All-knowing Greaves",
        image: "https://eldenring.fanapis.com/images/armors/17f696e0685l0i0nblzy58h0qvewk.png",
        description: "Greaves set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
        type: "Leg Armor",
        category: categories[0]._id,
        price: 3000,
    },
    {
        name: "All-knowing Armor",
        image: "https://eldenring.fanapis.com/images/armors/17f69515b49l0i0nbno079cqzlskebf.png",
        description: "Armor set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
        type: "Chest Armor",
        category: categories[0]._id,
        price: 5000,
    },
    {
        name: "All-knowing Helm",
        image: "https://eldenring.fanapis.com/images/armors/17f69751613l0i0nbp9nsdqjza4rxf.png",
        description: "Helm set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
        type: "Helm",
        category: categories[0]._id,
        price: 4000,
    },
    {
        name: "Banished Knight Armor",
        image: "https://eldenring.fanapis.com/images/armors/17f6935585fl0i0ne8s2gcl84asvoi.png",
        description: "Thick, full set of armor covering the entire body. This armor was worn by knights who, whether by misfortune or misdeed, were forced to abandon their homes. These fierce warriors were each and all accomplished. Perhaps that is why, despite their territorial losses, they were still named knights.",
        type: "Chest Armor",
        category: categories[0]._id,
        price: 8000,
    },
    {
        name: "Bandit Garb",
        image: "https://eldenring.fanapis.com/images/armors/17f69989b5bl0i0ndk23xuv2wasv77.png",
        description: "Leather garb worn by bandits.",
        type: "Chest Armor",
        category: categories[0]._id,
        price: 6000,
    },
    {
        name: "Astrologer Robe",
        image: "https://eldenring.fanapis.com/images/armors/17f696dc24el0i0ndj4er6v25jkwqd.png",
        description: "Robe fashioned from supple cloth. Worn by those who look to the cosmos above. They read fate in the stars, and are said to be heirs of the glintstone sorcerers. But alas, the night sky no longer cradles fate.",
        type: "Chest Armor",
        category: categories[0]._id,
        price: 4000,
        //armors end
    },
    {
        //creatures start
        name: "Giant Bat",
        image: "https://eldenring.fanapis.com/images/creatures/17f6a0bda2cl0i6yrtkvf0vjp9puf.png",
        description: "The Giant Bats of Limgrave are nocturnal creatures and often rest during the day, unless they are disturbed.",
        category: categories[1]._id,
        price: 3000,
    },
    {
        name: "Basilisk",
        image: "https://eldenring.fanapis.com/images/creatures/17f6a58d8d2l0i6ys2scc9vx91u6pp.png",
        description: "???",
        category: categories[1]._id,
        price: 5000,
    },
    {
        name: "Bladed Talon Eagle",
        image: "https://eldenring.fanapis.com/images/creatures/17f6a170239l0i6ysg3xam4t0zopmn.png",
        description: "The servants of Stormveil come in many shapes, including Eagles that have been enslaved and fitted with blades. Driving them to attack those who approach",
        category: categories[1]._id,
        price: 4000,
        
    },
    {
        name: "Burning Slug",
        image: "https://eldenring.fanapis.com/images/creatures/17f69f7b6e7l0i6ysj8mlloa8u65n9.png",
        description: "Burning Slugs move slowly and are located in the open field.",
        category: categories[1]._id,
        price: 1000,
    },
    {
        name: "Direwolf",
        image: "https://eldenring.fanapis.com/images/creatures/17f69d1f23cl0i6ytdsizgpbatwgb.png",
        description: "Found alone or in small packs, these bloodthirsty beasts stalk the Lands Between with predatory fervor.",
        category: categories[1]._id,
        price: 4000,
    },
    {
        name: "Giant Land Octopus",
        image: "https://eldenring.fanapis.com/images/creatures/17f6a2f96a7l0i6ytu14rxjb7bw7x9.png",
        description: "Giant Land Octopuses are a dangerous foe for any daring to visit the beaches of Limgrave.",
        category: categories[1]._id,
        price: 6000,
        //creatures end
    },
  ]);

  console.log('products seeded');


  process.exit();
});
