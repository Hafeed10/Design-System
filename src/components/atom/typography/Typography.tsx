import TypographyPropsType from './type';
import React, { Children } from 'react'


const Typography = ({
    text='Welcom to Machne',
     tag,
      className,
       Children,
       style,
    //    role,  
       ariaLabel, 
       ariaLabelledBy, 
    }: TypographyPropsType) => {
    return (
        React.createElement(
            tag,
             {
                className:className,
                style:style,
                ariaLabel:ariaLabel,
                ariaLabelledBy:ariaLabelledBy,

        },
        <>
          {text},{Children}
        </> 
    )
    )
}

export default Typography;