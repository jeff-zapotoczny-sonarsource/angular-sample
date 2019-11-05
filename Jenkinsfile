pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        withSonarQubeEnv('SQ80') {
          nodejs(nodeJSInstallationName: 'recent node') {
            script {
              //sh "printenv"
              // fetch master from origin so sonar scanner comparison works
              sh "git fetch --no-tags ${GIT_URL} +refs/heads/master:refs/remotes/origin/master"
              sh "npm install"
              sh "./node_modules/.bin/ng test --code-coverage"

              def scannerHome = tool 'SQScanner';
	      
              if (env.CHANGE_ID) {
                // scan like a pull request
                sh "${scannerHome}/bin/sonar-scanner -Dsonar.pullrequest.branch=${CHANGE_BRANCH} -Dsonar.pullrequest.key=${CHANGE_ID} -Dsonar.pullrequest.base=master"
              } else if (env.BRANCH_NAME=="master") {
                sh "${scannerHome}/bin/sonar-scanner"
	      }
	    }
          }
        }
      }
    }
  }
}
