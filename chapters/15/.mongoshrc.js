console.clear();

const prompt = () => {
  return `💾 ${db.getName()} > `;
};

// load helpers
load("./helpers/date.js");
load("./generators/recipes/fake-recipes.js");

const getCookbookCount = () => {
  use("cookbook");
  return db.recipes.countDocuments();
};

const populateCookbook = (count = 100) => {
  use("cookbook");

  print("\n👋 Starting to populate cookbook");
  print(`There are currently ${getCookbookCount()} recipe documents ...`);

  db.recipes.insertMany(generateRecipes(count));

  db.recipes.updateMany(
    { ratings: { $exists: true }, rating_avg: { $exists: false } },
    [{ $set: { rating_avg: { $round: [{ $avg: "$ratings" }, 2] } } }]
  );

  print(
    `✅ The cookbook collection now has ${getCookbookCount()} recipe documents.`
  );
};

const clearCookbook = () => {
  use("cookbook");
  print("🗑️ Clearing out the cookbook ...");
  return db.recipes.deleteMany({});
};
