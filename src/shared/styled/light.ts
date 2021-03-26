import { ITheme } from './styled';

const light:ITheme = {
    background:{
        header:{
            container: 'rgba(51, 51, 51, 0.5)',
            topMenu: 'rgb(51, 51, 51)',
            subcontainer: 'transparent',
            elements: 'transparent',
        },
        body:{
            container: 'white',
            hover: 'rgba(75,0,130, 0.5)',
            subcontainer: 'white',
            overPic: 'rgba(0,0,0, 0.5)',
            overPicWhite: 'rgba(255,255,255, 0.7)'
        },
        footer: 'white'
    },
    color:{
        header:{
            text:{
                default: 'white',
                hover: 'indigo',
                active: '#FF4200'
            },
            border: '#E4B56B',
            shadow: 'indigo'
        },
        body:{
            text:{
                default: 'white',
                hover: 'indigo',
                overPic: '#333333',
                colored: '#FF4200'
            },
            styledElements: 'white'
        },
        footer:{
            text:{
                label: '#3E3E3E',
                default: '#AEAEAE'
            }
        }
    }
}

export default light;