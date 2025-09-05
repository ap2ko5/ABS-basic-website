# ABS-basic-website
Master programming by recreating your favorite technologies from scratch.
# ABS Arabian Car Rental Website

## Project Structure

```
abs-car-rental-website/
│
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # Main stylesheet
├── js/
│   └── script.js             # JavaScript functionality
├── images/                   # Image assets folder
│   ├── abs-logo.png          # Main ABS logo (from your poster design)
│   ├── abs-logo-badge.png    # Logo with badge/shield design
│   ├── abs-logo-full.png     # Full logo with stars and badge
│   ├── nissan-sunny-white.png # White Nissan Sunny car image
│   ├── nissan-sunny-front.png # Front view of Nissan Sunny
│   └── audi-red-car.png      # Red Audi car image
└── README.md                 # This file
```

## Image Asset Sources

Based on your Figma design and poster assets, you'll need these specific images:

### Logo Assets
- **abs-logo.png** - Extract the main ABS car logo from your poster
- **abs-logo-badge.png** - The circular badge design with ABS logo and stars
- **abs-logo-full.png** - Complete logo design for promotional section

### Car Images
- **nissan-sunny-white.png** - Clean white Nissan Sunny 2022 (front/side view)
- **nissan-sunny-front.png** - Front view of the Nissan Sunny
- **audi-red-car.png** - Red sports car (appears to be Audi TT from your poster)

## How to Extract Images from Your Assets

1. **From Figma Design:**
   - Right-click on each image element
   - Select "Export" 
   - Choose PNG format
   - Export at 2x resolution for crisp display

2. **From Poster Images:**
   - Use image editing software (Photoshop, GIMP, etc.)
   - Extract individual elements with transparent backgrounds
   - Save as PNG files with the names specified above

## Installation & Setup

1. **Create Project Folder:**
   ```bash
   mkdir abs-car-rental-website
   cd abs-car-rental-website
   ```

2. **Create Folder Structure:**
   ```bash
   mkdir css js images
   ```

3. **Add Files:**
   - Place the provided HTML, CSS, and JS files in their respective folders
   - Add your extracted image assets to the `images/` folder

4. **Open in Browser:**
   - Open `index.html` in your web browser
   - For development, use a local server (Live Server extension in VS Code)

## Features Implemented

### Design Features
- ✅ Bold orange and black color scheme matching your posters
- ✅ Geometric accent elements and patterns
- ✅ Gradient backgrounds and modern typography
- ✅ Three-section layout (Header/Hero, Featured, Promotional)

### Interactive Features
- ✅ Smooth scrolling navigation
- ✅ Animated floating background elements
- ✅ Interactive booking modal with contact options
- ✅ Responsive design for mobile devices
- ✅ Parallax scroll effects
- ✅ Button ripple effects and hover animations

### Contact Integration
- ✅ Direct phone call links
- ✅ WhatsApp integration
- ✅ Multiple contact numbers displayed
- ✅ Professional booking modal

## Customization Options

### Colors
The design uses CSS custom properties for easy color management:
- Primary Orange: `#FF6B35`
- Secondary Orange: `#F7931E`
- Gold Accent: `#FFD700`
- Dark Backgrounds: `#1a1a1a`, `#2d2d2d`

### Content
- Update car models and pricing in HTML
- Modify contact numbers in both HTML and JavaScript
- Add additional car listings in the featured section

### Images
- Replace placeholder images with your actual car photos
- Ensure images are optimized for web (compressed but high quality)
- Maintain aspect ratios for consistent layout

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile responsive design
- ✅ CSS Grid and Flexbox support required
- ✅ JavaScript ES6+ features used

## Performance Optimizations

- Image preloading for critical assets
- CSS animations using transforms (GPU accelerated)
- Optimized file structure and minimal external dependencies
- Responsive images and mobile-first design

## Deployment

### Option 1: Web Hosting
Upload all files to your web hosting provider maintaining the folder structure.

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Upload files to the repository
3. Enable GitHub Pages in repository settings

### Option 3: Netlify
1. Drag and drop the entire folder to Netlify
2. Your site will be automatically deployed

## Support & Maintenance

For future updates:
- Car inventory: Update HTML content and add new images
- Pricing: Modify values in HTML and ensure consistency
- Contact info: Update in both HTML structure and JavaScript modal
- Design changes: Modify CSS custom properties for colour scheme updates

## Next Steps

1. **Extract and optimise images** from your Figma design and posters
2. **Test on different devices** to ensure responsive behavior
3. **Add additional features** like car comparison or booking form
4. **Integrate with backend** for dynamic car inventory management
5. **Set up analytics** to track website performance

---

**Note:** This website code is specifically designed to match your existing brand aesthetic and poster designs. The color scheme, typography, and layout elements all reflect the professional Arabian Car Rental brand identity.
