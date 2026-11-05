import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private mysteries = {
    gozosos: [
      {
        title: '1. La Encarnación del Hijo de Dios',
        description: 'El Ángel Gabriel anuncia a la Virgen María que será la Madre de Dios.'
      },
      {
        title: '2. La Visitación de Nuestra Señora',
        description: 'María visita a su prima Santa Isabel, quien llena del Espíritu Santo proclama: "Bendita tú entre las mujeres y bendito el fruto de tu vientre".'
      },
      {
        title: '3. El Nacimiento de Jesús',
        description: 'Jesús nace en un humilde pesebre en Belén.'
      },
      {
        title: '4. La Presentación en el Templo',
        description: 'María y José presentan al Niño Jesús en el templo y ofrecen el sacrificio de los pobres.'
      },
      {
        title: '5. El Niño Jesús perdido y hallado en el Templo',
        description: 'Jesús, a los doce años, permanece en el templo durante tres días, encontrado por sus padres.'
      }
    ],
    dolorosos: [
      {
        title: '1. La Oración en el Huerto',
        description: 'Jesús ora con gran angustia en el Getsemaní, sudando gotas de sangre.'
      },
      {
        title: '2. La Flagelación del Señor',
        description: 'Jesús es cruelmente flagelado por los soldados romanos.'
      },
      {
        title: '3. La Coronación de espinas',
        description: 'Los soldados colocan una corona de espinas en la cabeza de Jesús.'
      },
      {
        title: '4. Jesús con la Cruz a cuestas',
        description: 'Jesús carga la pesada cruz hacia el Calvario.'
      },
      {
        title: '5. La Crucifixión y Muerte de Jesús',
        description: 'Jesús muere en la cruz por nuestra salvación.'
      }
    ],
    gloriosos: [
      {
        title: '1. La Resurrección del Señor',
        description: 'Jesús resucita al tercer día, venciendo la muerte.'
      },
      {
        title: '2. La Ascensión del Señor',
        description: 'Jesús asciende al cielo y se sienta a la derecha del Padre.'
      },
      {
        title: '3. La Venida del Espíritu Santo',
        description: 'El Espíritu Santo desciende sobre los apóstoles y María en Pentecostés.'
      },
      {
        title: '4. La Asunción de Nuestra Señora',
        description: 'María es llevada en cuerpo y alma al cielo.'
      },
      {
        title: '5. La Coronación de María Santísima',
        description: 'María es coronada como Reina del cielo y de la tierra.'
      }
    ],
    luminosos: [
      {
        title: '1. El Bautismo en el Jordán',
        description: 'Jesús es bautizado por Juan el Bautista, el Padre lo proclama su Hijo amado.'
      },
      {
        title: '2. Las Bodas de Caná',
        description: 'Jesús realiza su primer milagro a petición de María, convirtiendo agua en vino.'
      },
      {
        title: '3. El Anuncio del Reino de Dios',
        description: 'Jesús anuncia el Reino de Dios y llama a la conversión.'
      },
      {
        title: '4. La Transfiguración',
        description: 'Jesús se transfigura ante sus discípulos en el Monte Tabor.'
      },
      {
        title: '5. La Institución de la Eucaristía',
        description: 'Jesús instituye la Eucaristía en la Última Cena.'
      }
    ]
  };

  public todayMystery: any;
  public mysteryType: string = '';
  public dayName: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadMystery();
  }

  private loadMystery() {
    const day = new Date().getDay();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    this.dayName = days[day];

    switch (day) {
      case 0: // Domingo
      case 3: // Miércoles
        this.mysteryType = 'Misterios Gloriosos';
        this.todayMystery = this.mysteries.gloriosos;
        break;
      case 1: // Lunes
      case 6: // Sábado
        this.mysteryType = 'Misterios Gozosos';
        this.todayMystery = this.mysteries.gozosos;
        break;
      case 2: // Martes
      case 5: // Viernes
        this.mysteryType = 'Misterios Dolorosos';
        this.todayMystery = this.mysteries.dolorosos;
        break;
      case 4: // Jueves
        this.mysteryType = 'Misterios Luminosos';
        this.todayMystery = this.mysteries.luminosos;
        break;
    }
  }

}
