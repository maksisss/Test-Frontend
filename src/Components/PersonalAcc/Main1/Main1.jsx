import React from 'react';
import { NavLink } from 'react-router-dom';
import x from './Main1.module.css';
import Quest from './Quest/Quest';

const Main1 = () => {
	return (
		<section className={x.Main1}>
			<div className={x.Reception}>
				Записи на прием
			</div>
			<Quest />
			<div className={x.MoreRec}>
				Еще 3 записи <br />
				<NavLink to="/MakeAnAppointment" className={x.More}><center>Подробнее</center></NavLink>
			</div>
		</section>
	);
}

export default Main1;