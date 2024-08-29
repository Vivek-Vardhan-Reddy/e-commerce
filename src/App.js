import logo from './logo.svg';
import Accounts from './pages/Accounts.mjs';
import './App.css';
import Textfield  from './TextField.js';
import Navbar from './Navbar.js';
import { useState } from 'react';
import Alert from './Alert.js';
import Kart from './pages/Kart.mjs';
import {
	BrowserRouter,
	Route,
	Link, 
	Routes
} from 'react-router-dom';
import Collection from './components/collection.js';
import Footer from './Footer.js';





function App() {
	const [alert,setAlert]=useState('')
	const showAlert=(msg)=>{
		setAlert({
			m:msg
		}
		)
	}

	// const remove=()=>{
	// 	document.body
	// }


	const [mode,setMode]=useState('white')
	const toggleMode = () =>{
		if(mode ==='grey'){
			setMode('white')
			document.body.style.backgroundColor='white';
			// document.body.getElementsByClassName(".menu").backgroundColor='white';
			document.body.getElementsByTagName("button")[0].style.backgroundColor="white";
			// document.body.getElementsByTagName("button")[1].style.backgroundColor="white";
			// document.body.getElementsByTagName("button")[2].style.backgroundColor="white";
			// document.body.getElementsByTagName("button")[3].style.backgroundColor="white";
			showAlert("Light Mode is On")
			document.title='KK-Light'
		}
		else{
			setMode('grey')
			document.body.style.backgroundColor='grey';
			// document.body.getElementsByClassName(".menu").backgroundColor='grey';
			document.body.getElementsByTagName("button")[0].style.backgroundColor="grey";
			// document.body.getElementsByTagName("button")[1].style.backgroundColor="grey";
			// document.body.getElementsByTagName("button")[2].style.backgroundColor="grey";
			// document.body.getElementsByTagName("button")[3].style.backgroundColor="grey";
			showAlert("Drak Mode is On")
			document.title='KK-Dark'
		}
	}
  return (

		<>
			<Navbar mode={mode} toggleMode={toggleMode}/>
			<Alert alert={alert}/>
			<hr/>
			
			<BrowserRouter forceRefresh>
			<Routes>
				<Route path="/pages/Kart" element={<Kart/>}/>
				<Route path="/pages/Accounts" element={<Accounts />} />
			</Routes>
			</BrowserRouter>
			<Collection/>
			<Footer/>
		</>
		);

}

export default App;



