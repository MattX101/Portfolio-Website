/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slidingButton: 'slidingButton 4s infinite',
        slideOverlay_Open: 'slideOverlay_Open 1s',
        slideOverlay_Close: 'slideOverlay_Close 1s',
        mainPageNavBar_OnHoverEnter: 'mainPageNavBar_OnHoverEnter 0.1s ease-in-out',
        mainPageNavBar_OnHoverExit: 'mainPageNavBar_OnHoverExit 0.1s ease-in-out',
        homePageNavBar_OnHoverEnter: 'homePageNavBar_OnHoverEnter 0.1s ease-in-out',
        homePageNavBar_OnHoverExit: 'homePageNavBar_OnHoverExit 0.1s ease-in-out',
      },
      keyframes: {
        slidingButton: {
          '0%, 100%': {
            padding: '15px 30px'
          },
          '50%': {
            padding: '15px 60px'
          }
        },
        slideOverlay_Open: {
          from: { 
            width: '0px',
            opacity: 0
          },
          to: { 
            width: '100vw',
            opacity: 1
          }
        },
        slideOverlay_Close: {
          from: { 
            width: '100vw',
            opacity: 1
          },
          to: { 
            width: '0px',
            opacity: 0
          }
        },
        mainPageNavBar_OnHoverEnter: {
          from: { 
            height: '40px' 
          },
          to: { 
            height: '48px' 
          }
        },
        mainPageNavBar_OnHoverExit: {
          from: { 
            height: '48px' 
          },
          to: { 
            height: '40px' 
          }
        },
        homePageNavBar_OnHoverEnter: {
          from: {
            height: '48px',
            top: '0px'
          },
          to: {
            height: '40px',
            top: '8px'
          }
        },
        homePageNavBar_OnHoverExit: {
          from: {
            height: '40px',
            top: '8px'
          },
          to: {
            height: '48px',
            top: '0px'
          }
        }
      },
      colors: {
        primary: {
          light: {
            s1l1: 'hsl(var(--hue), var(--sat1), var(--light_1))',
            s1l2: 'hsl(var(--hue), var(--sat1), var(--light_2))',
            s1l3: 'hsl(var(--hue), var(--sat1), var(--light_3))',
            s1l4: 'hsl(var(--hue), var(--sat1), var(--light_4))',
            s1l5: 'hsl(var(--hue), var(--sat1), var(--light_5))',
            s1l6: 'hsl(var(--hue), var(--sat1), var(--light_6))',

            s2l1: 'hsl(var(--hue), var(--sat2), var(--light_1))',
            s2l2: 'hsl(var(--hue), var(--sat2), var(--light_2))',
            s2l3: 'hsl(var(--hue), var(--sat2), var(--light_3))',
            s2l4: 'hsl(var(--hue), var(--sat2), var(--light_4))',
            s2l5: 'hsl(var(--hue), var(--sat2), var(--light_5))',
            s2l6: 'hsl(var(--hue), var(--sat2), var(--light_6))',

            s3l1: 'hsl(var(--hue), var(--sat3), var(--light_1))',
            s3l2: 'hsl(var(--hue), var(--sat3), var(--light_2))',
            s3l3: 'hsl(var(--hue), var(--sat3), var(--light_3))',
            s3l4: 'hsl(var(--hue), var(--sat3), var(--light_4))',
            s3l5: 'hsl(var(--hue), var(--sat3), var(--light_5))',
            s3l6: 'hsl(var(--hue), var(--sat3), var(--light_6))',
          },
          lightHighlight: {
            s1l1: 'hsl(var(--hue), var(--sat1), var(--lightHighlight_1))',
            s1l2: 'hsl(var(--hue), var(--sat1), var(--lightHighlight_2))',
            s1l3: 'hsl(var(--hue), var(--sat1), var(--lightHighlight_3))',
            s1l4: 'hsl(var(--hue), var(--sat1), var(--lightHighlight_4))',
            s1l5: 'hsl(var(--hue), var(--sat1), var(--lightHighlight_5))',
            s1l6: 'hsl(var(--hue), var(--sat1), var(--lightHighlight_6))',

            s2l1: 'hsl(var(--hue), var(--sat2), var(--lightHighlight_1))',
            s2l2: 'hsl(var(--hue), var(--sat2), var(--lightHighlight_2))',
            s2l3: 'hsl(var(--hue), var(--sat2), var(--lightHighlight_3))',
            s2l4: 'hsl(var(--hue), var(--sat2), var(--lightHighlight_4))',
            s2l5: 'hsl(var(--hue), var(--sat2), var(--lightHighlight_5))',
            s2l6: 'hsl(var(--hue), var(--sat2), var(--lightHighlight_6))',

            s3l1: 'hsl(var(--hue), var(--sat3), var(--lightHighlight_1))',
            s3l2: 'hsl(var(--hue), var(--sat3), var(--lightHighlight_2))',
            s3l3: 'hsl(var(--hue), var(--sat3), var(--lightHighlight_3))',
            s3l4: 'hsl(var(--hue), var(--sat3), var(--lightHighlight_4))',
            s3l5: 'hsl(var(--hue), var(--sat3), var(--lightHighlight_5))',
            s3l6: 'hsl(var(--hue), var(--sat3), var(--lightHighlight_6))',
          },
          dark: {
            s1l1: 'hsl(var(--hue), var(--sat1), var(--dark_1))',
            s1l2: 'hsl(var(--hue), var(--sat1), var(--dark_2))',
            s1l3: 'hsl(var(--hue), var(--sat1), var(--dark_3))',
            s1l4: 'hsl(var(--hue), var(--sat1), var(--dark_4))',
            s1l5: 'hsl(var(--hue), var(--sat1), var(--dark_5))',
            s1l6: 'hsl(var(--hue), var(--sat1), var(--dark_6))',

            s2l1: 'hsl(var(--hue), var(--sat2), var(--dark_1))',
            s2l2: 'hsl(var(--hue), var(--sat2), var(--dark_2))',
            s2l3: 'hsl(var(--hue), var(--sat2), var(--dark_3))',
            s2l4: 'hsl(var(--hue), var(--sat2), var(--dark_4))',
            s2l5: 'hsl(var(--hue), var(--sat2), var(--dark_5))',
            s2l6: 'hsl(var(--hue), var(--sat2), var(--dark_6))',

            s3l1: 'hsl(var(--hue), var(--sat3), var(--dark_1))',
            s3l2: 'hsl(var(--hue), var(--sat3), var(--dark_2))',
            s3l3: 'hsl(var(--hue), var(--sat3), var(--dark_3))',
            s3l4: 'hsl(var(--hue), var(--sat3), var(--dark_4))',
            s3l5: 'hsl(var(--hue), var(--sat3), var(--dark_5))',
            s3l6: 'hsl(var(--hue), var(--sat3), var(--dark_6))',
          },
          darkHighlight: {
            s1l1: 'hsl(var(--hue), var(--sat1), var(--darkHighlight_1))',
            s1l2: 'hsl(var(--hue), var(--sat1), var(--darkHighlight_2))',
            s1l3: 'hsl(var(--hue), var(--sat1), var(--darkHighlight_3))',
            s1l4: 'hsl(var(--hue), var(--sat1), var(--darkHighlight_4))',
            s1l5: 'hsl(var(--hue), var(--sat1), var(--darkHighlight_5))',
            s1l6: 'hsl(var(--hue), var(--sat1), var(--darkHighlight_6))',

            s2l1: 'hsl(var(--hue), var(--sat2), var(--darkHighlight_1))',
            s2l2: 'hsl(var(--hue), var(--sat2), var(--darkHighlight_2))',
            s2l3: 'hsl(var(--hue), var(--sat2), var(--darkHighlight_3))',
            s2l4: 'hsl(var(--hue), var(--sat2), var(--darkHighlight_4))',
            s2l5: 'hsl(var(--hue), var(--sat2), var(--darkHighlight_5))',
            s2l6: 'hsl(var(--hue), var(--sat2), var(--darkHighlight_6))',

            s3l1: 'hsl(var(--hue), var(--sat3), var(--darkHighlight_1))',
            s3l2: 'hsl(var(--hue), var(--sat3), var(--darkHighlight_2))',
            s3l3: 'hsl(var(--hue), var(--sat3), var(--darkHighlight_3))',
            s3l4: 'hsl(var(--hue), var(--sat3), var(--darkHighlight_4))',
            s3l5: 'hsl(var(--hue), var(--sat3), var(--darkHighlight_5))',
            s3l6: 'hsl(var(--hue), var(--sat3), var(--darkHighlight_6))',
          },
        },
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss']
}

