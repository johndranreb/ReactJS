import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentsComponents from './components/ParentsComponents';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.modules.css'



function App() {
  return (
    <div className="App">
      <h1 className='error'> Error</h1>
      <h1 className={styles.success}> Success</h1>
      {/* <Inline /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
     {/* <ParentsComponents /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="John" heroName="batman"> 
      <p>This is children props</p>
      </Greet>  */}
    {/* <Greet name="Dranreb" heroName="superman"> 
      <button>Click me</button>
      </Greet>  */}
      {/* <Greet name="JB" heroName="antman" /> */}
     {/* <Welcome name="John" heroName="batman"/>  */}
      {/* <Welcome name="Dranreb" heroName="superman"/>  */}
      {/* <Welcome name="JB" heroName="antman"/>   */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
