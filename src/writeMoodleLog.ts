import { Buffer } from "buffer";

// a HostMsg is really just a log entry
export interface HostMsg {
    datacode: string;
    id: number;              // moodleID
    textbook: string;       // one day will have multiple textbooks running
    paragraph?: string;
    step?: string,
    data01?: string;
    data02?: string;
    data03?: string;
    data04?: string;
    data05?: string;
    data06?: string;
    data07?: string;

}


export function writeMoodleLog(payload: HostMsg) {

    // console.log('in writeMoodleLog', payload)

    // a bit of a hack.  sometimes we don't know the UNIQ who called us
    // (for example, working in the editor and running code)
    // but we want to be able to query the log for all records
    // so we simply use the PREVIOUS UNIQ (usually that got us here)



    let JsonData = JSON.stringify(payload)
    // console.log('JsonData:', JsonData)

    /*
    let xhr = new XMLHttpRequest();
    // let formData = new FormData(); // Currently empty

    xhr.open("POST", "ajax.php?payload="+JsonData, true);
    //Send the proper header information along with the request
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.send();  // should be JsonData
*/

    /////////////////////

    // same using Beacon API   https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API

    // The Beacon API is used to send an asynchronous and non-blocking request to a web server.
    // The request does not expect a response. The browser guarantees to initiate beacon requests
    // before the page is unloaded and to run them to completion.

    // The main use case for the Beacon API is to send analytics such as client-side events or session data to the server.

    let base64 = Buffer.from(JsonData, 'utf8').toString('base64');
    // console.log('base64', base64)
    navigator.sendBeacon("ajax.php?payload=" + base64);
}
