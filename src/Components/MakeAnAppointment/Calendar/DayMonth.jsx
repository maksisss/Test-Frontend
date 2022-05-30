import React from 'react';
import x from './Calendar.module.css';


const DayMonth = (props) => {
    return (
        <section className={x.DayMonth}>
            <div className={x.Blok}>
                <div className={x.DayPos}><b> {props.Day} </b></div>
            </div>
        </section>
    );
}



export default DayMonth;