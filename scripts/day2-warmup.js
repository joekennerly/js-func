let arr = [
  {
    name: "Bob",
    department: "sales",
    title: "sales manager"
  },
  {
    name: "Tina",
    department: "finance",
    title: "director of finance"
  },
  {
    name: "Randy",
    department: "IT",
    title: "hardware guy"
  },
  {
    name: "Glenda",
    department: "C-suite",
    title: "CEO"
  }
];

// Both of the following will output the same values
/*
arr.forEach(employee => {
  console.log(`FOREACH: ${employee.name}'s job is ${employee.title}.`);
});

for (let i = 0; i < arr.length; i++) {
  const employee = arr[i];
  console.log(`FOR: ${employee.name}'s job is ${employee.title}.`);
}
*/
// ────────────────────────────────────────────────────────────────────────────────

let dogBreeds = ["chiwawas", "pugs", "labs"];

const printFavDog = (breed) => {
  if (breed) {
    return `my favorite dog breed is ${breed}.`
  } else {
    return "I like cats."
  }
}

