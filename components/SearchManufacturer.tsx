"use client";
import { Fragment, useState } from "react"
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

const SearchManufacturer = ({ manufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState("")
  return (
    <div>
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            placeholder="Volkswagen..."
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveForm="opacity-100"
            leaveTo="opacity-0"
            afterLeave{() => setQuery("")}
          >

          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
