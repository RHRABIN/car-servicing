import { Route, Routes } from 'react-router-dom';
import './App.css';
import Orders from './Orders/Orders';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import ReauireAuth from './Pages/RequireAuth/ReauireAuth';
import SecreatPage from './Pages/SecreatPage/SecreatPage';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<ReauireAuth><Home></Home></ReauireAuth>}></Route>
        <Route path='/home' element={<ReauireAuth><Home></Home></ReauireAuth>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/secreat/:id' element={
          <ReauireAuth>
            <SecreatPage></SecreatPage>
          </ReauireAuth>
        }></Route>
        <Route path='/orders' element={
          <ReauireAuth>
            <Orders></Orders>
          </ReauireAuth>
        }>

        </Route>
        <Route path='*' elemen={<NotFound></NotFound>}>

        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
