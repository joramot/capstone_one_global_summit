const speakers = [
  {
    img: './images/tl-2023-speakers-main-stage-sophia-robot-2.jpg',
    name: 'Sophia Robot',
    title: 'Hanson Robotics’ most advanced human-like robot.',
    description: 'Sophia, personifies our dreams for the future of AI.',
  },

  {
    img: './images/tl-2023-speaker-main-stage-tom-siebel.jpg',
    name: 'Tom Siebel',
    title: 'Chairman and Chief Executive Officer of C3 AI.',
    description: 'He was the Chairman and Chief Executive Officer of Siebel Systems, which merged with Oracle Corporation in January 2006.',
  },

  {
    img: './images/tl-2023-speaker-main-stage-chelsea-manning.jpg',
    name: 'Chelsea Manning',
    title: 'Chelsea E. Manning is a network security technologist and expert, analyst, and consultant.',
    description: 'Manning works as a security consultant for Nymtech, specializing in privacy, security, and hardware optimization issues.',
  },

  {
    img: './images/tl-2023-speaker-main-stage-brian-dummann.jpg',
    name: 'Brian Dummann',
    title: 'President of Insights & Technology Excellence at AstraZeneca.',
    description: 'He leads a global team focused on leveraging technology, data, and artificial intelligence to accelerate digital transformation across the business.',
  },

  {
    img: './images/tl-2023-speakers-main-stage-aldo-luevano.png',
    name: 'Aldo Luévano',
    title: 'Engineer in Cybernetics and Systems.',
    description: 'CEO of Roomie, a pioneer company in the Deep Tech ecosystem in LATAM',
  },

  {
    img: './images/tl-2023-speakers-main-stage-aziel-medina.jpg',
    name: 'Aziel Medina',
    title: 'Robotics Engineering student at the Tecnológico de Monterrey, Campus Querétaro.',
    description: 'She is passionate about the STEAM world and technological innovation.',
  },
];

const speaker = document.querySelector('#speakers');
const featuredSpeakers = document.createElement('div');
const flexcards = document.createElement('div');

featuredSpeakers.innerHTML = `<h2>Featured Speakers</h2>
<hr>`;
speaker.appendChild(featuredSpeakers);

flexcards.className = 'flex-card';
flexcards.innerHTML = `<div class="card">
<div>
  <img src=${speakers[0].img}>
</div>
<div>
  <h4><b>${speakers[0].name}</b></h4>
  <p class="speaker_title">${speakers[0].title}</p>
  <hr>
  <p>${speakers[0].description}</p>
</div>
</div>
<div class="card">
<div>
  <img src=${speakers[1].img}>
</div>
<div>
  <h4><b>${speakers[1].name}</b></h4>
  <p class="speaker_title">${speakers[1].title}</p>
  <hr>
  <p>${speakers[1].description}</p>
</div>
</div>
<div class="card">
<div>
  <img src=${speakers[2].img} alt="Avatar">
</div>
<div>
  <h4><b>${speakers[2].name}</b></h4>
  <p class="speaker_title">${speakers[2].title}</p>
  <hr>
  <p>${speakers[2].description}</p>
</div>
</div>
<div class="card">
<div>
  <img src=${speakers[3].img} alt="Avatar">
</div>
<div>
  <h4><b>${speakers[3].name}</b></h4>
  <p class="speaker_title">${speakers[3].title}</p>
  <hr>
  <p>${speakers[3].description}</p>
</div>
</div>
<div class="card">
<div>
  <img src=${speakers[4].img} alt="Avatar">
</div>
<div>
  <h4><b>${speakers[4].name}</b></h4>
  <p class="speaker_title">${speakers[4].title}</p>
  <hr>
  <p>${speakers[4].description}</p>
</div>
</div>
<div class="card">
<div>
  <img src=${speakers[5].img} alt="Avatar">
</div>
<div>
  <h4><b>${speakers[5].name}</b></h4>
  <p class="speaker_title">${speakers[5].title}</p>
  <hr>
  <p>${speakers[5].description}</p>
</div>
</div>
`;

speaker.appendChild(flexcards);