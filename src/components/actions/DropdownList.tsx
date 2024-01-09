import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

type DropdownListProps = {
    className?: string;
};

type ObjectItem = {
    key: string;
    label: string;
    value: string;
};

function DropdownList({ }: DropdownListProps) {
    const HardcodedObjects: ObjectItem[] = [
        {
            key: "1",
            label: "Gaetandrt/42sh",
            value: "508349935",
        },
        {
            key: "2",
            label: "Gaetandrt/Bistromatic",
            value: "508359762",
        },
        {
            key: "3",
            label: "Gaetandrt/CoreWar",
            value: "508354211",
        },
        {
            key: "4",
            label: "Gaetandrt/Dante",
            value: "508597837",
        },
    ];

    const [selectedItem, setSelectedItem] = useState<ObjectItem | null>(null);

    const handleSelectItem = (item: ObjectItem) => {
        setSelectedItem(item);
    };

    return (
        <Dropdown backdrop="blur">
            <DropdownTrigger>
                <button className="w-[300px] h-11 px-[15px] py-2.5 bg-blue-100 rounded-[30px] justify-center items-center inline-flex hover:bg-blue-200">
                    <div className="w-6 h-6 relative">
                        <FontAwesomeIcon icon={faCaretDown} className="text-slate-400 transform" />
                    </div>
                    <div className="bordered grow shrink basis-0 text-center text-blue-900 text-base font-bold font-inter">
                        {selectedItem ? selectedItem.label : "Sélectionne un repo"}
                    </div>
                </button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Object List" items={HardcodedObjects}>
                {(item: ObjectItem) => (
                    <DropdownItem
                        key={item.key}
                        style={{ color: "#224897" }}
                        onClick={() => handleSelectItem(item)}
                    >
                        <div className="w-[300px] h-11 px-[15px] py-2.5 bg-blue-100 rounded-[30px] justify-center items-center inline-flex hover:bg-blue-200">
                            {item.label}
                        </div>
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
}

export default DropdownList;