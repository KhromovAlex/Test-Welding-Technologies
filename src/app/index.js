import handleTableView from './tableCatalog';
import editTitle from './editTitle';
import DragAndDrop from './DragAndDrop';
import { normalize, validateNormalize } from './part4';

handleTableView();
editTitle();
DragAndDrop();
window.normalize = normalize;
window.validateNormalize = validateNormalize;