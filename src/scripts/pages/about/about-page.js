import AboutPresenter from './about-presenter';

export default class AboutPage {
  #presenter;
  #aboutData = null;

  async render() {
    return `
      <section class="about-container">
        <div id="about-content">
          <div class="loading">Lagi nyiapin info tentang Story App...</div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new AboutPresenter({
      view: this,
      model: null,
    });

    await this.#presenter.showAboutInformation();
  }

  showAboutContent(data) {
    this.#aboutData = data;
    const aboutContainer = document.getElementById('about-content');

    aboutContainer.innerHTML = `
      <!-- Judul Utama -->
      <h1 class="about-title"><i class="fas fa-book-open-reader"></i> Tentang ${data.title}</h1>
      <p class="about-description">${data.description}</p>
      
      <!-- Apa itu Story App -->
      <h2 class="about-subtitle"><i class="fas fa-circle-question"></i> Apa sih ${data.title} itu?</h2>
      <p class="about-description">
        ${data.title} bukan sekadar aplikasi — ini tempat buat kamu bebas berekspresi. 
        Ceritain pengalaman hidup, hal lucu, atau bahkan momen yang bikin kamu belajar sesuatu. 
        Di sini, kamu bisa nulis kapan aja dan dari mana aja tanpa batasan.
      </p>
      
      <!-- Fitur Utama -->
      <h2 class="about-subtitle"><i class="fas fa-sparkles"></i> Kenapa ${data.title} Seru Banget?</h2>
      <ul class="about-features">
        ${data.features
          .map(
            (feature) => `
              <li><i class="${feature.icon}"></i> <strong>${feature.name}</strong>: ${feature.description}</li>
            `,
          )
          .join('')}
      </ul>
      
      <!-- Visi -->
      <h2 class="about-subtitle"><i class="fas fa-lightbulb"></i> Visi Kami</h2>
      <p class="about-description">${data.vision}</p>
      
      <!-- Ajak Bergabung -->
      <h2 class="about-subtitle"><i class="fas fa-heart-circle-plus"></i> Yuk, Gabung Bareng Kami!</h2>
      <p class="about-description">${data.joinMessage}</p>
    `;
  }
}
