import { Locator , Page, expect } from '@playwright/test';
import { AddShiftNewsPage } from './AddShiftNewsPage';


export class AddFilesToShiftNewsPage extends AddShiftNewsPage{

    private addFilesButton: Locator;
    private fileUploadInput: Locator;
    private fileContainer: Locator;
    private fileContainerRemoveButton: Locator;
    private removeFileButton: Locator;


    constructor(page: Page) {
        super(page);
        this.addFilesButton = page.locator('[test-automation-id="ShiftNewsPostDialog.FilesFromTerminalServer"]');
        this.fileUploadInput= page.locator('input[type=""]');
        this.fileContainer = page.locator('.flex.flex-col.border-1-2.shift-news-local-file-container.nv-col.w-4/12');
        this.removeFileButton = page.locator('[test-automation-id="LocalFileMetaDataPreview.FileContainerRemove"]');

    }

    //Button Add File
    async addFilesButtonVisible() {
        await expect(this.addFilesButton).toBeVisible();
    }

    //Datei in das Upload Feld setzen
    async uploadFile(filePath: string) {
        await this.fileUploadInput.setInputFiles(filePath);

    }

    //Prüfen ob Datei im COntainer angezeigt wird
    async checkFileAttached () {
        await expect(this.fileContainer).toBeVisible();
    }

    //Entferne eine angehängte Datei
    async removeFile() {
        await this.removeFileButton.click();
    }

    //Prüfen ob Datei entfernt wurde
    async checkFileRemoved() {
    
    }
}