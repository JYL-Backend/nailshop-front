import React, { useState } from 'react';

interface Props {
  startHour: number;
  endHour: number;
  startMinute: 30 | 0;
  endMinute: 30 | 0;
}
const TimePickerTable = ({
  startHour = 0,
  endHour = 23,
  startMinute = 0,
  endMinute = 0,
}: Props) => {
  const [selectedTime, setSelectedTime] = useState({
    hour: null,
    minute: null,
  });

  const handleClickTime = (hour, minute) => {
    setSelectedTime({
      hour: hour,
      minute: minute,
    });
  };
  let nowH = startHour;
  let nowM = startMinute;

  let times = [];

  while (true) {
    times.push({
      hour: nowH,
      minute: nowM,
    });
    if (nowH == endHour && nowM == endMinute) {
      break;
    }

    if (nowM == 0) {
      nowM = 30;
      continue;
    }
    nowM = 0;
    nowH += 1;
  }

  return (
    <div
      className={
        'grid grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-2 text-center text-sm font-semibold'
      }
    >
      {times.map((t) => {
        return (
          <div
            onClick={() => handleClickTime(t.hour, t.minute)}
            className={` rounded-full py-2 cursor-pointer ${
              selectedTime.hour == t.hour && selectedTime.minute == t.minute
                ? 'bg-black text-white'
                : 'bg-gray-100'
            }`}
          >
            {t.hour.toString().padStart(2, '0')}:{t.minute.toString().padStart(2, '0')}
          </div>
        );
      })}
    </div>
  );
};

export default TimePickerTable;
