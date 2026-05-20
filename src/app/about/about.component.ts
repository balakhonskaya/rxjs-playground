import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { concat, of } from "rxjs";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  standalone: false,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const sourse1$ = of(1, 2, 3);
    const sourse2$ = of(4, 5, 6);
    const sourse3$ = of(7, 8, 9);

    const result$ = concat(sourse1$, sourse2$, sourse3$);

    result$.subscribe((x) => console.log(x));
  }
}
