import { EventEmitter } from 'events';
import { URL } from 'url';
export class AbstractSocketClient extends EventEmitter {
    constructor(url, config) {
        super();
        this.url = url;
        this.config = config;
        this.setMaxListeners(0);
    }
}


/*********** |  UPDATE BAILEYS  | ***********/

// Date: minggu - 13 - September
// waktu: 08:13 AM  -> malam hari
// desc: script baileys ini adalah fix dari baileys lama

/*********** |  UPDATE BAILEYS  | ***********/