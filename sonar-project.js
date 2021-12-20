const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({	
  serverUrl: 'http://100.24.24.206:9000/',
//   serverUrl: 'http://3.236.129.45:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsLandmarkTechnologies',
	    'sonar.login': 'b061f9352863cc8d7334d75ff3c8b078e031556b',
//          'sonar.login': '3e9ee4f64a40359b3f9c904bc34392412e2c9d80',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
