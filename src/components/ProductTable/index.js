import React, {Component} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    const rows = [];
    return (
      <table>
        <ProductCategoryRow />
        <ProductRow />
      </table>
    )
  }
}

export default ProductTable;