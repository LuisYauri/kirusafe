import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'kirusafe';
  listMenu = [
    {
      title: 'Inicio',
      id: ''
    },
    {
      title: '¿Quiénes somos?',
      id: 'section-1'
    },
    {
      title: '¿Cómo lo hacemos?',
      id: 'section-2'
    }
  ];
  urlVideo = 'https://www.youtube.com/watch?v=Q4u0Q69gmLM'
  logoKirusafe = 'assets/img/logo.png'
  headerContent = {
    title: 'KiruSafe',
    subTitle: '¡El Lazo que nos une!',
    description: 'Red nacional de voluntariado en Odontología enfocados en la promoción y prevención en salud oral',
    btn: 'VER VIDEO',
    img: 'assets/img/img_girls.png'
  }
  sectionOne = {
    title: '¿Quiénes somos?',
    description: 'Somos una comunidad que integra docentes Especialistas y estudiantes de diversas profesiones, con la finalidad de brindar educación en el marco de la promoción y prevención de la salud, con mayor énfasis en la salud bucal  de  niños menores a 12 años de zonas rurales, para el  cual empleamos metodologías ágiles y medios de comunicación digital de acceso libre y así poder desarrollar sesiones educativas personalizadas por cada grado y sección, teniendo siempre como aliado estratégico.',
    img: 'assets/img/img_section_1.png'
  }
  sectionTwo = {
    title: '¿Cómo lo hacemos?',
    listItem: [
      {
        description: 'Brindamos una educación en la salud en el marco de la promoción y prevención, utilizando Facebook para interactuar y transmitir los conocimientos.',
        img: 'assets/img/img_section_2_1.png',
        flag: false
      },
      {
        description: 'Además también brindamos una solución clínica para cada caso, con encargados de KiruSafe  que agendarán una Teleconsulta con un especialista y/o estudiante capacitado para brindar alternativas de solución y/o un plan de tratamiento.',
        img: 'assets/img/img_section_2_2.png',
        flag: false
      }
    ]
  }
  sectionFooter = {
    left: {
      title: 'KiruSafe.com',
      description: '© 2020 Todos los derechos reservados'
    },
    right: {
      socials: [
        {
          icon : 'assets/img/ic_youtube.png',
          url: 'https://www.youtube.com/channel/UCGCZ2VR412YER2eEFJOW2wA'
        },
        {
          icon : 'assets/img/ic_facebook.png',
          url: 'https://www.facebook.com/kirusafe'
        }
      ],
      email: {
        text: 'kirusafe@gmail.com',
        url: ''
      }
    }
  }

  ngOnInit() {
    AOS.init();
  }

  checkBox(item) {
    item.flag = !item.flag
  }

  openLink(url) {
    window.open(url, "_blank");
  }

  redirect(id) {
    location.href= `#${id}`;
  }
}
