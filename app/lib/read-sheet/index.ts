import {google} from "googleapis";

export const getSheetsData = async () => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
        },
        scopes:["https://www.googleapis.com/auth/spreadsheets"]
    })

    const sheets = google.sheets({version: "v4", auth: auth})
    const range = "Sheet1!A:Z"
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: range
        })
        return response.data.values
    } catch(error){
        console.log("!!! get sheets data failed with ", error);
        return []
    }
}
