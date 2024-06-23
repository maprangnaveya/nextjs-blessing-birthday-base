"use client"
import { useState, useEffect, SetStateAction } from 'react';
import { Card } from './blessing-card';

const ITEMS_PER_PAGE = 4;
const BUTTON_CLASS_NAME = "font-medium p-3 no-underline disabled:no-underline enabled:hover:underline text-white  enabled:hover:text-slate-400 enabled:cursor-pointer";

export default function BlessingPagination({ data }: { data: any[][] }) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
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
        if (event.deltaY < 0) {
            handlePreviousPage();
        } else if (event.deltaY > 0) {
            handleNextPage();
        }
    };

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'ArrowLeft') {
            handlePreviousPage();
        } else if (event.key === 'ArrowRight') {
            handleNextPage();
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);
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
                    <Card key={`blessing-card-${currentPage}-${index}-${row[0]}`} name={row[1]} blessing={row[2]} submittedAt={row[0]} />
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
