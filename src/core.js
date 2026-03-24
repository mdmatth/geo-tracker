// Core tracking module
export class GeoTracker {
  constructor() {
    this.tracking = false;
  }

  start() {
    this.tracking = true;
    console.log('Tracking started');
  }

  stop() {
    this.tracking = false;
    console.log('Tracking stopped');
  }
}