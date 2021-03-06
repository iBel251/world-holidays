import React from 'react';
import '../../scss/HolidayCard.scss';
import { useSelector } from 'react-redux';

const Holidays = () => {
  const holiday = useSelector((state) => state.holiday);
  const total = holiday.length;

  return (
    <section className="holiday-container d-flex">
      <div className="holiday-title">
        <p className="">Total Holidays</p>
        <p>{total}</p>
      </div>

      <ul className="holiday-list d-flex">
        {holiday.map((
          { holidayName, holidayDate },
        ) => (
          <li className="holiday-item" key={holidayName}>
            <p className="holiday-name">{holidayName}</p>
            <p className="holiday-date">{holidayDate}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Holidays;
