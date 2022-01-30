pipeline {
    agent any
    stages {
            stage('Building Docker Image') {
                steps {
                        powershell  '''docker build -t exercice .'''
                    }
            }
            stage('Running Docker Image') {
                steps {
                        powershell '''docker run -dp 3000:3000 exercice'''
                    }
            }

        }
    }
    