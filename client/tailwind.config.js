/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.{html}'],
  theme: {
    extend: {
      colors: {
        font: {
          dark: '#101744',
          light: '#FFFFFF',
        },
        button: {
          primary: '#2B388B',
          secondary: '#101744',
          clickmenu: '#0060AF',
          light_green: '#00A200',
          danger: '#DB3931',
        },
        secondarybtn: {
          primary: '#ffffff',
          secondary: '#101744',
        },
        background: {
          primary: '#ffffff',
          secondary: 'rgb(228, 226, 226)',
          line_color: '#AC2D89',
          table_header: '#101744',
          table_even: '#F7F7F7',
          card_color: '#F0F0F0',
          reminder_card: '#A8057B',
          light_green: '#00A200',
          danger: '#DB3931',
          accordion_color: '#C6C6C6',
        },
        Check: {
          'primary-true': '#707070',
          'primary-false': '#7C145F',
          'secondary-true': '#3471B7',
          'secondary-false': '#101744',
        },
        selectGroup: {
          100: '#2B388B',
          200: '#707070',
        },
        borderColor: {
          100: '#707070',
          200: '#7C145F',
          300: '#3471B7',
          400: '#EDEDED',
          500: '#101744',
          600: '#B2B2B2',
        },
        card: {
          100: '#DECFDA',
          200: '#7C145F',
        },
        primarynav: {
          100: '#A8057B',
          200: '#FFFFFF',
        },
        secondarynav: {
          100: '#7C145F',
          200: '#FFFFFF',
        },
        placeholder: '#707070',
        input: '#C4C4C4',
        primary: '#ffffff',
        secondary: '#00408a',
        grey: '#DBDBDB',
        error: '#AE3033',
        bgError: '#f4cfcf',
        success: '#03963b',
        bgSuccess: '#94cc4c4f',
        cyan: '#C7D9E6',
        headerBorder: '#e3ecf3',
        disableBg: '#00000029 !important',
        disabled: '#e9ecef',
        tabBg: '#DEEFF9',
        black: '#000',
        link: '#7C145F',
      },
      borderRadius: {
        none: '0',
        s: '5px',
        sm: '13px',
        md: '20px',
        DEFAULT: '0',
        lg: '52px',
        full: '9999px',
      },
      backgroundImage: {
        secondary:
          'transparent linear-gradient(180deg, #51BDDDD9 0%, #94CC4CE6 100%) 0% 0% no-repeat padding-box;',
      },
      fontFamily: {
        Popp: ['Poppins', 'sans-serif'],
      },
      border: {
        '4xl': '2.25rem',
      },
      screens: {
        max_3xl: { max: '1920px' },
        max_2xl: { max: '1535px' },
        max_xl: { max: '1279px' },
        max_lg: { max: '992px' },
        max_md: { max: '768px' },
        max_sm: { max: '639px' },
        max_s: { max: '530px' },
        max_xs: { max: '420px' },
      },

      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        sl: ['15px', '20px'],
        base: ['16px', '24px'],
        md: ['18px', '26px'],
        lg: ['20px', '28px'],
        xl: ['22px', '27px'],
        '1xl': ['24px', '29px'],
        '2xl': ['28px', '34px'],
        '3xl': ['32px', '39px'],
        '4xl': ['36px', '44px'],
      },
    },
  },

  plugins: [],
};
