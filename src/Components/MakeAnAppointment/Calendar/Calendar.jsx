import React from 'react';
import x from './Calendar.module.css';
import DayMonth from './DayMonth';


const Calendar = () => {
    return (
        <section className={x.Calendar}>
            <div className={x.month}>
                <ul>
                    <li className={x.prev}>❮</li>
                    <li className={x.next}>❯</li>
                    <li>
                        Июнь, 2020
                    </li>
                </ul>
            </div>
            <ul className={x.weekdays}>
                <li>Пн</li>
                <li>Вт</li>
                <li>Ср</li>
                <li>Чт</li>
                <li>Пт</li>
                <li>Сб</li>
                <li>Вс</li>
            </ul>
            <ul className={x.days}>
                <li className={x.DayPos}><font color='grey'>1</font></li>
                <li className={x.DayPos}><font color='grey'>2</font></li>
                <li className={x.DayPos}><font color='grey'>3</font></li>
                <li className={x.DayPos}><font color='grey'>4</font></li>
                <li><DayMonth Day='5' /></li><li><DayMonth Day='6' /></li>
                <li><DayMonth Day='7' /></li><li><DayMonth Day='8' /></li>
                <li><DayMonth Day='9' /></li><li><DayMonth Day='10' /></li>
                <li><DayMonth Day='11' /></li><li><DayMonth Day='12' /></li>
                <li><DayMonth Day='13' /></li><li><DayMonth Day='14' /></li>
                <li><div className={x.Active}>2</div><DayMonth Day='15' /></li>
                <li><DayMonth Day='16' /></li>
                <li><DayMonth Day='17' /></li><li><DayMonth Day='18' /></li>
                <li><DayMonth Day='19' /></li><li><DayMonth Day='20' /></li>
                <li><DayMonth Day='21' /></li><li><DayMonth Day='22' /></li>
                <li><DayMonth Day='23' /></li><li><DayMonth Day='24' /></li>
                <li><DayMonth Day='25' /></li><li><DayMonth Day='26' /></li>
                <li><DayMonth Day='27' /></li><li><DayMonth Day='28' /></li>
                <li><DayMonth Day='29' /></li>
                <li><div className={x.Active}>1</div><DayMonth Day='30' /></li>
            </ul>
        </section>
    );
}



export default Calendar;