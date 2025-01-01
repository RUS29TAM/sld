import React from "react";
import Lensky from '@/app/components/cards-grid/cards-grid'
interface DataItem {
    id: number;
    content: React.ReactNode;
}
const data: DataItem[] = [
    // { id: 0, content: React.createElement<typeof Accordion>(Accordion)},
    { id: 0, content: 'контент для Вилегодский округ'},

    { id: 1, content: React.createElement<typeof Lensky>(Lensky)},
    // { id: 1, content: 'контент для Ленский район'},
    { id: 2, content: 'контент для Котласский округ' },
    { id: 3, content: 'контент для Красноборский округ' },
    { id: 4, content: 'контент для Устьянский округ' },
    { id: 5, content: 'контент для Вельский район' },
    { id: 6, content: 'контент для Коношский район' },
    { id: 7, content: 'контент для Каргопольский округ' },
    { id: 8, content: 'контент для Няндомский округ' },
    { id: 9, content: 'контент для Шенкурский округ' },
    { id: 10, content: 'контент для Верхнетоемский округ' },
    { id: 11, content: 'контент для Плесецкий округ' },
    { id: 12, content: 'контент для Виноградовский округ' },
    { id: 13, content: 'контент для Пинежский округ' },
    { id: 14, content: 'контент для Холмогорский округ' },
    { id: 15, content: 'контент для Онежский район' },
    { id: 16, content: 'контент для Лешуконский округ' },
    { id: 17, content: 'контент для Мезенский округ' },
    { id: 18, content: 'контент для Приморский округ' },
];

export default data;
