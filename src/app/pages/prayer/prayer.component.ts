import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.scss']
})
export class PrayerComponent implements OnInit {

  private listPrayer = [
    {
      title: 'Te gustaría conocer a Jesús',
      description: 'Dios Líbrame de los pensamientos que me atormentan, lléname de tu paz, de tu presencia y de tu luz. Te entrego mis heridas, mis angustias, mis luchas y mis cargas. Limpiame por favor, purifícame y bendíceme. Ya no mirare el pasado, mirare hacia mi futuro junto a ti Dios, porque tu eres el autor y consolador de mi Fe. Y tu eres el que empezó esta nueva obra en mi y quien la terminara. Amén.'
    },
    {
      title: 'Te gustaría conocer a Jesús',
      description: 'Jesús, te necesito. Lamento mucho la vida que he llevado apartado de ti. Gracias por morir en la cruz y pagar el castigo por mis pecados. Yo creo que tu eres el Hijo de Dios y te recibo en este momento como mi Señor y Salvador. Me comprometo a seguirte el resto de mi vida.'
    }
  ];

  public date = new Date().toLocaleDateString();

  constructor() { }

  ngOnInit(): void {
  }

}
