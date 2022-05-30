import React from 'react';
import x from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={x.Nav}>
			<img src="Logo.png" className={x.Logo} width={75} height={67} />
			<div className={x.ListNav}>

				<a href="#" className={x.TDNone}>
					<div className={x.PorfileOver} id={x.OvList}>
						<div className={x.Profile}>
							<img src="Profile.png" />
							<p className={x.Profile2}>Профиль</p>
						</div>
					</div>
				</a>

				<a href="#" className={x.TDNone}>
					<div className={x.DoctorsOver} id={x.OvList}>
						<div className={x.Doctors}>
							<img src="Doctors.png" />
							<p className={x.Doctors2}>Врачи и клиники</p>
						</div>
					</div>
				</a>

				<a href="#" className={x.TDNone}>
					<div className={x.MassageOver} id={x.OvList}>

						<div className={x.Massage}>
							<img src="Massage.png" />
							<p className={x.Massage2}>Сообщения</p>
						</div>
					</div>
				</a>

				<a href="#" className={x.TDNone}>
					<div className={x.TestOver} id={x.OvList}>
						<div className={x.Test}>
							<img src="Test.png" />
							<p className={x.Test2}>Тестирование</p>
						</div>
					</div>
				</a>

				<a href="#" className={x.TDNone}>
					<div className={x.UsefulOver} id={x.OvList}>
						<div className={x.Useful}>
							<img src="Useful.png" />
							<p className={x.Useful2}>Полезно знать</p>
						</div>
					</div>
				</a>

				<a href="#" className={x.TDNone}>
					<div className={x.Send}>Подать заявку</div>
				</a>
				<div className={x.Help}>
					<img src="Help.png" />
					<p className={x.Help2}>Помощь</p>
				</div>
			</div>
			<div className={x.Appvelox}>
				<img src="Appvelox.png" />
			</div>
		</nav>
	);
}

export default Nav;