document
  .getElementById("ajoutTacheBouton")
  .addEventListener("click", function () {
    let tache = document.getElementById("champTache").value;
    if (tache.trim() !== "") {
      let nouvelleTache = document.createElement("li");

      // Texte de la tâche
      let spanTexteTache = document.createElement("span");
      spanTexteTache.textContent = tache;
      nouvelleTache.appendChild(spanTexteTache);

      // Créer l'élément span pour l'icône de suppression
      let iconePoubelle = document.createElement("span");
      iconePoubelle.classList.add("material-symbols-outlined");
      iconePoubelle.textContent = "delete";
      iconePoubelle.onclick = function () {
        this.parentElement.remove();
      };

      // Créer l'élement span pour l'icone d'édition
      let iconeEdit = document.createElement("span");
      iconeEdit.classList.add("material-symbols-outlined");
      iconeEdit.textContent = "edit";
      iconeEdit.onclick = function () {
        let li = this.parentElement;
        let texteOriginal = texteTache.textContent; // Utiliser texteTache pour le texte original

        // Créer un champ de saisie avec le texte original
        let inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = texteOriginal;
        inputEdit.classList.add("edit-input");

        // Remplacer le texte original par le champ de saisie
        texteTache.replaceWith(inputEdit);
        inputEdit.focus();

        // Gérer la fin de l'édition
        inputEdit.onblur = function () {
          let nouveauTexte = inputEdit.value.trim();
          if (nouveauTexte) {
            texteTache.textContent = nouveauTexte;
          }
          inputEdit.replaceWith(texteTache);
        };
      };

      let iconeCheckbox = document.createElement("span");
      iconeCheckbox.classList.add("material-symbols-outlined");
      iconeCheckbox.textContent = "check_box";
      iconeCheckbox.onclick = function () {
        let spanTexteTache =
          this.parentElement.querySelector("span:first-of-type");

        if (spanTexteTache.style.textDecoration !== "line-through") {
          spanTexteTache.style.textDecoration = "line-through"; // Barrer le texte
        } else {
          spanTexteTache.style.textDecoration = "none"; // Enlever le barré
        }
      };

      // Ajouter les icônes à la tâche
      nouvelleTache.appendChild(iconeCheckbox);
      nouvelleTache.appendChild(iconeEdit);
      nouvelleTache.appendChild(iconePoubelle);

      // Ajouter la nouvelle tâche à la liste
      document.getElementById("listeTaches").appendChild(nouvelleTache);
      document.getElementById("champTache").value = ""; // Effacer le champ de saisie
    }
  });
