# Image Usage Guide

## Image Directories

### 1. Public Images (`public/images/`)
- Place static images here that don't need processing
- Access them using absolute paths: `/images/logo.png`
- Good for: logos, favicons, and static assets

### 2. Asset Images (`src/assets/images/`)
- Place images here that need to be processed by Vite
- Import them directly in your components
- Good for: component-specific images, optimized images

## Current Placeholders

1. `public/images/logo.txt` - Replace with your logo image
2. `src/assets/images/hero.txt` - Replace with your hero background image

## How to Replace Placeholders

1. Delete the `.txt` files
2. Add your actual images with the same names but correct extensions:
   - `logo.png` in `public/images/`
   - `hero.jpg` in `src/assets/images/`

## Image Usage Examples

```tsx
// Using public images
<img src="/images/logo.png" alt="Company Logo" />

// Using asset images
import heroImage from '../assets/images/hero.jpg';
<img src={heroImage} alt="Hero Background" />
``` 