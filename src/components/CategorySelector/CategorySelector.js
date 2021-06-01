import React from 'react';
import AccordianFrame from '../AccordianFrame/AccordianFrame';

class CategorySelector extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AccordianFrame modClass="category-selector" title={this.props.collection.name}>
                <form>
                    <ul>
                        {this.props.collection.categories.map((category) =>
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
}

export default CategorySelector;