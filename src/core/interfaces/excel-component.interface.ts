export interface ExcelComponentsInterface {
  toHTML(): string;
  initListeners(): void;
}

export interface ExcelComponentsOptions {
  name?: string;
  listeners?: string | string[];
}
