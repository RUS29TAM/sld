import first from "@/app/images/img1-1.jpg";
import second from "@/app/images/img1-2.jpg";
import third from "@/app/images/img1-3.jpg";
import fourth from "@/app/images/img1-4.jpg";
import fifth from "@/app/images/img1-5.jpg";
import {StaticImageData} from "next/image";

export const slidesData:{ id: number, image: string | StaticImageData, title: string, topic: string, description: string, detailTitle: string, detailDescription: string, specifications: { key: string; value: string }[]}[] = [
    {
        id: 1,
        image: first,
        title: 'Вельский район',
        topic: 'Бизнес десант',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos error fuga impedit magnam mollitia nulla sint.',
        detailTitle: 'Бизнес десант',
        detailDescription: 'Состоялся 01.01.2024',
        specifications: [
            { key: 'Участников', value: '15' },
            { key: 'Обращений', value: '8' },
            { key: 'Оказано услуг', value: '5' },
            { key: 'что-то еще', value: '5' },
            { key: 'и еще', value: '3' },
        ],
    },
    {
        id: 2,
        image: second,
        title: 'Виноградовский округ',
        topic: 'Бизнес десант',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos error fuga impedit magnam mollitia nulla sint.',
        detailTitle: 'Бизнес десант',
        detailDescription: 'Состоялся 01.01.2024',
        specifications: [
            { key: 'Участников', value: '15' },
            { key: 'Обращений', value: '8' },
            { key: 'Оказано услуг', value: '5' },
            { key: 'что-то еще', value: '5' },
            { key: 'и еще', value: '3' },
        ],
    },
    {
        id: 3,
        image: third,
        title: 'Приморский раойн',
        topic: 'Бизнес десант',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos error fuga impedit magnam mollitia nulla sint.',
        detailTitle: 'Бизнес десант',
        detailDescription: 'Состоялся 01.01.2024',
        specifications: [
            { key: 'Участников', value: '15' },
            { key: 'Обращений', value: '8' },
            { key: 'Оказано услуг', value: '5' },
            { key: 'что-то еще', value: '5' },
            { key: 'и еще', value: '3' },
        ],
    },
    {
        id: 4,
        image: fourth,
        title: 'Няндомский район',
        topic: 'Бизнес десант',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos error fuga impedit magnam mollitia nulla sint.',
        detailTitle: 'Бизнес десант',
        detailDescription: 'Состоялся 01.01.2024',
        specifications: [
            { key: 'Участников', value: '15' },
            { key: 'Обращений', value: '8' },
            { key: 'Оказано услуг', value: '5' },
            { key: 'что-то еще', value: '5' },
            { key: 'и еще', value: '3' },
        ],
    },
    {
        id: 5,
        image: fifth,
        title: 'Котлас',
        topic: 'Бизнес десант',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos error fuga impedit magnam mollitia nulla sint.',
        detailTitle: 'Бизнес десант',
        detailDescription: 'Состоялся 01.01.2024',
        specifications: [
            { key: 'Участников', value: '15' },
            { key: 'Обращений', value: '8' },
            { key: 'Оказано услуг', value: '5' },
            { key: 'что-то еще', value: '5' },
            { key: 'и еще', value: '3' },
        ],
    },
];
