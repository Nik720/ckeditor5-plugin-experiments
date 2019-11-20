
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Simpleboxediting from './simpleboxediting';
import Simpleboxui from './simpleboxui';

export default class Simplebox extends Plugin {
    static get requires() {
        return [Simpleboxediting, Simpleboxui];
    }
}