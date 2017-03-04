const should = require('should');
 
const zapier = require('zapier-platform-core');
 
const App = require('../index');
const appTester = zapier.createAppTester(App);
 
describe('My App', () => {
 
  it('should load surveys', (done) => {
    const triggerPointer = 'triggers.survey';
    const bundle = {
      // NEW CODE 
      inputData: {
        style: 'mediterranean'
      }
    };
 
    appTester(App.triggers.survey.operation.perform, bundle)
      .then(results => {
        should(results.length).above(1);
 
        const firstResult = results[0];
        console.log('test result: ', firstResult)
        should(firstResult.name).eql('name 1');
        should(firstResult.directions).eql('directions 1');
 
        done();
      })
      .catch(done);
  });
 
});