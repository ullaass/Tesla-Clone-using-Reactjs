import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model Y"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model 3"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model X"
          description="Order Online For Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Lower Cost Solar Panel "
          description="Money-Back Gurantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
        />
        <Section 
          title="Solar For new Roofs"
          description="Solar Roof Costs less than new roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section 
          title="Accessories"
          description="Solar Roof Costs less than new roof Plus Solar Panels"
          backgroundImg="accessories.jpg"
          leftBtnText="Shop Now"
          
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh; 
    z-index:10;
`