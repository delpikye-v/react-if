/// <reference types="react" />
export type BooleanResult = boolean | string | number | null | undefined;
export interface IConditionProps {
    children?: React.ReactNode | JSX.Element | string;
}
export interface IConditionWithFuncProps extends IConditionProps {
    condition: (() => BooleanResult) | BooleanResult;
}
