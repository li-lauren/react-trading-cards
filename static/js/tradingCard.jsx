"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];

function TradingCard(props) {
  const paragraphs = [];

  for (const card of tradingCardData) {
    paragraphs.push(<div>
      <h2>Name: {card.name}</h2>
      <img src={card.imgUrl} />
      <h2>Skill: {card.skill}</h2>
    </div>)
  }

  return (
    <React.Fragment>
      {paragraphs}
    </React.Fragment>
  );
  
  
}


  ReactDOM.render(
    (
      <TradingCard />
    ),
    document.querySelector('#cards')
  );


