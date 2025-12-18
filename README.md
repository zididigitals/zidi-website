# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/274fdc64-4d01-44e8-a224-3fb9d7ab7c48

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/274fdc64-4d01-44e8-a224-3fb9d7ab7c48) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Set up environment variables
# Copy .env.example to .env and fill in your actual EmailJS credentials
cp .env.example .env
# Edit .env with your actual values from https://dashboard.emailjs.com/

# Step 5: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Environment Variables Setup

This project uses EmailJS for the contact form. You need to set up the following environment variables:

1. **Create a free EmailJS account**: https://dashboard.emailjs.com/
2. **Create an Email Service** (e.g., Gmail, Outlook)
3. **Create two Email Templates**:
   - Customer auto-reply template
   - Admin notification template
4. **Copy `.env.example` to `.env`**:
   ```sh
   cp .env.example .env
   ```
5. **Fill in your actual values** in `.env`:
   - `VITE_EMAILJS_PUBLIC_KEY` - Found in Account → API Keys
   - `VITE_EMAILJS_SERVICE_ID` - Your email service ID
   - `VITE_EMAILJS_TEMPLATE_ID` - Customer template ID
   - `VITE_EMAILJS_ADMIN_TEMPLATE_ID` - Admin template ID

6. **Restart the dev server** after creating `.env`

### For Vercel Deployment

Add the same environment variables in Vercel:
1. Go to your project → Settings → Environment Variables
2. Add all four `VITE_EMAILJS_*` variables
3. Set scope to Production, Preview, and Development
4. Redeploy your project

**Note**: The `.env` file is in `.gitignore` and should never be committed to git for security reasons. Each team member needs to create their own `.env` file from `.env.example`.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/274fdc64-4d01-44e8-a224-3fb9d7ab7c48) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
