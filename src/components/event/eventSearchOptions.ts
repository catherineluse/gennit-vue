import {
  SelectedHourRanges,
  SelectedWeekdays,
  SelectedWeeklyHourRanges,
  SelectedHourRangeObject,
  SelectedWeekdayObject,
  DistanceUnit,
  Distance
} from "@/types/eventTypes";
import locationFilterTypes from "@/components/event/locationFilterTypes";

export const weekdays = [
  { number: "0", name: "Sunday", shortName: "Sun" },
  { number: "1", name: "Monday", shortName: "Mon" },
  { number: "2", name: "Tuesday", shortName: "Tue" },
  { number: "3", name: "Wednesday", shortName: "Wed" },
  { number: "4", name: "Thursday", shortName: "Thu" },
  { number: "5", name: "Friday", shortName: "Fri" },
  { number: "6", name: "Saturday", shortName: "Sat" },
];

export const hourRangesData = [
  {
    min: 0,
    max: 3,
    "12-hour-label": "12am-3am",
    "24-hour-label": "12:00 to 3:00",
  },
  {
    min: 3,
    max: 6,
    "12-hour-label": "3am-6am",
    "24-hour-label": "3:00 to 6:00",
  },
  {
    min: 6,
    max: 9,
    "12-hour-label": "6am-9am",
    "24-hour-label": "6:00 to 9:00",
  },
  {
    min: 9,
    max: 12,
    "12-hour-label": "9am-12pm",
    "24-hour-label": "9:00 to 12:00",
  },
  {
    min: 12,
    max: 15,
    "12-hour-label": "12pm-3pm",
    "24-hour-label": "12:00 to 15:00",
  },
  {
    min: 15,
    max: 18,
    "12-hour-label": "3pm-6pm",
    "24-hour-label": "15:00 to 18:00",
  },
  {
    min: 18,
    max: 21,
    "12-hour-label": "6pm-9pm",
    "24-hour-label": "18:00 to 21:00",
  },
  {
    min: 21,
    max: 24,
    "12-hour-label": "9pm-12am",
    "24-hour-label": "21:00 to 24:00",
  },
];

const createDefaultSelectedWeekdays = () => {
  const weekdaysObj = {} as SelectedWeekdays;

  for (let i = 0; i < weekdays.length; i++) {
    const weekday = weekdays[i];
    weekdaysObj[weekday.number] = false;
  }
  return weekdaysObj;
};

export const defaultSelectedWeekdays = createDefaultSelectedWeekdays();

const createDefaultSelectedHourRanges = () => {
  const ranges = {} as SelectedHourRanges;

  for (let i = 0; i < hourRangesData.length; i++) {
    const label = hourRangesData[i]["12-hour-label"];
    ranges[label] = false;
  }
  return ranges;
};

export const defaultSelectedHourRanges = createDefaultSelectedHourRanges();

const createDefaultSelectedWeeklyHourRanges = () => {
  const weeklyTimeSlots = {} as SelectedWeeklyHourRanges;

  for (let i = 0; i < weekdays.length; i++) {
    const weekday = weekdays[i];
    weeklyTimeSlots[weekday.number] = { ...defaultSelectedHourRanges };
  }
  return weeklyTimeSlots;
};

export const defaultSelectedWeeklyHourRanges = createDefaultSelectedWeeklyHourRanges();

const createHourRangesObject = () => {
  // Used as a reference to build graphQL query from selected time slots
  const ranges = {} as SelectedHourRangeObject;

  for (let i = 0; i < hourRangesData.length; i++) {
    const label = hourRangesData[i]["12-hour-label"];
    ranges[label] = hourRangesData[i];
  }
  return ranges;
};

export const hourRangesObject = createHourRangesObject();

const createWeekdayObject = () => {
  // Used as a reference to build graphQL query from selected weekdays
  const dayObj = {} as SelectedWeekdayObject;

  for (let i = 0; i < weekdays.length; i++) {
    const dayData = weekdays[i];
    dayObj[dayData.number] = dayData.name;
  }
  return dayObj;
};

export const weekdayObject = createWeekdayObject();

export const distanceOptions: Array<Distance> = [
  {
    mi: 8.046,
    km: 5,
  },
  {
    mi: 16.093,
    km: 10,
  },
  {
    mi: 32.187,
    km: 20,
  },
  {
    mi: 48.280,
    km: 30,
  },
  {
    mi: 80.467,
    km: 50,
  },
  {
    mi: 160.934,
    km: 100,
  },
  {
    mi: 321.869,
    km: 200,
  },
];

export const distanceUnitOptions: Array<DistanceUnit> = [
  { label: "km", value: "km" },
  { label: "mi", value: "mi" },
];

export const locationFilterOptions = [
  {
    value: locationFilterTypes.NONE,
    label: "Both virtual and in-person events",
  },
  {
    value: locationFilterTypes.ONLY_VIRTUAL,
    label: "Virtual only",
  },
  {
    value: locationFilterTypes.ONLY_WITH_ADDRESS,
    label: "In-person only",
  },
  {
    value: locationFilterTypes.WITHIN_RADIUS,
    label: "Within a radius of an address",
  },
];

const getLocationFilterMap = () => {
  const filterMap = {} as any;
  for (let i = 0; i < locationFilterOptions.length; i++) {
    const filterType = locationFilterOptions[i].value;
    const filterLabel = locationFilterOptions[i].label;
    filterMap[filterType] = {
      value: filterType,
      label: filterLabel
    };
  }
  return filterMap;
}

export const locationFilterMap = getLocationFilterMap()

const createWeekdayMap = () => {
  const weekdayMap = {} as any;
  for (let i = 0; i < weekdays.length; i++) {
    const weekdayData = weekdays[i];
   weekdayMap[weekdayData.number] = weekdayData.name;
  }
  return weekdayMap;
}

export const weekdayMap = createWeekdayMap()