
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items, title, img }) => {
    return (
        <div className='pt-8'>
            { (title !=="offered") && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 md:my-16 my-4 px-4">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            
           {
            title==="offered" ?  <Link to={`/order/salad`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link> : <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
           }
        </div>
    );
};

export default MenuCategory;