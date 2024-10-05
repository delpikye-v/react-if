import React from 'react';
import { BooleanResult } from './types';
import { IConditionProps, IConditionWithFuncProps } from './types';
declare global {
    let __DEV__: boolean;
}
/**
 * If the condition is true, it renders the children. Otherwise, it returns null.
 *
 * <When condition={...}>
 *  {children}
 * </When>
 */
export declare const When: React.FC<IConditionWithFuncProps>;
/**
 * It checks if the condition is true.
 * It then parses its children using the parseIfElse function, which determines the first matching child block (Then, ElseIf, or Else) based on the condition.
 * If the condition is true and there's only one child block, it renders all children as-is.
 * Otherwise, it renders only the first matching child block.
 *
 * <If condition={...}>
 *  <Then>{this is if}</Then>
 *  <ElseIf condition={...}></ElseIf>
 *  <ElseIf condition={...}></ElseIf>
 *  <Else></Else>
 * </If>
 */
export declare const If: React.FC<IConditionWithFuncProps>;
/**
 * It renders the first child that matches a condition or the first Default child if no conditions are met.
 * If there are no children, it returns null.
 *
 * <Switch>
 *  <Case condition={...}></Case>
 *  <Case condition={...}></Case>
 *  <Default></Default>
 * </Switch>
 */
export declare const Switch: React.FC<IConditionProps>;
/**
 * Executes a condition and returns the result.
 * If the condition is a function, it calls the function and returns the result.
 * If the condition is not a function, it returns the condition as-is.
 *
 * @param condition The condition to check
 * @returns The result of the condition
 */
export declare function execConditions(condition: BooleanResult | ((...args: unknown[]) => BooleanResult)): boolean;
