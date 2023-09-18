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
      title: 'Filipenses 4:13',
      description: 'Todo lo puedo en Cristo que me fortalece.'
    },
    {
      title: 'Isaías 41:10',
      description: 'No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te fortalezco; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.'
    },
    {
      title: 'Josué 1:9',
      description: 'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.'
    },
    {
      title: 'Romanos 8:28',
      description: 'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.'
    },
    {
      title: 'Salmo 34:17',
      description: 'Claman los justos, y Jehová oye, y los libra de todas sus angustias.'
    },
    {
      title: 'Mateo 11:28',
      description: 'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.'
    },
    {
      title: 'Isaías 40:31',
      description: 'Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.'
    },
    {
      title: 'Jeremías 29:11',
      description: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.'
    },
    {
      title: 'Salmos 46:1',
      description: 'Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.'
    },
    {
      title: 'Proverbios 3:5-6',
      description: 'Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.'
    }
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
