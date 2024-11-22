import { Locator, Page , expect} from '@playwright/test';

export class PopoverPage{

    private page: Page;
    private baseURL: string;
    private fileListIcon: Locator;
    private popoverContent: Locator;
    private fileListItems: Locator;

    constructor(page: Page) { 
        this.page = page;
        this.baseURL = 'https://wup-cockpit-test.tmd.corp.transmission-it.de/blazor/';
        this.fileListIcon = page.locator('[test-automation-id="BridgeToolbarInfo.FileListIcon"]');
        this.popoverContent = page.locator('.bg-gray-100.m-0.p-0.nv-panel-level-1.neutral');
        this.fileListItems = page.locator('.nv-list-item');
    }

    //URL öffnen
    async open() {
        await this.page.goto(this.baseURL);
    }

    // Überprüft, ob das Icon sichtbar ist
    async checkFileListIconVisible() {
        await expect(this.fileListIcon).toBeVisible({ timeout: 10000});
    }

    // Klickt auf das File List Icon
    async toggleFileListPopover() {
        await this.fileListIcon.click();
    }

    // Überprüft, ob das Popover sichtbar ist
    async checkPopoverVisible(isVisible: boolean) {
        if (isVisible) {
            await expect(this.popoverContent).toBeVisible();
        } else {
            await expect(this.popoverContent).not.toBeVisible();
        }
    }

    // Überprüft die Anzahl der Elemente in der Liste
    async verifyFileListItemsCount(maxCount: number) {
        const count = await this.fileListItems.count();
        expect(count).toBeLessThanOrEqual(maxCount);
    }

    // Klickt außerhalb des Popovers
    async clickOutside() {
        await this.page.click('body');
    }
}
 