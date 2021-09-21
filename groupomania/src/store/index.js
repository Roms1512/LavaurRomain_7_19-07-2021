import { createStore } from 'vuex'

export default createStore({
  state: {
    perso: {
      utilisateur: [localStorage.utilisateur],
      genre: [localStorage.genre],//localStorage.genre,
      telephone:[localStorage.tel],// localStorage.tel,
      email: [localStorage.email],//localStorage.email,
      bio: [localStorage.bio],//localStorage.bio,
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

      // Recuperation des éléments
      let pseudo = document.getElementById('pseudo').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      let confirmPassword = document.getElementById('confirmPassword').value;
      
      // Regex
      let regexPseudo = /^[A-Za-z0-9][a-z0-9]{3,20}/ // Pseudo
      let regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ // Adresse Email
      let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ // Mots de Passe
      
      if (
        regexPseudo.test(pseudo) &&
        regexMail.test(email) &&
        regexPassword.test(password) &&
        regexPassword.test(confirmPassword)
      ) {
          let formData = new FormData();

          formData.append("pseudo", pseudo);
          formData.append("mail", email);
          formData.append("password", password);

          let users = {
            pseudo, 
            email, 
            password
          }

          console.log(users)

          fetch('http://localhost:3006/api/user/signup', {
            method: 'POST',
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(users)
          })
            .then(function(res){
              if(res.ok) {
                window.location.replace("http://localhost:8081/login")
                console.log(`L'opération fetch a réussi !`);
                localStorage.setItem('User', JSON.stringify(res.json.user))
              }
            })
            .catch(function(error){
              console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            });

          // const USER_KEY = 'perso';
          // let user = JSON.parse(localStorage.getItem(USER_KEY));
          // const utilisateur = [];
          // if (!user) {
          //   const perso = {
          //     utilisateur: pseudo.value,
          //     email: email.value,
          //     genre: '',
          //     telephone: '',
          //     bio: ''
          //   }
          //   utilisateur.push(perso)
          //   localStorage.setItem(USER_KEY, JSON.stringify(utilisateur));
          //   console.log('Merci de vous être inscrit à Groupomania ! Stockage localStorage');
          // } else {
          //   const perso = {
          //     utilisateur: pseudo.value,
          //     mail: email.value,
          //     genre: '',
          //     telephone: '',
          //     bio: ''
          //   }
          //   localStorage.removeItem('perso');
          //   utilisateur.push(perso)
          //   localStorage.setItem(USER_KEY, JSON.stringify(utilisateur));
          //   console.log('Utilsateur Modifier !');
          // }
        } else {
          console.log(regexPseudo.test(pseudo.value), "Pseudo incorrect !");
          console.log(regexMail.test(email.value), "Email incorrect !");
          console.log(regexPassword.test(password.value), "Password incorrect !");
          console.log(regexPassword.test(confirmPassword.value), "Password non Confirmé !"),
          console.log('Formulaire Mal Remplit !');
        }
    }, 
    contentLogin() {
      // Recuperation des éléments
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      
      // Regex
      let regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ // Adresse Email
      let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ // Mots de Passe
      
      if (
        regexMail.test(email) &&
        regexPassword.test(password)
        ) {
          let formData = new FormData();

          formData.append("mail", email);
          formData.append("password", password);

          let users = {
            email, 
            password
          }

          console.log(users)

          fetch('http://localhost:3006/api/user/login', {
            method: 'POST',
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(users)
          })
            .then(function(res){
              if(res.ok) {
                window.location.replace("http://localhost:8081/login")
                console.log(`L'opération fetch a réussi !`);
                localStorage.setItem('Token', JSON.stringify(res.json.token))
              }
            })
            .catch(function(error){
              console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            });
            console.log('formulaire envoyer');
        } else {
          console.log(regexMail.test(email.value), "Email incorrect !");
          console.log(regexPassword.test(password.value), "Password incorrect !");
          console.log('Formulaire Mal Remplit !');
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
