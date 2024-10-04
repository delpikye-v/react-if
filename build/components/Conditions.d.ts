import React from 'react';
import type { IConditionProps, IConditionWithFuncProps } from './types';
declare global {
    let __DEV__: boolean;
}
/** A shorthand for
 *
 * <If condition={...}>
 *     <Then>
 *         { ... }
 *     </Then>
 * </If>
 */
export declare const When: React.FC<IConditionWithFuncProps>;
/**
 * If condition evaluates to true, renders the `<Then />` block will be rendered,
 * otherwise renders the `<Else />` block. Either block may be omitted.
 *
 * <If condition={...}>
 *  <Then>{this is if}</Then>
 *  <ElseIf condition={...}></ElseIf>
 *  <Else></Else>
 * </If>
 *
 * This component can contain any number of `<Then />`, `<ElseIf />` and `<Else />` blocks,
 * but only the first block of the right type (either Then or Else, depending on the condition) will be rendered.
 */
export declare const If: React.FC<IConditionWithFuncProps>;
/**
 * It will render the first matching `<Case />`, or the first encountered `<Default />` (or `null`).
 *
 * <Switch>
 *  <Case condition={...}></Case>
 *  <Case condition={...}></Case>
 *  <Default></Default>
 * </Switch>
 */
export declare const Switch: React.FC<IConditionProps>;
