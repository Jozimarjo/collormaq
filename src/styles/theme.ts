import { extendTheme } from '@chakra-ui/react'
export const theme = extendTheme({
    colors: {
        blue: {
            "700": "#1797C6",
        },
        gray:{
            "100": "#F9F9F9"
        }
    },
    variant: {
        'with-shadow': {
            boxShadow: ' 0px 0px 15px #00000029'
        }
    },
    fonts: {
        heading: 'DM Sans',
        body: 'DM Sans'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'white'
            }
        }
    }
})