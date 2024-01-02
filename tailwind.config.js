/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow:{
        glow : '0 0 2em 6em rgba(194,132,58)',
        low_glow : '0 0 1em 2em rgba(194,132,58)'
      },
      lineHeight:{
        big: '80px',
        small: '60px',
        lhaccmob:'22px'
      },
      fontFamily:{
        logo: ["logo","sans-serif"],
        man: ["man", "san-serif"]
      },
      colors:{
        background: '#4F535C',
        footer: '#2D313A',
        gradient_text: 'linear-gradient(89.97deg, #4F535C 1.84%, #C2843A 102.67% )',
        text_color: '#C2843A',
        h3_color: '#826a4d',
        kala: '#7F7F7D'
        
      },
      fontSize:{
        accfontmob: '18px'
      }
    },
    keyframes:{
      'anim1':{
        '0%':{transform: 'scale(0.5)'},
        '100%':{transform: 'scale(1)'}
      }
    },
    animation:{
      'anim1': 'anim1 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      anim2 : '0.5s cubic-bezier(0,1,0,1)',
      anim3: '0.5s cubic-bezier(1,0,1,0)'
    }
  },
  plugins: [],
}

