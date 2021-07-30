import { createStore } from 'vuex'

export default createStore({
  state: {
    perso: {
      utilisateur: 'Roms1512',
      genre: 'Homme',
      telephone: '0603744993',
      email: 'romainlavaur@hotmail.com',
      bio: `Je suis Romain, Développeur Freelance, La dernière modification de cette page a été faite le 15 juin 2021 à 09:11.
      Les textes sont disponibles sous licence Creative Commons attribution partage à l’identique ; d’autres termes peuvent s’appliquer.`,
      publication: 0,
      abonnés: 0,
      abonnements: 0
    },
    otherUser: {
      user: 'Leny_Laurenti',
      status: 'En Ligne',
      bio: `Je suis Romain, Développeur Freelance, La dernière modification de cette page a été faite le 15 juin 2021 à 09:11.
      Les textes sont disponibles sous licence Creative Commons attribution partage à l’identique ; d’autres termes peuvent s’appliquer.`,
      publication: 0,
      abonnés: 0,
      abonnements: 0
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
