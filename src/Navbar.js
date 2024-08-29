import React from "react";
import {BrowserRouter, Link} from 'react-router-dom'
import './App.css'

export default function Navbar(props){
    return(
        <>
        <header>
		<div className="header">
			<span className="logo">
			<a href="/"><img className="LogoImg"src="./logo.png" alt="Logo" height="80px" width="120px" href=""/></a>
			</span>	
			<form><input type="text" className="searchBar my-3" placeholder="Em Kavali Babu"/></form>
			<div className="topRight my-4">
				<BrowserRouter>
					<Link to="/pages/Kart" className="kart">Kart</Link>
					<Link to="/pages/Accounts" className="myAccount">My Account</Link>
				</BrowserRouter>
			</div>
		</div>
		</header>
		<div className="na my-2">
		<span>
		<button className="menu">Menu</button>
		<button className="men">Men's Wear</button>
		<button className="women">Women's Wear</button>
		<button className="kids">Kid's Wear</button>
		</span>
		<span className={`form-check form-switch backgroundColor-${props.mode==='white'? 'grey':'white'}`}>
			<input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
			<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
		</span>
	</div>
	<div className="kalli">
		<button className="larr"><h1>&larr;</h1></button>
		<button className="rarr"><h1>&rarr;</h1></button>
	</div>

	<div id="root"></div>
	
	<script src="./KinnuKart.js"></script>
	<script src="./KinnuKart.jsx"></script>
    </>
    );
}