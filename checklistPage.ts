import { Locator, Page } from '@playwright/test';

export class ChecklistPage{
    private page: Page; 
    private addShiftNewsButtonSelector: string;
    private editShiftNewsButtonSelector: string; 
    private deleteShiftNewsButtonSelector: string; 
    private shiftNewsTerminalServerButtonSelector: string;
    private  shiftNewsHeadlineInputId: string;

    

    constructor(page: Page){
        this.page = page; 
        this.addShiftNewsButtonSelector = '[test-automation-id="ShiftNewsListView.AddShiftNews"]';
        this.editShiftNewsButtonSelector = '[test-automation-id="ShiftNewsView.ShiftNewsEdit"]';
        this.deleteShiftNewsButtonSelector = '[test-automation-id="ShiftNewsView.ShiftNewsDelete"]';
        this.shiftNewsTerminalServerButtonSelector = '[test-automation-id="ShiftNewsPostDialog.FilesFromTerminalServer"]';
    }

    getAddShiftNewsButton(): Locator {
        return this.page.locator(this.addShiftNewsButtonSelector); 
    }

    getEditShiftNewsButton(): Locator {
        return this.page.locator(this.editShiftNewsButtonSelector);
    }

    getDeleteShiftNewsButton(): Locator {
        return this.page.locator(this.deleteShiftNewsButtonSelector);
    }

    getShiftNewsTerminalServerButton(): Locator {
        return this.page.locator(this.shiftNewsTerminalServerButtonSelector)
    }
}