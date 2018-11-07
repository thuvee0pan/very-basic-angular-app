import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: boolean = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? true : false;
  }

  ngOnInit() {}

  getServerStatus() {
    if (this.serverStatus) {
      return "Online";
    }
    return "Offline";
  }

  getColor() {
    return this.serverStatus == true ? "green" : "red";
  }
}
