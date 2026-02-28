pipeline {
    agent { label 'AGENT-1' }

    stages {

        stage('Dev') {
            environment {
                DB_URL = credentials('db-url-dev')
                APP_ENV = "dev"
            }
            steps {
                sh '''
                    echo "Running in DEV"
                    node app.js
                '''
            }
        stage('Approval for QA') {
            steps {
                input message: "Dev passed. Approve deployment to QA?",
                      ok: "Deploy to QA"
            }
        }

        stage('QA') {
            environment {
                DB_URL = credentials('db-url-qa')
                APP_ENV = "qa"
            }
            steps {
                sh '''
                    echo "Running in QA"
                    node app.js
                '''
            }
        }
    }
}
