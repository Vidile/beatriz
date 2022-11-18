import Head from 'next/head';

export default function Home() {
  if (typeof window !== 'undefined') {
    const gallery = document.getElementById('gallery');
    window.onmousemove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

      const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

      gallery.animate(
        {
          transform: `translate(${panX}px, ${panY}px)`,
        },
        {
          duration: 4000,
          fill: 'forwards',
          easing: 'ease',
        }
      );
    };
  }

  return (
    <div id="gallery">
      <Head>
        <title>Beatriz Fernandes</title>
        <meta name="description" content="Criado pelo Gabriel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="tijolo">
        <img
          alt="Imagens da melhor pessoa do mundo"
          src="./assets/images/1.jpg"
        />
      </div>
      <div className="tijolo">
        <img
          alt="Imagens da melhor pessoa do mundo"
          src="./assets/images/2.jpg"
        />
      </div>
      <div className="tijolo">
        <img
          alt="Imagens da melhor pessoa do mundo"
          src="./assets/images/3.jpg"
        />
      </div>
      <div className="tijolo">
        <img
          alt="Imagens da melhor pessoa do mundo"
          src="./assets/images/4.jpg"
        />
      </div>
      <div className="tijolo">
        <img
          alt="Imagens da melhor pessoa do mundo"
          src="./assets/images/5.jpg"
        />
      </div>
      <div className="tijolo">
        <img
          alt="Imagens da melhor pessoa do mundo"
          src="./assets/images/6.jpg"
        />
      </div>
      <div className="tijolo">
        <img
          alt="Imagens da melhor pessoa do mundo"
          src="./assets/images/7.jpg"
        />
      </div>
      <div className="tijolo">
        <img
          alt="Imagens da melhor pessoa do mundo"
          src="./assets/images/8.jpg"
        />
      </div>
      <div className="tijolo">
        <img
          alt="Imagens da melhor pessoa do mundo"
          src="./assets/images/9.jpg"
        />
      </div>
      <div className="name">
        <h1 className="text">Olá Beatriz!</h1>
        <h2 className="text-2">Bem-vinda a galeria de lembranças</h2>
      </div>
    </div>
  );
}
