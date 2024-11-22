import { Locator , Page , expect } from '@playwright/test';
import { AddShiftNewsPage } from './AddShiftNewsPage'; //andere POM Klasse importieren
import exp from 'constants';

export class ShiftDropdownPage extends AddShiftNewsPage {
    public baseURL: string;
    public page: Page;
    public mainText: Locator;
    private newsfeedButton: Locator;
    private overviewButton: Locator;
    private overviewText: Locator;
    private username: Locator;


    constructor(page: Page) {
        super(page);//Konstruktor anderen POM Klasse
        this.baseURL = 'https://wup-cockpit-test.tmd.corp.transmission-it.de/blazor/';
        this.page = page;
        this.mainText = page.locator('.font-bold.nv-panel.nv-panel-level-1.neutral');
        this.newsfeedButton = page.locator('[test-automation-id="Index.ToNewsfeed"]');
        this.overviewButton = page.locator ('[test-automation-id="NavMenu.Overview"]');
        this.overviewText = page.locator('text="Overview"');
        this.username = page.locator('text="Rafat Simsek"');
    }

    //Methode Überprüfung Main Text
    async checkMainText() {
        await expect(this.mainText.nth(0)).toHaveText('Hello Rafat,');
        await expect(this.mainText.nth(1)).toHaveText('Welcome to WUP Cockpit');
    }

    //Methode Seite neuladen
    async reloadPage() {
        await this.page.reload();
    }

    //Methode Seite schließen und neu öffnen
    async reopenPage () {
        await this.page.close();
        const newPage = await this.page.context().newPage();
        await newPage.goto(this.baseURL);
        this.page = newPage; // Aktualisiert das aktuelle Page-Objekt
    }

    //Methode Überprüfung der Shicht nach Seiten REload
    async verifyShiftAfterReload(expectedValue: string) {
        await this.page.reload();
        await this.shiftDropdown.waitFor({ state: 'visible' });
        await this.shiftDropdown.click();
        const selectedOption = await this.shiftDropdown.inputValue();
        await expect(selectedOption).toBe(expectedValue);
    }

    //Methode Überprüfnug der Schicht nach Schließen und Wiederöffnen der Seite
    async verifyShiftAfterReopen(expectedText: string) {
        await this.page.close();
        const newPage = await this.page.context().newPage();
        await newPage.goto(this.baseURL);
        const reopenedShiftDropdown = newPage.locator('select#ShiftValue');
        await expect(reopenedShiftDropdown).toHaveText(expectedText);
    }

    //Methode Überprüfung der Schichtoptionen
    async verifyShiftOptions() {
        const shifts = [
            { selector: '13ab8452-90b2-448a-9854-b7550883ffee' },
            { selector: '3b14ed61-5b7d-4308-a960-85940823dcf5' },
            { selector: '26c15659-2e95-4242-8df0-b2a0439d6a82' },
            //{ selector: '26c15659-2e95-4242-8df0-b2a0439d6a82' },
        ];
        const option1 = this.page.locator('option[value="13ab8452-90b2-448a-9854-b7550883ffee"]');
        await expect(option1).toHaveText('SC-X, 14.11.2024'); 
        const option2 = this.page.locator('option[value="3b14ed61-5b7d-4308-a960-85940823dcf5"]');
        await expect(option2).toHaveText('CM-F, 14.11.2024');
        // const option3 = this.page.locator('option[value="26c15659-2e95-4242-8df0-b2a0439d6a82"]');
        // await expect(option3).toHaveText('SC-N, 13.11.2024');
        const option4 = this.page.locator('option[value="4ca20f22-ae47-4f7b-8c5d-a6fa93554a61"]');
        await expect(option4).toHaveText('CM-S1, 14.11.2024');
    }

    //Methode Überprüfung Username
    async verifyUsername(expectedName: string) {
        await expect(this.username).toHaveText(expectedName);
    }

    //Überprüfung Verfügbarkeit Navigationselemente
    async checkNavigationLinks () {
        await expect(this.toChecklistButton).toBeVisible();
        await expect(this.toChecklistButton).toBeEnabled();
        await expect(this.newsfeedButton).toBeVisible();
        await expect(this.newsfeedButton).toBeEnabled();
    }

    //Methode mouse Over Checklist & Newsfeed
    async hoverOverButtons () {
        await this.toChecklistButton.hover();
        await expect(this.toChecklistButton).toBeVisible();
        await this.newsfeedButton.hover();
        await expect(this.newsfeedButton).toBeVisible();
    }

    //Methode zum Öffnen der Checkliste und Newsteed
    async openChecklistandNewsfeed () {
        await this.toChecklistButton.hover();
        await expect(this.toChecklistButton).toBeVisible();
        await expect(this.toChecklistButton).toBeVisible();
        await this.toChecklistButton.click();
        await this.newsfeedButton.hover();
        await expect(this.newsfeedButton).toBeVisible();
        await this.newsfeedButton.click();
        }
        
    //Methode Zurücknavigieren auf Overview und Prüfen der Schicht
    async goToOverviewPage(expectedText: string) {
        await this.overviewButton.click();
        await expect(this.shiftDropdown).toHaveText(expectedText);
        }

        

    }
    
