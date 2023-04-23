export interface Order {
  price: number,
  size: number,
}
 export interface Row {
   price_abc: number,    // (ask + bid) / 2
   price_def: number,
   ratio: number,        // price ABC / price DEF
   timestamp: Date,      // data timestamp for X axis
   upper_bound: number,  // + 0.05
   lower_bound: number,  // - 0.05
   trigger_alert: number | undefined,
 }

class DataStreamer {
  static API_URL: string = 'http://localhost:8080/query?id=1';

  static getData(callback: (data: ServerRespond[]) => void): void {
    const request = new XMLHttpRequest();
    request.open('GET', DataStreamer.API_URL, false);

    request.onload = () => {
      if (request.status === 200) {
        callback(JSON.parse(request.responseText));
      } else {
        alert ('Request failed');
      }
    }

    request.send();
  }
}

export default DataStreamer;