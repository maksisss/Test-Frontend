import React from 'react';
import x from './List.module.css';



const ListRec = (props) => {
    return (
        <section className={x.List}>
            <div className={x.ListRec}>
                <div className={x.quest}>
                    <div className={x.Data}><b> {props.Data} </b></div>
                    <div className={x.Address}> {props.Address} <br /> {props.Address2}</div>
                    <div className={x.Persona}>
                        <div className={x.E3}>
                            <div className={x.AvaQ}><img src={props.AvaQ} className={x.AvaQimg} width={70} height={80} /></div>
                        </div>
                        <div className={x.DocName}><b> {props.DocName} </b></div>
                        <div className={x.DocProf}> {props.DocProf} </div>
                    </div>
                    <a href='#' className={x.CancelA}><div className={x.Cancel}><center>Отменить</center></div></a>
                </div>
            </div>
        </section>
    );
}



export default ListRec;