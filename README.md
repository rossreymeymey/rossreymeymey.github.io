# React Developer Portfolio template
#### Live Demo https://react-portfolio-v1.netlify.app/
#### Figma Design https://www.figma.com/community/file/1116246660507537002
### Preview ( Dark Mode )

<img src="/preview.gif" alt="preview" width="600px" />

## Follow Below instructions to add your deatils in the portfolio.

### Change and customize every section according to your need, All you need to do is edit `/src/Details.js`

#### Open `/src/Details.js` & modify it as per your need.

```javascript
/ Enter your Personal Details here
export const personalDetails = {
  name: "Monipich MP",
  tagline: "I build things for Mobiles",
  img: profile,
  about: `With a Bachelor's in IT Engineering and an ongoing Master's in Entrepreneurship & Project Management, I've honed my skills at FMIS Cambodia and Optistech, leading Flutter projects that handle sensitive data and complex workflows. My passion lies in bridging technology and business—whether upgrading government apps to reduce approval times or freelancing simple tools with ad integration for passive income. I thrive on mentoring teams and applying agile principles to deliver high-impact, monetizable solutions that solve real problems in Cambodia and beyond.\nAs a skilled Flutter developer pursuing a Master's in Entrepreneurship & Project Management, I specialize in crafting secure, user-centric mobile apps that drive efficiency and revenue—from government financial systems to freelance monetized tools, all built with agile precision and a focus on scalable innovation.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  }
];

// Enter your Education Details here
export const eduDetails = { ... };

// Tech Stack and Tools
export const techStackDetails = { ... };

// Enter your Project Details here
export const projectDetails = [ ... ];

// Enter your Contact Details here
export const contactDetails = { ... };
```
