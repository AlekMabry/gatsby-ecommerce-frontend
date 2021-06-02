import React from 'react';
import '../style/style.css';

import Page from '../components/Page/Page';
import Product from '../components/Product/Product';
import CategorySelector from '../components/CategorySelector/CategorySelector';

import data from '../json/store.json';
//import { graphql, useStaticQuery } from 'gatsby';

/*const pageQuery = graphql`
{
    gcms {
        collections {
            name
            slug
            categories {
              name
              slug
            }
        }
        products {
            name
            slug
            price
            previousPrice
            description
            thumbnail {
                url
            }
        }
    }
}`;*/

function StorePage() {
    //const {gcms: {products, collections}} = useStaticQuery(pageQuery);
    let page = data.page;
    let ribbonMessages = data.ribbonMessages;
    let products = data.products;
    let collections = data.collections;

    return (
        <Page ribbonMessages={ribbonMessages} page={page}>
            <div class="sidebar">
                {collections.map((collection) =>
                    <CategorySelector collection={collection}/>
                )}
            </div>
            <div class="main-content">
                <div class="products-container">
                    {products.map((product) =>
                        <Product product={product}/>
                    )}
                </div>
            </div>
        </Page>
    );
}

export default StorePage