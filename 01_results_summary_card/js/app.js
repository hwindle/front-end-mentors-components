let dataArray = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg"
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg"
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg"
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg"
  }
];


let ulList = document.getElementById('results-data-list');

dataArray.map(item => {
  let newListElement = document.createElement('li');
  newListElement.classList.add('results-data-item');
  newListElement.innerHTML = `<span class="svg-logo"></span>
        <span class="test-title">${item.category}</span>
        <span class="score">${item.score}</span>
        <span class="grey-100"> / 100</span>`;
  ulList.appendChild(newListElement);
});

