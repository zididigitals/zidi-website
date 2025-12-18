# Quick Setup Guide

## For New Team Members

If you've just cloned this repository, follow these steps to get the contact form working:

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

**IMPORTANT**: The `.env` file is not in git for security reasons. You need to create it:

```bash
# Copy the example file
cp .env.example .env
```

Then edit `.env` and replace the placeholder values with actual EmailJS credentials.

### 3. Get EmailJS Credentials

1. Go to https://dashboard.emailjs.com/
2. Create a free account (if you don't have one)
3. Create an **Email Service** (e.g., Gmail, Outlook)
4. Create **two Email Templates**:
   - **Customer Auto-Reply Template**: Sent to users who fill the contact form
   - **Admin Notification Template**: Sent to Zidi team when someone submits

5. Copy these values to your `.env` file:
   - **Public Key**: Account → API Keys → Public Key
   - **Service ID**: Email Services → Your Service → Service ID
   - **Template IDs**: Email Templates → Your Templates → Template ID

### 4. Start Development Server

```bash
npm run dev
```

### 5. Test the Contact Form

1. Open http://localhost:5173
2. Navigate to Contact section
3. Fill in the form and submit
4. Check browser console for success/error messages

### Troubleshooting

**"EmailJS Configuration Missing" error?**
- Make sure you created `.env` file (not `.env.example`)
- Verify all four variables are filled in `.env`
- Restart the dev server after creating/editing `.env`
- Check for typos in environment variable names

**Still not working?**
- Open browser DevTools → Console
- Look for detailed error messages
- Verify your EmailJS credentials are correct
- Check that your EmailJS service and templates are active

## For Production Deployment (Vercel)

Add the same environment variables in Vercel:

1. Go to your Vercel project
2. Settings → Environment Variables
3. Add all four `VITE_EMAILJS_*` variables
4. Set scope to **Production**, **Preview**, and **Development**
5. Redeploy your project

**Note**: Vercel builds don't read your local `.env` file. You must add them in the dashboard.

---

## Why isn't .env committed to git?

Environment variables often contain:
- API keys
- Secrets
- Passwords
- Service credentials

Committing these to git would expose them publicly. That's why:
- `.env` is in `.gitignore`
- `.env.example` shows what variables are needed (without real values)
- Each developer creates their own `.env` from the example
