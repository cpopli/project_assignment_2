
import './App.css';
import Cards from './components/cards';
import Title from './components/title';
import RegionComboBox from './components/dropdown';
import CostEstimater from './components/cost-estimater';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top_list from './components/top_list';
import Images from './component7/images';
import { useContext } from 'react';
import Instances from './component2/instances';
import Radio from './components/radio';
function App() {

  function parentAlert(data)
  {
    const final_summary_p=data;
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <div><Title /> <RegionComboBox />
      <CostEstimater /> 
    <Cards alert={parentAlert} /></div>}></Route>
        <Route path="/review&launch" element={
        <div><Title /> <CostEstimater />
          <Images />
      </div>}>
        </Route>
        <Route path="/instances" element={
        <div><Title /> <CostEstimater /><Instances />
      </div>}>
        </Route>
        </Routes></BrowserRouter>
  );
}

export default App;
