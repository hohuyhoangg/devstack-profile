Devstack9.8 profile

## Environment

Create a local `.env` file from `.env.example` before running the app if the
contact form should send email through EmailJS.

```sh
cp .env.example .env
```

Required variables:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_CONTACT_TO_EMAIL`
- `VITE_CONTACT_TO_NAME`
