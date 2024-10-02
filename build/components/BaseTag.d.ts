import React from 'react';
import { IConditionProps, IConditionWithFuncProps } from './types';
/**
 * Must only contain a single child, which it renders as-is.
 * Should not be used outside of an `<If />` block.
 * @param props The props to pass down to the `<ElseIf />` component
 */
export declare const ElseIf: React.FC<IConditionWithFuncProps>;
/**
 * Must only contain a single child, which it renders as-is.
 * Should not be used outside of an `<If />` block.
 * @param props The props to pass down to the `<Else />` component
 */
export declare const Else: React.FC<IConditionProps>;
/**
 * Must contain only a single child, which it renders as-is.
 * Should not be used outside of an `<If />` block.
 * @param props The props to pass down to the `<Then />` component
 */
export declare const Then: React.FC<IConditionProps>;
/**
 * the first `<Default />` will be the only one rendered.
 * @param props The props to pass down to the `<Default />` component
 */
export declare const Default: React.FC<IConditionProps>;
/**
 * inside the parent `<Switch />` it will be the only rendered.
 * @param props The props to pass down to the `<Case />` component
 */
export declare const Case: React.FC<IConditionWithFuncProps>;
