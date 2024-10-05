import React from 'react';
export type BooleanResult = boolean | string | number | null | undefined;
export interface IConditionProps {
    children?: React.ReactNode | JSX.Element | string;
}
export interface IConditionWithFuncProps extends IConditionProps {
    condition: (() => BooleanResult) | BooleanResult;
}
export interface IConditionElseWithFuncProps extends IConditionWithFuncProps {
    elseChildren?: React.ReactNode | JSX.Element | string;
}
export interface IConditionElseIfWithFuncProps extends IConditionWithFuncProps {
    elseIfCondition?: (() => BooleanResult) | BooleanResult;
    elseIfChildren?: React.ReactNode | JSX.Element | string;
    elseChildren?: React.ReactNode | JSX.Element | string;
}
