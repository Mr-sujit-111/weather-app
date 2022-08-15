import React from 'react';
import styled from 'styled-components';
import './App.css';
import Body from './component/Body';
import Header from './component/Header';
import SidebarBody from './component/sidebar/SidebarBody';
import SidebarHeader from './component/sidebar/SidebarHeader';
import SliderFooter from './component/sidebar/SliderFooter';
import GraphSection from './component/sidebar/GraphSection';
// import Demo from './component/Demo'

function App() {
  return (
    <div className="App">
      {/* <Demo/> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Header />
            <Body />
            <GraphSection />
          </div>
          <div className="col-sm-4">
            <SidebarCointainer>
              <SidebarHeader />
              <SidebarBody />
              <SliderFooter />
            </SidebarCointainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const SidebarCointainer = styled.div`
  background-color: white;
  background-image: linear-gradient(#455671,#183B7F);
    color: white;
`

