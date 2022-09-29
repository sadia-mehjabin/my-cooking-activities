import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import GeeksforGeeks from './components/Toast/Toast';
import Answer from './components/answer/Answer';

function App() {
  return (
    <div>
      <h1>My Cooking Activities</h1>
      <Layout></Layout>
      <Answer></Answer>
      
    </div>
  );
}

export default App;
