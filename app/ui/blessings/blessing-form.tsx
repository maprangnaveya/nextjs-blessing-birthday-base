

"use client";

import dayjs from "dayjs";
import { FormEvent, useState } from "react";

import { BlessingData } from "@/app/lib/definitions";
import { postABlessing } from "@/app/lib/action-sheet";
import { Button } from "../button";


export const Form = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);

        if (formData.get("oh_oh_oh")) {
            setIsLoading(false);
            setError("Oh Oh! Are you a bot?");
            return
        }

        const blessingData: BlessingData = {
            name: formData.get("blessing-from-name")?.toString() || "-",
            blessing: formData.get("blessing-message")?.toString() || "-",
            submittedAt: dayjs().toISOString(),
        }

        const response = await postABlessing(blessingData)

        setIsLoading(false)
        if (response.error) {
            setError(response.error)
        }
    }

    return (
        <div className="flex flex-col">
            {error && <div className="text-rose-700">{error}</div>}
            <form onSubmit={onSubmit}>
                <div className="flex items-center justify-center">
                    <label htmlFor="blessing-from-name" className="sr-only">Name</label>
                    <input required={true} type="text" name="blessing-from-name" id="blessing-from-name" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Name" />
                </div>
                <div className="flex items-center justify-center">
                    <label htmlFor="blessing-message" className="sr-only">Blessing</label>
                    <textarea required={true}
                        name="blessing-message"
                        id="blessing-message"
                        className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                        placeholder="Blessing Message"></textarea>
                </div>
                <input type="hidden" name="oh_oh_oh" value="" />
                <div className="flex items-center justify-center">
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Submit"}
                    </Button>
                </div>
            </form>
        </div >
    );
};
