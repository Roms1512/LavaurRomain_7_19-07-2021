import { createStore } from 'vuex'

export default createStore({
  state: {
    perso: {
      utilisateur: 'Roms1512', // localStorage.utilisateur ,
      genre: '',//localStorage.genre,
      telephone:'',// localStorage.tel,
      email: '',//localStorage.email,
      bio: 'Leny pas beau, Creative Commons attribution partage à l’identique ',//localStorage.bio,
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
    },
    publi: {
      nb_like: 28,
      nb_comment: 3
    }
  },
  getters: {
  },
  mutations: {
    contentSignup() {
      console.log('fonction envoyer');

      // Recuperation des éléments
      const form = document.getElementById('formSignup');

      let submit = document.getElementById('submit')
      let pseudo = document.getElementById('pseudo');
      let email = document.getElementById('email');
      let password = document.getElementById('password');
      let confirmPassword = document.getElementById('confirmPassword');
      
      // Regex
      let regexPseudo = /^[A-Za-z0-9][a-z0-9]{3,20}/ // Pseudo
      let regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ // Adresse Email
      let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ // Mots de Passe
      
      console.log(form);
      console.log(submit);

      
      if (
        regexPseudo.test(pseudo.value) &&
        regexMail.test(email.value) &&
        regexPassword.test(password.value) &&
        regexPassword.test(confirmPassword.value)
        ) {
          const USER_KEY = 'perso';
          let user = JSON.parse(localStorage.getItem(USER_KEY));
          if (!user) {

            const utilisateur = [];
            const perso = {
              utilisateur: pseudo.value,
              email: email.value,
              genre: '',
              telephone: '',
              bio: ''
            }
            localStorage.removeItem('perso');
            utilisateur.push(perso)
            localStorage.setItem(USER_KEY, JSON.stringify(utilisateur));
            console.log('Stocker Donnée Perso dans le LocalStorage');
          } else {
            console.log('bonsoir');
          }
          
          console.log('Merci de vous être inscrit ! Dans le local Storage');
        
        } else {
          console.log(regexPseudo.test(pseudo.value));
          console.log(regexMail.test(email.value));
          console.log(regexPassword.test(password.value));
          console.log(regexPassword.test(confirmPassword.value)),
          console.log('Formulaire Mal Remplit');
        }
    },
    
    modifyForm() {
      let pseudo = document.getElementById('pseudo');
      let email = document.getElementById('mail');
      let bio = document.getElementById('bio');
      let tel = document.getElementById('tel');
      let genre = document.getElementById('genre');

      let submit = document.getElementById('modifyFormSubmit');
      console.log(submit);
        
      const USER_KEY = 'perso';
      let user = JSON.parse(localStorage.getItem(USER_KEY));
      let equivalence = false;
      
        if (!user) {
          const utilisateur = [];
          const perso = {
            utilisateur: pseudo.value,
            email: email.value,
            genre: genre.value,
            telephone: tel.value,
            bio: bio.value
          }
          utilisateur.push(perso)
          localStorage.setItem(USER_KEY, JSON.stringify(utilisateur));
          
        } else {
          user.forEach((element) => {
            if (element.utilisateur === user.utilisateur) {
              localStorage.setItem(USER_KEY, JSON.stringify(user));
              equivalence = false;
              console.log("Utilisateur Existant !");
              return;
            } else {
              equivalence = true
            }
          });
          if (equivalence) {
            // pas d'equivalance
            const perso = {
              utilisateur: pseudo.value,
              email: email.value,
              genre: genre.value,
              telephone: tel.value,
              bio: bio.value
            }
            user.push(perso);
            localStorage.setItem(USER_KEY, JSON.stringify(user));
          }
        }
        console.log('Stocker Donnée Perso dans le LocalStorage');
    }
  },
  actions: {
  },
  modules: {
  }
})
