import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/Home';
import FirstStepPage from './pages/onboard-wizard/FirstStep';
import SecondStepPage from './pages/onboard-wizard/SecondStep';
import ThirdStepPage from './pages/onboard-wizard/ThirdStep';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage></HomePage>
        </Route>
        <Route path='/onboard/1' exact>
          <FirstStepPage></FirstStepPage>
        </Route>
        <Route path='/onboard/2'>
        <SecondStepPage></SecondStepPage>
        </Route>
        <Route path='/onboard/3'>
          <ThirdStepPage></ThirdStepPage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
