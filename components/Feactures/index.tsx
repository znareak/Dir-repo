import FeactureCard from './FeactureCard'

export default function Feactures() {
  return (
    <div className='grid grid-cols-3 gap-4 max-w-xl sm:mx-auto lg:max-w-5xl mb-5'>
      <FeactureCard
        title='Proyectos de la comunidad'
        content='Colabora y crea proyectos junto con la comunidad, crea tu proyecto e invita
          a nuevos desarrolladores.'
        href='/projects'
        data-aos='fade-up'
        data-aos-duration='600'
        data-aos-delay='300'
      />
      <FeactureCard
        title='Recursos Gratis'
        content='  Encuentra información útil, datos, herramientas u librerías gratis para
          programar.'
        href='/resources'
        data-aos='fade-up'
        data-aos-duration='600'
        data-aos-delay='400'
      />
      <FeactureCard
        title='Recursos Gratis'
        content='  Encuentra información útil, datos, herramientas u librerías gratis para
          programar.'
        href='/resources'
        data-aos='fade-up'
        data-aos-duration='600'
        data-aos-delay='500'
      />
    </div>
  )
}
