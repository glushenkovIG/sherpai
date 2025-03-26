# GitHub Repository and Pages Setup Instructions

Follow these steps to create a GitHub repository for SherpaAI and deploy the landing page to GitHub Pages.

## 1. Create a new GitHub repository

1. Go to [GitHub](https://github.com) and sign in.
2. Click the "+" button in the top right corner and select "New repository".
3. Name the repository `sherpai-landing` (or your preferred name).
4. Make the repository public.
5. Do not initialize with a README, .gitignore, or license since you'll push the existing content.
6. Click "Create repository".

## 2. Initialize and push the local repository

Run these commands in your terminal from the project directory:

```bash
# Initialize the git repository
git init

# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit"

# Add the remote repository (replace USER with your GitHub username)
git remote add origin https://github.com/sherpai/sherpai-landing.git

# Push to GitHub
git push -u origin main
```

## 3. Set up GitHub Pages

1. Go to your repository on GitHub.
2. Click on "Settings".
3. In the left sidebar, click on "Pages".
4. Under "Source", select "GitHub Actions".
5. The site will automatically be deployed when you push to the main branch, thanks to the GitHub Actions workflow you've already set up.

## 4. Custom Domain (Optional)

If you want to use a custom domain (e.g., sherpai.ai):

1. In your domain registrar, create a CNAME record pointing from your domain to `sherpai.github.io` (replace with your GitHub username).
2. In the GitHub Pages settings, enter your custom domain name in the "Custom domain" field.
3. Check "Enforce HTTPS" after the certificate is provisioned.

## 5. Verify Deployment

After pushing your changes and waiting a few minutes for the GitHub Actions workflow to complete:

1. Visit `https://sherpai.github.io/sherpai-landing` (or your custom domain) to see the deployed site.
2. Verify that everything looks correct and functions as expected.

## Making Changes

Any time you want to make changes to the site:

1. Edit the files locally.
2. Commit your changes (`git add . && git commit -m "Your message"`).
3. Push to GitHub (`git push`).
4. The GitHub Actions workflow will automatically deploy your changes.

## Troubleshooting

If your site isn't deploying correctly:

1. Check the "Actions" tab in your GitHub repository to see the status of the deployment workflow.
2. Verify that the CNAME file contains the correct domain if you're using a custom domain.
3. Ensure your DNS settings are correct if using a custom domain. 