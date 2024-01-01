import pic1 from '../../assets/images/33.png'
import pic2 from '../../assets/images/44.png'
import pic3 from '../../assets/images/55.png'
import pic4 from '../../assets/images/66.png'
import pic5 from '../../assets/images/77.png'
import pic6 from '../../assets/images/88.png'
export const data = [
    {
        key: 112, columns: [{ title: 'Price' }, { title: 'Features' }, { title: 'Performance' },
        ]
    }
]

export type DataTypeOne = {
    key: string;
    Price: string;
    Features: string;
    Performance: string;
    fontSize: string;
    fontWight: string;
    name?: undefined;
    image?: undefined;
};

export type DataTypeTwo = {
    key: string;
    name: string;
    image: string;
    Price: string;
    Features: string;
    imagesdesc?: string;
    Performance: string;
    fontSize?: undefined;
    fontWight?: undefined;
};


export const mockdata: (DataTypeOne | DataTypeTwo)[] = [
    { key: '123', Price: 'Price', Features: 'Features', Performance: 'Performance', fontSize: '18px', fontWight: '600' },
    {
        key: '124', name: 'New Balance 550',
        image: pic1,
        imagesdesc: 'Sponsored',
        Price: '170 Euro, increasing over and over',
        Features: 'Not mentioned',
        Performance: 'New Balance 550 has lost popularity due to the large number of similar colorways and lack of comfort.'
    },
    {
        key: '125',
        name: 'New Balance 2002 R',
        image: pic2,
        Price: 'Not mentioned',
        Features: 'Trending upwards, looks great, very comfortable, versatile, can be worn with many different outfits.',
        Performance: 'Trending upwards, looks great, very comfortable, versatile, can be worn with many different outfits.'
    },
    {
        key: '126',
        name: 'New Balance 1906 R',
        image: pic3,
        Price: 'Not mentioned',
        Features: 'Not mentioned',
        Performance: 'New Balance 550 has lost popularity due to the large number of similar colorways and lack of comfort.'
    },
    {
        key: '127',
        name: 'New Balance 990 V6',
        image: pic4,
        Price: 'Not mentioned',
        Features: 'Comfortable, looks good on feet.',
        Performance: 'The host mentions that the New Balance 990 V6 is one of the most comfortable shoes they have ever worn.'
    },
    {
        key: '128',
        name: 'New Balance 610',
        image: pic5,
        Price: 'Not mentioned',
        Features: 'Highlighted by New Balance this year, recently saw a jound collab.',
        Performance: 'Not mentioned'
    },
    {
        key: '129',
        name: 'New Balance 550',
        image: pic6,
        Price: 'Affordable',
        Features: 'Hiking style sneeper modified for lifestyle use, great in different colorways.',
        Performance: 'Not mentioned'
    },
]