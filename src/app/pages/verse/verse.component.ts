import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.scss']
})
export class VerseComponent implements OnInit {

  private listVerse = [
    {
      title: 'Salmo 23:1',
      description: 'El Señor es mi pastor; nada me faltará.',
    },
    {
      title: 'Proverbios 3:5-6',
      description: 'Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas.',
    },
    {
      title: 'Isaías 41:10',
      description: 'No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te fortalece; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.',
    },
    {
      title: 'Jeremías 29:11',
      description: 'Porque yo sé los planes que tengo para ustedes, dice el Señor, planes de bienestar y no de calamidad, para darles un futuro y una esperanza.',
    },
  ];

  public todayVerse: any;
  public date = new Date().toLocaleDateString();

  constructor() { }

  ngOnInit(): void {
    this.todayVerse = this.generateVerseDate();
  }

  private generateVerseDate() {
    const currentDate = new Date().toDateString();
    const hash = this.hashCode(currentDate);
    const randomIndex = Math.abs(hash) % this.listVerse.length;
    return this.listVerse[randomIndex];
  }

  private hashCode(str: any) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  }

}
