import { google } from "googleapis";

const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;
const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME ?? "Sheet1";

function getSheetsClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

function toSheetCell(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.map(String).join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

export async function appendFlattenedRow(
  flattened: Record<string, string>,
): Promise<void> {
  const sheets = getSheetsClient();
  const headerRange = `${sheetName}!1:1`;

  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: headerRange,
  });

  let headers = headerResponse.data.values?.[0] ?? [];

  if (headers.length === 0) {
    headers = ["submittedAt", ...Object.keys(flattened).sort()];
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: headerRange,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [headers] },
    });
  } else {
    const newKeys = Object.keys(flattened)
      .filter((key) => !headers.includes(key))
      .sort();

    if (newKeys.length > 0) {
      headers = [...headers, ...newKeys];
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: headerRange,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [headers] },
      });
    }
  }

  const row = headers.map((header) => {
    if (header === "submittedAt") {
      return flattened.submittedAt ?? new Date().toISOString();
    }
    return toSheetCell(flattened[header]);
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}
