export type Diffculty = 'easy' | 'normal' | 'hard';
export type DiffcultyJP = '初級' | '中級' | '上級';

export type DiffcultyInfo = {
  EN_WORD: Diffculty;
  JP_WORD: DiffcultyJP;
  FORMULA_PARTS_COUNT: number;
};
