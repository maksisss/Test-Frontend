import React from 'react';
import x from './Quest.module.css';


const Quest = () => {
    return (
        <div>
            <div className={x.quest} id={x.q1}>
                <div className={x.Data}><b>Понедельник 15.06.20|15:30</b></div>
                <div className={x.Address}>СПБ ГБУЗ "Городская поликлиника №25",<br /> пр. Солидарности, д. 1, к. 1, лит. А</div>
                <div className={x.Persona}>
                    <div className={x.E3} id={x.Ex1}>
                        <div className={x.AvaQ}><img src="Doctor1.jpg" className={x.AvaQimg} width={70} height={80} /></div>
                    </div>
                    <div className={x.DocName} id={x.DCN1}><b>Малушко Т. Н.</b></div>
                    <div className={x.DocProf} id={x.DCP1}>Хирургия</div>
                    <a href='#'><div className={x.Cancel} id={x.C1}>Отменить</div></a>
                </div>
            </div>
            <div className={x.quest} id={x.q2}>
                <div className={x.Data}><b>Понедельник 15.06.20|18:30</b></div>
                <div className={x.Address}>СПБ ГБУЗ "Городская поликлиника №25",<br /> пр. Солидарности, д. 1, к. 1, лит. А</div>
                <div className={x.Persona}>
                    <div className={x.E3} id={x.Ex2}>
                        <div className={x.AvaQ}><img src="Doctor2.jpg" className={x.AvaQimg} width={70} height={80} /></div>
                    </div>
                    <div className={x.DocName} id={x.DCN2}><b>Харьков В. С.</b></div>
                    <div className={x.DocProf} id={x.DCP2}>Терапевтическое отделение</div>
                    <a href='#'><div className={x.Cancel} id={x.C2}>Отменить</div></a>
                </div>
            </div>
        </div>
    );
}

export default Quest;