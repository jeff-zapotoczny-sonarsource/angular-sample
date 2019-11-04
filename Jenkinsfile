pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        withSonarQubeEnv('SQServer') {
          withNPM(npmrcConfig: 'my-npmrc') {
            script {
              //sh "printenv"
              // fetch master from origin so sonar scanner comparison works
              sh "git fetch --no-tags ${GIT_URL} +refs/heads/master:refs/remotes/origin/master"
sh "npm install"

# use Angular CLI to trigger a test run so we have coverage data
sh "./node_modules/.bin/ng test --code-coverage"

              if (env.CHANGE_ID) {
                // scan like a pull request
                sh "sonar-scanner -Dsonar.pullrequest.branch=${CHANGE_BRANCH} -Dsonar.pullrequest.key=${CHANGE_ID} -Dsonar.pullrequest.base=master"
              } else if (env.BRANCH_NAME=="master") {
                sh "sonar-scanner -Dmaven.test.failure.ignore clean verify sonar:sonar"
	      }
	    }
          }
        }
      }
    }
  }
}
