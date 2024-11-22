import { Locator , Page, expect } from '@playwright/test';


export class AddShiftNewsPage {
    public baseURL:string;
    public page: Page;
    public shiftDropdown: Locator;
    public toChecklistButton: Locator;
    private addShiftNewsButton: Locator;
    private shiftNewsHeadline: Locator;
    public shiftNewsContent: Locator;
    private cancelShiftNewsButton: Locator;
    private closeButton: Locator;
    private overlay: Locator;
    private header: Locator;
    private shiftOption:string;
   
  

    constructor(page: Page) {
        this.baseURL = 'https://wup-cockpit-test.tmd.corp.transmission-it.de/blazor/';
        this.page = page;
        this.shiftDropdown = page.locator('select#ShiftValue');
        this.toChecklistButton = page.locator('[test-automation-id="Index.ToChecklist"]');
        this.addShiftNewsButton = page.locator('[test-automation-id="ShiftNewsListView.AddShiftNews"]');
        this.shiftNewsHeadline = page.locator('.nv-field-input input#title');
        this.shiftNewsContent = page.locator('div[contenteditable="true"].ProseMirror.toastui-editor-contents');
        this.cancelShiftNewsButton = page.locator('[test-automation-id="ShiftNewsPostDialog.ShiftNewsCancel"]');
        this.closeButton = page.locator('[test-automation-id="ShiftNewsPostDialog.ShiftNewsClose"]');
        this.overlay = page.locator('.nv-overlay');
        this.header = page.locator('.nv-layout-header')
        this.shiftOption = '13ab8452-90b2-448a-9854-b7550883ffee';

    }

    //Methode zum Öffnen der Seite
    async open() {
        await this.page.goto(this.baseURL);
    }

    //Methode Dropdown anklicken
    async clickDropdown() {
        await this.shiftDropdown.click();
    }

    //MEthode zum Auswählen der Shift
    async selectShift() {
        await this.shiftDropdown.selectOption(this.shiftOption);
    }

    //Methode um auf to Checklist zu klicken
    async clickToChecklist() {
        await this.toChecklistButton.click();
    }

    //Methode um auf Add Shift News zu klicken
    async clickAddShiftNews() {
        await this.addShiftNewsButton.click();
    }

    //Methode zum Ausfüllen der Headline
    async fillHeadline(headline:string) {
        await this.shiftNewsHeadline.fill(headline);
    }

    //Methode Ausfüllen COntent
    async fillContent(content:string) {
        await this.shiftNewsContent.fill(content);
    }

    //Methode zum Überprüfen der SIchtbarkeit des Cancel Buttons
    async checkCancelButtonVisible() {
        await expect(this.cancelShiftNewsButton).toBeVisible();
    }

    //Methode Cancel klicken
    async clickCancelButton() {
        await this.cancelShiftNewsButton.click();
    }

    //Methode Überprüfen, ob Oberlay nicht mehr sichtbar ist
    async waitForOverlayToDisappear() {
        await this.overlay.waitFor({ state: 'hidden'});
    }

    //Methode um auf close zu klicken
    async clickCloseButton() {
        await this.closeButton.click();
    }

    //Methode um außerhalb des Overlays zu klicken zum Schließen
    async clickOutsideOverlay() {
        await this.header.click({ force: true});
    }

    //Methode zum Überprüfen ob die Eingabefelder leer sind
    async checkIfFieldsAreEmpty() {
        //await expect(this.shiftNewsHeadline).toHaveText('Enter headline or category of news');
        await expect(this.shiftNewsHeadline).toBeEmpty();
        await expect(this.shiftNewsContent).toHaveText('News Content');
    }
}