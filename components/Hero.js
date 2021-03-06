import React from 'react';
import Logo from './Logo';
import Buscador from './Searcher';
import styled from 'styled-components';

const Gradient = styled.div`
  background: linear-gradient(to left, ${props=>props.theme.color.primary}, ${props=>props.theme.color.secondary});
  padding: 80px 0 186px;
`;

const Background = styled.div`
  background: url(/static/background.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
  @media (max-width: 1024px) {
    background: rgb(233, 131, 238);
  }
`;

const Wrapper = styled.div`
  max-width: 1024px;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

// es invocado desde HomePage
function Hero(props) {
  return(
    <Background>
      <Gradient>
        <Wrapper>
          <Logo/>
          <Buscador
            onSubmit={props.onSubmit}
          />
        </Wrapper>
      </Gradient>
    </Background>
  );
}

export default Hero;
