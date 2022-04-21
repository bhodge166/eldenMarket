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
        //armors end
    },
    {
        //creatures start
        name: "Giant Bat",
        image: "https://eldenring.fanapis.com/images/creatures/17f6a0bda2cl0i6yrtkvf0vjp9puf.png",
        description: "The Giant Bats of Limgrave are nocturnal creatures and often rest during the day, unless they are disturbed.",
        type: "Leg Armor",
        category: categories[1]._id,
        price: 3000,
    },
    {
        name: "All-knowing Armor",
        image: "https://eldenring.fanapis.com/images/armors/17f69515b49l0i0nbno079cqzlskebf.png",
        description: "Armor set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
        type: "Chest Armor",
        category: categories[1]._id,
        price: 5000,
    },
    {
        name: "All-knowing Helm",
        image: "https://eldenring.fanapis.com/images/armors/17f69751613l0i0nbp9nsdqjza4rxf.png",
        description: "Helm set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
        type: "Helm",
        category: categories[1]._id,
        price: 4000,
        //creatures end
    },
  ]);

  console.log('products seeded');


  process.exit();
});
