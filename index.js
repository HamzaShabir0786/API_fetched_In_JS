// fetching with then chain
// fetch("https://dog-api.kinduff.com/api/facts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Random Dog Fact:", data.facts[0]);
//   })
//   .catch((error) => {
//     console.error("Error fetching dog fact:", error);
//   });

// fetching with async await
// const fun = async () => {
//   let url = "https://dog-api.kinduff.com/api/facts";
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log(data.facts);
// };
// fun();

// fetching with error handling
let h1 = document.querySelector("h1");

const fetchDogFact = async () => {
  const url = "https://dog-api.kinduff.com/api/facts";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Random Dog Fact:", data.facts[0]);
    h1.innerText = data.facts[0];
  } catch (error) {
    console.error("Error fetching dog fact:", error);
  }
};

fetchDogFact();

//fetching with callback funtion
// const fetchDogFacts = (callback) => {
//   const url = "https://dog-api.kinduff.com/api/facts";

//   fetch(url)
//     .then((response) => response.json()) // Parse the JSON response
//     .then((data) => callback(data.facts)) // Pass the facts to the callback
//     .catch(() => {}); // No error handling
// };

// // Define the callback function to handle the data
// const handleDogFacts = (facts) => {
//   console.log(facts); // Log the dog facts
// };

// // Fetch dog facts with the callback function
// fetchDogFacts(handleDogFacts);
