import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../core/http/api.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-find",
  templateUrl: "./find.component.html",
  styleUrls: ["./find.component.scss"],
})
export class FindComponent implements OnInit {
  planetList: any = [];

  findModel = {
    first: { planet: "", vehicle: "" },
    second: { planet: "", vehicle: "" },
    third: { planet: "", vehicle: "" },
    fourth: { planet: "", vehicle: "" },
  };

  vehicleList: any = [];

  constructor(private falconAPIService: ApiService, private router: Router) {}

  ngOnInit() {
    this.falconAPIService.setSearchresult(null);
    this.getVehicles();
    this.getPlanets();
  }

  isOptionDisable(plantName) {
    let isDisable = false;
    for (let key in this.findModel) {
      if (this.findModel[key]["planet"] == plantName) {
        isDisable = true;
        break;
      }
    }
    return isDisable;
  }

  getVehicles() {
    this.falconAPIService.getVehicles().subscribe(
      (res) => {
        this.vehicleList = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getPlanets() {
    this.falconAPIService.getPlanets().subscribe(
      (res) => {
        this.planetList = res;
        Object.keys(this.findModel).forEach((val, index) => {
          if (res[index] && res[index]["name"]) {
            this.findModel[val]["planet"] = res[index]["name"];
          }
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  findFalcone() {
    let obj = {};
    for (let key in this.findModel) {
      if (this.findModel[key]["planet"] && this.findModel[key]["vehicle"]) {
        obj[this.findModel[key]["planet"]] = this.findModel[key]["vehicle"];
      }
    }
    if (Object.keys(obj).length < 1) {
      alert("please Select at least 1 Vehicle");
      return;
    }
    this.falconAPIService.findFalcone(obj).subscribe(
      (res) => {
        this.falconAPIService.setSearchresult(res);
        this.router.navigate(["/falcon/result"]);
      },
      (err) => {
        alert("Failure! Falcone Not Found please Try Again");
      }
    );
  }

  isVehicleDisable(vehicleName) {
    let isDisable = false;
    let { available_quantity } = this.vehicleList.filter(
      (obj) => obj["name"] == vehicleName
    )[0];
    let quantityUsed = 0;
    for (let key in this.findModel) {
      if (this.findModel[key]["vehicle"] == vehicleName) {
        quantityUsed++;
        if (available_quantity == quantityUsed) {
          isDisable = true;
          break;
        }
      }
    }
    return isDisable;
  }
}
