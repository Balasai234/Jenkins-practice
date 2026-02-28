pipeline {
    agent { label 'AGENT-1' }

    stages {
        stage('Run App') {
            steps {
                sh 'hostname'
                sh 'node -v'
                sh 'node app.js'
            }
        }
    }
}
