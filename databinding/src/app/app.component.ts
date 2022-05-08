import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: { type: string; name: string; content: string }[] = [
    { type: 'server', name: 'testServer', content: 'aaa test server' },
  ];

  // ove su u parent komponenti imaju naziv koji opisuje da ce se one izvrsit nakon f-ja iz child komponente
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  // metoda dodana da se analizira pirmjer ngOnChanges hook-a
  // da se salje cijeli objekt nema okidanja ngOnChangesa, ocito negleda u dubinu
  // ponovit SHALLOW COPY-ING
  // objekt je referenca u memoriji tu se promjena dogodi ali nema okidanja
  onChangeFirst() {
    this.serverElements[0].name = 'changed!';
  }
  onDestroyFirst() {
    // splice izbrise prvi element iz array-a, jedan od boljih nacina za brisanje
    // renderira se sve preko ngfor-a nakon toga angular skuzi da vise necrta prvu komponentu
    // i zove ngOnDestroy()
    this.serverElements.splice(0, 1);
  }
}
