import React from 'react';
import { NavLink } from 'react-router-dom';
import x from './List.module.css';
import QuestRec from './QuestRec';


const List = () => {
    return (
        <section className={x.List}>
            <div className={x.MyRec}>
                <NavLink to="/PersonalAcc"><img src='ArrowBack.png' width={18} height={13.36} />
                <span className={x.MyRecTxt}>Мои записи</span></NavLink>
            </div>
            <div className={x.Ankets}>
                <QuestRec Data='Понедельник 15.06.20 | 15:30' Address='СПБ ГБУЗ "Городская поликлиника №25",' Address2 = 'пр. Солидарности, д. 1, к. 1, лит. А' AvaQ='Doctor1.jpg' DocName='Малушко Т. Н.' DocProf='Хирургия' />
                <QuestRec Data='Понедельник 15.06.20 | 18:30 ' Address='СПБ ГБУЗ "Городская поликлиника №25",' Address2 = ' пр. Солидарности, д. 1, к. 1, лит. А' AvaQ='Doctor2.jpg' DocName='Харьков В. С.' DocProf='Терапевтическое отделение' />
                <QuestRec Data='Вторник 30.06.20 | 12:10 ' Address='СПБ ГБУЗ "Городская поликлиника №25",' Address2 = ' пр. Солидарности, д. 1, к. 1, лит. А' AvaQ='Doctor1.jpg' DocName='Малушко Т. Н.' DocProf='Хирургия' />
                <QuestRec Data='Четверг 02.07.20 | 12:30 ' Address='СПБ ГБУЗ "Городская поликлиника №25",' Address2 = ' пр. Солидарности, д. 1, к. 1, лит. А' AvaQ='Doctor2.jpg' DocName='Харьков В. С.' DocProf='Терапевтическое отделение' />
                <QuestRec Data='Четверг 02.07.20 | 16:30 ' Address='СПБ ГБУЗ "Городская поликлиника №25",' Address2 = ' пр. Солидарности, д. 1, к. 1, лит. А' AvaQ='Doctor2.jpg' DocName='Харьков В. С.' DocProf='Терапевтическое отделение' />
            </div>
        </section>
    );
}



export default List;