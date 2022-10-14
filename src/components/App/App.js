import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import employee from '../../Helper/employee';
import { useState } from 'react'

  
function App() {

  const handleNext = () => {
    let maxPage = Math.floor( data.length/5);
    let newIndex = index + 1;
    if (newIndex >= maxPage) {
      newIndex = maxPage;
    }
    setIndex(newIndex);
    setEmployeList(data.slice(newIndex*5, newIndex*5 + 5));
  };
  const handlePrev = () => {
    let newIndex = index - 1;
    if (newIndex < 0) newIndex = 0;
    setIndex(newIndex);
    setEmployeList(data.slice(newIndex*5, newIndex*5 + 5));
  };
  
  const [data] = useState(employee);
  const [employeeList, setEmployeList] = useState(data.slice(0, 5));
  const [index, setIndex] = useState(0);


  return (
    <>
      <div className="container">
        <Header   index={index} />
        <Main employeeList={employeeList}
        />
        <Footer
         handlePrev={handlePrev}
         handleNext={handleNext}
         />
      </div>
    </>
  );
}

export default App;
