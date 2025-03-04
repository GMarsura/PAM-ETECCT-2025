/** @type {import('tailwindcss').Config} */

module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        fontFamily: {
          yrsa: ['"Yrsa"', "serif"],
          unna: ['"Unna"', "serif"],
          sometypeMono: ['"Sometype Mono"', "monospace"],
        }
      },
    },
    plugins: [],
  }