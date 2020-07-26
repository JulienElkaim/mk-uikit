import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-mk-dnd',
  templateUrl: './mk-dnd.component.html',
  styleUrls: ['./mk-dnd.component.scss']
})
export class MkDndComponent implements OnInit {
  @ViewChild('fileDropRef', {static: false}) fileDropEl: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  public handleFiles(files: FileList): void {
    console.log(typeof files);
    console.log(files);
    alert(Array.from(files)
      .map(f => {
      return f.name;
    }));
  }

}
