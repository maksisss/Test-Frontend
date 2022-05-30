import React from 'react';
import List from './List/List';
import Calendar from './Calendar/Calendar';


const MakeAnAppointment = () => {
    return (
        <div>
            <List />
            <Calendar />
        </div>
    );
}

export default MakeAnAppointment;