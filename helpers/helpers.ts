
import { Locator } from '@playwright/test';

// Sample helper function
export const selectDropdownOption = async (dropdown: Locator, optionText: string) => {
  await dropdown.click();
  const option = dropdown.locator(`li:has-text("${optionText}")`);
  await option.click();
};
