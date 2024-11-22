import { Locator , Page , expect } from "@playwright/test";
import exp from "constants";

export class SaveShiftNewsPage {

    private baseURL: string;
    private page: Page;
    private saveButton: Locator;
    private errorMessage: Locator;
    private newsTitle: Locator;
    private newsContent: Locator;

    constructor(page: Page) {
        this.page = page;
        this.saveButton = page.locator('[test-automation-id="ShiftNewsPostDialog.ShiftNewsSave"]');
        this.errorMessage = page.locator('.nv-field-validation', { hasText: 'Please enter the content of the news!' });
        this.newsTitle = page.locator('.nv-stack-item-lead.nv-heading.font-medium.neutral');
        this.newsContent = page.locator('.nv-text.text-sm.font-normal');

    }

    //Methode zum Speichern der Schichtnachricht
    async clickSaveButton() {
        await this.saveButton.click();
    }

    //Methode zur Überprüfung der Fehlermeldung
    async checkErrorMessage(expectedMessage: string) {
        await expect(this.errorMessage).toHaveText(expectedMessage);
    }

    //Methode zur Überprüfung ob Inhalt gespeichert wurde
    async checkNewsIsVisible(headline: string, content: string) {
        const newsTitle = this.page.locator('.nv-stack-item-lead.nv-heading.font-medium.neutral', { hasText: headline});
        const newsContent = this.page.locator('.nv-text.text-sm.font-normal', { hasText: content });
        await expect(newsTitle).toBeVisible();
        await expect(newsContent).toBeVisible();
    }
    
}