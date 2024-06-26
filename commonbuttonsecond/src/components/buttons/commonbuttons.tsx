import { Children, ReactNode } from "react"
import SpinnerIcon from "../icons/loadingicon"

export enum ESize {
    XL = " text-xl font-bold ",
    LARGE = " text-lg font-bold ",
    SMALL = ' text-base font-bold '
}
export enum EButtonTheme {
   
    PRIMARY_WHITE = "primary-white",
    PRIMARY_DARK = "primary-dark",
    SECONDARY_DARK = "secondary-dark",
    TEXT_DARK = "text-dark"
}


export interface ButtonProps {
    buttonType?: string
    size?: string
    isDisable?: boolean
    content?: string
    Icon?: ReactNode
    loadingIcon?:ReactNode
    hasrightIcon?: boolean
    hasleftIcon?: boolean
    isLoading?:boolean
}
export const ButtonConfig: React.FC<ButtonProps> = ({
    buttonType = EButtonTheme.PRIMARY_WHITE,
    size = ESize.LARGE,
    isDisable = false,
    content = "CLick me",
    Icon,
    loadingIcon,
    hasrightIcon,
    hasleftIcon,
    isLoading,
    ...props
},onClick) => {
    
    const hoverprimarywhite=`bg-primarywhitehover`;
    const hoverprimarydark=`bg-primarydarkhover`;
    const hoversecondarydark=`bg-primarysecondarydarkhover`;
    const hoverprimarytextdark=`text-primarytextdarkhover`;
    const buttonTheme: { [key: string]: string } = {
       
        [EButtonTheme.PRIMARY_WHITE]: `flex flex-row items-center justify-center rounded-lg text-black 
        hover:${hoverprimarywhite} ${isLoading ? 'bg-primarywhiteprocessing' : 'bg-primarywhite'}
        ${isDisable ? 'bg-primarywhitedisable hover:text-white' : 'bg-primarywhite'}`,

        [EButtonTheme.PRIMARY_DARK]: ` flex flex-row items-center justify-center rounded-lg text-white 
        hover:${hoverprimarydark}
        ${isLoading ? " bg-primarydarkprocessing " : " bg-primarydark "} 
        ${isDisable ?" bg-primarydarkdisable ":" bg-primarydark  "}`,

        [EButtonTheme.SECONDARY_DARK]: ` flex flex-row items-center justify-center rounded-lg text-white 
        hover:${hoversecondarydark} hover:text-black
        ${isLoading ? " bg-primarysecondarydarkprocessing " : " bg-primarysecondarydark "} 
        ${isDisable ?" bg-primarysecondarydarkdisable ":" bg-primarysecondarydark  "}`,

        [EButtonTheme.TEXT_DARK]: ` flex flex-row items-center justify-center rounded-lg bg-black 
        hover:${hoverprimarytextdark}
        ${isLoading ? " text-primarytextdarkprocessing " : " text-black "} 
        ${isDisable ?" text-primarytextdarkdisable ":"  text-black  "}`,
    }
    const buttonStyle = ` ${size}  ${buttonTheme[buttonType]} `;
    return (
        <button
            onClick={onClick}
            className={' px-16 py-8  '+buttonStyle}
        >
            {isLoading && hasleftIcon && <span>{loadingIcon}</span>}
            {!isLoading && hasleftIcon && <span>{Icon}</span>}
            {content}
            {isLoading && hasrightIcon && <span>{loadingIcon}</span>}
            {!isLoading && hasrightIcon && <span>{Icon}</span>}
           
        </button>
    );
};