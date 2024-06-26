/**
 * Content input type.
 */
export type ContentInput = string | unknown[];

/**
 * Content requirement type.
 */
export type ContentRequirement<TInput extends ContentInput> =
  TInput extends unknown[] ? TInput[number] : TInput;

/**
 * Length input type.
 */
export type LengthInput = string | unknown[];

/**
 * Size input type.
 */
export type SizeInput = Map<unknown, unknown> | Set<unknown> | Blob;

/**
 * Value input type.
 */
export type ValueInput = string | number | bigint | boolean | Date;
