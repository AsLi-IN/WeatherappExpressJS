pipeline{
  agent any
  stages
  {
   stage('Build')
    {
      steps{
      sh 'npm install'
      }
    }
  }
  post{
    echo 'build is now completed'
  }
}
  
