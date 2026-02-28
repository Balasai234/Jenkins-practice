pipeline {
    agent any

    stages {
        stage('Debug') {
            steps {
                sh 'whoami'
                sh 'echo $PATH'
                sh 'ls -l /usr/bin/node'
                sh '/usr/bin/node -v'
                sh 'node -v'
            }
        }
    }
}
