import React from 'react';
import x from './App.module.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import PersonalAcc from './Components/PersonalAcc/PersonalAcc';
import MakeAnAppointment from "./Components/MakeAnAppointment/MakeAnAppointment";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter className={x.App}>
			<Header />
			<Nav />
			<PersonalAcc />
			<Routes>
				<Route path="/MakeAnAppointment" element={<MakeAnAppointment />} />
				<Route path="/PersonalAcc" element={<PersonalAcc />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;