# Environment Variables

Required for the contact form email functionality (Nodemailer + Gmail SMTP).

## Local Development

Create a `.env.local` file in the project root:

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16_char_app_password
RECEIVER_EMAIL=shahmeerzaman197@gmail.com
```

## Vercel Deployment

Add all three variables in:
**Vercel Dashboard → Project → Settings → Environment Variables**

Set each variable for **Production**, **Preview**, and **Development** environments.

| Variable | Value |
|---|---|
| `EMAIL_USER` | Your Gmail address (e.g. `shahmeerzaman197@gmail.com`) |
| `EMAIL_PASS` | 16-character Gmail App Password (**no spaces**) |
| `RECEIVER_EMAIL` | Where to receive contact form messages |

After adding or updating environment variables, **redeploy** the project from the Deployments tab for changes to take effect.

## Gmail App Password Setup

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Security → 2-Step Verification (must be enabled)
3. Security → App Passwords
4. Select app: **Mail** → Generate
5. Copy the 16-character password into `EMAIL_PASS` (**remove spaces**)
