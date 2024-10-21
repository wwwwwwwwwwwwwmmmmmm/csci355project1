"use client"

import MenuSection, {menuItems} from "@/app/components/MenuSection";
import {useState} from "react";
import MenuPagination from "@/app/components/MenuPagination";

export default function Menu() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    return (
        <div>
            <MenuSection currentPage={currentPage} itemsPerPage={itemsPerPage}/>
            <MenuPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItems={menuItems.length}
                itemsPerPage={itemsPerPage}
            />
        </div>
    );
}
