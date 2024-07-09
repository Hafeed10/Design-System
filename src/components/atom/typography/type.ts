// type.ts
interface TypographyPropsType {
    text: string,
    tag?:keyof JSX.IntrinsicElements,
    className?:string,
    Children?:React.ReactNode,
    style?:React.CSSProperties
    role?:string,
    ariaLabel?:string,
    ariaLabelledBy?:string,


  }
  
  export default TypographyPropsType;
  