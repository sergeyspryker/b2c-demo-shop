import 'select2/src/scss/core';
import './style';
import register from 'ShopUi/app/registry';
export default register('custom-select', () => import(/* webpackMode: "eager" */'./custom-select'));