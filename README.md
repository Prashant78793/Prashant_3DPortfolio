# 🚀 3D Interactive Portfolio

A stunning, modern portfolio website built with React, Three.js, and Framer Motion. Features immersive 3D animations, interactive elements, and a beautiful user experience.

## ✨ Features

- **3D Interactive Elements**: Rotating cubes, flip cards, and animated 3D scenes
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX**: Glass morphism effects and gradient designs
- **Interactive Sections**: About, Experience, Projects, and Contact
- **Contact Form**: Ready for EmailJS integration
- **Performance Optimized**: Lazy loading and efficient 3D rendering

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **3D Graphics**: React Three Fiber, Three.js
- **Animations**: Framer Motion, React Spring
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: EmailJS (ready for integration)

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 3d-interactive-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with 3D skill cubes
│   ├── Contact.tsx        # Contact form with 3D elements
│   ├── Experience.tsx     # Experience timeline with flip cards
│   ├── Hero.tsx          # Hero section with 3D text
│   ├── LoadingScreen.tsx  # Loading animation
│   ├── Navbar.tsx        # Navigation with smooth scrolling
│   └── Projects.tsx      # Project gallery with 3D cubes
├── App.tsx               # Main app component
├── index.tsx            # Entry point
└── index.css            # Global styles
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`)
   - Name, title, and description
   - Profile image (if desired)

2. **About Section** (`src/components/About.tsx`)
   - Personal bio
   - Skills and technologies
   - Statistics

3. **Experience Section** (`src/components/Experience.tsx`)
   - Work history
   - Education
   - Achievements

4. **Projects Section** (`src/components/Projects.tsx`)
   - Project details
   - GitHub links
   - Live demo links

5. **Contact Section** (`src/components/Contact.tsx`)
   - Contact information
   - Social media links

### Styling

The project uses Tailwind CSS with custom configuration:

- **Colors**: Custom primary and dark color palettes
- **Fonts**: Inter for body text, JetBrains Mono for code
- **Animations**: Custom keyframes for floating and glow effects

### 3D Elements

All 3D components are built with React Three Fiber:

- **Hero**: Animated 3D text with rotation
- **About**: Interactive skill cubes
- **Experience**: Flip cards with 3D rotation
- **Projects**: Rotating project cubes
- **Contact**: Animated form elements

## 📧 Email Integration

The contact form is ready for EmailJS integration:

1. **Sign up** for EmailJS at [emailjs.com](https://www.emailjs.com/)
2. **Create a service** (Gmail, Outlook, etc.)
3. **Create a template** for your contact form
4. **Update the Contact component** with your EmailJS credentials

```typescript
// In Contact.tsx, replace the handleSubmit function:
import emailjs from 'emailjs-com';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_USER_ID'
    );
    setSubmitStatus('success');
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🎯 Performance Tips

- **3D Optimization**: Limit the number of 3D objects on screen
- **Image Optimization**: Use WebP format for project images
- **Lazy Loading**: Implement for heavy 3D scenes
- **Bundle Size**: Monitor with `npm run build --analyze`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for 3D capabilities
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact me through the portfolio contact form
- Reach out on social media

---

**Happy coding! 🎉** 