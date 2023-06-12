const falso = require("@ngneat/falso");

const unitTypes = [
  undefined,
  "teaspoon",
  "tablespoon",
  "cup",
  "liter",
  "milliliter",
];

const getIngredient = () => {
  const unit = unitTypes[falso.randNumber({ min: 0, max: 4 })];
  const origin = ["france", "japan", "mexico"][
    falso.randNumber({ min: 0, max: 2 })
  ];

  return {
    name: falso.randFood({ origin }),
    quantity: {
      amount: falso.randNumber({ min: 1, max: 10 }),
      ...(unit && { unit }),
    },
  };
};

const getIngredients = (count = 5) =>
  Array(count)
    .fill()
    .map(() => getIngredient());

const getDirections = (steps = 5) =>
  falso.randTextRange({ min: 10, max: 50, length: steps });

const getRatings = () =>
  falso.randNumber({
    min: 1,
    max: 5,
    length: falso.randNumber({ min: 0, max: 5 }),
  });

const generateRecipes = (documentCount = 100, recipes = []) => {
  while (documentCount--) {
    const ratings = getRatings();
    recipes.push({
      title: falso.randFood(),
      servings: falso.randNumber({ min: 1, max: 12 }),
      calories_per_serving: falso.randNumber({ min: 100, max: 800 }),
      cook_time: falso.randNumber({ min: 10, max: 120, precision: 5 }),
      prep_time: falso.randNumber({ min: 5, max: 30, precision: 5 }),
      description: falso.randSentence(),
      ingredients: getIngredients(falso.randNumber({ min: 4, max: 10 })),
      directions: getDirections(falso.randNumber({ min: 3, max: 8 })),
      ...(ratings.length && { ratings }),
      vegetarian_options: falso.randBoolean(),
      suggested_drink: falso.randDrinks(),
      tags: falso.randWord({ length: falso.randNumber({ min: 1, max: 5 }) }),
    });
  }

  return recipes;
};
