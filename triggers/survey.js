const listSurveys = (z, bundle) => {
  const customHttpOptions = {
    headers: {
       'Authorization': 'Basic NmY2Mnl2MzVmaWE4ODV4a3Q4cjZ1YmxubWk6'
    }
  };
 
  return z.request('https://enke.to/api/v1/surveys/list?server_url=http://unfao.net/fao', customHttpOptions)
    .then(response => {
      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      }
 
      const survey = JSON.parse(response.content);
      // do any custom processing of recipes here... 
 
      return survey;
    });
};
 
module.exports = {
  key: 'survey',
  noun: 'Survey',
  display: {
    label: 'Dry Season Survey',
    description: 'Get the dry season survey.'
  },
  operation: {
    perform: listSurveys
  }
};



const listRecipes = (z, bundle) => {
  z.console.log('hello from a console log!');
  const promise = z.request('http://57b20fb546b57d1100a3c405.mockapi.io/api/recipes');
  return promise.then((response) => response.json);
};
