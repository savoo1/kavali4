const slider = document.querySelector("#range-slider-slide")
var labels = { 10: '10 km', 20: '20 km', 30: '30 km', 40: '40 km', };
noUiSlider.create(slider, {
  start: 25,
  connect: [true, false],
  tooltips: {
    to: function(value) {
        return parseInt(value)
    }
  },
  range: {
    'min': 10,
    '33.33%': 20,
    '66.66%': 30,
    'max': 40,
  },
  pips: {
    mode: 'steps',
    filter: function (value, type) {
      return type === 0 ? -1 : 1;
    },
    format: {
      to: function (value) {
        return labels[value];
      }
    }
  }
});