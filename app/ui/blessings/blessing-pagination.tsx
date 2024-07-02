"use client"
import { useState, useEffect, SetStateAction } from 'react';
import { useMediaQuery } from 'usehooks-ts'

import { Card } from './blessing-card';

const ITEM_PER_PAGE_DEFAULT = 4
const ITEM_PER_PAGE_MD = 2
const ITEM_PER_PAGE_IPAD = 3
const BUTTON_CLASS_NAME = "font-medium p-3 no-underline disabled:no-underline enabled:hover:underline text-white  enabled:hover:text-slate-400 enabled:cursor-pointer";

export default function BlessingPagination({ data }: { data: any[][] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(ITEM_PER_PAGE_DEFAULT);


    const isiPadAirScreen = useMediaQuery('(max-width: 820px)')
    const isMediumScreen = useMediaQuery('(max-width: 768px)')


    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const handleJumpToPage = (desiredPage: SetStateAction<number>) => {
        if (currentPage != desiredPage) {
            setCurrentPage(desiredPage);
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleWheel = (event: { deltaY: number; }) => {
        // if (event.deltaY < 0) {
        //     handlePreviousPage();
        // } else if (event.deltaY > 0) {
        //     handleNextPage();
        // }
    };

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'ArrowLeft') {
            handlePreviousPage();
        } else if (event.key === 'ArrowRight') {
            handleNextPage();
        }
    };

    useEffect(() => {
        if (isMediumScreen) {
            setItemsPerPage(ITEM_PER_PAGE_MD);
        } else if (isiPadAirScreen) {
            setItemsPerPage(ITEM_PER_PAGE_IPAD);
        } else {
            setItemsPerPage(ITEM_PER_PAGE_DEFAULT);
        }
    }, [isiPadAirScreen, isMediumScreen]);


    useEffect(() => {
        // window.addEventListener('wheel', handleWheel);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentPage]);

    return (
        <div className="">
            <div className="flex w-full flex-row flex-wrap items-center justify-center">
                {currentData.map((row, index: number) => (
                    <Card key={`blessing-card-${currentPage}-${index}-${row[0]}`} name={row[2]} blessing={row[3]} submittedAt={row[0]} />
                ))}
            </div>
            <div className="w-full relation text-white text-center text-lg justify-center mt-6 gap-6">
                <button className={BUTTON_CLASS_NAME} onClick={_ => handleJumpToPage(1)} disabled={currentPage === 1}>
                    First
                </button>
                <button className={BUTTON_CLASS_NAME} onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span className="px-3">
                    {currentPage} / {totalPages}
                </span>
                <button className={BUTTON_CLASS_NAME} onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
                <button className={BUTTON_CLASS_NAME} onClick={_ => handleJumpToPage(totalPages)} disabled={currentPage === totalPages}>
                    Last
                </button>
            </div>
        </div>
    );
}
