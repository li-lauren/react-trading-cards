"use strict";

function Homepage() {
  return (
    <div>
      <h3>Welcome to Trading Cards!</h3>
      <a href="/cards">Go to Cards</a>
      <br/>
      <img src="/static/img/balloonicorn.jpg" alt="Balloonicorn"/>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
