import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // potrebno je kreirati angularov EventEmitter u situaciji kada saljemo funkcije iz parent komponente
  // @Output je potrebno staviti jer idemo prema parent componenti
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('srvCreated') serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @ViewChild('serverContentInput') serverContentInputElRef: ElementRef;

  //newServerName = '';
  constructor() {}

  ngOnInit(): void {}

  // referenca koja se salje s template-a uz naveden input
  onAddServer(serverNameInputElement: HTMLInputElement) {
    // console.log('referenca: ', serverNameInputElement);
    // emit je fja koju triba slati i proslijediti valjani format argumenta
    // isto sto i prije localref fethcan iz viewchild-a
    // drzi referencu na native element kojoj treba pristupit
    const { value } = this.serverContentInputElRef.nativeElement;
    this.serverCreated.emit({
      serverName: serverNameInputElement.value,
      serverContent: value,
    });
  }

  onAddBlueprint(serverNameInputElement: HTMLInputElement) {
    const { value } = this.serverContentInputElRef.nativeElement;
    this.blueprintCreated.emit({
      serverName: serverNameInputElement.value,
      serverContent: value,
    });
  }
}
