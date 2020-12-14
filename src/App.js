import './App.css';
import Layout from './shared/Layout';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App-layout">
      <Layout>
        <MainContainer />
      </Layout>
    </div>
  );
}

export default App;
