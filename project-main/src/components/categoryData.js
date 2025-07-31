// categoryData.js

const categoryData = {
  vata: {
    herbs: {
      icon: "🌿",
      title: "Best Herbs for Vata",
      subtitle: "These herbs help balance the Vata dosha",
      items: [
        { name: "Ashwagandha", icon: "🪴" },
        { name: "Licorice", icon: "🌱" },
        { name: "Ginger", icon: "🧄" },
      ],
    },
    diet: {
      iconFavor: "🍲",
      titleFavor: "Favor These Foods",
      subtitleFavor: "Warm, grounding, and nourishing foods",
      itemsFavor: ["Oatmeal", "Cooked vegetables", "Warm milk"],

      iconMinimize: "🍦",
      titleMinimize: "Minimize These Foods",
      subtitleMinimize: "Cold, dry, and raw foods aggravate Vata",
      itemsMinimize: ["Ice cream", "Chips", "Raw salads"],
    },
    lifestyle: {
      icon: "🧘",
      title: "Lifestyle for Vata",
      subtitle: "Stay grounded and warm",
      items: [
        { name: "Meditate regularly" },
        { name: "Follow a routine" },
        { name: "Get plenty of sleep" },
      ],
    },
    balance: {
      icon: "⚖️",
      title: "Balancing Tips",
      subtitle: "Tips to maintain dosha balance",
      items: [
        { name: "Stay warm" },
        { name: "Avoid overexertion" },
        { name: "Eat warm meals" },
      ],
      proTip: "Drink warm herbal tea throughout the day to stay grounded.",
    },
  },

  pitta: {
    herbs: {
      icon: "🌼",
      title: "Best Herbs for Pitta",
      subtitle: "Cooling and soothing herbs for Pitta dosha",
      items: [
        { name: "Brahmi", icon: "🌿" },
        { name: "Shatavari", icon: "🪻" },
        { name: "Neem", icon: "🍃" },
      ],
    },
    diet: {
      iconFavor: "🥗",
      titleFavor: "Favor These Foods",
      subtitleFavor: "Cool, light, and refreshing foods",
      itemsFavor: ["Cucumber", "Melons", "Coconut water"],

      iconMinimize: "🌶️",
      titleMinimize: "Minimize These Foods",
      subtitleMinimize: "Avoid hot and spicy foods",
      itemsMinimize: ["Chili peppers", "Garlic", "Fermented foods"],
    },
    lifestyle: {
      icon: "🏖️",
      title: "Lifestyle for Pitta",
      subtitle: "Cool down and unwind",
      items: [
        { name: "Take breaks from work" },
        { name: "Practice calming activities" },
        { name: "Avoid heat exposure" },
      ],
    },
    balance: {
      icon: "🧊",
      title: "Balancing Tips",
      subtitle: "Maintain your inner cool",
      items: [
        { name: "Avoid hot sun" },
        { name: "Take cool showers" },
        { name: "Spend time in nature" },
      ],
      proTip: "Try aloe vera juice in the morning to cool your system.",
    },
  },

  kapha: {
    herbs: {
      icon: "🌿",
      title: "Best Herbs for Kapha",
      subtitle: "Stimulating herbs to energize Kapha",
      items: [
        { name: "Turmeric", icon: "🧂" },
        { name: "Trikatu", icon: "🍂" },
        { name: "Black Pepper", icon: "🌶️" },
      ],
    },
    diet: {
      iconFavor: "🥦",
      titleFavor: "Favor These Foods",
      subtitleFavor: "Light, dry, and spicy foods",
      itemsFavor: ["Leafy greens", "Lentils", "Spices like ginger"],

      iconMinimize: "🍩",
      titleMinimize: "Minimize These Foods",
      subtitleMinimize: "Heavy, oily, and sweet foods aggravate Kapha",
      itemsMinimize: ["Dairy", "Fried foods", "Sweets"],
    },
    lifestyle: {
      icon: "🏃‍♂️",
      title: "Lifestyle for Kapha",
      subtitle: "Get moving and stay active",
      items: [
        { name: "Exercise daily" },
        { name: "Wake up early" },
        { name: "Stay mentally stimulated" },
      ],
    },
    balance: {
      icon: "🔥",
      title: "Balancing Tips",
      subtitle: "Energize and invigorate",
      items: [
        { name: "Avoid daytime naps" },
        { name: "Keep a consistent schedule" },
        { name: "Use warming herbs and spices" },
      ],
      proTip: "Start your day with a cup of warm lemon water and ginger.",
    },
  },
};

export default categoryData;
