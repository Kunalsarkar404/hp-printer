# Formspree Integration Setup

## Steps to Configure Formspree

1. **Create a Formspree Account**
   - Go to [https://formspree.io/](https://formspree.io/)
   - Sign up for a free account

2. **Create a New Form**
   - Click on "+ New Form" in your Formspree dashboard
   - Give your form a name (e.g., "HP Printer Support Form")
   - Copy the Form ID provided (it looks like: `xyzabc123`)

3. **Update Your Code**
   - Open `src/Home.jsx`
   - Find line 13: `const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");`
   - Replace `"YOUR_FORMSPREE_ID"` with your actual Formspree form ID
   - Example: `const [state, handleSubmit] = useForm("xyzabc123");`

4. **Test Your Form**
   - Fill out the support form on your website
   - Submit it
   - Check your Formspree dashboard to see the submission
   - You'll also receive an email notification (if configured)

## Form Fields Collected

The support form collects the following information:
- **Model Number**: The printer model number
- **Full Name**: Customer's full name
- **Phone Number**: Customer's contact number
- **Connection Type**: USB or WiFi (hidden field)

## Additional Configuration (Optional)

### Email Notifications
- In your Formspree dashboard, configure email notifications
- Add notification recipients
- Customize the email template

### Spam Protection
- Enable reCAPTCHA in your form settings
- Configure spam filtering rules

### Auto-Response
- Set up autoresponder emails to customers
- Customize the confirmation message

## Development Notes

- The form uses client-side validation before submission
- A support ticket number is generated after successful submission
- Formspree handles all backend processing securely
- Free tier includes 50 submissions per month
