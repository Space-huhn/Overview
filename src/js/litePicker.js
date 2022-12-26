import {pickerDate} from "./render-json.js";

const picker = new Litepicker({
  element: document.getElementById('lite-picker'),
  singleMode: false,
  numberOfColumns: 2,
  numberOfMonths: 2,
  tooltipText: {
    one: 'night',
    other: 'nights'
  },
  plugins: ['ranges'],
  setup: (picker) => {
    picker.on('hide', () => {
      pickerDate()
    });
  },
});

const now = new Date();
picker.setDateRange(new Date(), now.setDate(now.getDate()-6))

const getStartDateFromPicker = () => {
  return picker.getStartDate().dateInstance;
}

const getEndDateFromPicker = () => {
  return picker.getEndDate().dateInstance;
}

export {getStartDateFromPicker};
export {getEndDateFromPicker};