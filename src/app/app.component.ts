import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kirusafe';
  listMenu = [
    {
      title: 'Inicio'
    },
    {
      title: '¿Quienes somos?'
    },
    {
      title: '¿Quienes somos?'
    },
    {
      title: '¿Quienes confian en nosotros?'
    }
  ];
  logoKirusafe = 'assets/img/logo.png'
  headerContent = {
    title: 'KiruSafe',
    subTitle: '¡El Lazo que nos une!',
    description: 'Red de voluntarios y docentes a nivel nacional enfocados en promover la salud oral.',
    btn: 'VER VIDEO',
    img: 'assets/img/img_girls.png'
  }
  sectionOne = {
    title: '¿Quienes somos?',
    description: 'Somos una comunidad que utiliza redes sociales libres como Facebook para realizar asesorías grupales por colegio y a su vez por aula; aprovechando que cada maestra conoce la realidad de sus niños y su familia, se brinda educación en el marco  promoción - prevención en niños menores de 12 años; tocando temas de salud, especialmente de salud bucal.',
    img: 'assets/img/img_section_1.png'
  }
  sectionTwo = {
    title: '¿Como lo hacemos?',
    listItem: [
      {
        description: 'Brindar educación en la salud en el marco de la promoción y prevención, utilizando Facebook para interactuar y transmitir los conocimientos.',
        img: 'assets/img/img_section_2_1.png',
        flag: false
      },
      {
        description: 'Además también birndamos una solución clínica para cada caso, con encargados de KiruSafe  que agendarán una Teleconsulta con un especialista y/o estudiante capacitado para brindar alternativas de solución y/o un plan de tratamiento.',
        img: 'assets/img/img_section_2_2.png',
        flag: false
      }
    ]
  }

  ngOnInit() {
  }

  checkBox(item) {
    item.flag = !item.flag
  }


}
