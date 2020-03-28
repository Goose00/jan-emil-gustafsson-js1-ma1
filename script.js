// question 1

const cat = {

    complain: function() {
        console.log("Meow!")
    }
} 

cat.complain();

// question 2

const heading = document.querySelector("h3")

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");

// question 5

const paragraphs = document.querySelector("p")

// question 6

const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;

// question 7
/* This took me ages to figure out 
due to the formulation of the question */

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function logCats(catArray) {
    console.log(catArray);

    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}

function logCats(cats)

// question 8

{

    let catNamesHTML = "";

    for (let i = 0; i < cats.length; i++) {
        catNamesHTML += `<h5>${cats[i].name}</h5>`;
        
        
    }
    return catNamesHTML;
}


// question 9

resultsContainer.innerHTML = logCats(cats);


// question 10
/* I´ve tried allmost everything, but I´m caught
in a loop and cant seem to figure it out*/

{
    let catAgesHTML = "";

    for (let i = 0; i < cats.length; i++) {
    catAgesHTML += `<p>${cats[i].age}</p>`;
    
    
    let catsAge = "Age unknown";

    if (cats[i].age) {
        catsAge = cats[i].age;
    }
    
    const ages = cats[i].age;

    const agesHTML = makeAges(ages);

    const names = cats[i].name;

    const namesHTML = makeNames(names);

    const details = `<div>${namesHTML}</div<div>${agesHTML}</div`;

    catAgesHTML += details;
}

}

