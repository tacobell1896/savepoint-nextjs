const games = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    description:
      "Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
  },
  {
    id: 2,
    name: "The Witcher 3: Wild Hunt",
    description:
      "The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. The game is the third main installment in the Witcher series, based on The Witcher novels by Andrzej Sapkowski. Players control Geralt of Rivia, a monster hunter known as a Witcher. Geralt walks, runs, rolls and dodges, and jumps, climbs, and swims.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
  },
  {
    id: 3,
    name: "Red Dead Redemption 2",
    description:
      "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 in a fictionalized representation of the Western, Midwestern, and Southern United States and follows outlaw Arthur Morgan, a member of the Van der Linde gang.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
  },
  {
    id: 4,
    name: "The Elder Scrolls V: Skyrim",
    description:
      "The Elder Scrolls V: Skyrim is a 2011 action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion. The game's main story revolves around the player character's quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png",
  },
  {
    id: 5,
    name: "Grand Theft Auto V",
    description:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. The game is played from either a third-person or first-person perspective and its world is navigated on foot or by vehicle.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
  },
];

const notes = [
  {
    id: 1,
    game_id: games[0].id,
    title: "Cyberpunk 2077 Review",
    content:
      "Cyberpunk 2077 is a great game with a lot of potential. The story is engaging and the world is beautiful. However, the game is plagued with bugs and performance issues. CD Projekt has promised to fix these issues in future updates.",
    create_date: "2024-09-03",
  },
  {
    id: 2,
    game_id: games[1].id,
    title: "The Witcher 3 Review",
    content:
      "The Witcher 3 is a masterpiece. The story is deep and engaging, the characters are well-developed, and the world is vast and beautiful. The combat is challenging and rewarding. CD Projekt has created a truly immersive experience that will keep you coming back for more.",
    create_date: "2024-09-03",
  },
  {
    id: 3,
    game_id: games[2].id,
    title: "Red Dead Redemption 2 Review",
    content:
      "Red Dead Redemption 2 is a stunning achievement. The story is epic and emotional, the characters are complex and well-written, and the world is breathtakingly beautiful. Rockstar has created a living, breathing world that feels alive and immersive. This is a game that will stay with you long after you finish it.",
    create_date: "2024-09-03",
  },
  {
    id: 4,
    game_id: games[3].id,
    title: "Skyrim Review",
    content:
      "Skyrim is a classic. The world is vast and full of things to do, the story is engaging, and the characters are memorable. The combat is simple but satisfying, and the exploration is rewarding. Bethesda has created a game that will keep you entertained for hours on end.",
    create_date: "2024-09-03",
  },
  {
    id: 5,
    game_id: games[4].id,
    title: "GTA V Review",
    content:
      "GTA V is a modern classic. The story is engaging and the characters are memorable.",
    create_date: "2024-09-03",
  },
];

module.exports = {
  games,
  notes,
};
