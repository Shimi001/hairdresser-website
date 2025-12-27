export interface ServiceItem {
    name: string;
    price: string;
}

export interface ServiceCategory {
    id: string;
    icon: string;
    items: ServiceItem[];
}

export const services = [
    {
        id: 'haircuts',
        icon: '💇‍♀️',
        title: 'Стрижки',
        items: [
            { name: 'Жіноча стрижка', price: 'від 20€' },
            { name: 'Чоловіча стрижка', price: 'від 15€' }
        ]
    },
    {
        id: 'coloring',
        icon: '🎨',
        title: 'Фарбування',
        items: [
            { name: 'Однотонне фарбування', price: 'від 30€' },
            { name: 'Складне фарбування', price: 'від 100€' },
            { name: 'Мелірування', price: 'від 80€' }
        ]
    },
    {
        id: 'styling',
        icon: '✨',
        title: 'Зачіски та укладання',
        items: [
            { name: 'Зачіски різної складності', price: 'від 20€' },
            { name: 'Укладання волосся', price: 'від 20€' }
        ]
    },
    {
        id: 'care',
        icon: '🌸',
        title: 'Догляд',
        items: [
            { name: 'Хімічна завивка', price: 'від 100€' },
            { name: 'Прокалювання вушей', price: 'від 10€' }
        ]
    }
];
