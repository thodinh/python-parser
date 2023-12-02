import {Python3Parser, Python3Listener, Python3Visitor} from './py-parser';
import { Import_as_nameContext, Import_nameContext } from './py-parser/lib/python3/Python3Parser';

const parser = new Python3Parser();
const python ='import sys\nfor i in sys.argv:\n print(i)';
// parseTree
const tree = parser.parse(python);
class MyListener extends Python3Listener {
    enterImport_name(ctx: Import_nameContext): void {
        console.log('enterImport_name', ctx.getText());
    }
}
const listenTableName = new MyListener();
parser.listen(listenTableName, tree);