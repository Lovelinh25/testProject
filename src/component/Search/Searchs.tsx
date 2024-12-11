import React, { useState } from 'react';

interface itemsProps {
    id: number;
    firstName: string;
}

const initialItems = [
    { id: 1, firstName: "hoc ngu" },
    { id: 2, firstName: "hoc dot" },
    { id: 3, firstName: "code ngu" },
    { id: 4, firstName: "khong hieu code" },
    { id: 5, firstName: "code chay nhu nao" },
    { id: 6, firstName: "dung chat it thoi" },
    { id: 7, firstName: "toi dan lam" },
];

const Searchs = () => {
    const [items, setItems] = useState<itemsProps[]>(initialItems);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState<itemsProps[]>(initialItems);

    const handleInputChange = (e: { target: { value: string; }; }) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const newFilteredItems = items.filter((item) =>
            item.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredItems(newFilteredItems);
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='enter text' 
                value={searchTerm} 
                onChange={handleInputChange} 
            />
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>{item.firstName}</li>
                ))}
            </ul>
        </div>
    );
}

export default Searchs;
