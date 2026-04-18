import { Question } from "../store/useGameStore";

const makeAnswers = (arr: string[]): any[] =>
  arr.map((text, i) => ({
    text,
    points: 100 - i * 3,
    revealed: false,
  }));

export const questions = [
  // ROUND 1 (Q1–Q35)

  {
    question: "Name an app or website or game, people check first thing in the morning",
    answers: [
      { text: "Alarm Clock App", points: 100, revealed: false, revealType: null },
      { text: "WhatsApp", points: 97, revealed: false, revealType: null },
      { text: "Instagram", points: 94, revealed: false, revealType: null },
      { text: "YouTube", points: 91, revealed: false, revealType: null },
      { text: "Snapchat", points: 88, revealed: false, revealType: null },
      { text: "Google", points: 85, revealed: false, revealType: null },
      { text: "Gmail / Outlook", points: 82, revealed: false, revealType: null },
      { text: "X / Twitter", points: 79, revealed: false, revealType: null },
      { text: "LinkedIn", points: 76, revealed: false, revealType: null },
      { text: "Amizone", points: 73, revealed: false, revealType: null },
      { text: "Spotify", points: 70, revealed: false, revealType: null },
      { text: "Reddit", points: 67, revealed: false, revealType: null },
      { text: "Clash Royale", points: 64, revealed: false, revealType: null },
      { text: "Settings", points: 61, revealed: false, revealType: null },
      { text: "Weather App", points: 58, revealed: false, revealType: null },
      { text: "Telegram", points: 55, revealed: false, revealType: null },
      { text: "BGMI", points: 52, revealed: false, revealType: null },
      { text: "Zomato", points: 49, revealed: false, revealType: null },
      { text: "Clash of Clans", points: 46, revealed: false, revealType: null },
      { text: "Calendar", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name a common excuse a student uses for being late",
    answers: [
      { text: "Metro was delayed", points: 100, revealed: false, revealType: null },
      { text: "Kalindi Kunj traffic jam", points: 97, revealed: false, revealType: null },
      { text: "Alarm didn't go off", points: 94, revealed: false, revealType: null },
      { text: "Over-slept", points: 91, revealed: false, revealType: null },
      { text: "Not feeling well / Sick", points: 88, revealed: false, revealType: null },
      { text: "Stuck at the Amity main gate/security", points: 85, revealed: false, revealType: null },
      { text: "Auto/Cab cancelled on me", points: 82, revealed: false, revealType: null },
      { text: "Couldn't find parking", points: 79, revealed: false, revealType: null },
      { text: "Family emergency", points: 76, revealed: false, revealType: null },
      { text: "Thought class cancelled", points: 73, revealed: false, revealType: null },
      { text: "Heavy rain", points: 70, revealed: false, revealType: null },
      { text: "Left ID at home", points: 67, revealed: false, revealType: null },
      { text: "Roommate locked me in", points: 64, revealed: false, revealType: null },
      { text: "Lift broken", points: 61, revealed: false, revealType: null },
      { text: "Helping friend", points: 58, revealed: false, revealType: null },
      { text: "Bus broke down", points: 55, revealed: false, revealType: null },
      { text: "Printing assignment", points: 52, revealed: false, revealType: null },
      { text: "Stomach bug", points: 49, revealed: false, revealType: null },
      { text: "Power cut", points: 46, revealed: false, revealType: null },
      { text: "Dog ate homework", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name a banned item that is kept hidden during hostel room checks",
    answers: [
      { text: "Harmful Consumables", points: 100, revealed: false, revealType: null },
      { text: "Induction / Hot Plate", points: 97, revealed: false, revealType: null },
      { text: "Electric Kettle", points: 94, revealed: false, revealType: null },
      { text: "Iron", points: 91, revealed: false, revealType: null },
      { text: "Room Heater", points: 88, revealed: false, revealType: null },
      { text: "Explosives", points: 85, revealed: false, revealType: null },
      { text: "Outside Food", points: 82, revealed: false, revealType: null },
      { text: "Lighter / Matchbox", points: 79, revealed: false, revealType: null },
      { text: "Toaster", points: 76, revealed: false, revealType: null },
      { text: "Pets", points: 73, revealed: false, revealType: null },
      { text: "Hookah", points: 70, revealed: false, revealType: null },
      { text: "Firecrackers", points: 67, revealed: false, revealType: null },
      { text: "Colours", points: 64, revealed: false, revealType: null },
      { text: "Knife", points: 61, revealed: false, revealType: null },
      { text: "Unwanted Medications", points: 58, revealed: false, revealType: null },
      { text: "Coffee Maker", points: 55, revealed: false, revealType: null },
      { text: "Candles", points: 52, revealed: false, revealType: null },
      { text: "Gaming Console", points: 49, revealed: false, revealType: null },
      { text: "String Lights", points: 46, revealed: false, revealType: null },
      { text: "Arms", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name something college students spend most of their budget on",
    answers: [
      { text: "Coffee / Chai", points: 100, revealed: false, revealType: null },
      { text: "Food / Cafeteria / Balli snacks", points: 97, revealed: false, revealType: null },
      { text: "Zomato / Swiggy orders", points: 94, revealed: false, revealType: null },
      { text: "Traveling / Cabs / Auto fares", points: 91, revealed: false, revealType: null },
      { text: "Dates", points: 88, revealed: false, revealType: null },
      { text: "Parties / Clubbing", points: 85, revealed: false, revealType: null },
      { text: "Harmful Consumables", points: 82, revealed: false, revealType: null },
      { text: "Vending Machines", points: 79, revealed: false, revealType: null },
      { text: "Clothes / Fashion", points: 76, revealed: false, revealType: null },
      { text: "Streaming Subscriptions", points: 73, revealed: false, revealType: null },
      { text: "Video Games / In-app purchases", points: 70, revealed: false, revealType: null },
      { text: "Mobile Recharge / Wi-Fi", points: 67, revealed: false, revealType: null },
      { text: "Gym Supplements", points: 64, revealed: false, revealType: null },
      { text: "Concerts / Fest passes", points: 61, revealed: false, revealType: null },
      { text: "Stationery / Printouts", points: 58, revealed: false, revealType: null },
      { text: "Gadgets / Electronics", points: 55, revealed: false, revealType: null },
      { text: "Grooming / Salons", points: 52, revealed: false, revealType: null },
      { text: "Shoes / Sneakers", points: 49, revealed: false, revealType: null },
      { text: "Gifts for friends/partners", points: 46, revealed: false, revealType: null },
      { text: "Late Fees / Fines", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name an app that is most definitely open on a college student's phone right now",
    answers: [
      { text: "Instagram", points: 100, revealed: false, revealType: null },
      { text: "WhatsApp", points: 97, revealed: false, revealType: null },
      { text: "Phone / Dialer", points: 94, revealed: false, revealType: null },
      { text: "Amizone", points: 91, revealed: false, revealType: null },
      { text: "Spotify", points: 88, revealed: false, revealType: null },
      { text: "YouTube", points: 85, revealed: false, revealType: null },
      { text: "Chrome / Safari Browser", points: 82, revealed: false, revealType: null },
      { text: "Google Pay / Paytm", points: 79, revealed: false, revealType: null },
      { text: "Snapchat", points: 76, revealed: false, revealType: null },
      { text: "Zomato / Swiggy", points: 73, revealed: false, revealType: null },
      { text: "Calculator", points: 70, revealed: false, revealType: null },
      { text: "Uber / Ola / Rapido", points: 67, revealed: false, revealType: null },
      { text: "ChatGPT", points: 64, revealed: false, revealType: null },
      { text: "Google Docs / Drive", points: 61, revealed: false, revealType: null },
      { text: "Notes App", points: 58, revealed: false, revealType: null },
      { text: "Gmail", points: 55, revealed: false, revealType: null },
      { text: "Random Mobile Game", points: 52, revealed: false, revealType: null },
      { text: "X / Twitter", points: 49, revealed: false, revealType: null },
      { text: "LinkedIn", points: 46, revealed: false, revealType: null },
      { text: "Myntra / Amazon", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name something people do when internet stops working",
    answers: [
      { text: "Toggle Airplane Mode", points: 100, revealed: false, revealType: null },
      { text: "Restart the Router", points: 97, revealed: false, revealType: null },
      { text: "Check if mobile data works", points: 94, revealed: false, revealType: null },
      { text: "Curse the Wi-Fi provider / Amity Wi-Fi", points: 91, revealed: false, revealType: null },
      { text: "Play the Chrome Dino Game", points: 88, revealed: false, revealType: null },
      { text: "Refresh the page repeatedly", points: 85, revealed: false, revealType: null },
      { text: "Ask roommate if theirs is working", points: 82, revealed: false, revealType: null },
      { text: "Go to sleep", points: 79, revealed: false, revealType: null },
      { text: "Open offline games", points: 76, revealed: false, revealType: null },
      { text: "Stare at the router lights", points: 73, revealed: false, revealType: null },
      { text: "Call customer care", points: 70, revealed: false, revealType: null },
      { text: "Read a book", points: 67, revealed: false, revealType: null },
      { text: "Clean their room", points: 64, revealed: false, revealType: null },
      { text: "Scroll through old offline photos", points: 61, revealed: false, revealType: null },
      { text: "Take a walk", points: 58, revealed: false, revealType: null },
      { text: "Call a friend on a normal cellular network", points: 55, revealed: false, revealType: null },
      { text: "Complain on WhatsApp (if mobile data works)", points: 52, revealed: false, revealType: null },
      { text: "Actually do homework/assignments", points: 49, revealed: false, revealType: null },
      { text: "Smack the router", points: 46, revealed: false, revealType: null },
      { text: "Check connection cables", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name a bug that people don't mind having around",
    answers: [
      { text: "Ladybug", points: 100, revealed: false, revealType: null },
      { text: "Butterfly", points: 97, revealed: false, revealType: null },
      { text: "Firefly / Lightning bug", points: 94, revealed: false, revealType: null },
      { text: "Roly-poly / Pillbug", points: 91, revealed: false, revealType: null },
      { text: "Earthworm", points: 88, revealed: false, revealType: null },
      { text: "Caterpillar", points: 85, revealed: false, revealType: null },
      { text: "Dragonfly", points: 82, revealed: false, revealType: null },
      { text: "Bumblebee", points: 79, revealed: false, revealType: null },
      { text: "Silkworm", points: 76, revealed: false, revealType: null },
      { text: "Ant", points: 73, revealed: false, revealType: null },
      { text: "Daddy Longlegs", points: 70, revealed: false, revealType: null },
      { text: "Stick Insect", points: 67, revealed: false, revealType: null },
      { text: "Moth", points: 64, revealed: false, revealType: null },
      { text: "Beetle", points: 61, revealed: false, revealType: null },
      { text: "Cricket", points: 58, revealed: false, revealType: null },
      { text: "Grasshopper", points: 55, revealed: false, revealType: null },
      { text: "Snail", points: 52, revealed: false, revealType: null },
      { text: "Centipede", points: 49, revealed: false, revealType: null },
      { text: "Spider", points: 46, revealed: false, revealType: null },
      { text: "Praying Mantis", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name a household chore that people put off for long as possible",
    answers: [
      { text: "Laundry / Washing clothes", points: 100, revealed: false, revealType: null },
      { text: "Washing the dishes", points: 97, revealed: false, revealType: null },
      { text: "Folding clothes", points: 94, revealed: false, revealType: null },
      { text: "Cleaning the bathroom/toilet", points: 91, revealed: false, revealType: null },
      { text: "Changing bedsheets", points: 88, revealed: false, revealType: null },
      { text: "Ironing", points: 85, revealed: false, revealType: null },
      { text: "Sweeping / Mopping", points: 82, revealed: false, revealType: null },
      { text: "Dusting", points: 79, revealed: false, revealType: null },
      { text: "Cleaning the fridge", points: 76, revealed: false, revealType: null },
      { text: "Organizing the closet", points: 73, revealed: false, revealType: null },
      { text: "Taking out the trash", points: 70, revealed: false, revealType: null },
      { text: "Cleaning the ceiling fan", points: 67, revealed: false, revealType: null },
      { text: "Washing windows", points: 64, revealed: false, revealType: null },
      { text: "Vacuuming", points: 61, revealed: false, revealType: null },
      { text: "Cleaning the oven/microwave", points: 58, revealed: false, revealType: null },
      { text: "Sorting out the junk drawer", points: 55, revealed: false, revealType: null },
      { text: "Washing shoes", points: 52, revealed: false, revealType: null },
      { text: "Watering plants", points: 49, revealed: false, revealType: null },
      { text: "Decluttering the desk", points: 46, revealed: false, revealType: null },
      { text: "Cleaning the sink drain", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name something one does when he/she can't fall asleep",
    answers: [
      { text: "Scroll Instagram Reels", points: 100, revealed: false, revealType: null },
      { text: "Overthink life choices", points: 97, revealed: false, revealType: null },
      { text: "Listen to music / Lo-Fi beats", points: 94, revealed: false, revealType: null },
      { text: "Watch a movie / YouTube", points: 91, revealed: false, revealType: null },
      { text: "Count sheep", points: 88, revealed: false, revealType: null },
      { text: "Read a book", points: 85, revealed: false, revealType: null },
      { text: "Drink warm milk / water", points: 82, revealed: false, revealType: null },
      { text: "Toss and turn", points: 79, revealed: false, revealType: null },
      { text: "Meditate / Deep breathing", points: 76, revealed: false, revealType: null },
      { text: "Text friends to see who else is awake", points: 73, revealed: false, revealType: null },
      { text: "Plan fake arguments in your head", points: 70, revealed: false, revealType: null },
      { text: "Stare at the ceiling", points: 67, revealed: false, revealType: null },
      { text: "Calculate exactly how much will you sleep", points: 64, revealed: false, revealType: null },
      { text: "Listen to a podcast", points: 61, revealed: false, revealType: null },
      { text: "Play a mobile game", points: 58, revealed: false, revealType: null },
      { text: "Get up and walk around", points: 55, revealed: false, revealType: null },
      { text: "Take a warm shower", points: 52, revealed: false, revealType: null },
      { text: "Write in a journal", points: 49, revealed: false, revealType: null },
      { text: "Turn the pillow to the cold side", points: 46, revealed: false, revealType: null },
      { text: "Eat a midnight snack", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name a popular video game franchise that has been running for over 10 years",
    answers: [
      { text: "Grand Theft Auto / GTA", points: 100, revealed: false, revealType: null },
      { text: "FIFA / EA Sports FC", points: 97, revealed: false, revealType: null },
      { text: "Call of Duty", points: 94, revealed: false, revealType: null },
      { text: "Minecraft", points: 91, revealed: false, revealType: null },
      { text: "Pokémon", points: 88, revealed: false, revealType: null },
      { text: "God of War", points: 85, revealed: false, revealType: null },
      { text: "Counter-Strike / CS:GO", points: 82, revealed: false, revealType: null },
      { text: "Assassin's Creed", points: 79, revealed: false, revealType: null },
      { text: "Super Mario", points: 76, revealed: false, revealType: null },
      { text: "Metroid", points: 73, revealed: false, revealType: null },
      { text: "The Legend of Zelda", points: 70, revealed: false, revealType: null },
      { text: "Final Fantasy", points: 67, revealed: false, revealType: null },
      { text: "Need for Speed", points: 64, revealed: false, revealType: null },
      { text: "Resident Evil", points: 61, revealed: false, revealType: null },
      { text: "Halo", points: 58, revealed: false, revealType: null },
      { text: "World of Warcraft", points: 55, revealed: false, revealType: null },
      { text: "Tomb Raider", points: 52, revealed: false, revealType: null },
      { text: "Mortal Kombat", points: 49, revealed: false, revealType: null },
      { text: "League of Legends", points: 46, revealed: false, revealType: null },
      { text: "Dota", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name an item you are likely to find in a household junk drawer",
    answers: [
      { text: "Old charger cables / wires", points: 100, revealed: false, revealType: null },
      { text: "Rubber bands", points: 97, revealed: false, revealType: null },
      { text: "Dead / Random batteries", points: 94, revealed: false, revealType: null },
      { text: "Safety pins", points: 91, revealed: false, revealType: null },
      { text: "Old keys", points: 88, revealed: false, revealType: null },
      { text: "Pens that don't work anymore", points: 85, revealed: false, revealType: null },
      { text: "Tape / Cello-tape", points: 82, revealed: false, revealType: null },
      { text: "Takeout menus", points: 79, revealed: false, revealType: null },
      { text: "Paperclips", points: 76, revealed: false, revealType: null },
      { text: "Scissors", points: 73, revealed: false, revealType: null },
      { text: "Screwdriver", points: 70, revealed: false, revealType: null },
      { text: "Super Glue / Fevikwik", points: 67, revealed: false, revealType: null },
      { text: "Loose coins", points: 64, revealed: false, revealType: null },
      { text: "Matches / Lighter", points: 61, revealed: false, revealType: null },
      { text: "Extra shirt buttons", points: 58, revealed: false, revealType: null },
      { text: "Flashlight / Torch", points: 55, revealed: false, revealType: null },
      { text: "Rubber erasers", points: 52, revealed: false, revealType: null },
      { text: "Twist ties", points: 49, revealed: false, revealType: null },
      { text: "Expired coupons / old bills", points: 46, revealed: false, revealType: null },
      { text: "Push pins / Thumb tacks", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name an app tool or feature that comes pre installed on a new smartphone",
    answers: [
      { text: "Calculator", points: 100, revealed: false, revealType: null },
      { text: "Clock / Alarm", points: 97, revealed: false, revealType: null },
      { text: "Camera", points: 94, revealed: false, revealType: null },
      { text: "Settings", points: 91, revealed: false, revealType: null },
      { text: "Messages / SMS", points: 88, revealed: false, revealType: null },
      { text: "Phone / Dialer", points: 85, revealed: false, revealType: null },
      { text: "Contacts", points: 82, revealed: false, revealType: null },
      { text: "Calendar", points: 79, revealed: false, revealType: null },
      { text: "Maps", points: 76, revealed: false, revealType: null },
      { text: "Weather", points: 73, revealed: false, revealType: null },
      { text: "Notes / Memo", points: 70, revealed: false, revealType: null },
      { text: "Browser / Safari / Chrome", points: 67, revealed: false, revealType: null },
      { text: "Gallery / Photos", points: 64, revealed: false, revealType: null },
      { text: "Voice Recorder", points: 61, revealed: false, revealType: null },
      { text: "App Store / Play Store", points: 58, revealed: false, revealType: null },
      { text: "Email / Gmail", points: 55, revealed: false, revealType: null },
      { text: "File Manager", points: 52, revealed: false, revealType: null },
      { text: "Compass", points: 49, revealed: false, revealType: null },
      { text: "Music Player", points: 46, revealed: false, revealType: null },
      { text: "Flashlight", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name a piece of tech or appliance that plugs into an outlet",
    answers: [
      { text: "Phone Charger", points: 100, revealed: false, revealType: null },
      { text: "Laptop Charger", points: 97, revealed: false, revealType: null },
      { text: "Television", points: 94, revealed: false, revealType: null },
      { text: "Refrigerator", points: 91, revealed: false, revealType: null },
      { text: "Microwave", points: 88, revealed: false, revealType: null },
      { text: "Iron", points: 85, revealed: false, revealType: null },
      { text: "Wi-Fi Router", points: 82, revealed: false, revealType: null },
      { text: "Toaster", points: 79, revealed: false, revealType: null },
      { text: "Hair Dryer", points: 76, revealed: false, revealType: null },
      { text: "Air Conditioner", points: 73, revealed: false, revealType: null },
      { text: "Washing Machine", points: 70, revealed: false, revealType: null },
      { text: "Desktop Computer / PC", points: 67, revealed: false, revealType: null },
      { text: "Electric Kettle", points: 64, revealed: false, revealType: null },
      { text: "Desk Lamp", points: 61, revealed: false, revealType: null },
      { text: "Room Heater", points: 58, revealed: false, revealType: null },
      { text: "Coffee Maker", points: 55, revealed: false, revealType: null },
      { text: "Vacuum Cleaner", points: 52, revealed: false, revealType: null },
      { text: "Gaming Console", points: 49, revealed: false, revealType: null },
      { text: "Extension Cord", points: 46, revealed: false, revealType: null },
      { text: "Blender / Mixer", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name something a student does 5 minutes before an exam",
    answers: [
      { text: "Cram / Mug up notes", points: 100, revealed: false, revealType: null },
      { text: "Pray to God", points: 97, revealed: false, revealType: null },
      { text: "Ask a friend for a summary", points: 94, revealed: false, revealType: null },
      { text: "Panic / Freak out", points: 91, revealed: false, revealType: null },
      { text: "Check seating arrangement", points: 88, revealed: false, revealType: null },
      { text: "Hide chits / cheating material", points: 85, revealed: false, revealType: null },
      { text: "Fill out the OMR sheet / roll number details", points: 82, revealed: false, revealType: null },
      { text: "Beg for extra pens/pencils/calculators", points: 79, revealed: false, revealType: null },
      { text: "Go to the washroom", points: 76, revealed: false, revealType: null },
      { text: "Discuss most important topics", points: 73, revealed: false, revealType: null },
      { text: "Regret not studying earlier", points: 70, revealed: false, revealType: null },
      { text: "Chug water", points: 67, revealed: false, revealType: null },
      { text: "Check if phone is switched off and in bag", points: 64, revealed: false, revealType: null },
      { text: "Take a deep breath", points: 61, revealed: false, revealType: null },
      { text: "Look at past year papers one last time", points: 58, revealed: false, revealType: null },
      { text: "Highlight keywords", points: 55, revealed: false, revealType: null },
      { text: "Calculate passing marks", points: 52, revealed: false, revealType: null },
      { text: "Text parents/friends for luck", points: 49, revealed: false, revealType: null },
      { text: "Organize their desk", points: 46, revealed: false, revealType: null },
      { text: "Try to memorize one last complex formula", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name something a student does to stay awake",
    answers: [
      { text: "Drink Coffee", points: 100, revealed: false, revealType: null },
      { text: "Drink Energy Drinks / Red Bull", points: 97, revealed: false, revealType: null },
      { text: "Splash cold water on face", points: 94, revealed: false, revealType: null },
      { text: "Drink Chai", points: 91, revealed: false, revealType: null },
      { text: "Doomscroll on phone", points: 88, revealed: false, revealType: null },
      { text: "Walk / Pace around the room", points: 85, revealed: false, revealType: null },
      { text: "Listen to loud music", points: 82, revealed: false, revealType: null },
      { text: "Pinch or slap themselves", points: 79, revealed: false, revealType: null },
      { text: "Eat snacks / chew gum", points: 76, revealed: false, revealType: null },
      { text: "Study with friends / Group study call", points: 73, revealed: false, revealType: null },
      { text: "Sit on a hard chair instead of the bed", points: 70, revealed: false, revealType: null },
      { text: "Take a cold shower", points: 67, revealed: false, revealType: null },
      { text: "Turn on all the lights", points: 64, revealed: false, revealType: null },
      { text: "Watch a horror video", points: 61, revealed: false, revealType: null },
      { text: "Call a friend", points: 58, revealed: false, revealType: null },
      { text: "Do pushups / stretching", points: 55, revealed: false, revealType: null },
      { text: "Set 15 different alarms", points: 52, revealed: false, revealType: null },
      { text: "Open a window for fresh cold air", points: 49, revealed: false, revealType: null },
      { text: "Read aloud", points: 46, revealed: false, revealType: null },
      { text: "Smoke", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name a message you are guaranteed to see in your class WhatsApp group",
    answers: [
      { text: "Is there class today?", points: 100, revealed: false, revealType: null },
      { text: "Attendance lagwa dena please", points: 97, revealed: false, revealType: null },
      { text: "Notes bhej do", points: 94, revealed: false, revealType: null },
      { text: "Viva Kab Hai", points: 91, revealed: false, revealType: null },
      { text: "Kal chutti hai?", points: 88, revealed: false, revealType: null },
      { text: "Assignment kab submit karna hai?", points: 85, revealed: false, revealType: null },
      { text: "Syllabus kya hai?", points: 82, revealed: false, revealType: null },
      { text: "Class kidhar hai?", points: 79, revealed: false, revealType: null },
      { text: "Extra class tomorrow", points: 76, revealed: false, revealType: null },
      { text: "Result aa gaya", points: 73, revealed: false, revealType: null },
      { text: "Happy birthday", points: 70, revealed: false, revealType: null },
      { text: "Are we getting a free period?", points: 67, revealed: false, revealType: null },
      { text: "Can someone share the PDF?", points: 64, revealed: false, revealType: null },
      { text: "Ma'am aayi hai kya?", points: 61, revealed: false, revealType: null },
      { text: "Cancel class please", points: 58, revealed: false, revealType: null },
      { text: "Send past year papers", points: 55, revealed: false, revealType: null },
      { text: "Whose item is this?", points: 52, revealed: false, revealType: null },
      { text: "Borrow an item for tomorrow", points: 49, revealed: false, revealType: null },
      { text: "Asking to hangout", points: 46, revealed: false, revealType: null },
      { text: "Mass Bunk", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name a daily struggle for a student who commutes to campus instead of living in a dorm",
    answers: [
      { text: "Traffic", points: 100, revealed: false, revealType: null },
      { text: "Finding a seat in the Metro", points: 97, revealed: false, revealType: null },
      { text: "Waking up super early", points: 94, revealed: false, revealType: null },
      { text: "Auto drivers overcharging / haggling", points: 91, revealed: false, revealType: null },
      { text: "Carrying heavy bags / laptops all day", points: 88, revealed: false, revealType: null },
      { text: "Delhi/Noida heat and sweating before class", points: 85, revealed: false, revealType: null },
      { text: "Missing out on hostel late-night plans/gossip", points: 82, revealed: false, revealType: null },
      { text: "Finding parking near campus", points: 79, revealed: false, revealType: null },
      { text: "Long travel times draining all energy", points: 76, revealed: false, revealType: null },
      { text: "Forgetting something at home and not being able to go back", points: 73, revealed: false, revealType: null },
      { text: "Metro card running out of balance", points: 70, revealed: false, revealType: null },
      { text: "Waiting in long lines for e-rickshaws", points: 67, revealed: false, revealType: null },
      { text: "Rushing out to catch the last bus", points: 64, revealed: false, revealType: null },
      { text: "Can't take random naps between classes", points: 61, revealed: false, revealType: null },
      { text: "Rain / Flooded roads completely ruining the commute", points: 58, revealed: false, revealType: null },
      { text: "Smelly co-passengers", points: 55, revealed: false, revealType: null },
      { text: "Figuring out lunch / carrying a tiffin box", points: 52, revealed: false, revealType: null },
      { text: "Dealing with parents' strict curfews", points: 49, revealed: false, revealType: null },
      { text: "No place to crash during long 3-hour breaks", points: 46, revealed: false, revealType: null },
      { text: "Security checks taking too long", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name a word students overuse when trying to bulk up their first resume",
    answers: [
      { text: "Hardworking", points: 100, revealed: false, revealType: null },
      { text: "Enthusiastic", points: 97, revealed: false, revealType: null },
      { text: "Team-player", points: 94, revealed: false, revealType: null },
      { text: "Passionate", points: 91, revealed: false, revealType: null },
      { text: "Dedicated", points: 88, revealed: false, revealType: null },
      { text: "Leadership", points: 85, revealed: false, revealType: null },
      { text: "Motivated", points: 82, revealed: false, revealType: null },
      { text: "Communication skills", points: 79, revealed: false, revealType: null },
      { text: "Problem-solver", points: 76, revealed: false, revealType: null },
      { text: "Fast learner", points: 73, revealed: false, revealType: null },
      { text: "Dynamic", points: 70, revealed: false, revealType: null },
      { text: "Proactive", points: 67, revealed: false, revealType: null },
      { text: "Detail-oriented", points: 64, revealed: false, revealType: null },
      { text: "Goal-oriented", points: 61, revealed: false, revealType: null },
      { text: "Synergize", points: 58, revealed: false, revealType: null },
      { text: "Organized", points: 55, revealed: false, revealType: null },
      { text: "Innovative", points: 52, revealed: false, revealType: null },
      { text: "Ambitious", points: 49, revealed: false, revealType: null },
      { text: "Flexible / Adaptable", points: 46, revealed: false, revealType: null },
      { text: "Strategic", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name the real reason students get excited about fests",
    answers: [
      { text: "Celebrity / Star Night / Concerts", points: 100, revealed: false, revealType: null },
      { text: "No classes", points: 97, revealed: false, revealType: null },
      { text: "Dressing up", points: 94, revealed: false, revealType: null },
      { text: "Hooking up", points: 91, revealed: false, revealType: null },
      { text: "Free food / Goodies / Stalls", points: 88, revealed: false, revealType: null },
      { text: "Clicking aesthetic photos", points: 85, revealed: false, revealType: null },
      { text: "Partying / DJ Night", points: 82, revealed: false, revealType: null },
      { text: "Hanging out with friends", points: 79, revealed: false, revealType: null },
      { text: "Getting drunk", points: 76, revealed: false, revealType: null },
      { text: "Late campus entry/exit timings allowed", points: 73, revealed: false, revealType: null },
      { text: "Performing on stage", points: 70, revealed: false, revealType: null },
      { text: "Competing in events/hackathons", points: 67, revealed: false, revealType: null },
      { text: "Meeting students from other colleges", points: 64, revealed: false, revealType: null },
      { text: "Getting Organizing Committee tags to flex power", points: 61, revealed: false, revealType: null },
      { text: "Earning attendance for volunteering", points: 58, revealed: false, revealType: null },
      { text: "Cash prizes from competitions", points: 55, revealed: false, revealType: null },
      { text: "Excuse to stay away from home till late", points: 52, revealed: false, revealType: null },
      { text: "Flaunting VIP passes", points: 49, revealed: false, revealType: null },
      { text: "Networking", points: 46, revealed: false, revealType: null },
      { text: "Skipping assignments and tests", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name a situation where a student suddenly argues like a professional lawyer",
    answers: [
      { text: "Begging for Attendance", points: 100, revealed: false, revealType: null },
      { text: "Cab drivers over fare", points: 97, revealed: false, revealType: null },
      { text: "Arguing with gate guards over ID/Entry rules", points: 91, revealed: false, revealType: null },
      { text: "Begging a professor to increase marks", points: 88, revealed: false, revealType: null },
      { text: "Haggling with street vendors", points: 85, revealed: false, revealType: null },
      { text: "Defending themselves to the hostel warden", points: 82, revealed: false, revealType: null },
      { text: "Splitting the bill perfectly at a restaurant", points: 79, revealed: false, revealType: null },
      { text: "Explaining why they missed an assignment deadline", points: 76, revealed: false, revealType: null },
      { text: "Arguing about sports friends", points: 73, revealed: false, revealType: null },
      { text: "Convincing parents to send extra pocket money", points: 70, revealed: false, revealType: null },
      { text: "Claiming they did their equal part in a group project", points: 67, revealed: false, revealType: null },
      { text: "Defending their favorite movie / music artist", points: 64, revealed: false, revealType: null },
      { text: "Arguing with seniors during intro sessions", points: 61, revealed: false, revealType: null },
      { text: "Trying to get into a club for free", points: 58, revealed: false, revealType: null },
      { text: "Denying they ate their roommate's food", points: 55, revealed: false, revealType: null },
      { text: "Complaining about the mess food quality", points: 52, revealed: false, revealType: null },
      { text: "Bargaining for cheap printouts/photocopies", points: 49, revealed: false, revealType: null },
      { text: "Explaining a proxy to a suspicious professor", points: 46, revealed: false, revealType: null },
      { text: "Debating politics in the cafeteria", points: 43, revealed: false, revealType: null },
      { text: "Convincing a friend to give them a lift home", points: 94, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name a creature that looks like it belongs on a completely different planet",
    answers: [
      { text: "Octopus", points: 100, revealed: false, revealType: null },
      { text: "Platypus", points: 97, revealed: false, revealType: null },
      { text: "Axolotl", points: 94, revealed: false, revealType: null },
      { text: "Tardigrade / Water Bear", points: 91, revealed: false, revealType: null },
      { text: "Anglerfish", points: 88, revealed: false, revealType: null },
      { text: "Chameleon", points: 85, revealed: false, revealType: null },
      { text: "Praying Mantis", points: 82, revealed: false, revealType: null },
      { text: "Jellyfish", points: 79, revealed: false, revealType: null },
      { text: "Blobfish", points: 76, revealed: false, revealType: null },
      { text: "Ostrich", points: 73, revealed: false, revealType: null },
      { text: "Sloth", points: 70, revealed: false, revealType: null },
      { text: "Horseshoe Crab", points: 67, revealed: false, revealType: null },
      { text: "Star-nosed Mole", points: 64, revealed: false, revealType: null },
      { text: "Goblin Shark", points: 61, revealed: false, revealType: null },
      { text: "Pangolin", points: 58, revealed: false, revealType: null },
      { text: "Echidna", points: 55, revealed: false, revealType: null },
      { text: "Shoebill Stork", points: 52, revealed: false, revealType: null },
      { text: "Naked Mole Rat", points: 49, revealed: false, revealType: null },
      { text: "Aye-aye", points: 46, revealed: false, revealType: null },
      { text: "Sea Cucumber", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name a superpower that would be extremely useful for day to day life",
    answers: [
      { text: "Teleportation", points: 100, revealed: false, revealType: null },
      { text: "Time Travel", points: 97, revealed: false, revealType: null },
      { text: "Reading Minds", points: 94, revealed: false, revealType: null },
      { text: "Freezing Time", points: 91, revealed: false, revealType: null },
      { text: "Flying", points: 88, revealed: false, revealType: null },
      { text: "Invisibility", points: 85, revealed: false, revealType: null },
      { text: "Super Speed", points: 82, revealed: false, revealType: null },
      { text: "Telekinesis / Moving objects with mind", points: 79, revealed: false, revealType: null },
      { text: "Healing / Curing diseases", points: 76, revealed: false, revealType: null },
      { text: "Perfect Memory", points: 73, revealed: false, revealType: null },
      { text: "Understanding all languages instantly", points: 70, revealed: false, revealType: null },
      { text: "Never needing to sleep", points: 67, revealed: false, revealType: null },
      { text: "Super Intelligence", points: 64, revealed: false, revealType: null },
      { text: "Shape-Shifting", points: 61, revealed: false, revealType: null },
      { text: "Seeing the future / Precognition", points: 58, revealed: false, revealType: null },
      { text: "Mind Control / Persuasion", points: 55, revealed: false, revealType: null },
      { text: "Generating Money out of thin air", points: 52, revealed: false, revealType: null },
      { text: "Unlimited Stamina", points: 49, revealed: false, revealType: null },
      { text: "Super Strength", points: 46, revealed: false, revealType: null },
      { text: "Breathing underwater", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name something students do right after exams",
    answers: [
      { text: "Discuss answers", points: 100, revealed: false, revealType: null },
      { text: "Google correct answers", points: 97, revealed: false, revealType: null },
      { text: "Chill", points: 94, revealed: false, revealType: null },
      { text: "Go out to eat", points: 91, revealed: false, revealType: null },
      { text: "Sleep", points: 88, revealed: false, revealType: null },
      { text: "Forget everything instantly", points: 85, revealed: false, revealType: null },
      { text: "Plan next outing", points: 82, revealed: false, revealType: null },
      { text: "Call parents", points: 79, revealed: false, revealType: null },
      { text: "Check result expectations", points: 76, revealed: false, revealType: null },
      { text: "Complain about paper", points: 73, revealed: false, revealType: null },
      { text: "Meme about exam", points: 70, revealed: false, revealType: null },
      { text: "Start next exam prep", points: 67, revealed: false, revealType: null },
      { text: "Play games", points: 64, revealed: false, revealType: null },
      { text: "Watch series", points: 61, revealed: false, revealType: null },
      { text: "Party", points: 58, revealed: false, revealType: null },
      { text: "Compare marks predictions", points: 55, revealed: false, revealType: null },
      { text: "Text friends", points: 52, revealed: false, revealType: null },
      { text: "Delete notes", points: 49, revealed: false, revealType: null },
      { text: "Go home early", points: 46, revealed: false, revealType: null },
      { text: "Cry", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name a reason students bunk classes",
    answers: [
      { text: "Don’t feel like going", points: 100, revealed: false, revealType: null },
      { text: "Sleep", points: 97, revealed: false, revealType: null },
      { text: "Hangout with friends", points: 94, revealed: false, revealType: null },
      { text: "Assignment not done", points: 91, revealed: false, revealType: null },
      { text: "Boring subject", points: 88, revealed: false, revealType: null },
      { text: "Proxy attendance", points: 85, revealed: false, revealType: null },
      { text: "Movie plans", points: 82, revealed: false, revealType: null },
      { text: "Fest / event", points: 79, revealed: false, revealType: null },
      { text: "Gaming", points: 76, revealed: false, revealType: null },
      { text: "Late arrival", points: 73, revealed: false, revealType: null },
      { text: "Health issues", points: 70, revealed: false, revealType: null },
      { text: "Group bunk plan", points: 67, revealed: false, revealType: null },
      { text: "Rain / weather", points: 64, revealed: false, revealType: null },
      { text: "Travel plans", points: 61, revealed: false, revealType: null },
      { text: "Exam prep", points: 58, revealed: false, revealType: null },
      { text: "Date", points: 55, revealed: false, revealType: null },
      { text: "Overslept", points: 52, revealed: false, revealType: null },
      { text: "Teacher strictness", points: 49, revealed: false, revealType: null },
      { text: "Back-to-back classes", points: 46, revealed: false, revealType: null },
      { text: "Go to Relatives house", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name something students Google frequently",
    answers: [
      { text: "Answers to questions", points: 100, revealed: false, revealType: null },
      { text: "Assignment topics", points: 97, revealed: false, revealType: null },
      { text: "Exam syllabus", points: 94, revealed: false, revealType: null },
      { text: "How to… queries", points: 91, revealed: false, revealType: null },
      { text: "Previous year papers", points: 88, revealed: false, revealType: null },
      { text: "Definitions", points: 85, revealed: false, revealType: null },
      { text: "Coding errors", points: 82, revealed: false, revealType: null },
      { text: "Project ideas", points: 79, revealed: false, revealType: null },
      { text: "Movie downloads", points: 76, revealed: false, revealType: null },
      { text: "Restaurants nearby", points: 73, revealed: false, revealType: null },
      { text: "Weather", points: 70, revealed: false, revealType: null },
      { text: "Maps/locations", points: 64, revealed: false, revealType: null },
      { text: "Internship opportunities", points: 61, revealed: false, revealType: null },
      { text: "Resume templates", points: 58, revealed: false, revealType: null },
      { text: "Results", points: 55, revealed: false, revealType: null },
      { text: "Quotes/captions", points: 52, revealed: false, revealType: null },
      { text: "Study material PDFs", points: 49, revealed: false, revealType: null },
      { text: "Tutorials", points: 46, revealed: false, revealType: null },
      { text: "Current affairs", points: 43, revealed: false, revealType: null },
      { text: "Meme templates", points: 67, revealed: false, revealType: null }

    ]
  },


  {
    question: "Name something people do during a long phone call",
    answers: [
      { text: "Walk around", points: 100, revealed: false, revealType: null },
      { text: "Sit/relax", points: 97, revealed: false, revealType: null },
      { text: "Multitask", points: 94, revealed: false, revealType: null },
      { text: "Scroll phone", points: 91, revealed: false, revealType: null },
      { text: "Eat", points: 88, revealed: false, revealType: null },
      { text: "Lie down", points: 85, revealed: false, revealType: null },
      { text: "Gesture while talking", points: 82, revealed: false, revealType: null },
      { text: "Fidget with objects", points: 79, revealed: false, revealType: null },
      { text: "Pace around", points: 76, revealed: false, revealType: null },
      { text: "Look outside", points: 73, revealed: false, revealType: null },
      { text: "Take notes", points: 70, revealed: false, revealType: null },
      { text: "Drink water", points: 67, revealed: false, revealType: null },
      { text: "Laugh loudly", points: 64, revealed: false, revealType: null },
      { text: "Zone out", points: 61, revealed: false, revealType: null },
      { text: "Stretch", points: 58, revealed: false, revealType: null },
      { text: "Check time", points: 55, revealed: false, revealType: null },
      { text: "Doodle", points: 52, revealed: false, revealType: null },
      { text: "Switch positions", points: 49, revealed: false, revealType: null },
      { text: "Adjust earphones", points: 46, revealed: false, revealType: null },
      { text: "End call suddenly ", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name something people do on weekends",
    answers: [
      { text: "Sleep", points: 100, revealed: false, revealType: null },
      { text: "Watch movies/series", points: 97, revealed: false, revealType: null },
      { text: "Go out", points: 94, revealed: false, revealType: null },
      { text: "Eat outside", points: 91, revealed: false, revealType: null },
      { text: "Meet friends", points: 88, revealed: false, revealType: null },
      { text: "Relax", points: 85, revealed: false, revealType: null },
      { text: "Travel", points: 82, revealed: false, revealType: null },
      { text: "Party", points: 79, revealed: false, revealType: null },
      { text: "Shop", points: 76, revealed: false, revealType: null },
      { text: "Play games", points: 73, revealed: false, revealType: null },
      { text: "Exercise", points: 70, revealed: false, revealType: null },
      { text: "Spend time with family", points: 67, revealed: false, revealType: null },
      { text: "Clean house", points: 64, revealed: false, revealType: null },
      { text: "Do hobbies", points: 61, revealed: false, revealType: null },
      { text: "Study/work", points: 58, revealed: false, revealType: null },
      { text: "Scroll phone", points: 55, revealed: false, revealType: null },
      { text: "Go on dates", points: 52, revealed: false, revealType: null },
      { text: "Attend events", points: 49, revealed: false, revealType: null },
      { text: "Explore places", points: 46, revealed: false, revealType: null },
      { text: "Do nothing", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name something people do when they enter a restaurant",
    answers: [
      { text: "Look for seats", points: 100, revealed: false, revealType: null },
      { text: "Check menu", points: 97, revealed: false, revealType: null },
      { text: "Sit down", points: 94, revealed: false, revealType: null },
      { text: "Call waiter", points: 91, revealed: false, revealType: null },
      { text: "Check prices", points: 88, revealed: false, revealType: null },
      { text: "Look around ambience", points: 85, revealed: false, revealType: null },
      { text: "Decide order", points: 82, revealed: false, revealType: null },
      { text: "Use phone", points: 79, revealed: false, revealType: null },
      { text: "Talk to friends", points: 76, revealed: false, revealType: null },
      { text: "Order water", points: 73, revealed: false, revealType: null },
      { text: "Ask for AC/fan", points: 70, revealed: false, revealType: null },
      { text: "Scan QR menu", points: 67, revealed: false, revealType: null },
      { text: "Take photos", points: 64, revealed: false, revealType: null },
      { text: "Check reviews", points: 61, revealed: false, revealType: null },
      { text: "Wait for others", points: 58, revealed: false, revealType: null },
      { text: "Adjust chairs", points: 55, revealed: false, revealType: null },
      { text: "Clean table", points: 52, revealed: false, revealType: null },
      { text: "Ask for recommendations", points: 49, revealed: false, revealType: null },
      { text: "Complain about crowd", points: 46, revealed: false, revealType: null },
      { text: "Leave if too full", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name something people do when they see a mirror",
    answers: [
      { text: "Fix hair", points: 100, revealed: false, revealType: null },
      { text: "Check face", points: 97, revealed: false, revealType: null },
      { text: "Adjust clothes", points: 94, revealed: false, revealType: null },
      { text: "Smile", points: 91, revealed: false, revealType: null },
      { text: "Take selfie", points: 88, revealed: false, revealType: null },
      { text: "Pose", points: 85, revealed: false, revealType: null },
      { text: "Check outfit", points: 82, revealed: false, revealType: null },
      { text: "Fix makeup", points: 79, revealed: false, revealType: null },
      { text: "Look at expressions", points: 76, revealed: false, revealType: null },
      { text: "Flex", points: 73, revealed: false, revealType: null },
      { text: "Ignore quickly", points: 70, revealed: false, revealType: null },
      { text: "Clean face", points: 67, revealed: false, revealType: null },
      { text: "Check teeth", points: 64, revealed: false, revealType: null },
      { text: "Practice expressions", points: 61, revealed: false, revealType: null },
      { text: "Adjust posture", points: 58, revealed: false, revealType: null },
      { text: "Stare briefly", points: 55, revealed: false, revealType: null },
      { text: "Try different angles", points: 52, revealed: false, revealType: null },
      { text: "Fix accessories", points: 49, revealed: false, revealType: null },
      { text: "Judge themselves", points: 46, revealed: false, revealType: null },
      { text: "Walk away", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name something people do when they can’t find something",
    answers: [
      { text: "Search everywhere", points: 100, revealed: false, revealType: null },
      { text: "Ask others", points: 97, revealed: false, revealType: null },
      { text: "Panic", points: 94, revealed: false, revealType: null },
      { text: "Retrace steps", points: 91, revealed: false, revealType: null },
      { text: "Check usual places", points: 88, revealed: false, revealType: null },
      { text: "Get frustrated", points: 85, revealed: false, revealType: null },
      { text: "Call someone", points: 82, revealed: false, revealType: null },
      { text: "Blame others", points: 79, revealed: false, revealType: null },
      { text: "Clean while searching", points: 76, revealed: false, revealType: null },
      { text: "Give up temporarily", points: 73, revealed: false, revealType: null },
      { text: "Search again", points: 70, revealed: false, revealType: null },
      { text: "Check pockets/bag", points: 67, revealed: false, revealType: null },
      { text: "Think deeply", points: 64, revealed: false, revealType: null },
      { text: "Pray", points: 61, revealed: false, revealType: null },
      { text: "Use flashlight", points: 58, revealed: false, revealType: null },
      { text: "Move things around", points: 55, revealed: false, revealType: null },
      { text: "Check last used place", points: 52, revealed: false, revealType: null },
      { text: "Get angry", points: 49, revealed: false, revealType: null },
      { text: "Replace it", points: 46, revealed: false, revealType: null },
      { text: "Finally find it later", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name something people do when they are nervous",
    answers: [
      { text: "Fidget", points: 100, revealed: false, revealType: null },
      { text: "Bite nails", points: 97, revealed: false, revealType: null },
      { text: "Check phone", points: 94, revealed: false, revealType: null },
      { text: "Pace around", points: 91, revealed: false, revealType: null },
      { text: "Stay quiet", points: 88, revealed: false, revealType: null },
      { text: "Talk fast", points: 85, revealed: false, revealType: null },
      { text: "Sweat", points: 82, revealed: false, revealType: null },
      { text: "Drink water", points: 79, revealed: false, revealType: null },
      { text: "Take deep breaths", points: 76, revealed: false, revealType: null },
      { text: "Overthink", points: 73, revealed: false, revealType: null },
      { text: "Avoid eye contact", points: 70, revealed: false, revealType: null },
      { text: "Smile awkwardly", points: 67, revealed: false, revealType: null },
      { text: "Tap feet", points: 64, revealed: false, revealType: null },
      { text: "Crack knuckles", points: 61, revealed: false, revealType: null },
      { text: "Laugh randomly", points: 58, revealed: false, revealType: null },
      { text: "Repeat things", points: 55, revealed: false, revealType: null },
      { text: "Look around", points: 52, revealed: false, revealType: null },
      { text: "Pray", points: 49, revealed: false, revealType: null },
      { text: "Forget things", points: 46, revealed: false, revealType: null },
      { text: "Freeze", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name something people do in a lift (elevator)",
    answers: [
      { text: "Use phone", points: 100, revealed: false, revealType: null },
      { text: "Stay silent", points: 97, revealed: false, revealType: null },
      { text: "Look at floor numbers", points: 94, revealed: false, revealType: null },
      { text: "Avoid eye contact", points: 91, revealed: false, revealType: null },
      { text: "Check reflection", points: 88, revealed: false, revealType: null },
      { text: "Talk to others", points: 85, revealed: false, revealType: null },
      { text: "Press buttons", points: 82, revealed: false, revealType: null },
      { text: "Stand still", points: 79, revealed: false, revealType: null },
      { text: "Listen to music", points: 76, revealed: false, revealType: null },
      { text: "Check time", points: 73, revealed: false, revealType: null },
      { text: "Look at others", points: 70, revealed: false, revealType: null },
      { text: "Adjust clothes", points: 67, revealed: false, revealType: null },
      { text: "Smile awkwardly", points: 64, revealed: false, revealType: null },
      { text: "Wait impatiently", points: 61, revealed: false, revealType: null },
      { text: "Check phone again", points: 58, revealed: false, revealType: null },
      { text: "Hold door", points: 55, revealed: false, revealType: null },
      { text: "Let others exit", points: 52, revealed: false, revealType: null },
      { text: "Sigh", points: 49, revealed: false, revealType: null },
      { text: "Feel awkward", points: 46, revealed: false, revealType: null },
      { text: "Exit quickly", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name something people do when they hear their favorite song",
    answers: [
      { text: "Sing along", points: 100, revealed: false, revealType: null },
      { text: "Increase volume", points: 97, revealed: false, revealType: null },
      { text: "Dance", points: 94, revealed: false, revealType: null },
      { text: "Smile", points: 91, revealed: false, revealType: null },
      { text: "Replay it", points: 88, revealed: false, revealType: null },
      { text: "Share with friends", points: 85, revealed: false, revealType: null },
      { text: "Vibe silently", points: 82, revealed: false, revealType: null },
      { text: "Tap feet", points: 79, revealed: false, revealType: null },
      { text: "Close eyes", points: 76, revealed: false, revealType: null },
      { text: "Record story", points: 73, revealed: false, revealType: null },
      { text: "Move head", points: 70, revealed: false, revealType: null },
      { text: "Lip-sync", points: 67, revealed: false, revealType: null },
      { text: "Feel nostalgic", points: 64, revealed: false, revealType: null },
      { text: "Add to playlist", points: 61, revealed: false, revealType: null },
      { text: "Send to someone", points: 58, revealed: false, revealType: null },
      { text: "Play on loop", points: 55, revealed: false, revealType: null },
      { text: "Get emotional", points: 52, revealed: false, revealType: null },
      { text: "Pause work", points: 49, revealed: false, revealType: null },
      { text: "Enjoy moment", points: 46, revealed: false, revealType: null },
      { text: "Ignore surroundings", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name something people do when they see a baby",
    answers: [
      { text: "Smile", points: 100, revealed: false, revealType: null },
      { text: "Play with baby", points: 97, revealed: false, revealType: null },
      { text: "Make funny faces", points: 94, revealed: false, revealType: null },
      { text: "Talk in baby voice", points: 91, revealed: false, revealType: null },
      { text: "Try to hold", points: 88, revealed: false, revealType: null },
      { text: "Take photos", points: 85, revealed: false, revealType: null },
      { text: "Laugh", points: 82, revealed: false, revealType: null },
      { text: "Wave", points: 79, revealed: false, revealType: null },
      { text: "Ask age", points: 76, revealed: false, revealType: null },
      { text: "Compliment", points: 73, revealed: false, revealType: null },
      { text: "Get excited", points: 70, revealed: false, revealType: null },
      { text: "Touch cheeks", points: 67, revealed: false, revealType: null },
      { text: "Entertain baby", points: 64, revealed: false, revealType: null },
      { text: "Call others", points: 61, revealed: false, revealType: null },
      { text: "Ask name", points: 58, revealed: false, revealType: null },
      { text: "Peek repeatedly", points: 55, revealed: false, revealType: null },
      { text: "Distract baby", points: 52, revealed: false, revealType: null },
      { text: "Feel happy", points: 49, revealed: false, revealType: null },
      { text: "Ignore", points: 46, revealed: false, revealType: null },
      { text: "Walk away", points: 43, revealed: false, revealType: null }
    ]
  },


  {
    question: "Name something people do when they are stuck in traffic",
    answers: [
      { text: "Use phone", points: 100, revealed: false, revealType: null },
      { text: "Get irritated", points: 97, revealed: false, revealType: null },
      { text: "Listen to music", points: 94, revealed: false, revealType: null },
      { text: "Call someone", points: 91, revealed: false, revealType: null },
      { text: "Look around", points: 88, revealed: false, revealType: null },
      { text: "Honk", points: 85, revealed: false, revealType: null },
      { text: "Check maps", points: 82, revealed: false, revealType: null },
      { text: "Wait patiently", points: 79, revealed: false, revealType: null },
      { text: "Talk to others", points: 76, revealed: false, revealType: null },
      { text: "Eat snacks", points: 73, revealed: false, revealType: null },
      { text: "Complain", points: 70, revealed: false, revealType: null },
      { text: "Scroll social media", points: 67, revealed: false, revealType: null },
      { text: "Daydream", points: 64, revealed: false, revealType: null },
      { text: "Watch surroundings", points: 61, revealed: false, revealType: null },
      { text: "Relax", points: 58, revealed: false, revealType: null },
      { text: "Check time", points: 55, revealed: false, revealType: null },
      { text: "Plan route", points: 52, revealed: false, revealType: null },
      { text: "Get frustrated", points: 49, revealed: false, revealType: null },
      { text: "Sit quietly", points: 46, revealed: false, revealType: null },
      { text: "Accept fate", points: 43, revealed: false, revealType: null }
    ]
  },

  

  // ------------------------
  // 🔥 ROUND 2
  // ------------------------

  

  {
    question: "Name a daily struggle for a student who commutes to campus instead of living in a dorm",
    answers: [
      { text: "Traffic", points: 100, revealed: false, revealType: null },
      { text: "Finding a seat in the Metro", points: 97, revealed: false, revealType: null },
      { text: "Waking up super early", points: 94, revealed: false, revealType: null },
      { text: "Auto drivers overcharging / haggling", points: 91, revealed: false, revealType: null },
      { text: "Carrying heavy bags / laptops all day", points: 88, revealed: false, revealType: null },
      { text: "Delhi/Noida heat and sweating before class", points: 85, revealed: false, revealType: null },
      { text: "Missing out on hostel late-night plans/gossip", points: 82, revealed: false, revealType: null },
      { text: "Finding parking near campus", points: 79, revealed: false, revealType: null },
      { text: "Long travel times draining all energy", points: 76, revealed: false, revealType: null },
      { text: "Forgetting something at home and not being able to go back", points: 73, revealed: false, revealType: null },
      { text: "Metro card running out of balance", points: 70, revealed: false, revealType: null },
      { text: "Waiting in long lines for e-rickshaws", points: 67, revealed: false, revealType: null },
      { text: "Rushing out to catch the last bus", points: 64, revealed: false, revealType: null },
      { text: "Can't take random naps between classes", points: 61, revealed: false, revealType: null },
      { text: "Rain / Flooded roads completely ruining the commute", points: 58, revealed: false, revealType: null },
      { text: "Smelly co-passengers", points: 55, revealed: false, revealType: null },
      { text: "Figuring out lunch / carrying a tiffin box", points: 52, revealed: false, revealType: null },
      { text: "Dealing with parents' strict curfews", points: 49, revealed: false, revealType: null },
      { text: "No place to crash during long 3-hour breaks", points: 46, revealed: false, revealType: null },
      { text: "Security checks taking too long", points: 43, revealed: false, revealType: null }
    ]
  },
  {
    question: "Name a classic trick people use to look incredibly busy",
    answers: [
      { text: "Staring at laptop", points: 100, revealed: false, revealType: null },
      { text: "Walking fast", points: 97, revealed: false, revealType: null },
      { text: "Carrying papers", points: 94, revealed: false, revealType: null },
      { text: "Typing furiously", points: 91, revealed: false, revealType: null },
      { text: "Sighing loudly", points: 88, revealed: false, revealType: null },
      { text: "Multiple tabs", points: 85, revealed: false, revealType: null },
      { text: "Headphones", points: 82, revealed: false, revealType: null },
      { text: "Phone calls", points: 79, revealed: false, revealType: null },
      { text: "Looking stressed", points: 76, revealed: false, revealType: null },
      { text: "Drinking coffee", points: 73, revealed: false, revealType: null },
      { text: "Nodding at screen", points: 70, revealed: false, revealType: null },
      { text: "Messy desk", points: 67, revealed: false, revealType: null },
      { text: "Checking watch", points: 64, revealed: false, revealType: null },
      { text: "Ignoring texts", points: 61, revealed: false, revealType: null },
      { text: "Calendar full", points: 58, revealed: false, revealType: null },
      { text: "Excel scrolling", points: 55, revealed: false, revealType: null },
      { text: "Email reading", points: 52, revealed: false, revealType: null },
      { text: "Saying busy", points: 49, revealed: false, revealType: null },
      { text: "Late meetings", points: 46, revealed: false, revealType: null },
      { text: "Pacing", points: 43, revealed: false, revealType: null }
    ]
  },

  {
    question: "Name a question from relatives that makes a college student instantly panic",
    answers: [
      { text: "Aage ka kya plan hai?", points: 100, revealed: false, revealType: null },
      { text: "Package kitne ka laga?", points: 97, revealed: false, revealType: null },
      { text: "Grades / Marks kaise aaye?", points: 94, revealed: false, revealType: null },
      { text: "Girlfriend / Boyfriend hai kya?", points: 91, revealed: false, revealType: null },
      { text: "Placement hui?", points: 88, revealed: false, revealType: null },
      { text: "Shaadi kab karoge?", points: 85, revealed: false, revealType: null },
      { text: "Kaunsi line mein jaa rahe ho?", points: 82, revealed: false, revealType: null },
      { text: "Govt job ki taiyari kyun nahi karte?", points: 79, revealed: false, revealType: null },
      { text: "Kitna paisa uda rahe ho?", points: 76, revealed: false, revealType: null },
      { text: "MBA karoge ya Job?", points: 73, revealed: false, revealType: null },
      { text: "Tumhara course toh useless hai na?", points: 70, revealed: false, revealType: null },
      { text: "Nasha toh nahi karte na wahan?", points: 67, revealed: false, revealType: null },
      { text: "Hostel mein padhai hoti bhi hai?", points: 64, revealed: false, revealType: null },
      { text: "Weight badh gaya hai / kam ho gaya?", points: 61, revealed: false, revealType: null },
      { text: "Phone par itna kya karte ho poora din?", points: 58, revealed: false, revealType: null },
      { text: "Sharma ji ke bete jaisa kyun nahi ban jate?", points: 55, revealed: false, revealType: null },
      { text: "Beta gaana gaa ke / dance karke dikhao", points: 52, revealed: false, revealType: null },
      { text: "Chhuttiyan kab milengi?", points: 49, revealed: false, revealType: null },
      { text: "Baal kab katwaoge?", points: 46, revealed: false, revealType: null },
      { text: "Mujhe pehchana?", points: 43, revealed: false, revealType: null }
    ]
  },

  // ------------------------
  // 🔥 ROUND 3
  // ------------------------

  {
    question: "Name a common movie trope",
    answers: [
      { text: "The Chosen One", points: 160, revealed: false, revealType: null },
      { text: "Enemies to Lovers", points: 156, revealed: false, revealType: null },
      { text: "Makeover Montage", points: 154, revealed: false, revealType: null },
      { text: "Love Triangle", points: 150, revealed: false, revealType: null },
      { text: "Running through the airport to stop a flight", points: 146, revealed: false, revealType: null },
      { text: "Fake Dating", points: 142, revealed: false, revealType: null },
      { text: "Good Cop / Bad Cop", points: 138, revealed: false, revealType: null },
      { text: "The Nerd takes off glasses and is instantly hot", points: 134, revealed: false, revealType: null },
      { text: "Misunderstanding ruins everything", points: 130, revealed: false, revealType: null },
      { text: "Walking away from an explosion in slow-mo", points: 126, revealed: false, revealType: null },
      { text: "The Power of Friendship saves the day", points: 122, revealed: false, revealType: null },
      { text: "Hackers typing furiously saying I'm in", points: 118, revealed: false, revealType: null },
      { text: "The Training Montage", points: 114, revealed: false, revealType: null },
      { text: "Car won't start in a horror movie", points: 110, revealed: false, revealType: null },
      { text: "Ugly Duckling syndrome", points: 106, revealed: false, revealType: null },
      { text: "Villains explaining their entire evil plan", points: 102, revealed: false, revealType: null },
      { text: "Time loop", points: 98, revealed: false, revealType: null },
      { text: "High school prom climax", points: 94, revealed: false, revealType: null },
      { text: "Meet-cute dropping books in the hallway", points: 90, revealed: false, revealType: null },
      { text: "Secret Billionaire / Royalty in disguise", points: 86, revealed: false, revealType: null }
    ]
  }
];