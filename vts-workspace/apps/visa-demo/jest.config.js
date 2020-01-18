module.exports = {
  name: 'visa-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/visa-demo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
