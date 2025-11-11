export default class AboutPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async showAboutInformation() {
    try {
      const aboutData = {
        title: 'Story Appcats',
        description:
          'Story App adalah tempat buat kamu yang suka berbagi cerita, pengalaman, dan momen berharga dalam hidup. Entah itu kisah lucu, pengalaman inspiratif, atau cerita kecil yang bermakna — semuanya bisa kamu bagikan di sini. Gak perlu jadi penulis profesional, cukup jadi dirimu sendiri dan biarkan cerita kamu berbicara. 💙',
        features: [
          {
            icon: 'fas fa-user-check',
            name: 'Daftar Sekali, Cerita Sepuasnya',
            description:
              'Cukup daftar pakai email dan password, kamu langsung bisa mulai menulis dan membaca cerita orang lain. Akunmu aman, dan kamu bisa login dari mana aja seperti laptop, tablet, atau HP. Satu akun, sejuta kisah!',
          },
          {
            icon: 'fas fa-pen-fancy',
            name: 'Tulis Cerita Kamu Sendiri',
            description:
              'Punya pengalaman menarik? Ceritain aja di Story Appcats! Kamu bisa tambahin foto, bikin judul catchy, dan nulis sesuka hati. Ceritamu bisa jadi inspirasi buat banyak orang di luar sana. Siapa tahu ada yang ngerasa relate banget sama kisahmu!',
          },
          {
            icon: 'fas fa-globe-americas',
            name: 'Temukan Cerita dari Seluruh Dunia',
            description:
              'Scroll dan temukan berbagai cerita keren dari pengguna lain. Dari cerita lucu sampai kisah haru, semuanya ada. Kamu bisa filter berdasarkan lokasi, kategori, atau bahkan suasana hati — kayak playlist, tapi versi cerita.',
          },
          {
            icon: 'fas fa-bell-on',
            name: 'Selalu Update dan Gak Ketinggalan',
            description:
              'Story App bakal ngasih kamu notifikasi kalau ada cerita baru atau respon di postinganmu. Jadi, kamu gak akan ketinggalan hal-hal seru di komunitas storyteller kita!',
          },
        ],
        vision:
          'Kami percaya setiap orang punya cerita yang layak untuk didengar. Gak peduli sebesar atau sekecil apa, setiap kisah punya makna. Story App hadir buat jadi tempat nyaman di mana semua orang bisa berbagi, membaca, dan saling terinspirasi — tanpa rasa takut dihakimi. Kami ingin menjadikan dunia ini penuh dengan suara-suara jujur, apa adanya, dan penuh warna. 🌍',
        joinMessage:
          'Gabung sekarang dan mulai perjalananmu di Story Appcats! Yuk, isi dunia digital ini dengan cerita-cerita dari kamu. Tulis, baca, bagikan, dan jadi bagian dari komunitas yang saling mendukung. Ceritamu mungkin sederhana, tapi bisa berarti besar buat orang lain. Jadi, tunggu apa lagi? Ayo mulai ceritamu hari ini! 🚀',
      };

      this.#view.showAboutContent(aboutData);
    } catch (error) {
      console.error('showAboutInformation: error:', error);
    }
  }
}
