void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/ajinkyagitrepo/WeatherappExpressJS"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

pipeline{
  agent any
  stages
  {
   stage('Build')
    {
      steps{
      setBuildStatus("Build started", "PENDING");
      sleep time: 03, unit: 'SECONDS'
      sh 'npm install'
      }
    }
   stage('SonarQube Analysis')
  {
    steps{
      withSonarQubeEnv('sonarqube9.8'){
       sh 'mvn sonar:sonar' 
      }
    }
    
  }
  }

  post{
    success{
    echo 'build is now completed in DEVLOP'
    echo ' Auto triggered'
      setBuildStatus("Build succeeded", "SUCCESS");
    }
    failure {
        setBuildStatus("Build failed", "FAILURE");
    }
  }
}
  
