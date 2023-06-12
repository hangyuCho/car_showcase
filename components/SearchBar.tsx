"use client";

import { useState } from "react";
import { SearchManufacturer, SearchButton } from "@/components";
import Image from "next/image";

const SearchBar = () => {
  const headleSearch = () => {};
  //const [manufacturer, setManufacturer] = useState("");
  return (
    <form className="searchbar" onSubmit={headleSearch}>
      <div className="searchbar__item">
        {/*<SearchManufacturer /> */}
        <SearchButton />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.pgn"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20pxl ml-4]"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          //value={model}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
      </div>
    </form>
  );
};

export default SearchBar;
