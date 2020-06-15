import React from 'react';
import './App.css';

function App() {
  let hours = new Date(2020, 6, 15, 20).getHours();
  let timeOfDay;
  
  const styles = {
    color: '#ffac00',
    backgroundColor: '#FF2d00',
    width: 300,
    display: 'flex',
    justifyContent: 'center',
}

  if (hours < 12) {
    timeOfDay = 'morning'
    styles.color = '#ffac00'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
    styles.color = 'blue'
  } else {
    timeOfDay = 'night'
    styles.color = 'darkBlue'
  }


  return (
  <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

export default App;
