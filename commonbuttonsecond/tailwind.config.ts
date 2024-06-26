import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primarywhite': 'rgba(255, 255, 255, 1)',
        'primarywhitehover': 'rgba(171, 255, 195, 1)',
        'primarywhiteclicked': 'rgba(255, 255, 255, 1)',
        'primarywhitedisable': 'rgba(128, 128, 128, 1)',
        'primarywhiteprocessing': 'rgba(229, 229, 229, 1)',
  
        'primarydark': 'rgba(20, 20, 20, 1)',
        'primarydarkhover': 'rgba(171, 255, 195, 1)',
        'primarydarkclicked': 'rgba(38, 38, 38, 1)',
        'primarydarkdisable': 'rgba(128, 128, 128, 1)',
        'primarydarkprocessing': 'rgba(54, 54, 54, 1)',
  
        'primarysecondarydark': 'rgba(54, 54, 54, 1)',
        'primarysecondarydarkhover': 'rgba(171, 255, 195, 1)',
        'primarysecondarydarkclicked': 'rgba(54, 54, 54, 1)',
        'primarysecondarydarkdisable': 'rgba(128, 128, 128, 1)',
        'primarysecondarydarkprocessing': 'rgba(87, 87, 87, 1)',
        'primarytextdark': 'rgba(0, 0, 0, 0)',
  
        'primarytextdarkhover': 'rgba(0, 180, 0, 0)',
        'primarytextdarkclicked': 'rgba(255, 255, 255, 0.3)',
        'primarytextdarkdisable': 'rgba(255, 255, 255, 0.5)',
        'primarytextdarkprocessing': 'rgba(255, 255, 255, 0.8)',
       
      },
    },
   
  },
  plugins: [],
};
export default config;
