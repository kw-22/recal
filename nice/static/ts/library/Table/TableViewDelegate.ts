import ITableViewCell = require('./ITableViewCell');
import IndexPath = require('../DataStructures/IndexPath');

interface TableViewDelegate
{
    /**
      * Callback for when a table view cell is deselected
      * Does not get called if the cell is programmatically deselected
      */
    didDeselectCell(cell: ITableViewCell): void;

    /**
      * Callback for when a table view cell is selected.
      * Does not get called if the cell is programmatically selected.
      */
    didSelectCell(cell: ITableViewCell): void;
}
export = TableViewDelegate;
