import x from './Main2.module.css';

const Main2 = () => {
	return (
		<section className={x.Main2}>
			<div className={x.ECard}>Электронная карта</div>
			<div className={x.InfoPatient} id={x.ECard}>
				<div id={x.DivImg} className={x.DivImg1}>
					<img src="InfoPatient.png" className={x.InfoPatientImg} width={50} height={70} />
				</div>
				<div className={x.InfoPatientText} id={x.TXT}>Информация о пациенте</div>
				<hr id={x.HR1} />
				<ul className={x.InfoPatientList}>
					<li><span>Ваши личные данные</span></li>
					<li><span>Рекомендации врачей</span></li>
					<li><span>История болезней</span></li>
				</ul>
			</div>
			<div className={x.AnalysisResults} id={x.ECard}>
				<div id={x.DivImg}>
					<img src="AnalysisResults.png" className={x.AnalysisResultsImg} width={70} height={70} />
				</div>
				<div className={x.AnalysisResultsText} id={x.TXT}>Результат анализов</div>
				<hr />
				<div className={x.AnalysisResultsContent}>
					Вы можете узнать здесь результаты <br />своих анализов
				</div>
			</div>
			<div className={x.AddInfo} id={x.ECard}>
				<div id={x.DivImg}>
					<img src="AddInfo.png" className={x.AddInfoImg} width={60} height={70} />
				</div>
				<div className={x.AddInfoText} id={x.TXT}>Добавить информацию</div>
				<hr />
				<div className={x.AddInfoContent}>
					Добавляйте в свою электронную <br /> медицинскую карту новые данные
				</div>
			</div>
			<div className={x.RecStory} id={x.ECard}>
				<div id={x.DivImg}>
					<img src="RecStory.png" className={x.RecStoryImg} width={75} height={70} />
				</div>
				<div className={x.RecStoryText} id={x.TXT}>История приемов</div>
				<hr />
				<div className={x.RecStoryContent}>
					Вся информация о полученных услугах <br />за все время хранится здесь
				</div>
			</div>
		</section>
	);
}

export default Main2;