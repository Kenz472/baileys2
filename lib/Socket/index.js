import { DEFAULT_CONNECTION_CONFIG } from '../Defaults/index.js';
import { makeCommunitiesSocket } from './communities.js';
// export the last socket layer
const makeWASocket = (config) => {
    const newConfig = {
        ...DEFAULT_CONNECTION_CONFIG,
        ...config
    };
    return makeCommunitiesSocket(newConfig);
};
export default makeWASocket;


/*********** |  UPDATE BAILEYS  | ***********/

// Date: minggu - 13 - September
// waktu: 08:13 AM  -> malam hari
// desc: script baileys ini adalah fix dari baileys lama

/*********** |  UPDATE BAILEYS  | ***********/