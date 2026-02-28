pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Code pulled from GitHub"
            }
        }

        stage('Run App') {
            steps {
                sh 'node app.js'
            }
        }
    }
}
