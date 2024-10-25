import React from 'react';
import type { IConditionElseIfWithFuncProps, IConditionElseWithFuncProps, IConditionWithFuncProps } from './types';
/**
 * If condition evaluates to true. Either block may be omitted.
 *
 * <IfCondition
 *  condition={...}
 * >
 *  {children}
 * </IfCondition>
 *
 */
export declare const IfCondition: React.FC<IConditionWithFuncProps>;
/**
 * If condition evaluates to true. Either block may be omitted.
 *
 * <IfElseCondition
 *  condition={...}
 *  elseChildren={...}
 * >
 *  {children}
 * </IfElseCondition>
 *
 */
export declare const RenderIfElse: React.FC<IConditionElseWithFuncProps>;
/**
 * If condition evaluates to true. Either block may be omitted.
 *
 * <IfElseIfCondition
 *  condition={...}
 *  elseIfChildren={...}
 *  elseIfCondition={...}
 *  elseChildren={...}
 * >
 *  {children}
 * </IfElseIfCondition>
 */
export declare const IfElseIfCondition: React.FC<IConditionElseIfWithFuncProps>;
