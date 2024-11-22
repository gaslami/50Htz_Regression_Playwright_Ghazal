import { Locator, Page } from '@playwright/test';

export class OverviewPage{
    private page: Page;
    private BaseURL: string;
    private toChecklistButtonSelector: string;
    private toNewsfeedButtonSelector: string; 
    private shiftSelectDropdownSelector: string; 
    private shiftSelectOption1: string;
    private shiftSelectOption2: string;
    private shiftSelectOption3: string;
    private shiftSelectOption4: string;
    private shiftSelectOption5: string;

    

    constructor(page: Page){
        this.page = page; 
        this.BaseURL = 'https://wup-cockpit-test.tmd.corp.transmission-it.de/blazor/'; 
        this.toChecklistButtonSelector = '[test-automation-id="Index.ToChecklist"]';
        this.toNewsfeedButtonSelector = '[test-automation-id="Index.ToNewsfeed"]';
        this.shiftSelectDropdownSelector = '[id="ShiftValue"]';
        this.shiftSelectOption1 = '[value="3b14ed61-5b7d-4308-a960-85940823dcf5"]';
        this.shiftSelectOption2 = '[value="13ab8452-90b2-448a-9854-b7550883ffee"]';
        this.shiftSelectOption3 = '[value="4ca20f22-ae47-4f7b-8c5d-a6fa93554a61"]';
        this.shiftSelectOption4 = '[value="5a2cde8e-be71-43b8-8f05-2fcaa829a94f"]';
    }

    async navigate(){
        await this.page.goto(this.BaseURL);
    }

    getToChecklistButton(): Locator {
        return this.page.locator(this.toChecklistButtonSelector);
    }

    getToNewsfeedbutton(): Locator {
        return this.page.locator(this.toNewsfeedButtonSelector)
    }

    getShiftSelectDropdown(): Locator {
        return this.page.locator(this.shiftSelectDropdownSelector)
    }

    async chooseShiftOption(shiftSelectOption) {
        
    }


}

