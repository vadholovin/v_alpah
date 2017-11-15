const smartgrid = require('smart-grid');

const settings = {
  filename: "_smart-grid",
  outputStyle: 'scss', /* less || scss || sass || styl */
  columns: 15,
  offset: '20px',
  container: {
    maxWidth: '1180px',
    fields: '0'
  },
  oldSizeStyle: false,
  breakPoints: {
    lg: {
      'width': '1200px',
      'fields': '16px'
    },
    md: {
      'width': '992px',
      'fields': '16px'
    },
    sm: {
      'width': '768px',
      'fields': '16px'
    },
    xs: {
      'width': '544px',
      'fields': '16px'
    },
    xxs: {
      'width': '420px',
      'fields': '16px'
    }
  }
};

smartgrid('./src/precss', settings);