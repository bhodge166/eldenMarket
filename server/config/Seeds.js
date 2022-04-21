const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Armors" }, //0
    { name: "Creatures" }, //1
    { name: "Weapons" }, //2
    { name: "Talismans" }, //3
    { name: "Sorceries" }, //4
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      //armors start
      name: "All-knowing Greaves",
      image:
        "https://eldenring.fanapis.com/images/armors/17f696e0685l0i0nblzy58h0qvewk.png",
      description:
        "Greaves set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
      type: "Leg Armor",
      category: categories[0]._id,
      price: 3000,
    },
    {
      name: "All-knowing Armor",
      image:
        "https://eldenring.fanapis.com/images/armors/17f69515b49l0i0nbno079cqzlskebf.png",
      description:
        "Armor set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
      type: "Chest Armor",
      category: categories[0]._id,
      price: 5000,
    },
    {
      name: "All-knowing Helm",
      image:
        "https://eldenring.fanapis.com/images/armors/17f69751613l0i0nbp9nsdqjza4rxf.png",
      description:
        "Helm set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
      type: "Helm",
      category: categories[0]._id,
      price: 4000,
    },
    {
      name: "Banished Knight Armor",
      image:
        "https://eldenring.fanapis.com/images/armors/17f6935585fl0i0ne8s2gcl84asvoi.png",
      description:
        "Thick, full set of armor covering the entire body. This armor was worn by knights who, whether by misfortune or misdeed, were forced to abandon their homes. These fierce warriors were each and all accomplished. Perhaps that is why, despite their territorial losses, they were still named knights.",
      type: "Chest Armor",
      category: categories[0]._id,
      price: 8000,
    },
    {
      name: "Bandit Garb",
      image:
        "https://eldenring.fanapis.com/images/armors/17f69989b5bl0i0ndk23xuv2wasv77.png",
      description: "Leather garb worn by bandits.",
      type: "Chest Armor",
      category: categories[0]._id,
      price: 6000,
    },
    {
      name: "Astrologer Robe",
      image:
        "https://eldenring.fanapis.com/images/armors/17f696dc24el0i0ndj4er6v25jkwqd.png",
      description:
        "Robe fashioned from supple cloth. Worn by those who look to the cosmos above. They read fate in the stars, and are said to be heirs of the glintstone sorcerers. But alas, the night sky no longer cradles fate.",
      type: "Chest Armor",
      category: categories[0]._id,
      price: 4000,
      //armors end
    },
    {
      //creatures start
      name: "Giant Bat",
      image:
        "https://eldenring.fanapis.com/images/creatures/17f6a0bda2cl0i6yrtkvf0vjp9puf.png",
      description:
        "The Giant Bats of Limgrave are nocturnal creatures and often rest during the day, unless they are disturbed.",
      category: categories[1]._id,
      price: 3000,
    },
    {
      name: "Basilisk",
      image:
        "https://eldenring.fanapis.com/images/creatures/17f6a58d8d2l0i6ys2scc9vx91u6pp.png",
      description: "???",
      category: categories[1]._id,
      price: 5000,
    },
    {
      name: "Bladed Talon Eagle",
      image:
        "https://eldenring.fanapis.com/images/creatures/17f6a170239l0i6ysg3xam4t0zopmn.png",
      description:
        "The servants of Stormveil come in many shapes, including Eagles that have been enslaved and fitted with blades. Driving them to attack those who approach",
      category: categories[1]._id,
      price: 4000,
    },
    {
      name: "Burning Slug",
      image:
        "https://eldenring.fanapis.com/images/creatures/17f69f7b6e7l0i6ysj8mlloa8u65n9.png",
      description:
        "Burning Slugs move slowly and are located in the open field.",
      category: categories[1]._id,
      price: 1000,
    },
    {
      name: "Direwolf",
      image:
        "https://eldenring.fanapis.com/images/creatures/17f69d1f23cl0i6ytdsizgpbatwgb.png",
      description:
        "Found alone or in small packs, these bloodthirsty beasts stalk the Lands Between with predatory fervor.",
      category: categories[1]._id,
      price: 4000,
    },
    {
      name: "Giant Land Octopus",
      image:
        "https://eldenring.fanapis.com/images/creatures/17f6a2f96a7l0i6ytu14rxjb7bw7x9.png",
      description:
        "Giant Land Octopuses are a dangerous foe for any daring to visit the beaches of Limgrave.",
      category: categories[1]._id,
      price: 6000,
      //creatures end
    },

    {
      //weapons start
      name: "Hand Axe",
      image:
        "https://eldenring.fanapis.com/images/weapons/17f69c35d2cl0i1oh7zuqfb3mdvsj.png",
      description:
        "Commonly known as a hatchet, this smaller variety of axe is an everyday work tool. Despite its short reach, it is easy to handle, exceling in successive attacks.",
      type: "Axe",
      category: categories[2]._id,
      price: 3000,
    },
    {
      name: "Jawbone Axe",
      image:
        "https://eldenring.fanapis.com/images/weapons/17f69667224l0i1ohar280aeoxkl6z.png",
      description:
        "Axe made from a herbivore's skull. Weapon of the ancestral followers who disdain metal. This axe is more of a bludgeon; it forgoes a bladed edge, instead using the beast's molar teeth to buffet foes, dealing strike damage.",
      type: "Axe",
      category: categories[2]._id,
      price: 5000,
    },
    {
      name: "Iron Cleaver",
      image:
        "https://eldenring.fanapis.com/images/weapons/17f69c6388cl0i1ohcb8denrbpuhqs.png",
      description:
        "Fairly large iron cleaver, commonly used by the maltreated Misbegotten.  Steeped in resentment, these weapons are swung wildly and relentlessly, often after rushing up to foes. ",
      type: "Axe",
      category: categories[2]._id,
      price: 4000,
    },
    {
      name: "Bloodhound's Fang",
      image:
        "https://eldenring.fanapis.com/images/weapons/17f697d9a68l0i1oqeay5e8bb4oc3g.png",
      description:
        "Curved greatsword with a gently undulating blade wielded by Bloodhound Knights. A fearsome blade capable of brutal airborne attacks.",
      type: "Curven Greatsword",
      category: categories[2]._id,
      price: 10000,
    },
    {
      name: "Jar Cannon",
      image:
        "https://eldenring.fanapis.com/images/weapons/17f69dd8093l0i1oj6x6qo6tg76q8.png",
      description:
        "Jar cannon which uses explosives to fire greatbolts. Deals great damage but is slow to reload.  Experimental firearm brought to the assault on Volcano Manor, where it was discovered that no one knew how to use it.",
      type: "Ballista",
      category: categories[2]._id,
      price: 8000,
    },
    {
      name: "Longbow",
      image:
        "https://eldenring.fanapis.com/images/weapons/17f69d12746l0i1ojbzxzgz6gfjsi.png",
      description:
        "Longbow made to fire arrows over great distances. Compared to a shortbow, arrows fired reach further and deal more damage. To use a bow, arrows must also be equipped. ",
      type: "Bow",
      category: categories[2]._id,
      price: 1000,
      //weapon end
    },
    {
      //talismans start
      name: "Arsenal Charm",
      image:
        "https://eldenring.fanapis.com/images/talismans/17f69659e33l0i2soj4uhpxf54ncje.png",
      description:
        "An iron charm that resembles a mass of weaponry. Boosts maximum equipment load. This talisman was derived from an unusual greatsword, once wielded by a hero hungry for vengeance.",
      type: "talisman",
      category: categories[3]._id,
      price: 3000,
    },
    {
      name: "Assassin's Cerulean Dagger",
      image:
        "https://eldenring.fanapis.com/images/talismans/17f69d47ea5l0i2sokp40249x3da4f.png",
      description:
        "An assassin's dagger, misshapen and stained in cerulean. Critical hits restore FP.",
      type: "Talisman",
      category: categories[3]._id,
      price: 5000,
    },
    {
      name: "Claw Talisman",
      image:
        "https://eldenring.fanapis.com/images/weapons/17f69c6388cl0i1ohcb8denrbpuhqs.png",
      description:
        "https://eldenring.fanapis.com/images/talismans/17f69ba1d62l0i2sq92f4o8t2tlzp7.png",
      type: "Talisman",
      category: categories[3]._id,
      price: 4000,
    },
    {
      name: "Crimson Amber Medallion",
      image:
        "https://eldenring.fanapis.com/images/weapons/17f697d9a68l0i1oqeay5e8bb4oc3g.png",
      description:
        "https://eldenring.fanapis.com/images/talismans/17f699e5a9dl0i2sqsk8mpabyj9mm4.png",
      type: "Talisman",
      category: categories[3]._id,
      price: 2000,
    },
    {
      name: "Crepus's Vial",
      image:
        "https://eldenring.fanapis.com/images/talismans/17f69b7aec7l0i2sqw1x7ajlmzguyi.png",
      description: "Small mysterious bottle with a dark mist sealed within.",
      type: "Talisman",
      category: categories[3]._id,
      price: 4000,
    },
    {
      name: "Curved Sword Talisman",
      image:
        "https://eldenring.fanapis.com/images/talismans/17f69ed2edfl0i2sqxgpadu0gprbn.png",
      description:
        "A talisman depicting a curved sword and a swordsman. Enhances guard counters.",
      type: "Talisman",
      category: categories[3]._id,
      price: 3000,
      //talismans end
    },
    {
      //sorceries start
      name: "Ambush Shard",
      image:
        "https://eldenring.fanapis.com/images/sorceries/17f69548207l0hykrjxtjpw45plt0o.png",
      description:
        "One of the night sorceries of Sellia, Town of Sorcery. Launches a projectile from a distance removed from the caster, so as to strike the enemy from behind. This sorcery can be cast repeatedly. The Sellian sorcerers were assassins, and it is said that they often hunted their fellows.",
      type: "sorceries",
      category: categories[4]._id,
      price: 3000,
    },
    {
      name: "Adula's Moonblade",
      image:
        "https://eldenring.fanapis.com/images/sorceries/17f69501669l0hykrly1hkzqhsjkgf.png",
      description:
        "Sorcery of Adula, the Glintstone Dragon. Conjures a cold magic greatsword, then delivers a sweeping blow that launches a blade-like projectile of frost. This sorcery can be cast repeatedly. Adula, a devourer of sorcerers, was bested by Ranni and subsequently swore a knightly oath to her Dark Moon.",
      type: "sorceries",
      category: categories[4]._id,
      price: 5000,
    },
    {
      name: "Carian Greatsword",
      image:
        "https://eldenring.fanapis.com/images/sorceries/17f698158cbl0hykro1lrfmqwblslj.png",
      description:
        "One of the sorceries of the Carian royal family. Conjures a magic greatsword and then delivers a sweeping blow. This sorcery can be cast repeatedly. Armed with this spell, sorcerers gain the strength of knights, their loyalty sworn to the moon.",
      type: "sorceries",
      category: categories[4]._id,
      price: 4000,
    },
    {
      name: "Crystal Barrage",
      image:
        "https://eldenring.fanapis.com/images/sorceries/17f697a3cebl0hykt5z1wd5xboo99x.png",
      description:
        "One of the glintstone sorceries of the Academy of Raya Lucaria.",
      type: "sorceries",
      category: categories[4]._id,
      price: 2000,
    },
    {
      name: "Comet Azur",
      image:
        "https://eldenring.fanapis.com/images/sorceries/17f69383db4l0hykt8reipbquz8e6t.png",
      description:
        "Legendary sorcery devised by Azur, primeval sorcerer. Fires a tremendous comet in a torrent akin to the distant starry expanse, the place said to be the origin of glintstone. Hold to continue releasing the sorcery's power. When Azur glimpsed into the primeval current, he saw darkness. He was left both bewitched and fearful of the abyss.",
      type: "sorceries",
      category: categories[4]._id,
      price: 10000,
    },
    {
      name: "Eternal Darkness",
      image:
        "https://eldenring.fanapis.com/images/sorceries/17f696b6eael0hykuqvnuxlujdx0r9.png",
      description: "Forbidden sorcery of Sellia, Town of Sorcery. ",
      type: "sorceries",
      category: categories[4]._id,
      price: 3000,
      //talismans end
    },
  ]);

  console.log("products seeded");

  process.exit();
});
