#!/bin/bash

# Nom du dépôt distant où tu veux pousser le build
DEPLOY_REPO="https://github.com/tonusername/repo-portfolio-deploy.git"
DEPLOY_BRANCH="main"

set -e

echo "🚀 Building the project..."
npm run build

echo "📂 Moving into the dist folder..."
cd dist

echo "🔄 Initializing git repo in dist/"
git init
git remote add origin $DEPLOY_REPO
git checkout -b $DEPLOY_BRANCH

echo "📝 Committing build files..."
git add .
git commit -m "🚀 Deploy build $(date +'%Y-%m-%d %H:%M:%S')"

echo "📦 Pushing to $DEPLOY_REPO on branch $DEPLOY_BRANCH..."
git push --force origin $DEPLOY_BRANCH

echo "✅ Deployment complete!"


cd ..
rm -rf dist/.git