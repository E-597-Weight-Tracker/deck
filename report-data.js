// Entirely fictional, deterministic data for the printable design prototype.
// Dates/times are patient-local wall-clock values; no timezone conversion is applied.
export const reportDays = Array.from({ length: 30 }, (_, index) => {
  const systolic = [132,130,134,128,131,129,126,133,136,132,130,128,127,129,133,135,132,130,128,126,129,131,127,125,128,130,127,126,128,125][index];
  const diastolic = [80,78,82,77,80,79,76,81,83,80,78,77,76,78,80,82,80,79,77,76,78,80,77,75,77,79,76,75,77,76][index];
  const weight = [78.4,78.2,78.3,78.1,78.0,78.2,78.1,78.4,78.6,78.5,78.3,78.2,78.1,78.0,78.2,78.5,78.4,78.3,78.1,78.0,78.1,78.2,78.0,77.9,78.0,78.1,77.9,77.8,77.9,77.8][index];
  const day = index + 1;
  // Shared three-day gap, plus one isolated missing day for each measurement.
  const sharedGap = day >= 12 && day <= 14;
  const weightReadings = index % 3 === 0
    ? [{ time: '07:00', kg: Number((weight - .1).toFixed(1)) }, { time: '19:00', kg: Number((weight + .1).toFixed(1)) }]
    : [{ time: ['07:00','07:10','07:20'][index % 3], kg: weight }];
  return {
    date: `2026-09-${String(index + 1).padStart(2, '0')}`,
    bloodPressure: sharedGap || day === 23 ? [] : [
      { time: ['07:15','07:30','07:45'][index % 3], systolic: systolic + 3, diastolic: diastolic + 2 },
      { time: ['19:30','20:00','19:45'][index % 3], systolic: systolic - 3, diastolic: diastolic - 2 }
    ],
    weight: sharedGap || day === 6 ? [] : weightReadings
  };
});
