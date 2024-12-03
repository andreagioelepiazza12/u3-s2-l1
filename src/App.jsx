
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import MyNav from './components/MyNav';
import MyFoot from './components/MyFoot';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import { Row } from 'react-bootstrap';
import BookList from './components/BookList'

import fantasy from './data/fantasy.json'

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <Row>
        <BookList books = {fantasy} />
      </Row>
      <AllTheBooks />
      <MyFoot />
    </>
  );
}

export default App
