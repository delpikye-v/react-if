import React from 'react';
import type { IConditionProps, IConditionWithFuncProps } from './types';
declare global {
    let __DEV__: boolean;
}
/**
 * Like
 * <If condition={...}>
 *     <Then>
 *         { ... }
 *     </Then>
 * </If>
 */
export declare const When: React.FC<IConditionWithFuncProps>;
/**
 * If condition evaluates to true, renders the `<Then />` block will be rendered,
 * <If condition={...}>
 *  <Then>{this is if}</Then>
 *  <ElseIf condition={...}></ElseIf>
 *  <ElseIf condition={...}></ElseIf>
 *  <ElseIf condition={...}></ElseIf>
 *  <Else></Else>
 * </If>
 */
export declare const If: React.FC<IConditionWithFuncProps>;
/**
 * It will render the first matching `<Case />`, or the first encountered `<Default />` (or `null`).
 */
export declare const Switch: React.FC<IConditionProps>;
