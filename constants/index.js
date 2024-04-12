import { PiSnapchatLogo } from 'react-icons/pi'
import {
    UserIcon,
    BellIcon,
    ShieldCheckIcon,
    PaintBrushIcon,
    RocketLaunchIcon,
    GiftIcon,
    QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline'

export const categories = [
    {
        id: 1,
        title: 'Cappuccino'
    },
    {
        id: 2,
        title: 'Latte'
    },
    {
        id: 3,
        title: 'Espersso'
    },
    {
        id: 4,
        title: 'Shake'
    },
    {
        id: 5,
        title: 'Ice crem'
    },
    {
        id: 6,
        title: 'juice'
    },
]

export const coffeeItems = [
    {
        id: 1,
        name: 'Cappuccino',
        price: '22.50',
        image: require('../assets/image/cupochino.jpg'),
        rating: 2.5,
        des: 'width Oat Mlik'

    },
    {
        id: 2,
        name: 'Espersso',
        price: '22.50',
        image: require('../assets/image/essperso.jpg'),
        rating: 2.5,
        des: 'width Oat Mlik'

    },
    {
        id: 3,
        name: 'Latte',
        price: '22.50',
        image: require('../assets/image/latte-3.jpg'),
        rating: 2.5,
        des: 'width Oat Mlik'

    },
    {
        id: 4,
        name: 'Ice crem',
        price: '22.50',
        image: require('../assets/image/ice-creme-2.jpg'),
        rating: 2.5,
        des: 'width Oat Mlik'

    },
    {
        id: 5,
        name: 'Ice creme',
        price: '22.50',
        image: require('../assets/image/ice-creme.jpg'),
        rating: 2.5,
        des: 'width Oat Mlik'

    },
    {
        id: 6,
        name: 'juice',
        price: '22.50',
        image: require('../assets/image/juice.jpg'),
        rating: 2.5,
        des: 'width Oat Mlik'

    },
    {
        id: 7,
        name: 'Latte',
        price: '22.50',
        image: require('../assets/image/latte.jpg'),
        rating: 2.5,
        des: 'width Oat Mlik'

    },
    {
        id: 8,
        name: 'Mohito',
        price: '22.50',
        image: require('../assets/image/mohito.jpg'),
        rating: 2.5,
        des: 'width Oat Mlik'

    },
    {
        id: 9,
        name: 'Shake',
        price: '22.50',
        image: require('../assets/image/shake-1.jpg'),
        rating: 2.5,
        des: 'width Oat Mlik'

    },
    {
        id: 10,
        name: 'Shake',
        price: '22.50',
        image: require('../assets/image/shake.jpg'),
        rating: 2.5,
        des: 'width Oat Mlik'

    },
]

export const setting = [
    {
        id: 1,
        title: 'Account',
        subtitle: 'settig , profile , login',
        icon: <UserIcon color='#d1d5db' size={25} strokeWidth={'2'} />
    },
    {
        id: 2,
        title: 'Security',
        subtitle: 'password, transaction',
        icon: <ShieldCheckIcon color='#d1d5db' size={25} strokeWidth={'2'} />
    },
    {
        id: 3,
        title: 'Notification',
        subtitle: 'notification setting',
        icon: <BellIcon color='#d1d5db' size={25} strokeWidth={'2'} />
    },
    {
        id: 4,
        title: 'Personalization',
        subtitle: 'Personaliz setting',
        icon: <PaintBrushIcon color='#d1d5db' size={25} strokeWidth={'2'} />
    },
    {
        id: 5,
        title: 'Updated',
        subtitle: 'Update version app',
        icon: <RocketLaunchIcon color='#d1d5db' size={25} strokeWidth={'2'} />
    },
]

export const general = [
    {
        id: 6,
        title: 'coffe club',
        subtitle: 'Activity and gift',
        icon: <GiftIcon color='#d1d5db' size={25} strokeWidth={'2'} />
    },
    {
        id: 7,
        title: 'Support',
        subtitle: 'Conversation , calls , questions',
        icon: <QuestionMarkCircleIcon color='#d1d5db' size={25} strokeWidth={'2'} />
    },
]

