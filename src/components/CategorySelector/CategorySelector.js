import React from 'react';
import AccordianFrame from '../AccordianFrame/AccordianFrame';

function CategorySelector(props) {
    return (
        <AccordianFrame modClass="category-selector" title={props.collection.name}>
            <form>
                <ul>
                    {props.collection.categories.map((category) =>
                        <li class="checkbox">
                            <input type="checkbox" id={category.slug}/>
                            <label for={category.slug}>{category.name}</label>
                        </li>
                    )}
                </ul>
            </form>
        </AccordianFrame>
    );
}

export default CategorySelector;