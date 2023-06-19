import { Dispatch, SetStateAction } from "react";

export interface ILeftPanelProps {
    handlePanel: Dispatch<SetStateAction<boolean>>;
}