# Portfolio Site Brand Identity Guide

## Color Palette

### Primary Colors

#### Background Colors
- **Primary Dark Background**: `rgb(2, 6, 23)` / `#02061E` - Main body background
- **Secondary Dark**: `rgb(15, 23, 42)` / `#0F172A` (slate-900) - Section backgrounds
- **Card Background**: `rgba(30, 41, 59, 0.5)` / `#1E293B80` (slate-800/50) - Transparent card backgrounds

#### Text Colors
- **Primary Text**: `rgb(241, 245, 249)` / `#F1F5F9` (slate-100) - Main text on dark backgrounds
- **Secondary Text**: `rgb(203, 213, 225)` / `#CBD5E1` (slate-300) - Subtitles and content text
- **Tertiary Text**: `rgb(148, 163, 184)` / `#94A3B8` (slate-400) - Descriptions and muted text
- **Accent Text**: `rgb(34, 211, 238)` / `#22D3EE` (cyan-400) - Links and highlights

#### Accent Colors
- **Primary Cyan**: `rgb(34, 211, 238)` / `#22D3EE` (cyan-400) - Primary accent color
- **Cyan 500**: `rgb(6, 182, 212)` / `#06B6D4` (cyan-500) - Darker cyan variant
- **Purple 400**: `rgb(196, 181, 253)` / `#C4B5FD` (purple-400) - Secondary accent
- **Purple 500**: `rgb(168, 85, 247)` / `#A855F7` (purple-500) - Darker purple variant
- **Purple 900**: `rgba(88, 28, 135, 0.2)` / `#581C8740` - Purple overlay/gradient

#### Border Colors
- **Default Border**: `rgb(51, 65, 85)` / `#334155` (slate-700) - Card and element borders
- **Accent Border**: `rgba(6, 182, 212, 0.5)` / `#06B6D480` (cyan-500/50) - Hover states
- **Navigation Border**: `rgba(51, 65, 85, 0.5)` / `#33415580` (slate-800/50) - Transparent borders

### Gradient Combinations

#### Primary Gradients
- **Hero Title Gradient**: `linear-gradient(to right, #22D3EE, #C4B5FD, #F472B6)`
  - Cyan-400 → Purple-400 → Pink-400
- **Button Primary Gradient**: `linear-gradient(to right, #06B6D4, #A855F7)`
  - Cyan-500 → Purple-500
- **Logo/Brand Gradient**: `linear-gradient(to right, #22D3EE, #A855F7)`
  - Cyan-400 → Purple-500

#### Background Gradients
- **Hero Background**: `linear-gradient(to bottom right, #0F172A, rgba(88, 28, 135, 0.2), #0F172A)`
- **Radial Gradient**: `radial-gradient(ellipse at top right, rgba(88, 28, 135, 0.2), transparent)`

## Typography

### Font Stack
**Primary Font Family**: `system-ui, Avenir, Helvetica, Arial, sans-serif`

### Font Weights & Sizes

#### Headings
- **Hero Title**: 
  - Mobile: `3rem` (48px), `font-weight: 700`
  - Desktop: `4.5rem` (72px), `font-weight: 700`
- **Section Titles**: `2.25rem` (36px), `font-weight: 700`
- **Card/Component Titles**: `1.25rem` (20px), `font-weight: 600`

#### Body Text
- **Hero Subtitle**:
  - Mobile: `1.25rem` (20px)
  - Desktop: `1.5rem` (24px)
- **Hero Description**: `1.125rem` (18px)
- **Body Text**: `1rem` (16px)
- **Small Text**: `0.875rem` (14px)

#### Navigation
- **Desktop Nav Items**: `0.875rem` (14px), `font-weight: 500`
- **Logo Text**: `1.5rem` (24px), `font-weight: 700`

### Text Properties
- **Line Height**: `1.5` (default)
- **Font Synthesis**: `none`
- **Text Rendering**: `optimizeLegibility`
- **Font Smoothing**: `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`

## Special Effects

### Shadows
- **Card Shadow**: `0 10px 15px -3px rgba(15, 23, 42, 0.5)` (slate-900/50)
- **Button Hover Shadow**: `0 10px 15px -3px rgba(6, 182, 212, 0.5)` (cyan-500/50)
- **Navigation Shadow**: `0 10px 15px -3px rgba(15, 23, 42, 0.5)`

### Backdrop Effects
- **Card Backdrop**: `backdrop-filter: blur(4px)`
- **Navigation Backdrop**: `backdrop-filter: blur(12px)`

### Transitions
- **Default Transition**: `all 0.3s ease`
- **Color Transitions**: `all 0.2s ease`

## Brand Applications

### Logo/Branding
- Use the cyan-to-purple gradient (`#22D3EE` to `#A855F7`) for primary brand elements
- Maintain the gradient text effect for titles and important text

### Buttons
- **Primary Action**: Cyan-to-purple gradient background
- **Secondary Action**: Transparent with cyan border, cyan text on hover

### Cards/Components
- **Background**: Semi-transparent slate with backdrop blur
- **Border**: Default slate-700, cyan accent on hover
- **Text Hierarchy**: White/slate-100 for titles, slate-300 for content, slate-400 for descriptions

### Social Media Recommendations
- **Primary Brand Colors**: Use the cyan-purple gradient as the main brand identifier
- **Background**: Use the dark slate palette for consistency
- **Text**: Ensure high contrast with light text on dark backgrounds
- **Accent Elements**: Use cyan-400 (#22D3EE) for highlights and interactive elements