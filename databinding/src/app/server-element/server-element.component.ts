import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated defaultna vrijednost netriba navoditi
  // none i nema vise "cudnih" angular atributa u elementima server-elemeent

  //encapsulation: ViewEncapsulation.None, ne koristi se angularowa enkapsulacija
  // None takoder pregazi sve stilove koji nisu navedeni u templatu s cssom i van komponente u kojoj se navede, vridi globlano ali ga pregazi stil u html-u
  // ne rendeira se dok nepostoji app server componenta na ekranu

  // encapsulation: ViewEncapsulation.ShadowDom dobro ako browser podrzava shadow dom ista stvar ka i Emulated defautlna,
  // encapsulation: ViewEncapsulation.ShadowDom, nema tagova posebnih i em se stvori za ovu komponentu kao child od p-a
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // bindanje preko aliasa, srvElement od parenta ova komponenta vidi kao element
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  // konstruktor se prvi poziva
  constructor() {
    console.log('constructor called!');
  }
  //ngOnChanges se zove prije ngOnInit-a
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    // vamo ga nema
    console.log('textContent', this.header.nativeElement.textContent);
  }

  // zove kad angular trazo promjene, botun, observable .. na pocetku
  // dva put se zove u development modu na pocetku i na kraju inicijalizacije, ekstra ciklus za dev mode
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  // content je sve ono u zapakirano u <ng-content></ng-content> direktivi samo kad inicijaliziramo i kreiramo to se okida
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }
  // zove se nakon doChecka, zove se koliko i on
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }
  //zove se nakon ngAfterContentChecked prvo imamo content pa se tek onda gradi view, content init je prije naravno
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('textContent', this.header.nativeElement.textContent);
    // tu je vidljivo, jer su dostupni tek sad template elementi
  }
  //zove se nakon ngAfterContentChecked prvo imamo content pa se tek onda gradi view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  // unmounting komponente
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
