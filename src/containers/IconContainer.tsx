type IconContainerProps = {
    as: React.ElementType;
    className?: string;
}
const IconContainer:React.FC<IconContainerProps> = ({as, className=""}) => {
    const Component = as;
    return <Component className={className || ""} />

}
export default IconContainer;