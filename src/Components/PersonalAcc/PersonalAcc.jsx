import React from 'react';
import x from './../../App.module.css';
import Main1 from './Main1/Main1';
import Main2 from './Main2/Main2';

const PersonalAcc = () => {
	return (
		<div className={x.PersonalAcc}>
			<Main1 />
			<Main2 />
		</div>
	);
}

export default PersonalAcc;