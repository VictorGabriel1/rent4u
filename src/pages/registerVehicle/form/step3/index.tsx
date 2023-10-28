import { Calendar } from "react-native-calendars";
import { RegisterVehicleFormProps } from "..";
import { useMemo, useState } from "react";

export default function RegisterVehicleStep3({
  control,
  errors,
}: RegisterVehicleFormProps) {
  const initDate = new Date().toISOString().split("T")[0];
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const marked = useMemo(
    () => ({
      ...selectedDays.reduce((acc: { [key: string]: any }, selectedDay) => {
        acc[selectedDay] = {
          selected: true,
          selectedColor: "#222222",
          selectedTextColor: "red",
        };
        return acc;
      }, {}),
    }),
    [selectedDays]
  );
  return (
    <>
      <Calendar
        hideExtraDays
        minDate={initDate}
        markingType="multi-period"
        markedDates={marked}
        onDayPress={(day) => {
          if (marked[day.dateString]) {
            setSelectedDays(
              selectedDays.filter(
                (selectedDay) => selectedDay !== day.dateString
              )
            );
          } else {
            setSelectedDays([...selectedDays, day.dateString]);
          }
        }}
      />
    </>
  );
}
