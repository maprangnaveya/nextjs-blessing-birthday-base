"use server";

import { google } from "googleapis";

import { BlessingData } from "@/app/lib/definitions";
import { revalidatePath } from "next/cache";


const createGoogleAuth = () => {
    return new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    })
}

export const getAllBlessings = async () => {
    const auth = createGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth: auth })
    const range = "Form Responses 1!A2:C"
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: range
        })
        return response.data.values
    } catch (error) {
        console.log("!!! get sheets data failed with ", error);
        return []
    }
}
export const postABlessing = async (blessingData: BlessingData) => {
    const auth = createGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth: auth })
    const range = "Sheet1!A1:C1"
    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: range,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [blessingData.submittedAt, blessingData.name, blessingData.blessing]
                ]
            }
        })

        // Clear cache (TODO: refactor this!)
        revalidatePath('/blessings');

        return { data: response.data }
    } catch (error) {
        console.log("!!! get sheets data failed with ", error);
        return { error: "Can not send blessing please try again later." }
    }
}
