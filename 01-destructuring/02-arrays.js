console.clear();

// DESTRUCTURING ARRAYS

const campuses = ["madrid", "barcelona", "berlin"];

const [city1, city2, city3, city4] = campuses;

// if we want to create only a variable for the third city const [,,city]= campuses

console.log("CITY 1:", city1);

console.log("City 4: ", city4); // undefined unless we do this: const [city1, city2, city3, city4 = "paris"] = campuses;

const europeanCampuses = [
  ["madrid", "es"],
  ["barcelona", "es"],
  ["berlin", "de"],
  ["paris", "fr"],
  ["amsterdam", "nl"],
  ["lisbon", "pt"],
];

const [,,[firstCity, country]] = europeanCampuses;

console.log("FIRST CITY", firstCity , country); // berlin de


