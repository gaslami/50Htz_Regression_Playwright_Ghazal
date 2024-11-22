import { Locator, Page , expect} from '@playwright/test';
import { AddShiftNewsPage } from './AddShiftNewsPage';

export class DeleteShiftNewsPage extends AddShiftNewsPage {

    private deleteButton: Locator;
    private editButton: Locator;
    private editCancelButton: Locator;
    private editCloseButton: Locator;
    private deleteConfirmButton: Locator;
    private deleteCancelButton: Locator;
    private shiftNewsTile: Locator;

    constructor(page: Page) {
        super(page);
        this.deleteButton = page.locator('[test-automation-id="ShiftNewsView.ShiftNewsDelete"]');
        this.editButton = page.locator('[test-automation-id="ShiftNewsView.ShiftNewsEdit"]');
        this.editCancelButton = page.locator('[test-automation-id="ShiftNewsPostDialog.ShiftNewsCancel"]');
        this.editCloseButton = page.locator('[test-automation-id="ShiftNewsPostDialog.ShiftNewsClose"]');
        this.deleteConfirmButton = page.locator('[test-automation-id="ShiftNewsDeleteDialog.ShiftNewsDeleteConfirm"]');
        this.deleteCancelButton = page.locator('[test-automation-id="ShiftNewsDeleteDialog.ShiftNewsDeleteCancel"]');
        this.shiftNewsTile = page.getByText('test test Rafat Simsek, 11/22');

    }

    //Sichtbarkeit des Löschen Button
    async checkDeleteButtonVisible() {
        await expect(this.deleteButton).toBeVisible();
    }

    //Sichtbarkeit des Bearbeiten Button
    async checkEditButtonVisible() {
        await expect(this.editButton).toBeVisible();
    }

    //Bearbeiten Button 
    async clickEditbutton() {
        await this.editButton.click();
    }

    //Cancel Bearbeiten klicken
    async clickCancelButtonInEditMode() {
        await this.editCancelButton.click();
    }

    //Bearbeiten Modus mit x schließen
    async clickCloseButtonInEditMode() {
        await this.editCloseButton.click();
    }

    //Popover durch Klick außerhalb schließen
    async clickOutsideToClosePopover() {
        await this.clickOutsideOverlay();
    }

    //Delete
    async clickDeleteButton() {
        await this.deleteButton.click();
    }
    
    //Löschen bestätigen
    async clickConfirmDeleteButton() {
        await this.deleteConfirmButton.click();
    }

    //Löschen abbrechen durch Cancel
    async clickCancelDeleteButton() {
        await this.deleteCancelButton.click();
    }

    //Überprüfen dass Shift News noch da ist
    async checkShiftNewsVisible() {
        await expect(this.shiftNewsTile).toBeVisible();
    }

    //Überprüfen ob Shift News gelöscht wurde
    async checkShiftNewsNotVisible() {
        await expect(this.shiftNewsTile).toBeHidden();
    }
    }


