import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'


const PersonCard = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false)
    const toggle = () => setPopoverOpen(!popoverOpen)

    return (
        <div>
            <CardContainer>
                <NameContainer name={props.person.name} id={`id${props.index}`}>
                    <h2>{props.person.name}</h2><div>⬇</div>
                </NameContainer>
                <Popover placement="bottom" isOpen={popoverOpen} target={`id${props.index}`} toggle={toggle}>
                    <PopoverHeader>INFO</PopoverHeader>
                    <PopoverBody>
                    <div>hair color: {props.person.hair_color}</div>
                    <div>gender: {props.person.gender}</div>
                    <div>birth year:{props.person.birth_year}</div>
                    <div>height: {props.person.height}</div>
                    <div>mass: {props.person.mass}</div>
                     </PopoverBody>
                </Popover>
                <Button color="secondary"><Link href="https://www.starwars.com/">Learn More</Link></Button>
            </CardContainer>

        </div>
    )
}
const Link = styled.a`
color: white;
`

const CardContainer = styled.div`
width: 500px;
// height: 400px;
display:flex;
flex-direction: column;
background-color: white;
margin: 20px;
border-radius: 10px;

`

const NameContainer = styled.div`
background-color: red;
border-radius: 4px;
height: 150px;


${props =>
    props.name === 'Luke Skywalker' &&
    css`
      background: green;
      Background-image: url("https://media.giphy.com/media/Xjo8pbrphfVuw/giphy.gif");
      background-position: center;
      
      

      
        &:hover {
          box-shadow:
          0 0 3px 2px #fff,  /* inner white */
          0 0 5px 3px #51E534, /* middle magenta */
          0 0 7px 5px #51E534; /* outer cyan */
    }
        }
      `
    
  
};
${props =>
    props.name === 'Darth Vader' &&
    css`
      background: none;
      Background-image: url("https://media.giphy.com/media/GIIC4jmmUlXZS/giphy.gif");
      background-position: center;
     
   
       
      &:hover {
        box-shadow:
        0 0 3px 2px #fff,  /* inner white */
        0 0 5px 3px #EE0000, /* middle magenta */
        0 0 7px 5px #EE0000; /* outer cyan */
        
      
  }
    `
  
};
${props =>
    props.name === 'C-3PO' &&
    css`
      background: none;
      Background-image: url("https://media.giphy.com/media/3ohuABIwYJxfHBl2H6/giphy.gif");
      background-position: center;

      &:hover {
        box-shadow:
        0 0 3px 2px #fff,  /* inner white */
        0 0 5px 3px #EB984E, /* middle magenta */
        0 0 7px 5px #CA6F1E; /* outer cyan */
  }
    `
  
};
${props =>
    props.name === 'R2-D2' &&
    css`
      background: none;
      Background-image: url("https://media.giphy.com/media/3ornjMd3Pu2F8Vi7DO/giphy.gif");
      background-position: center;

      &:hover {
        box-shadow:
        0 0 3px 2px #fff,  /* inner white */
        0 0 5px 3px #3498DB, /* middle magenta */
        0 0 7px 5px #E74C3C; /* outer cyan */
  }
    `
  
};
${props =>
    props.name === 'Leia Organa' &&
    css`
      background: none;
      Background-image: url("https://media.giphy.com/media/3ohuPfGENOtDzsEaXK/giphy.gif");
      background-position: center;

      &:hover {
        box-shadow:
        0 0 3px 2px #fff,  /* inner white */
        0 0 5px 3px #7B7D7D, /* middle magenta */
        0 0 7px 5px #7B7D7D; /* outer cyan */
  }
    `
  
};
${props =>
    props.name === 'Owen Lars' &&
    css`
      background: none;
      Background-image: url("https://media.giphy.com/media/VIPtjbhtRx2NHe1lKt/giphy.gif");
      background-position: center;

      &:hover {
        box-shadow:
        0 0 3px 2px #fff,  /* inner white */
        0 0 5px 3px #7E5109, /* middle magenta */
        0 0 7px 5px #B9770E; /* outer cyan */
  }
    `
  
};
${props =>
    props.name === 'Beru Whitesun lars' &&
    css`
      background: none;
      Background-image: url("https://media.giphy.com/media/39m4FbL5w7it07Qcux/giphy.gif");
      background-position: center;

      &:hover {
        box-shadow:
        0 0 3px 2px #fff,  /* inner white */
        0 0 5px 3px #839192, /* middle magenta */
        0 0 7px 5px #34495E; /* outer cyan */
  }
    `
  
};
${props =>
    props.name === 'R5-D4' &&
    css`
      background: none;
      Background-image: url("https://media.giphy.com/media/3ohjV1f257kWMmxurC/giphy.gif");
      background-position: center;

      &:hover {
        box-shadow:
        0 0 3px 2px #fff,  /* inner white */
        0 0 5px 3px #E67E22, /* middle magenta */
        0 0 7px 5px #34495E; /* outer cyan */
  }
    `
  
};
${props =>
    props.name === 'Biggs Darklighter' &&
    css`
      background: none;
      Background-image: url("https://media.giphy.com/media/hokI7GBW7DP8c/giphy.gif");
      background-position: center;

      &:hover {
        box-shadow:
        0 0 3px 2px #fff,  /* inner white */
        0 0 5px 3px #7E5109, /* middle magenta */
        0 0 7px 5px #6E2C00; /* outer cyan */
  }
    `
  
};
${props =>
    props.name === 'Obi-Wan Kenobi' &&
    css`
      background: none;
      Background-image: url("https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif");
      background-position: center;

      &:hover {
        box-shadow:
        0 0 3px 2px #fff,  /* inner white */
        0 0 5px 3px #3498DB, /* middle magenta */
        0 0 7px 5px #85C1E9 ; /* outer cyan */
  }
    `
  
};
`

export default PersonCard