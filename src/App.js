import HelloWorld from './Components/HelloWorld';
import Counter from './Components/Counter';
import FormDisplay from './Components/FormDisplay';
import ListCompo from './Components/ListCompo';
import ToogleSwitch from './Components/ToogleSwitch';
import Card from 'react-bootstrap/Card'; // imported Bootstrap card
import 'bootstrap/dist/css/bootstrap.min.css'; // added Bootstrap CSS
import Fetch from './Components/Fetch';
import Countdown from './Components/Countdown'
import Todo from './Components/Todo'
import ChangeBgColor from './Components/ChangeBgColor'
import RouterLearn from './Components/RouterLearn'
import RandomQuote from './Components/RandomQuote'
function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        gap: '20px', // spacing between cards
      }}
    >
      <Card style={{ width: '18rem', background: 'yellow' }}>
        <Card.Body>
          <Card.Title>First component</Card.Title>
          <Card.Text>Hellow World App will display below!</Card.Text>
          <HelloWorld />
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'grey' }}>
        <Card.Body>
          <Card.Title>Second component</Card.Title>
          <Card.Text>Counter App will display below!</Card.Text>
          <Counter />
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'pink' }}>
        <Card.Body>
          <Card.Title>Third component</Card.Title>
          <Card.Text>Display Quick App will display below!</Card.Text>
          <FormDisplay />
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'blue' }}>
        <Card.Body>
          <Card.Title>Fourth component</Card.Title>
          <Card.Text>ListCompo App will display below!</Card.Text>
          <ListCompo />
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'salmon' }}>
        <Card.Body>
          <Card.Title>Fifth component</Card.Title>
          <Card.Text>ToogleSwitch App will display below!</Card.Text>
          <ToogleSwitch />
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'pink' }}>
        <Card.Body>
          <Card.Title>Sixth component</Card.Title>
          <Card.Text>Fetch and display data in the app!</Card.Text>
          <Fetch />
        </Card.Body>
      </Card>
      
      
      <Card style={{ width: '18rem', background: 'violet' }}>
        <Card.Body>
          <Card.Title>Seventh component</Card.Title>
          <Card.Text>Countdown and Countdown Countdown!</Card.Text>
          <Countdown />
        </Card.Body>
      </Card>
      

      <Card style={{ width: '18rem', background: 'maroon' }}>
        <Card.Body>
          <Card.Title>Eighth component</Card.Title>
          <Card.Text>todo list and remove Countdown!</Card.Text>
          <Todo />
        </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem', background: 'white' }}>
        <Card.Body>
          <Card.Title>Ninth component</Card.Title>
          <Card.Text>Background change upon cliekc!</Card.Text>
          <ChangeBgColor />
        </Card.Body>
      </Card>

      

      <Card style={{ width: '18rem', background: 'indigo' }}>
        <Card.Body>
          <Card.Title>Tenth component</Card.Title>
          <Card.Text>Router wala component!</Card.Text>
          <RouterLearn />
        </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem', background: 'gold' }}>
        <Card.Body>
          <Card.Title>Eleventh component</Card.Title>
          <Card.Text>Random quote wala component!</Card.Text>
          <RandomQuote />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;