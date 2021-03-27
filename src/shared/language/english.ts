import {ILanguage} from './language';

const english:ILanguage = {
    header:{
        menu:{
            main: 'Home',
            about: 'About us',
            contacts: 'Contacts',
            checkout: 'Checkout',
            account: 'Account',
        },
        search: 'Search',
        langChange:{
            toRU: 'Русский',
            toENG: 'English',
            toUA: 'Украинский'
        }
    },
    body:{
        contentBlock2:{
            elem1:{
                elemLabel: 'Mostly tastes with freshes',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            elem2:{
                elemLabel: 'About Cracker',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet. Libero volutpat sed cras ornare arcu dui. Cursus mattis molestie a iaculis. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Malesuada pellentesque elit eget gravida cum sociis. Sit amet mattis vulputate enim nulla aliquet porttitor. Massa sed elementum tempus egestas sed sed risus pretium quam. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. '
            }
        }
    },
    footer:{
        label1: 'Phone',
        label2: 'Adress',
        label3: 'Share us'
    }
}

export default english