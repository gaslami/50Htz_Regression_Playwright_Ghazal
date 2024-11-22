import { Locator, Page } from '@playwright/test';

export class CockpitBasePage{
    private page: Page;
    private overviewLinkSelector: string;
    private checklistsLinkSelector: string;
    private newsfeedLinkSelector: string;
    private languageEnglishSelector: string; 
    private languageGermanSelector: string; 
    private fileListIconSelector: string;

    constructor(page: Page){
        this.page = page; 
        this.overviewLinkSelector = '[test-automation-id="NavMenu.Overview"]';
        this.checklistsLinkSelector = '[test-automation-id="NavMenu.Checklists"]';
        this.newsfeedLinkSelector = '[test-automation-id="NavMenu.Newsfeed"]';
        this.languageEnglishSelector = '[test-automation-id="CultureChooser.LanguageEnglish"]';
        this.languageGermanSelector = '[test-automation-id="CultureChooser.LanguageGerman"]';
        this.fileListIconSelector = '[test-automation-id="BridgeToolbarInfo.FileListIcon"]';
    }

    getOverviewLink(): Locator {
        return this.page.locator(this.overviewLinkSelector);
    }

    getChecklistLink(): Locator {
        return this.page.locator(this.checklistsLinkSelector);
    }

    getNewsfeedLink(): Locator {
        return this.page.locator(this.newsfeedLinkSelector);
    }

    getLanguageEnglishToggle(): Locator {
        return this.page.locator(this.languageEnglishSelector); 
    }

    async setLanguage(language: 'EN' | 'DE'): Promise<void> {

    }

    getLanguageGermanToggle(): Locator {
        return this.page.locator(this.languageGermanSelector);
    }

    getFileListIcon(): Locator {
        return this.page.locator(this.fileListIconSelector);
    }
}