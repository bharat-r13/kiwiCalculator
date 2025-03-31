
import { Page, Locator, expect } from '@playwright/test';

export class KiwiSaverPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators for the calculator
  openCalculatorButton(page: Page): Locator {
    return page.locator('button', { hasText: 'Open the calculator' });
  }

  calculatorTitle(page: Page): Locator {
    return page.locator('p.MuiTypography-root', { hasText: 'Westpac KiwiSaver Scheme Calculator' });
  }

  nextButton(page: Page): Locator {
    return page.locator('button:has-text("Next Question")');
  }

  // Locators for specific questions
  questionAge(page: Page): Locator {
    return page.locator('h2#q-QUESTION_AGE');
  }

  ageInputField(page: Page): Locator {
    return page.locator('#text-QUESTION_AGE');
  }

  firstHomeButton(page: Page): Locator {
    return page.locator('button:has-text("First Home")');
  }

  questionGoal(page: Page): Locator {
    return page.locator('h2#q-QUESTION_KIWISAVER_GOAL');
  }

  // Actions and Methods to interact with the page
  async openCalculator(page: Page) {
    const openCalculatorButton = this.openCalculatorButton(page);
    const calculatorTitle = this.calculatorTitle(page);

    await openCalculatorButton.click();
    await expect(calculatorTitle).toBeVisible();
  }

  async fillAge(page: Page, age: string) {
    const ageInputField = this.ageInputField(page);
    await ageInputField.fill(age);
  }

  async clickNext(page: Page) {
    const nextButton = this.nextButton(page);
    await nextButton.click();
  }

  async chooseFirstHome(page: Page) {
    const firstHomeButton = this.firstHomeButton(page);
    await firstHomeButton.click();
  }

  async assertQuestionText(page: Page, expectedText: string) {
    const questionGoal = this.questionGoal(page);
    await expect(questionGoal).toHaveText(expectedText);
  }
}
