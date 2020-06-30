import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'kirusafe'
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
      title: '¿Qué servicios brindamos?',
      id: 'section-2'
    },
    {
      title: '¿Quienes nos representan?',
      id: 'section-3'
    },
    {
      title: '¿Quienes confian en nosotros?',
      id: 'section-4'
    }
  ]
  urlVideo = 'https://www.youtube.com/watch?v=Q4u0Q69gmLM'
  logoKirusafe = 'assets/img/logo.png'
  headerContent = {
    title: 'KiruSafe',
    subTitle: '¡El Lazo que nos une!',
    description: 'Red de profesionales con vocación y compromiso enfocados en la promoción y prevención en salud oral con el objetivo de reducir la presencia de caries en los niños menores de 6 años de las zonas alejadas de nuestro país.',
    btn: 'VER VIDEO',
    img: 'assets/img/img_girls.png'
  }
  sectionOne = {
    title: '¿Quiénes somos?',
    description: 'Somos una comunidad que integra docentes especialistas y estudiantes de diversas profesiones, con la finalidad de brindar educación en el marco de la promoción y prevención de la salud, con mayor énfasis en la salud bucal  de  niños menores a 6 años de zonas rurales, para el  cual empleamos metodologías ágiles y medios de comunicación digital de acceso libre y así poder desarrollar sesiones educativas personalizadas por cada grado y sección, teniendo siempre como aliado estratégico.',
    img: 'assets/img/img_section_1.png'
  }
  sectionTwo = {
    title: '¿Que servicios brindamos?',
    listItem: [
      {
        description: 'Brindamos gratuitamente una educación en la salud en el marco de la promoción y prevención, utilizando Facebook para interactuar y transmitir los conocimientos. Sí, ¡Totalmente Gratuita!.',
        img: 'assets/img/img_section_2_1.png',
        flag: false
      },
      {
        description: 'Además, también brindamos teleconsultas odontológicas  por medio de plataformas digitales como Zoom, WhatsApp entre otros.  Para acceder al precio social de  5 nuevos soles por cada teleconsulta , debes unirte junto con tu colegio a nuestra red y así acceder a todos los beneficios.',
        img: 'assets/img/img_section_2_2.png',
        flag: false
      }
    ]
  }
  sectionThree = {
    title: '¿Quienes nos representan?',
    listPersons: [
      {
        img: 'assets/img/picture_vicuña.png',
        title: 'Luis Vicuña Hauqui',
        description: 'Odontología, UNMSM',
        carge: 'CEO (Chief Executive Officer)'
      },
      {
        img: 'assets/img/picture_garrido.png',
        title: 'Joely Garrido Ayala',
        description: 'Odontología, UNMSM',
        carge: 'CLO (Chief Legal Officer)'
      },
      {
        img: 'assets/img/picture_barzola.png',
        title: 'Maritza Barzola Guerrero',
        description: 'Ing. Industrial, UNMSM',
        carge: 'CMO (Chief Marketing Officer)'
      },
      {
        img: 'assets/img/picture_martel.png',
        title: 'Lucelia Martel Quispe',
        description: 'Odontología, UNMSM',
        carge: 'CMO (Chief Marketing Officer)'
      },
      {
        img: 'assets/img/picture_not_found.png',
        title: 'Alisson Arroyo Romo',
        description: 'Ing. Software, UNMSM',
        carge: 'CTO (Chief Technical Officer)'
      },
      {
        img: 'assets/img/picture_yauri.png',
        title: 'Luis Yauri Martinez',
        description: 'Ing. Software, UNMSM',
        carge: 'CIO (Chief Information Officer)'
      },
      {
        img: 'assets/img/picture_alata.png',
        title: 'Shady Alata Jiménez',
        description: 'Bach. Odontología, UNMSM',
        carge: 'CCO (Chief Communications Officer)'
      },
      {
        img: 'assets/img/picture_salcedo.png',
        title: 'Mg. CD Esp. Mercedes',
        description: 'Rita Salcedo Rioja',
        carge: 'COO (Chief Operating Officer)'
      },
      {
        img: 'assets/img/picture_not_found.png',
        title: 'Claudia Trujillo Avalos',
        description: 'Administración, UNMSM',
        carge: 'CFO (Chief Financial Officer)'
      },
      {
        img: 'assets/img/picture_not_found.png',
        title: 'Diego Aruhuanca Paucar',
        description: 'Ing. Industrial, UPC',
        carge: 'CMO (Chief Marketing Officer)'
      }
    ]
  }
  sectiorFour = {
    title: '¿Quienes confian en nosotros?',
    listGroup: [
      {
        img: 'assets/img/group_pareja.png',
        title: 'I.E La Pareja, Piura',
      },
      {
        img: 'assets/img/group_odontologia.png',
        title: 'Facultad de Odontologia UNMSM'
      },
      {
        img: 'assets/img/group_vus.png',
        title: 'Voluntariado universitario para la salud'
      },
      {
        img: 'assets/img/group_dgrsu.png',
        title: 'Dirección General de Responsabilidad Social Universitario'
      },
      {
        img: 'assets/img/group_tambo.png',
        title: 'I.E Jose Palacios Azámbulo, Tambogrande'
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

  openForm() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf3X0CQhvmir0QaGwcbt2PkBX_yEYR8Hf2WlOZmixCzoAH_eQ/viewform?usp=sf_link ', "_blank");
    console.log('Enviar formulario')
  }
}
