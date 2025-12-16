# Hawlett Print - Complete E-commerce Website

A fully responsive e-commerce website for printer sales and accessories, built with React 18, Vite, Tailwind CSS v4.1, and React Router.

## 🚀 Features

- **Fully Responsive Design**: Mobile-first approach with responsive layouts for all screen sizes
- **Multi-Page Application**: Complete navigation with Home, About, Shop, Contact, Terms, Privacy, Refund, and HP Printer pages
- **Modern UI/UX**: Clean, professional design matching provided screenshots
- **Interactive Components**: Modal dialogs, dropdown menus, pagination, and form validation
- **Formspree Integration**: Contact and support forms with backend integration
- **Optimized Performance**: Lazy loading images, memoized callbacks, windmill loading spinner, and efficient rendering

## 📁 Project Structure

```
hd-printer/
├── public/
│   ├── code-image.png
│   ├── hero-bg-image.jpg
│   ├── hp-printer.png
│   ├── img-1.png
│   ├── new-hp-logo.svg
│   ├── usb-detup.jpg
│   └── wifi-setup.png
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Global navigation header
│   │   └── Footer.jsx          # Global footer with links
│   ├── pages/
│   │   ├── HomePage.jsx        # Main landing page
│   │   ├── AboutPage.jsx       # About us page
│   │   ├── ShopPage.jsx        # Products catalog with filters
│   │   ├── ContactPage.jsx     # Contact form page
│   │   ├── TermsPage.jsx       # Terms & Conditions page
│   │   ├── PrivacyPage.jsx     # Privacy Policy page
│   │   └── RefundPage.jsx      # Refund Policy page
│   ├── Home.jsx                # HP Printer landing page (with modal)
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles with Tailwind
└── package.json
```

## 🎯 Pages Overview

### 1. Home Page (`/`)
- **Hero Section**: Full-width banner with printer image
- **Trending Products**: Grid of featured products with cart/wishlist buttons
- **Smart Printers Banner**: Promotional section
- **Customer Favorites**: Bestsellers and new arrivals
- **Testimonials**: Customer reviews with star ratings
- **Latest Blogs**: Featured blog posts
- **Why Shop With Us**: Three feature cards (Fast Delivery, Secure Payments, Customer Support)

### 2. About Page (`/about`)
- **Company Overview**: Mission and values
- **Search, Choose & Order**: Platform features
- **Fast Delivery**: Global shipping information
- **Our Mission**: Company goals and vision
- **Why Choose Us**: Detailed benefits with images

### 3. Shop Page (`/shop`)
- **Product Grid**: 12 products per page
- **Sidebar Filters**:
  - Categories (with checkboxes)
  - Price range (min/max inputs)
  - Brand selection (multiple brands)
- **Pagination**: 10 pages with navigation
- **Product Cards**: Image, title, price, and action buttons

### 4. Contact Page (`/contact`)
- **Contact Form**: Name, email, subject, message fields (Formspree integrated)
- **Contact Email**: Direct email link to Info@hawlettprint.online
- **Location Section**: Visual representation

### 5. Terms & Conditions Page (`/terms`)
- **Complete Terms**: Website usage, orders, payment, shipping, returns, IP, liability, privacy, governing law
- **Contact Section**: Support email for questions

### 6. Privacy Policy Page (`/privacy`)
- **Information Collection**: Personal details, device & usage info
- **Usage Explanation**: How data is used
- **Sharing Policy**: When and how data is shared
- **Cookies & Tracking**: Cookie usage and management
- **User Rights**: Privacy rights and CCPA compliance
- **Security Measures**: Data protection information

### 7. Refund Policy Page (`/refund`)
- **Eligibility Criteria**: 14-day return window
- **Return Process**: Step-by-step instructions
- **Refund Timeline**: 7-10 business days
- **Exchange Policy**: Defective/damaged items
- **Contact Information**: Support email for returns

### 8. HP Printer Page (`/hp-printer`)
- **Modal Wizard**: Multi-step printer setup process
  - Step 1: Start setup
  - Step 2: Model number entry
  - Step 3: Connection type (USB/WiFi)
  - Step 4: Loading/connecting
  - Step 5: Connection failed
  - Step 6: Support form (Formspree integrated)
- **Download Sections**: Driver download information
- **Model Number Guide**: Visual help for finding model numbers

## 🛣️ Routing Structure

```javascript
/                    → HomePage
/about               → AboutPage
/shop                → ShopPage
/contact             → ContactPage
/terms               → TermsPage
/privacy             → PrivacyPage
/refund              → RefundPage
/hp-printer          → HPLandingPage
/wireless-printers   → Redirects to /hp-printer
/printers            → ShopPage
/laser-printers      → ShopPage
```

## 🎨 Design Features

### Header
- **Sticky navigation** with logo and menu links
- **Dropdown menu** for Wireless Printers
- **Mobile menu** with hamburger icon
- **Top bar** with contact email and wishlist link
- **Active link highlighting** based on current route

### Footer
- **Four column layout** on desktop (responsive to 2 columns on mobile)
- **Quick links**: Menu, Links, Contact sections
- **Scroll to top button**: Fixed bottom-right corner
- **Logo and description**

### Responsive Breakpoints
- **Mobile**: < 640px (sm:)
- **Tablet**: 640px - 1024px (md:, lg:)
- **Desktop**: > 1024px (xl:)

## 🔧 Technologies Used

- **React 18**: Latest React with hooks
- **Vite 7.2.7**: Fast build tool and dev server
- **Tailwind CSS v4.1**: Utility-first CSS framework (via Vite plugin)
- **React Router v6**: Client-side routing
- **Formspree**: Form submission handling
- **Lucide React**: Icon library
- **React Loader Spinner**: Windmill loading animation

## 📦 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Formspree** (for HP Printer support form):
   - Sign up at [formspree.io](https://formspree.io)
   - Create a new form
   - Copy your form ID
   - Update `src/Home.jsx` line 13:
     ```javascript
     const [state, handleSubmit] = useForm("YOUR_FORM_ID_HERE");
     ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🎨 Customization

### Adding New Products
Edit the `products` array in `HomePage.jsx` or `ShopPage.jsx`:
```javascript
{
    id: 5,
    name: 'Product Name',
    category: 'Category',
    price: '$99',
    image: '/path-to-image.png'
}
```

### Changing Colors
Tailwind CSS classes are used throughout. Main colors:
- **Primary**: `bg-red-500` (buttons, highlights)
- **Secondary**: `bg-cyan-500` (view buttons, accents)
- **Hero**: `bg-sky-800` (HP Printer page hero)

### Adding New Pages
1. Create component in `src/pages/`
2. Import in `src/App.jsx`
3. Add route in Routes section
4. Add navigation link in `Header.jsx`

## 🔒 Non-Functional Elements

As requested, these elements are visual only (no functionality):
- **Cart button**: Styled but doesn't add to cart
- **View button**: Styled but doesn't open product details
- **Wishlist icon**: Styled but doesn't save favorites
- **Account icon**: Removed from header as requested

## 📱 Mobile Responsiveness

All pages are fully responsive with:
- **Flexible grids**: Adapt from 1 to 4 columns based on screen size
- **Responsive images**: Scale appropriately
- **Touch-friendly**: Larger tap targets on mobile
- **Mobile menu**: Hamburger menu for small screens
- **Readable text**: Adjusted font sizes for all devices

## 🚀 Performance Optimizations

- **Lazy loading images**: Using `loading="lazy"` attribute
- **Memoized callbacks**: `useCallback` hooks to prevent unnecessary re-renders
- **Optimized images**: Appropriate sizes for different contexts
- **Code splitting**: React Router handles automatic code splitting
- **Sticky header**: Efficient scrolling with `position: sticky`

## 📝 Additional Documentation

See `FORMSPREE_SETUP.md` for detailed Formspree integration instructions.

## 👤 Contact

For support or questions about the HP Printer setup, use the support form on `/hp-printer` page (Step 6).

Email: Info@hawlettprint.online
