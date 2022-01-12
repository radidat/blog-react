import './App.css';
import React  from 'react';
import Home from './pages/Home';
import PostDetailPage from './pages/PostDetailPage';
import { Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import WriteNewArticle from './components/WriteNewArticle';
import ProfilAdmin from './components/ProfilAdmin';
import DashboardHome from './components/DashboardHome';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SendEmailSubscribe from './components/sendEmail';
import {Navigate} from 'react-router-dom'; 
import {useAuth} from './context/AuthContext'; 
import EditPost from './components/EditPost';
function App() {

  const {currentUser} = useAuth()
  return (
    <div>
      
      <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='postDetail/:id' element={<PostDetailPage/>}/>
      <Route path='/dashboard' element={currentUser ? <Dashboard/> : <Navigate to='/signin'/>}/>
      <Route  path='dashboard/write-article' element={ currentUser ? <Dashboard children={<WriteNewArticle/>}/>: <Navigate to='/signin'/>}/>
      <Route  path='dashboard/home' element={ currentUser? <Dashboard children={<DashboardHome/>}/>: <Navigate to='/signin'/>}/>
      <Route  path='/dashboard/profil-admin' element={ currentUser ? <Dashboard children={<ProfilAdmin/>}/>: <Navigate to='/signin'/>}/>
      <Route  path='/dashboard/editPost/:id' element={ currentUser ? <Dashboard children={<EditPost/>}/>: <Navigate to='/signin'/>}/>
      <Route  path='/signup' element={<SignUp/>}/>
      <Route  path='/signin' element={<SignIn/>}/>
      <Route  path='/sendEmailSubscribe' element={<SendEmailSubscribe/>}/>
        </Routes>
    </div>
  );
}

export default App;
/**
 *         <Route exact path='/post/:id' children={Home}/>
        <Route exact path='/signin' children={Home}/>
        <Route exact path='/signinup' children={Home}/>
        <Route exact path='/Dashbord' children={Home}/>
 * **/