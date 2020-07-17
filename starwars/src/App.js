import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import styled, { css } from 'styled-components'
import PersonCard from './PersonCard'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [people, setPeople] = useState([])
  useEffect(() => {
    axios.get('https://swapi.dev/api/people').then((res) => {
      console.log('list of people', res.data.results)
      setPeople(res.data.results)
    }).catch((err) => {
      console.log('broke', err)
    })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      
      <header className="App-header">
      <Header>
        Star Wars
      </Header>
      <FrontPage>
        {people.map((person, index) => <PersonCard key={person.name} index={index} person={person} />)}
      </FrontPage>
      </header>
    </div>
  );
}
const FrontPage = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
width: 1200px;
`

const Header = styled.h1`
color: grey;
text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
background-image: url("https://media.giphy.com/media/9E7kUhnT9eDok/giphy.gif");
padding: 20px;
margin-top: 20px;
width: 500px;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
font-size: 4rem;
  box-shadow:
  0 0 30px 15px #17202A,  /* inner white */
  0 0 50px 30px #17202A, /* middle magenta */
  0 0 70px 45px #fff; /* outer cyan */
}

`
export default App;
