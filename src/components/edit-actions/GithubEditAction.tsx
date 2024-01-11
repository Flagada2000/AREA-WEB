import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

type GithubEditActionProps = {
  className?: string;
};

type ObjectItem = {
  key: string;
  label: string;
  value: string;
};

function GithubEditAction({ }: GithubEditActionProps) {
    // REPO HARDCODED
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

    // SELECTIONNER UN REPO
    const [selectedItem, setSelectedItem] = useState<ObjectItem | null>(null);
    const handleSelectItem = (item: ObjectItem) => {

    // Récupérer le nom du repo
    const repoName = item.label.split("/")[1];
    const formattedString = `{"repos_id":"${repoName}"}`;
    console.log(formattedString); // delete later
    setSelectedItem(item);
  };

  return (
    <div className="action-card-right">
        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-blue-100 text-3xl font-bold font-inter">
              Action
            </div>
          </div>
          <div className="self-stretch h-[269px] pb-[30px] flex-col justify-start items-center gap-[15px] flex">
          {/* SELECTIONNER UN REPO */}
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <button className="w-[300px] h-11 px-[15px] py-2.5 bg-blue-100 rounded-[30px] justify-center items-center inline-flex hover:bg-blue-200">
                <div className="w-6 h-6 relative">
                    <FontAwesomeIcon icon={faCaretDown} className="text-slate-400 transform" />
                </div>
                <div className="bordered grow shrink basis-0 text-center text-blue-900 text-base font-bold font-inter">
                  {selectedItem ? selectedItem.label : "Sélectionner un repo"}
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
        </div>
    </div>
  );
}

export default GithubEditAction;
