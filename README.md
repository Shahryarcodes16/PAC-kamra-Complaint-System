# PAC Kamra Complaint System - Android App (Phase 2)

This is a native Android WebView wrapper around the deployed PAC Kamra Complaint System. It keeps the same login, complaint workflow, CHRO, MD, HRM, Section, Admin and notification modules while giving users an installable Android application.

## Before building

1. Deploy the web application and copy its HTTPS URL.
2. Open `app.json` and replace:
   `https://YOUR-VERCEL-DOMAIN.vercel.app`
   with your real URL.
3. Install dependencies:
   `npm install`
4. Install/login to EAS:
   `npx eas login`
5. Build a downloadable APK:
   `npx eas build -p android --profile preview`

The EAS build service returns a download page for the generated APK. For Google Play, use the production profile to create an Android App Bundle.
