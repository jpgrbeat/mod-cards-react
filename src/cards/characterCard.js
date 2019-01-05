import React, {Component} from 'react'
import styled from 'styled-components'

const CharacterName = styled.h2`
  padding: 0 5px 2px 5px;
`
const CardWrapper = styled.div`
  display: block;
  border-radius: 5px;
  padding: 5px;
  width: 40%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  text-align: center;

  & p{
    display: inline-block;
    padding: 2px;
    margin: 2px;
  }
`
const Species = styled.p`
  color: red;
  background-color: black;
`
const Planet = styled.p`
  color: blue;
  background-color: yellow;
`
class CharacterCard extends Component{
  render(){
    return(
      <CardWrapper>
        <CharacterName>
          Princess Leia
        </CharacterName>
        <Planet>
          Alderan
        </Planet>
        <Species>
          Human
        </Species>
      </CardWrapper>
    )
  }
}
export default CharacterCard
