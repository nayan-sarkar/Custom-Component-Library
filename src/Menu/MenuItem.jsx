import Button from './../Button';

function MenuItem({children}){
    return (
        <Button className="menu">{children}</Button>
    )
}

export default MenuItem;