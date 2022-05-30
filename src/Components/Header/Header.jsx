import React from 'react';
import './../../App.module.css';
import './Header.css';

const Header = () => {
	return (
		<header className="Head">
			<div className="MyProfile">
				Мой профиль
			</div>
			<div className="Search">
				<img src="Search.png" width={25} height={25} />
			</div>
			<div className="Notific">
				<img src="Colocol.png" width={50} height={30} />
			</div>
			<div className="Eye">
				<img src="Eye.png" width={30} height={35} />
			</div>
			<div className='E7'>
				<div className='E1'>
					<div className="AvaP"><img src='AvaP.jpg' width={47} height={60} /></div>
				</div>
			</div>
			<div className="Menu">
				<a href='#' className='Arrow'>{'>'}</a>
			</div>
		</header>
	);
}

export default Header;