pipeline {
    agent { label 'AGENT-1' }

    options {
        disableConcurrentBuilds()
    }

    environment {
        IMAGE_NAME = "env-drift-app"
        IMAGE_TAG  = "1.0.${BUILD_NUMBER}"
    }

    stages {
        stage('Security Scan') {
    steps {
        sh '''
            npm install
            npm audit --audit-level=high
        '''
    }
}

        stage('Build Image') {
            steps {
                sh '''
                    echo "starting slow build"
                    docker build -t $IMAGE_NAME:$IMAGE_TAG .
                '''
            }
        }

        stage('Dev Deployment') {
            environment {
                DB_URL = credentials('db-url-dev')
                APP_ENV = "dev"
            }
            steps {
                sh '''
                    docker run --rm \
                    -e DB_URL=$DB_URL \
                    -e APP_ENV=$APP_ENV \
                    $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }

        stage('Approval for QA') {
            steps {
                input message: "Approve QA Deployment?",
                      ok: "Deploy"
            }
        }

        stage('QA Deployment') {
            environment {
                DB_URL = credentials('db-url-qa')
                APP_ENV = "qa"
            }
            steps {
                sh '''
                    docker run --rm \
                    -e DB_URL=$DB_URL \
                    -e APP_ENV=$APP_ENV \
                    $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }
    }
}
