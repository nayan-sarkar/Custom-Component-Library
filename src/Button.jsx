import classnames from 'classnames';

function Button({children,className,size,variant,value,...props}){
    let allClasses=classnames(className);
    allClasses = size ? classnames(allClasses,size): allClasses;
    allClasses = variant ? classnames(allClasses,variant): allClasses;

    return (
        <button {...props} className={allClasses}>{children || value}</button>
    )
}

export default Button;